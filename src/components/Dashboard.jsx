import React from 'react';
import Card from './Card';
import { MdPeople, MdTrendingUp, MdAttachMoney, MdAccessTime } from 'react-icons/md';

const Dashboard = () => {
  return (
    <div className="flex gap-4">
      <Card
        icon={<MdPeople className="text-5xl text-gray-500" />}
        title="Total Employees"
        value="2,0987"
        description="Task"
        percentageChange="+86%"
        period="This month"
      />
      <Card
        icon={<MdTrendingUp className="text-5xl text-gray-500" />}
        title="Revenue Growth"
        value="$10,287"
        description="Compared to last month"
        percentageChange="+12%"
        period="This month"
      />
      <Card
        icon={<MdAttachMoney className="text-5xl text-gray-500" />}
        title="Total Donations"
        value="$5,678"
        description="Total received"
        percentageChange="-8%"
        period="This month"
      />
      <Card
        icon={<MdAccessTime className="text-5xl text-gray-500" />}
        title="Working Hours"
        value="1,234 hrs"
        description="Total worked hours"
        percentageChange="+5%"
        period="This month"
      />
    </div>
  );
};

export default Dashboard;
