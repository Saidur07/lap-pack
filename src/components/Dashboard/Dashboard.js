import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl my-8 text-center"> Dahsboard</h1>
      <hr className="container mx-auto w-1/3" />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div>
          <h1 className="text-3xl text-center text-pink-500 my-6">
            Month wise sell
          </h1>
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#0093AB" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="sell" stroke="#ff3366" />
          </LineChart>
          <hr />
        </div>
        <div>
          <h1 className="text-3xl text-center text-pink-500 my-6">
            Investment vs Revenue
          </h1>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stackId="1"
              stroke="#8884d8"
              fill="#ff3366"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stackId="1"
              stroke="#82ca9d"
              fill="#0093AB"
            />
          </AreaChart>
          <hr />
        </div>
        <div>
          <h1 className="text-3xl text-center text-pink-500 my-6">
            Investment vs Revenue
          </h1>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#ff3366" />
            <Bar dataKey="revenue" stackId="a" fill="#0093AB" />
          </BarChart>
          <hr />
        </div>
        <div>
          <h1 className="text-3xl text-center text-pink-500 my-6">
            Investment vs Revenue
          </h1>
          <PieChart width={400} height={400}>
            <Tooltip></Tooltip>
            <Pie
              data={data}
              dataKey="investment"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#ff3366"
              label
            />
            <Pie
              data={data}
              dataKey="revenue"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#0093AB"
              label
            />
          </PieChart>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
