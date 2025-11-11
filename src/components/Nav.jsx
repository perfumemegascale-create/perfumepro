import React, { useState } from 'react';
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      // Already on home → scroll directly
      scroller.scrollTo(section, {
        smooth: true,
        duration: 800,
        offset: -70, // adjust for sticky header
      });
    } else {
      // Go to home and pass section in state
      navigate("/", { state: { scrollTo: section } });
    }
    setMenuOpen(false);
  };

  return (
    <header className="top-0 w-full z-50 bg-[#fefcfa] backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        {/* LEFT SIDE — LOGO */}
        <a href="/">
          <img
            src="/Scentra_logo (2).png"
            alt="Logo"
            className="w-[135px] rounded-[10px]"
          />
        </a>

        {/* RIGHT SIDE — NAV LINKS (Desktop) */}
        <nav className="hidden sm:flex items-center gap-6">
          <button
            onClick={() => handleNavigation("product-section")}
            className="text-amber-800 hover:text-amber-600 font-medium"
          >
            Our Product
          </button>
          <button
            onClick={() => handleNavigation("FAQ-section")}
            className="text-amber-800 hover:text-amber-600 font-medium"
          >
            FAQ
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className="text-amber-800 hover:text-amber-600 font-medium"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavigation("Blog-section")}
            className="text-amber-800 hover:text-amber-600 font-medium"
          >
            Blogs
          </button>
          <RouterLink
            to="/bulkorder"
            className="text-amber-800 hover:text-amber-600 font-medium"
          >
            Bulk Orders
          </RouterLink>
          <button
            onClick={() => handleNavigation("contactForm")}
            className="text-amber-800 hover:text-amber-600 font-medium"
          >
            Contact Us
          </button>
        </nav>

        {/* MOBILE ICON */}
        <button
          className="sm:hidden text-amber-800 text-3xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="sm:hidden bg-[#fefcfa] shadow-md border-t border-amber-100">
          <nav className="flex flex-col items-center gap-4 py-4">
            {[
              { id: "product-section", label: "Our Product" },
              { id: "FAQ-section", label: "FAQ" },
              { id: "about", label: "About Us" },
              { id: "Blog-section", label: "Blogs" },
              { id: "contactForm", label: "Contact Us" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-amber-800 hover:text-amber-600 font-medium"
              >
                {item.label}
              </button>
            ))}

            {/* Bulk Orders link added for mobile */}
            <RouterLink
              to="/bulkorder"
              onClick={() => setMenuOpen(false)}
              className="text-amber-800 hover:text-amber-600 font-medium"
            >
              Bulk Orders
            </RouterLink>
          </nav>
        </div>
      )}
    </header>
  );
}
