import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const WeeklyOverview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("thisWeek");

  const data = [
    { day: "Mon", hours: 4, dayNum: "4h" },
    { day: "Tue", hours: 6, dayNum: "6h" },
    { day: "Wed", hours: 3, dayNum: "3h" },
    { day: "Thu", hours: 5, dayNum: "5h" },
    { day: "Fri", hours: 0, dayNum: "0h" },
    { day: "Sat", hours: 0, dayNum: "0h" },
    { day: "Sun", hours: 0, dayNum: "0h" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Weekly Overview</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedPeriod("thisWeek")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              selectedPeriod === "thisWeek"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setSelectedPeriod("lastWeek")}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              selectedPeriod === "lastWeek"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Last Week
          </button>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 40, left: 0 }}
            barCategoryGap="20%"
          >
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "#6b7280" }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip
              cursor={false}
              content={({
                active,
                payload,
              }: {
                active?: boolean;
                payload?: Array<{
                  value?: number;
                }>;
              }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm">
                      {payload[0].value}h
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="hours" radius={[6, 6, 0, 0]} maxBarSize={80}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#c5c5c5" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
          <span className="text-gray-700">Coding</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-500 rounded-sm"></div>
          <span className="text-gray-700">Meetings</span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyOverview;
