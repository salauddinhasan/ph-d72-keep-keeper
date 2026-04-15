"use client";
import React, { useEffect, useState } from "react";
import friendsData from "../../public/friends.json";
import FriendCard from "./FriendCard";

const FriendsList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-12 px-4 max-w-7xl mx-auto">
      {loading ? (
        <div className="h-64 flex flex-col items-center justify-center gap-4">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase">
            Salauddin...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friendsData.map((friend, id) => (
            <FriendCard key={id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsList;
