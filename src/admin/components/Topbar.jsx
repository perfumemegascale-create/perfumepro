import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Bell, Search, User, XCircle } from "lucide-react";

const Topbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const notifRef = useRef(null);
  const profileRef = useRef(null);
  const searchRef = useRef(null);
  const [notifications, setNotifications] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/get_notifications.php`) // 👈 update path
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          setNotifications(data.data);
        }
      })
      .catch(err => console.error("Error fetching notifications:", err));
  }, []);

  const notificationCount = notifications.length;



  let adminUserRaw = localStorage.getItem("adminUser");
  let adminUser;
  try {
    adminUser = adminUserRaw ? JSON.parse(adminUserRaw) : { name: "Admin", email: "admin@example.com" };
  } catch {
    adminUser = { name: "Admin", email: "admin@example.com" };
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notifRef.current && !notifRef.current.contains(event.target) &&
        profileRef.current && !profileRef.current.contains(event.target) &&
        searchRef.current && !searchRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
        setShowProfile(false);
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
      setShowSearch(false);
    }
  };


  const handleNotificationClick = (notification) => {
    // Navigate based on the source
    switch (notification.source.toLowerCase()) {
      case "attar":
        navigate("/admin/dashboard/attar"); // route for Attar page
        break;
      case "perfume":
        navigate("/admin/dashboard/perfume"); // route for Perfume page
        break;
      case "ghee":
        navigate("/admin/dashboard/gircowghee"); // route for Ghee page
        break;
      default:
        console.warn("Unknown notification source:", notification.source);
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="h-[80px] flex justify-between items-center px-4 md:px-8 py-3 border-b border-[#5B3A29]/30">

          {/* Left: Sidebar toggle + Page title */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-[#5B3A29]/10 transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              {isSidebarOpen ? <X className="w-6 h-6 text-[#5B3A29]" /> : <Menu className="w-6 h-6 text-[#5B3A29]" />}
            </button>
            <span className="text-xl font-semibold text-[#5B3A29]">Admin Dashboard</span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 md:gap-5">

            {/* Notifications */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); setShowSearch(false); }}
                className="relative p-2 rounded-lg hover:bg-[#5B3A29]/10 transition-all duration-300"
              >
                <Bell className="w-5 h-5 text-[#0A1721] hover:text-[#5B3A29]" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-45 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center ">
                    {notificationCount}
                  </span>
                )}              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden animate-slideDown z-50">
                  <div className="p-3 bg-[#5B3A29] text-white font-semibold">Notifications</div>
                  <div className="max-h-60 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-gray-500 text-sm">
                        No new records from Attar, Perfume, or Ghee in the last 3 days
                      </div>
                    ) : (
                      notifications.map((n) => (
                        <div
                          key={`${n.source}-${n.id}`}
                          className="p-3 border-b hover:bg-[#F5F0ED] cursor-pointer transition-colors"
                          onClick={() => handleNotificationClick(n)}
                        >
                          <p className="text-sm font-medium text-gray-800">{n.title}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {n.source} • {new Date(n.date_added).toLocaleString("en-GB")}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); setShowSearch(false); }}
                className="flex items-center gap-2 p-1.5 md:p-2 rounded-lg  transition-transform duration-300"
              >
                <div className="w-9 h-9 bg-[#0A1721]  rounded-full flex items-center justify-center shadow-md">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="hidden md:block text-sm font-medium text-[#0A1721] hover:text-[#5B3A29]">{adminUser.name}</span>
              </button>
            </div>



          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
      `}</style>
    </>
  );
};

export default Topbar;
