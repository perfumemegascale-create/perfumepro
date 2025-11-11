import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import WhatsAppButton from "./components/whatsapp";
import Header from "./components/Nav";
import ReturnPolicy from "./pages/Return_policy";
import PrivacyPolicy from "./pages/Privacy-policy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingPolicy from "./pages/Shiping_policy";
import BulkOrder from "./pages/BulkOrder";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./admin/ProtectedRoute";
import Footer from './components/Footer'

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin") || location.pathname === "/alogin" || location.pathname === "/aLOGIN";

  return (
    <>
      {/* Show Header & WhatsApp only for user pages */}
      {!isAdminRoute && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bulkorder" element={<BulkOrder />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/alogin" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsAndConditions />} />
        <Route path="/shiping-policy" element={<ShippingPolicy />} />

        {/* Redirect invalid admin URLs */}
        <Route path="/admin/*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppButton />}
    </>
  );
}

export default function App() {
  return (
    <>
      <AppContent />
    </>
  );
}
