import React from "react";
import Card from "./Card";
import TopEmployeesCard from "./TopEmployeesCard";
import {
  MdPeople,
  MdTrendingUp,
  MdAttachMoney,
  MdAccessTime,
  MdAssignment,
} from "react-icons/md";

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
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    position: 'Software Engineer',
    tasksDone: 120,
    pointsEarned: 450,
  },
  {
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    position: 'Product Manager',
    tasksDone: 95,
    pointsEarned: 380,
  },
  {
    name: 'Emily Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    position: 'UX Designer',
    tasksDone: 85,
    pointsEarned: 340,
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Card
        icon={<MdPeople className="text-3xl text-gray-500" />}
        title="Total Employees"
        value="2,0987"
        description="Task"
        percentageChange="+86%"
        period="This month"
      />
      <Card
        icon={<MdTrendingUp className="text-3xl text-gray-500" />}
        title="Revenue Growth"
        value="$10,287"
        description="Compared to last month"
        percentageChange="+12%"
        period="This month"
      />
      <Card
        icon={<MdAttachMoney className="text-3xl text-gray-500" />}
        title="Total Donations"
        value="$5,678"
        description="Total received"
        percentageChange="-8%"
        period="This month"
      />
      <Card
        icon={<MdAccessTime className="text-3xl text-gray-500" />}
        title="Working Hours"
        value="1,234 hrs"
        description="Total worked hours"
        percentageChange="+5%"
        period="This month"
      />
      <Card
        icon={<MdAssignment className="text-3xl text-gray-500" />}
        title="Complete Task Target"
        type="circular"
        data={taskTargetData}
      />
      <Card
        icon={<MdAssignment className="text-3xl text-gray-500" />}
        title="Task Count"
        type="bar"
        data={taskCountData}
      />
      <TopEmployeesCard employees={employees} />
    </div>
  );
};

export default Dashboard;
