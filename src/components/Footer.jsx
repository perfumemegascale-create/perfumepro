import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll helper
    const handleScrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Quick Links
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About", id: "about", path: "/" },
        { name: "FAQ", id: "FAQ-section", path: "/" },
        { name: "Contact", id: "contactForm", path: "/" },
        { name: "Blog", id: "Blog-section", path: "/" },
        { name: "Bulk Order", path: "/bulkorder" },
    ];

    const policiesLinks = [
        { name: "Terms & Conditions", path: "/terms-condition" },
        { name: "Shipping Policy", path: "/shiping-policy" },
        { name: "Return Policy", path: "/return-policy" },
        { name: "Privacy Policy", path: "/privacy-policy" },
    ];

    // Handle Quick Links Click
    const handleQuickLinkClick = (link) => {
        if (link.path === "/blog") {
            navigate("/blog");
            return;
        }

        // If clicking Home
        if (link.name === "Home") {
            if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                navigate("/");
            }
            return;
        }

        // If on homepage → scroll directly
        if (location.pathname === "/") {
            handleScrollTo(link.id);
        } else {
            navigate(`/#${link.id}`);
        }
    };

    // Detect hash (#section) after redirect and scroll automatically
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "");
            setTimeout(() => handleScrollTo(sectionId), 400);
        }
    }, [location]);

    return (
        <footer className="bg-yellow-50 text-gray-800 border-t border-amber-200">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Intro */}
                <div>
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            if (location.pathname === "/") {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            } else {
                                navigate("/");
                            }
                        }}
                    >
                        <img
                            src="/Scentra_logo (2).png"
                            alt="Logo"
                            className="w-auto h-[100px] rounded-[10px] mb-4 object-contain"
                        />
                    </a>
                    <p className="text-[#db9767]">
                        Scentra brings the timeless essence of fine perfumery into your modern lifestyle.
                        <br />
                        <span className="text-[#5c3a29] font-medium">Elegant. Lasting. Captivating.</span>
                    </p>
                </div>

                {/* Quick Links + Policies */}
                <div className="grid grid-cols-2 gap-6 md:col-span-2">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#5c3a29] mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => handleQuickLinkClick(link)}
                                        className="text-[#db9767] hover:text-amber-900 transition text-left w-full"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#5c3a29] mb-3">
                            Policies
                        </h3>
                        <ul className="space-y-2">
                            {policiesLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-[#db9767] hover:text-amber-900 transition"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-[#5c3a29] mb-3">
                        Contact Info
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-[#5c3a29]" />
                            <span className="text-[#db9767]">+91-8850011652</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-[#5c3a29]" />
                            <span className="text-[#db9767]">scent@storeview.in</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin className="w-5 h-5 text-[#5c3a29]" />
                            <span className="text-[#db9767]">412, New Escon Plaza,<br />Amroli, Surat - 394107</span>

                        </li>
                    </ul>
                </div>
            </div>

            {/* Decorative Image */}
            <div>
                <img
                    src="/de59e8fa655208a7131bcdc7b1f46f21.png"
                    alt="Gir Cow Ghee Footer"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Copyright */}
            <div className="text-center text-[#db9767] text-sm mt-2 pb-6">
                © {new Date().getFullYear()}{" "}
                <span className="font-medium text-[#5c3a29]">Scentra</span> — All Rights Reserved. | <a href="https://www.megascale.in/" target="_blank">Powered by Megascale</a>
            </div>
        </footer>
    );
}

export default Footer;
