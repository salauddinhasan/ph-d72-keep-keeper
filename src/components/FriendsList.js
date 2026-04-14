import React from "react";
import friendsData from "../../public/friends.json";

import FriendCard from "./FriendCard";

const FriendsList = () => {
  return (
    <div className="my-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friendsData.map((friend, id) => (
          <div key={id}>
            <FriendCard friend={friend} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
