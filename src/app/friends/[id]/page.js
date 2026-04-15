"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";

import { HiBellSnooze } from "react-icons/hi2";
import { MdAddIcCall, MdHistory } from "react-icons/md";

import friendsData from "@/../public/friends.json";
import { IoMdText, IoMdVideocam } from "react-icons/io";
import Image from "next/image";
import { LuArchive } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const handleAddInteraction = (type) => {
    const newItem = {
      id: crypto.randomUUID(),
      type,
      name: friend.name,
      date: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(localStorage.getItem("timeline")) || [];

    localStorage.setItem("timeline", JSON.stringify([newItem, ...existing]));
    toast.success(`${type} added to timeline `);
  };

  const { id } = useParams();
  const router = useRouter();

  const friend = friendsData.find((f) => f.id === parseInt(id));

  if (!friend)
    return <div className="text-center py-20 font-bold">Friend not found!</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-10 px-4">
      <div className="md:col-span-1 space-y-6">
        <div className="bg-gray-200 rounded-lg shadow-lg border border-base-300 p-6">
          <div className=" flex flex-col items-center text-center gap-2">
            {/* image */}
            <div className="relative w-20 h-20 mx-auto mb-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-full object-cover ring-2 ring-primary ring-offset-2 group-hover:scale-105 transition duration-300 mt-2"
              />
            </div>

            <h2 className="text-xl font-black tracking-tight">{friend.name}</h2>
            <div
              className={`inline-block px-4 py-2 rounded-full text-xs font-semibold capitalize shadow-sm ${
                friend.status === "overdue"
                  ? "bg-red-100 text-red-600"
                  : friend.status === "almost due"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
              }`}
            >
              {friend.status}
            </div>
            <div className="flex flex-wrap justify-center gap-2 my-4">
              {friend.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="badge badge-primary badge-outline badge-sm font-semibold uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-base-content/60 italic mb-8 leading-relaxed ">
              {friend.bio}
            </p>

            <div className="flex-col items-center gap-5 space-y-3 ">
              <div className="w-full">
                <div className="flex btn items-center gap-2">
                  <HiBellSnooze size={20} />
                  <p>Snooze 2 Weeks</p>
                </div>
              </div>

              <div className=" py-2 w-full ">
                <div className="flex btn items-center gap-2">
                  <LuArchive size={20} />

                  <p>Archive</p>
                </div>
              </div>

              <div className="  w-full">
                <div className="flex btn items-center gap-2">
                  <AiOutlineDelete size={20} />
                  <h1>Delete</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: Stats & Controls --- */}
      <div className="md:col-span-2 space-y-6">
        {/* ১. STATS SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="flex flex-col items-center w-full md:flex-1 py-6 border rounded-xl border-base-300 shadow-lg bg-base-100">
            <p className="text-2xl font-bold">{friend.days_since_contact}</p>
            <p className="text-sm text-gray-500">Days Since Contact</p>
          </div>

          <div className="flex flex-col items-center w-full md:flex-1 py-6 border rounded-xl border-base-300 shadow-lg bg-base-100">
            <p className="text-2xl font-bold">{friend.goal}</p>
            <p className="text-sm text-gray-500">Goal (Days)</p>
          </div>

          <div className="flex flex-col items-center w-full md:flex-1 py-6 border rounded-xl border-base-300 shadow-lg bg-base-100">
            <p className="text-lg font-semibold">{friend.next_due_date}</p>
            <p className="text-sm text-gray-500">Next Due</p>
          </div>
        </div>

        {/* ২. RELATIONSHIP GOAL SECTION */}
        <div className="bg-base-300 p-6 rounded-xl shadow-md border border-base-300">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold">Relationship Goal</h2>
            <button className="btn btn-sm btn-outline rounded-lg">Edit</button>
          </div>
          <p className="text-sm opacity-70">Connect every {friend.goal} days</p>
        </div>

        {/* ৩. QUICK CHECK-IN */}
        <div className="bg-base-300 p-6 rounded-xl shadow-md border border-base-300">
          <h3 className="text-sm font-bold opacity-50 mb-6 uppercase tracking-widest">
            Quick Check-In
          </h3>
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
            <div
              onClick={() => handleAddInteraction("Call")}
              className="border border-base-300 flex-1 h-24 shadow-sm rounded-xl flex flex-col items-center justify-center gap-1 hover:shadow-xl hover:border-primary transition cursor-pointer py-2 group"
            >
              <MdAddIcCall
                size={24}
                className=" group-hover:scale-110 transition"
              />
              <h2 className="text-sm text-gray-500 font-bold  ">Call</h2>
            </div>

            <div
              onClick={() => handleAddInteraction("Text")}
              className="border border-base-300 flex-1 h-24 shadow-sm rounded-xl flex flex-col items-center justify-center gap-1 hover:shadow-xl hover:border-primary transition cursor-pointer py-2 group"
            >
              <IoMdText
                size={24}
                className="  group-hover:scale-110 transition"
              />
              <h2 className="text-sm text-gray-500 font-bold  ">Text</h2>
            </div>

            <div
              onClick={() => handleAddInteraction("Video")}
              className="border border-base-300 flex-1 h-24 shadow-sm rounded-xl flex flex-col items-center justify-center gap-1 hover:shadow-xl hover:border-primary transition cursor-pointer py-2 group"
            >
              <IoMdVideocam
                size={24}
                className="  group-hover:scale-110 transition"
              />
              <h2 className="text-sm text-gray-500 font-bold  ">Video</h2>
            </div>
          </div>
        </div>

        {/* ৪. RECENT INTERACTIONS */}
        <div className="bg-base-300 p-3 md:p-6 rounded-xl shadow-lg border border-base-300">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-bold text-lg">Recent Interactions</h2>
              <p className="text-xs opacity-50">View your last conversations</p>
            </div>
            <button className="btn btn-sm btn-ghost gap-2 border border-base-300 hover:border-primary rounded-xl px-4">
              <MdHistory size={20} />
              Full History
            </button>
          </div>

          {/* ৪. TEXT CALL VIDEO  */}

          <div className="mt-4 ">
            <div className="flex justify-between items-center p-4 hover:shadow-md transition">
              {/* LEFT */}
              <div className="flex items-center gap-4">
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full">
                  <IoMdText size={20} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-base">Text</h3>
                  <p className="text-sm text-gray-500">
                    Asked for career advice
                  </p>
                </div>
              </div>

              {/* RIGHT DATE */}
              <div>
                <p className="text-sm text-gray-400 font-medium">
                  Jan 28, 2026
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center p-4   hover:shadow-md transition">
              {/* LEFT */}
              <div className="flex items-center gap-4">
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full ">
                  <IoMdVideocam size={20} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-base">Text</h3>
                  <p className="text-sm text-gray-500">
                    Asked for career advice
                  </p>
                </div>
              </div>

              {/* RIGHT DATE */}
              <div>
                <p className="text-sm text-gray-400 font-medium">
                  Jan 28, 2026
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4  hover:shadow-md transition">
              {/* LEFT */}
              <div className="flex items-center gap-4">
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full">
                  <IoMdText size={20} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-base">Text</h3>
                  <p className="text-sm text-gray-500">
                    Asked for career advice
                  </p>
                </div>
              </div>

              {/* RIGHT DATE */}
              <div>
                <p className="text-sm text-gray-400 font-medium">
                  Jan 28, 2026
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4  hover:shadow-md transition">
              {/* LEFT */}
              <div className="flex items-center gap-4">
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full  ">
                  <MdAddIcCall size={20} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-base">Text</h3>
                  <p className="text-sm text-gray-500">
                    Asked for career advice
                  </p>
                </div>
              </div>

              {/* RIGHT DATE */}
              <div>
                <p className="text-sm text-gray-400 font-medium">
                  Jan 28, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
