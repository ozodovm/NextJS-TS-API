import React from "react";
import { UserType } from "../page";

interface UserItemsProps {
  item: UserType;
}

const UserItems: React.FC<UserItemsProps> = ({ item }) => {
  return (
    <div className="w-[300px] bg-green-300 shadow-lg rounded-lg overflow-hidden border border-gray-200 ">
      <img
        src="https://picsum.photos/300/300"
        alt="Random Person"
        className="rounded-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">
          {item.firstName} {item.lastName}
        </h2>
        <p className="text-sm text-gray-600 mt-1">{item.email}</p>
        <p className="text-sm text-gray-600 mt-1">Phone: {item.phone}</p>
      </div>
      <div className="p-3 bg-gray-100 text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserItems;
