// ==== src/admin/components/Sidebar.jsx ====
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, Flower2, FlaskConical, Leaf, ChevronLeft, LogOut, Boxes } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();


  // Updated menu items
  const menuItems = [
    { to: "/admin/dashboard", icon: Home, label: "Dashboard", end: true },
    { to: "/admin/dashboard/perfume", icon: Flower2, label: "Perfume" },
    { to: "/admin/dashboard/attar", icon: FlaskConical, label: "Attar" },
    { to: "/admin/dashboard/gircowghee", icon: Leaf, label: "GirCowGhee" },
    { to: "/admin/dashboard/bulk_order", icon: Boxes, label: "Bulk Order" },
  ];

  const linkClasses = ({ isActive }) => {
    const baseClasses = `
      group flex items-center gap-3 py-1 px-4 rounded-xl transition-all duration-300
      transform hover:scale-105 active:scale-95 relative overflow-hidden
      ${isCollapsed ? "justify-center" : ""}
    `;
    return isActive
      ? `${baseClasses} bg-[#5B3A29]/10 text-white `
      : `${baseClasses} text-gray-200 hover:bg-[#5B3A29]/10 hover:text-[#5B3A29]`;
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isAdminAuthenticated");
      localStorage.removeItem("adminUser");
      navigate("/alogin");
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          ${isCollapsed ? "w-20" : "w-72 md:w-70"}
          bg-white text-white flex flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          border-r border-[#5B3A29]/20
        `}
      >
        {/* Header */}
        <div className="h-[80px] px-4 md:px-6 py-3 border-b border-[#5B3A29]/30 flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h1 className="text-2xl font-bold text-[#5B3A29]">Admin Panel</h1>
              <p className="text-left font-semibold text-xs text-[#0A1721]">Control Center</p>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-2 rounded-lg hover:bg-[#5B3A29]/20 transition-all duration-300"
          >
            <ChevronLeft
              className={`w-5 h-5 text-[#5B3A29] transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""
                }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkClasses}
              onClick={() => window.innerWidth < 1024 && onClose()}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300`}
              >
                <item.icon className="w-5 h-5 text-[#0A1721]" />
              </div>
              {!isCollapsed && (
                <span className="text-left font-medium text-base text-[#0A1721] flex-1 group-hover:translate-x-1 transition-transform duration-300">
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className=" border-t border-[#5B3A29]/30 flex justify-center align-items-center">
          <button onClick={handleLogout}
            className="flex items-center w-full gap-2  text-[#0A1721] px-3 md:px-4 p-4 transition-all duration-300  text-sm font-medium">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 text-center border-t border-[#5B3A29]/30">
            <p className="text-xs text-gray-400">© 2025 Megascale</p>
          </div>
        )}
      </aside>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #5B3A29;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7B5138;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
