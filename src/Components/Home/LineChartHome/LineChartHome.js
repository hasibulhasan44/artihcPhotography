import React from "react";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Wedding Photography",
    Overall_rating: 4.8,
    Success_ratio: 95,
    amt: 2400,
  },
  {
    name: "Sports Photography",
    Overall_rating: 4.5,
    Success_ratio: 95,
    amt: 0,
  },
  {
    name: "Journalism Photography",
    Overall_rating: 4.5,
    Success_ratio: 98,
    amt: 0,
  },
  {
    name: "Wild Photography",
    Overall_rating: 4.4,
    Success_ratio: 92,
    amt: 0,
  },
  {
    name: "Family Photography",
    Overall_rating: 4.8,
    Success_ratio: 98,
    amt: 0,
  },
  {
    name: "Travel Photography",
    Overall_rating: 4.9,
    Success_ratio: 99,
    amt: 0,
  },
];

const LineChartHome = () => {
  return (
    <div>
      <LineChart
        width={1100}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Success_ratio"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Overall_rating" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default LineChartHome;
