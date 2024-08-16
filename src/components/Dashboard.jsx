import React, { useContext } from "react";
import Card from "./Card";
import TopEmployeesCard from "./TopEmployeesCard";
import {
  MdPeople,
  MdTrendingUp,
  MdAttachMoney,
  MdAccessTime,
  MdAssignment,
} from "react-icons/md";
import { ThemeContext } from "./ThemeContext";

const taskTargetData = {
  labels: ["Completed", "Remaining"],
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["#36A2EB", "#FF6384"],
      borderColor: ["#36A2EB", "#FF6384"],
      borderWidth: 1,
    },
  ],
};

const taskCountData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Task Count",
      data: [30, 45, 35, 50],
      backgroundColor: "#36A2EB",
      borderColor: "#36A2EB",
      borderWidth: 1,
    },
  ],
};

const employees = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    position: "Software Engineer",
    tasksDone: 120,
    pointsEarned: 450,
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    position: "Product Manager",
    tasksDone: 95,
    pointsEarned: 380,
  },
  {
    name: "Emily Johnson",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    position: "UX Designer",
    tasksDone: 85,
    pointsEarned: 340,
  },
];

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 rounded-xl min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-500"
      }`}
    >
      {/* Flex container for the first set of cards */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-1 min-w-[250px] md:min-w-[300px] lg:w-1/4 drop-shadow-lg">
          <Card
            icon={<MdPeople />}
            title="Total Employees"
            value="2,0987"
            description="Task"
            percentageChange="+86%"
            period="This month"
          />
        </div>
        <div className="flex-1 min-w-[250px] md:min-w-[300px] lg:w-1/4 drop-shadow-lg">
          <Card
            icon={<MdTrendingUp />}
            title="Revenue Growth"
            value="$10,287"
            description="Compared last month"
            percentageChange="+12%"
            period="This month"
          />
        </div>
        <div className="flex-1 min-w-[250px] md:min-w-[300px] lg:w-1/4 drop-shadow-lg">
          <Card
            icon={<MdAttachMoney />}
            title="Total Donations"
            value="$5,678"
            description="Total received"
            percentageChange="-8%"
            period="This month"
          />
        </div>
        <div className="flex-1 min-w-[250px] md:min-w-[300px] lg:w-1/4 drop-shadow-lg">
          <Card
            icon={<MdAccessTime />}
            title="Working Hours"
            value="1,234 hrs"
            description="Total worked hours"
            percentageChange="+5%"
            period="This month"
          />
        </div>
      </div>

      {/* Flex container for the task target, task count, and top employees */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[250px] lg:w-[25%] drop-shadow-lg">
          <Card
            icon={<MdAssignment />}
            title="Complete Task Target"
            type="circular"
            data={taskTargetData}
            showChart={true}
            showPercentageChange={false}
            showPeriod={false}
          />
        </div>
        <div className="flex-1 min-w-[250px] lg:w-[25%] drop-shadow-lg">
          <Card
            icon={<MdAssignment />}
            title="Task Count"
            type="bar"
            data={taskCountData}
            showChart={true}
            showPercentageChange={false}
            showPeriod={false}
          />
        </div>
        <div className="w-full min-w-[250px] lg:w-[50%]">
          <TopEmployeesCard employees={employees} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
