import React from "react";
import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="group relative bg-gradient-to-br from-base-100 to-base-200 border border-base-300 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-6 text-center overflow-hidden hover:-translate-y-1">
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/10 to-transparent"></div>

        {/* Image */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <Image
            src={friend.picture}
            alt={friend.name}
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full object-cover ring-2 ring-primary ring-offset-2 group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Name */}
        <h2 className="text-lg font-semibold text-base-content group-hover:text-primary transition">
          {friend.name}
        </h2>

        {/* Days */}
        <p className="text-sm text-gray-500 mb-2">
          {friend.days_since_contact} days ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {friend.tags.map((tag, idx) => (
            <span
              key={idx}
              className="badge badge-outline badge-sm px-3 py-2 text-xs hover:bg-primary hover:text-white transition"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
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
      </div>
    </Link>
  );
};

export default FriendCard;
