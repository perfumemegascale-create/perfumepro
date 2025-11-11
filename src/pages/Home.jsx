import React, { useState, useEffect } from "react";
import {
  Heart,
  Sparkles,
  Leaf,
  Star,
  Check,
  Shield,
  Sun,
  Lightbulb,
  TrendingUp,
  Clock,
  Layers,
  Droplet,
  FlaskConical,
  Package,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import Form from "./Form";
import FAQSection from "./FAQSection";
import AboutUs from "./AboutUs";
import TwoPostImages from "./Twopostimage";
import Blogs from "./Blog";

const BhagvatPrasadam = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("benefits");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPerfume, setSelectedPerfume] = useState(null);

  const location = useLocation();

  // ✅ Scroll handler for header-based navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 800,
          offset: -70,
        });
      }, 300);
      // Clear navigation state to avoid re-scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Smooth scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 300);
  const translateY = Math.min(scrollY / 2, 50);

  const perfumeVarients = [
    {
      name: "Sukhad_Chandan",
      heading: "Sukhad Chandan",
      subheading: "The Essence of Serenity",
      description: `Sukhad Chandan is a timeless fragrance inspired by the purity and calmness of sacred sandalwood. It carries a warm, creamy, and woody aroma that evokes peace, spirituality, and grounded elegance. This perfume is perfect for those who wish to surround themselves with calm energy and an aura of divine sophistication.`,
      image: "/sukhad-chandan.webp",
      mainImage: "/sukhad-chandan.webp",
      baner1: "/1_sukhad_chandan.webp",
    },
    {
      name: "Oud",
      heading: "Woody Oudh",
      subheading: "The Essence of Royal Elegance",
      description: `Woody Oudh is a luxurious fragrance that embodies strength, confidence, and timeless sophistication. Crafted for those who appreciate depth and character, this scent weaves the mystique of precious agarwood (oudh) with warm woody undertones — leaving an unforgettable trail of regal allure. It’s not just a perfume, it’s an experience of pure prestige.`,
      image: "/oudh.webp",
      mainImage: "/oudh.webp",
      baner1: "/4_oudh.webp",
    },
    {
      name: "Ocean",
      heading: "Ocean Perfume",
      description: `Ocean Perfume captures the invigorating spirit of sea breeze, cool mist, and sunlit waves. It’s a fragrance that symbolizes freshness, energy, and effortless charm. With every spritz, Ocean takes you on a journey to the shoreline — crisp air, salty winds, and pure freedom.`,
      subheading: "Dive into Fresh Freedom",
      image: "/ocean.webp",
      mainImage: "/ocean.webp",
      baner1: "/2_ocean.webp",
    },
    {
      name: "Religous",
      heading: "Religious Perfume",
      subheading: "A Sacred Whisper of Fragrance",
      description: `Step into a realm of calm and clarity with Religious Perfume by Scento Smello — a divine composition that celebrates the soulful connection between scent and spirit. Blending sacred woods, holy herbs, and temple florals, this fragrance awakens a quiet sense of devotion while wrapping you in a warm, peaceful aura.`,
      image: "/religious.webp",
      mainImage: "/religious.webp",
      baner1: "/3_religious.webp",
    },
    {
      name: "Scento",
      heading: "SCENTO",
      subheading: "A Signature of Sophisticated Confidence",
      description: `SCENTO by Scento Smello is a refined fragrance that blends timeless elegance with modern charm. Its warm golden tone reflects the richness within — a perfect harmony of woody, spicy, and subtly sweet notes.`,
      image: "/scento.webp",
      mainImage: "/scento.webp",
      baner1: "/5_scento.webp",
    },
  ];

  useEffect(() => {
    setSelectedPerfume(perfumeVarients[0]);
    window.scrollTo(0, 0);
  }, []);

  if (!selectedPerfume) return null;

  return (
    <div
      id="home_page"
      className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50"
    >
      {/* Hero Section */}
      <section className="pt-10 pb-10 px-4 bg-[#fefcfa]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start md:items-start lg:items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-1 text-5xl md:text-6xl font-bold text-[#5B3A29] leading-tight">
                {selectedPerfume.heading}
                <span className="font-2 block text-3xl md:text-4xl text-[#D8A47F] mt-2">
                  {selectedPerfume.subheading}
                </span>
              </h2>

              <p className="font-7 text-lg text-[#3B3B3B] leading-relaxed">
                {selectedPerfume.description}
              </p>

              {/* Perfume Variants */}
              <div className="flex flex-wrap md:flex-nowrap lg:flex-wrap gap-8 pt-6 justify-center md:justify-start">
                {perfumeVarients.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedPerfume(item)}
                    className={`group flex flex-col items-center text-center bg-white rounded-2xl p-2 shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                      selectedPerfume.name === item.name
                        ? "ring-2 ring-[#C47B48]"
                        : ""
                    }`}
                  >
                    <div className="relative w-20 h-20">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative">
              <img
                src={selectedPerfume.mainImage || "Scentra_perfume.png"}
                alt={selectedPerfume.name}
                className="z-10 transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="w-full relative">
        <img
          src={selectedPerfume.baner1}
          alt={selectedPerfume.heading}
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Sections */}
      <FAQSection variant={selectedPerfume.name} />
      <TwoPostImages variant={selectedPerfume.name} />

      <section id="about">
        <AboutUs variant={selectedPerfume.name} />
      </section>

      <section id="product-section" className="w-full relative">
        <img
          src="6_all_perfume.webp"
          alt="All Perfumes"
          className="w-full h-auto object-contain"
        />
      </section>

      <Blogs />
      <Form />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BhagvatPrasadam;
