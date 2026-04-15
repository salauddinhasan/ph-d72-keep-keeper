"use client";
import { useEffect, useState } from "react";
import { IoMdText, IoMdVideocam } from "react-icons/io";
import { LuStickyNote } from "react-icons/lu";
import { MdAddIcCall } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";

const Timeline = () => {
  const [data, setData] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("All");  

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

  if (!mounted) return null;

  const handleDelete = (id) => {
    const updated = data.filter((item) => item.id !== id);
    setData(updated);
    localStorage.setItem("timeline", JSON.stringify(updated));
  };

  const filteredData = data.filter(
    (item) =>
      filter === "All" || item.type?.toLowerCase() === filter.toLowerCase(),
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-xl font-black mb-6 uppercase tracking-tight">
        Activity History
      </h2>

      <div
        style={{ maxWidth: "200px" }}
        className="mb-8 shadow-lg px-3 border border-base-300 rounded-lg py-2 w-[180px] "
      >
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered w-full max-w-xs bg-white text-gray-600 font-medium rounded-xl border-gray-200 focus:outline-none focus:border-[#2D4F4F]"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 opacity-40">
            <LuStickyNote size={50} className="mb-4 text-base-content" />
            <p className="text-lg font-medium italic tracking-wide">
              No {filter !== "All" ? filter : ""} history found.
            </p>
            <p className="text-sm opacity-70">
              Start a conversation to see it here!
            </p>
          </div>
        ) : (
          filteredData.map((item) => (
            <div
              key={item.id}  
              className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition mb-3"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 shrink-0 shadow-inner">
                {item.type?.toLowerCase() === "call" && (
                  <MdAddIcCall size={24} className="text-blue-500" />
                )}

                {item.type?.toLowerCase() === "text" && (
                  <IoMdText size={24} className="text-green-500" />
                )}

                {item.type?.toLowerCase() === "video" && (
                  <IoMdVideocam size={24} className="text-purple-500" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-[#2D4F4F] text-base capitalize">
                    {item.type}
                  </h3>
                  <div className="flex gap-1 text-gray-400 text-sm">
                    <span>with</span>
                    <span>{item.name}</span>
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#5B7083] mt-0.5">
                  {item.date || "March 28, 2026"}
                </p>
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                className="text-gray-300 hover:text-red-400 transition ml-2"
              >
                <RiDeleteBack2Fill size={20} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;
