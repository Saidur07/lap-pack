import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
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
      <h1 className="text-4xl my-8 text-center"> Dashboard</h1>
      <hr className="container mx-auto w-1/3" />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div>
          <h1 className="text-3xl text-center text-cyan-500 my-6">
            Month wise sell
          </h1>
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#ff6b81" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="sell" stroke="#7d5fff" />
          </LineChart>
          <hr />
        </div>
        <div>
          <h1 className="text-3xl text-center text-cyan-500 my-6">
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
              fill="#7d5fff"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stackId="1"
              stroke="#82ca9d"
              fill="#ff6b81"
            />
          </AreaChart>
          <hr />
        </div>
        <div>
          <h1 className="text-3xl text-center text-cyan-500 my-6">
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
            <Bar dataKey="investment" stackId="a" fill="#7d5fff" />
            <Bar dataKey="revenue" stackId="a" fill="#ff6b81" />
          </BarChart>
          <hr />
        </div>
        <div>
          <h1 className="text-3xl text-center text-cyan-500 my-6">
            Investment vs Revenue
          </h1>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" barSize={20} fill="#ff6b81" />
            <Line type="monotone" dataKey="revenue" stroke="#7d5fff" />
          </ComposedChart>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
