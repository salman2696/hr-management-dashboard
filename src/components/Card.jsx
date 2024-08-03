import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { ThemeContext } from "./ThemeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Card = ({
  icon,
  title,
  value,
  description,
  percentageChange,
  period,
  type,
  data,
  showValue = true,
  showDescription = true,
  showPercentageChange = true,
  showPeriod = true,
  showChart = false,
  chartClassName,
}) => {
  const { theme } = useContext(ThemeContext);

  const renderChart = () => {
    if (!showChart) return null;

    const chartOptions = {
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            boxWidth: 12,
            padding: 10,
          },
          align: "center",
        },
      },
    };

    switch (type) {
      case "circular":
        return (
          <div className="flex justify-center h-40 lg:w-56">
            <Doughnut
              data={data}
              options={{
                rotation: 270,
                circumference: 180,
                cutout: "80%",
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom", // Place the legend at the bottom
                    labels: {
                      boxWidth: 12, // Adjust the size of the legend box
                      padding: 10, // Adjust spacing between legend items
                    },
                    align: "center", // Align legend items in a row
                  },
                }, // Adjust this to control the thickness
              }}
            />
          </div>
        );
      case "bar":
        return <Bar data={data} options={chartOptions} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`card p-4 border-[1px] lg:min-w-44  ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-300 text-gray-500"
      } ${chartClassName}`}
    >
      {icon}
      <p className="card-title text-sm font-bold mt-4">{title}</p>
      {showChart ? (
        <div className="mt-2">{renderChart()}</div>
      ) : (
        <>
          {showValue && (
            <div className="flex flex-col gap-1 my-2">
              <h1
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {value}
              </h1>
              {showDescription && (
                <p
                  className={`text-[10px] md:text-xs ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {description}
                </p>
              )}
            </div>
          )}
        </>
      )}
      {(showPercentageChange || showPeriod) && (
        <div className="flex flex-row gap-1 mt-5 text-sm">
          {showPercentageChange && (
            <div
              className={`text-sm ${
                percentageChange && percentageChange.startsWith("-")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {percentageChange}
            </div>
          )}
          {showPeriod && (
            <div
              className={`stat-title ${
                theme === "dark" ? "text-gray-400" : "text-gray-800"
              }`}
            >
              {period}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  description: PropTypes.string,
  percentageChange: PropTypes.string,
  period: PropTypes.string,
  type: PropTypes.string, // 'circular' or 'bar'
  data: PropTypes.object, // Chart.js data
  showValue: PropTypes.bool,
  showDescription: PropTypes.bool,
  showPercentageChange: PropTypes.bool,
  showPeriod: PropTypes.bool,
  showChart: PropTypes.bool,
};

export default Card;
