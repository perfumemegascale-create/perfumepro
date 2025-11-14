import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardHome from "./pages/DashboardHome";
import Perfume from "./pages/Perfume";
import Attar from "./pages/Attar";
import GirCowGhee from "./pages/GirCowGhee";
import BulkOrder from "./pages/bulk_order";
import Mohanthal from "./pages/Mohanthal";
import ChurmaLaddu from "./pages/ChurmaLaddu";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen text-[#0A1721] overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Topbar */}
        <Topbar
          onToggleSidebar={handleToggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Page Container */}
        <div className="p-4 md:p-6 bg-white min-h-screen">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/perfume" element={<Perfume />} />
            <Route path="/attar" element={<Attar />} />
            <Route path="/gircowghee" element={<GirCowGhee />} />
            <Route path="/bulk_order" element={<BulkOrder />} />
            <Route path="/mohanthal" element={<Mohanthal />} />
            <Route path="/churmaladdu" element={<ChurmaLaddu />} />

            {/* Redirect any unknown route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
