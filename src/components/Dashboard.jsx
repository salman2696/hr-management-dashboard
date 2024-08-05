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
      className={`flex flex-wrap min-h-screen gap-4 p-4 rounded-xl ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-500"
      }`}
    >   
      <Card
        icon={<MdPeople />}
        title="Total Employees"
        value="2,0987"
        description="Task"
        percentageChange="+86%"
        period="This month"
      />
      <Card
        icon={<MdTrendingUp />}
        title="Revenue Growth"
        value="$10,287"
        description="Compared last month"
        percentageChange="+12%"
        period="This month"
      />
      <Card
        icon={<MdAttachMoney />}
        title="Total Donations"
        value="$5,678"
        description="Total received"
        percentageChange="-8%"
        period="This month"
      />
      <Card
        icon={<MdAccessTime />}
        title="Working Hours"
        value="1,234 hrs"
        description="Total worked hours"
        percentageChange="+5%"
        period="This month"
      />
      <Card
        icon={<MdAssignment />}
        title="Complete Task Target"
        type="circular"
        data={taskTargetData}
        showChart={true}
        showPercentageChange={false}
        showPeriod={false}
        chartClassName="min-w-full lg:min-w-72"
      />

      <Card
        icon={<MdAssignment />}
        title="Task Count"
        type="bar"
        data={taskCountData}
        showChart={true}
        showPercentageChange={false}
        showPeriod={false}
        chartClassName="min-w-full lg:min-w-72 flex justify-between"
      />
      <TopEmployeesCard employees={employees} />
    </div>
  );
};

export default Dashboard;
