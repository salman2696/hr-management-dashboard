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
  percentageChange = "",
  period,
  type,
  data,
}) => {
  const renderChart = () => {
    switch (type) {
      case "circular":
        return (
          <div className="h-48">
          <Doughnut
            data={data}
            options={{
              rotation: 270,
              circumference: 180,
              cutout: "80%", // Adjust this to control the thickness
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
    <div className="card bg-white min-w-40 shadow-xl p-4">
      {icon}
      <p className="card-title text-sm font-bold mt-4">{title}</p>
      {type ? (
        <div className="mt-4">{renderChart()}</div>
      ) : (
        <div className="flex flex-col gap-1 my-2">
          <h1 className="text-2xl font-bold text-gray-800">{value}</h1>
          <p className="text-gray-600 text-xs">{description}</p>
        </div>
      )}
      <div className="flex flex-row gap-1 mt-5 text-sm">
        <div
          className={`text-green-500 ${
            percentageChange.startsWith("-") ? "text-red-500" : ""
          }`}
        >
          {percentageChange}
        </div>
        <div className="stat-title">{period}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  description: PropTypes.string,
  percentageChange: PropTypes.string,
  period: PropTypes.string,
  type: PropTypes.string, // 'circular' or 'bar'
  data: PropTypes.object, // Chart.js data
};

export default Card;
