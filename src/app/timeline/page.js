"use client";
import { useEffect, useState } from "react";

const Timeline = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = () => {
      const stored = localStorage.getItem("timeline");
      if (stored) {
        setData(JSON.parse(stored));
      }
    };

    loadData();
  }, []); 

  return (
    <div className="space-y-4">
      {data.map((item, i) => (
        <div key={i} className="p-4 border rounded-lg">
          <h2>{item.type}</h2>
          <p>{item.message}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
