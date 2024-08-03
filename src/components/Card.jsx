import React from "react";
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
  chartClassName
}) => {
  const renderChart = () => {
    if (!showChart) return null;

    switch (type) {
      case "circular":
        return (
          <div className=" flex justify-center">
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
        return <Bar data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className={`card bg-white md:min-w-44 min-w-36 max-w-64 p-4 border-gray-300 border-[1px] ${chartClassName}`}>
      {icon}
      <p className="card-title text-sm font-bold mt-4">{title}</p>
      {showChart ? (
        <div className="mt-2">{renderChart()}</div>
      ) : (
        <>
          {showValue && (
            <div className="flex flex-col gap-1 my-2">
              <h1 className="text-2xl font-bold text-gray-800">{value}</h1>
              {showDescription && (
                <p className="text-gray-600 text-[10px] md:text-xs">{description}</p>
              )}
            </div>
          )}
        </>
      )}
      {(showPercentageChange || showPeriod) && (
        <div className="flex flex-row gap-1 mt-5 text-sm">
          {showPercentageChange && (
            <div
              className={`text-green-500 ${
                percentageChange && percentageChange.startsWith("-")
                  ? "text-red-500"
                  : ""
              }`}
            >
              {percentageChange}
            </div>
          )}
          {showPeriod && <div className="stat-title">{period}</div>}
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
