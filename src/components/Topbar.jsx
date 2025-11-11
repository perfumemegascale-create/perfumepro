import React from "react";

export default function Topbar({ toggleSidebar, isMobile }) {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white shadow rounded-md">
      {/* Left Section: Hamburger and Title */}
      <div className="flex items-center gap-2">
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="text-gray-800 text-3xl p-1 hover:bg-gray-100 rounded"
          >
            ☰
          </button>
        )}
        <h1 className="text-lg font-bold text-gray-800 truncate">Dashboard</h1>
      </div>

      {/* Right Section: Search and Profile (Simplified for Mobile) */}
      <div className="flex items-center gap-2">
        {isMobile ? (
          <button className="text-gray-500 text-sm border rounded px-2 py-1 hover:bg-gray-100">
            Search
          </button>
        ) : (
          <input
            type="text"
            placeholder="Search..."
            className="border rounded px-3 py-1 text-sm w-40"
          />
        )}
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
}