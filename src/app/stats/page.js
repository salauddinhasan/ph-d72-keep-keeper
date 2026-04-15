"use client";
import React, { useEffect, useState } from "react";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const StatsPage = () => {
  const [data, setData] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loadData = () => {
      const stored = localStorage.getItem("timeline");
      if (stored) {
        setData(JSON.parse(stored));
      }
      setMounted(true);
    };
    loadData();
  }, []);

  if (!mounted) return <div className="p-10 text-center">salauddin Loading...</div>;

  const chartData = [
    {
      name: "Call",
      value:
        data.filter((item) => item.type?.toLowerCase() === "call").length || 0,
    },
    {
      name: "Text",
      value:
        data.filter((item) => item.type?.toLowerCase() === "text").length || 0,
    },
    {
      name: "Video",
      value:
        data.filter((item) => item.type?.toLowerCase() === "video").length || 0,
    },
  ];

  const isDataEmpty = chartData.every((item) => item.value === 0);
  const displayData = isDataEmpty ? [{ name: "No Data", value: 1 }] : chartData;

  const COLORS = ["#3B82F6", "#22C55E", "#A855F7", "#E5E7EB"];

  return (
    <div className="py-10 flex-1 max-w-7xl mx-auto px-4">
      <h2 className="text-xl mb-4 font-black uppercase tracking-tight text-[#2D4F4F]">
        Activity Statistics
      </h2>

      <div className="border-base-300 border py-10 px-4 rounded-lg bg-white shadow-sm flex flex-col items-center">
        <p className="font-bold text-lg text-[#2D4F4F] mb-4 text-center uppercase tracking-widest">
          Usage Distribution
        </p>

        <PieChart width={300} height={350}>
          <Pie
            data={displayData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {displayData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={isDataEmpty ? "#E5E7EB" : COLORS[index]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" />
        </PieChart>

        {isDataEmpty && (
          <p className="text-xs text-red-400 mt-2 italic">
            Add some data in timeline to see actual stats!
          </p>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
