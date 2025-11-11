import React from "react";

const aboutData = {
  Sukhad_Chandan: {
    heading: "About",
    subheading: "The Essence of Calm and Purity.",
    description:
      "Sukhad Chandan is inspired by the sacred richness of sandalwood — grounding, peaceful, and timeless. It’s a fragrance that connects you to nature’s divine calm and spiritual depth.",
    steps: [
      {
        title: "Crafted With Devotion",
        text: "Each drop is blended using pure sandalwood oil, evoking serenity and inner balance.",
      },
      {
        title: "Authentic Aroma",
        text: "The fragrance captures the essence of traditional Chandan — warm, woody, and meditative.",
      },
      {
        title: "For the Soul",
        text: "Perfect for those who seek purity and peace through fragrance, beyond just luxury.",
      },
    ],
    image: "product Chandan.webp",
  },

  Oud: {
    heading: "About",
    subheading: "Power. Depth. Sophistication.",
    description:
      "Oud Royale is a symbol of strength and elegance. With its deep woody base and luxurious warmth, it speaks to those who carry power with grace.",
    steps: [
      {
        title: "Rare Ingredients",
        text: "Infused with the world’s finest agarwood extracts, creating a bold and lasting impression.",
      },
      {
        title: "A Statement Fragrance",
        text: "Dark, rich, and mysterious — perfect for nights of luxury and confidence.",
      },
      {
        title: "Enduring Luxury",
        text: "Oud Royale lingers long after application, leaving a mark of prestige and class.",
      },
    ],
    image: "product Oudh.webp",
  },

  Ocean: {
    heading: "About",
    subheading: "Fresh. Free. Invigorating.",
    description:
      "Ocean Mist captures the purity of sea breeze and the calm of blue horizons. It’s a fragrance for those who live freely and breathe deeply.",
    steps: [
      {
        title: "Inspired by Nature",
        text: "Crafted with aquatic and citrusy notes that evoke the freshness of open waters.",
      },
      {
        title: "Pure Energy",
        text: "A light yet vibrant fragrance that keeps you refreshed and confident all day long.",
      },
      {
        title: "For the Modern Explorer",
        text: "Ideal for those who love freedom, travel, and the serene touch of the ocean wind.",
      },
    ],
    image: "product Ocean.webp",
  },

  Religous: {
    heading: "About",
    subheading: "Spiritual. Pure. Eternal.",
    description:
      "Religious Essence is crafted for moments of devotion and mindfulness. It embodies purity, tranquility, and a sacred connection between soul and scent.",
    steps: [
      {
        title: "Spiritually Inspired",
        text: "Blended with traditional Indian attars and sacred resins for divine calm.",
      },
      {
        title: "Soothing Aroma",
        text: "Gentle notes of Chandan, Mogra, and temple florals create a peaceful aura.",
      },
      {
        title: "For Meditation & Prayer",
        text: "Designed to elevate the spirit and deepen your connection with the divine.",
      },
    ],
    image: "product Religious.webp",
  },

  Scento: {
    heading: "About",
    subheading: "Modern Charm Meets Timeless Elegance.",
    description:
      "Scento is a modern-day fragrance that blends youthful freshness with classic sophistication — perfect for everyday wear and special moments alike.",
    steps: [
      {
        title: "Vibrant Notes",
        text: "Infused with a unique mix of citrus, musk, and floral accords for a dynamic aroma.",
      },
      {
        title: "Designed for All",
        text: "A gender-neutral fragrance that complements every mood and occasion.",
      },
      {
        title: "Signature Style",
        text: "Scento adds a touch of personality and elegance to your daily presence.",
      },
    ],
    image: "product Scento.webp",
  },
};


const AboutUs = ({ variant = "Chandan" }) => {
  const data = aboutData[variant] || aboutData["Chandan"];

  return (
    <section
      id="about"
      className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 -right-10 sm:-right-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-pink-100 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute bottom-0 -left-10 sm:-left-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-pink-200 rounded-full blur-3xl opacity-25"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* HEADER TEXT */}
        <div className="text-left mb-8 sm:mb-12 md:mb-14 lg:mb-16 w-full">
          <h1 className="font-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#5B3A29] mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight ">
            {data.heading}
          </h1>
          <h2 className="font-2 block text-3xl md:text-4xl text-[#D8A47F] mt-2 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
            {data.subheading}
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg max-w-3xl">
            {data.description}
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE STEPS */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 order-2 lg:order-1">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 md:gap-5 bg-white border border-gray-100 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="bg-[#5B3A29] text-white font-bold rounded-lg sm:rounded-xl w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0 text-sm sm:text-base">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#5B3A29] mb-1 sm:mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative group order-1 lg:order-2">
            <div className="overflow-hidden shadow-xl sm:shadow-2xl border-4 sm:border-6 md:border-8 border-[#5B3A29]/30 rounded-[80px_0_80px_0] sm:rounded-[120px_0_120px_0] md:rounded-[150px_0_150px_0] lg:rounded-[200px_0_200px_0]">
              <video
                src="e0d723fe79b25fabc8bf470f9b4b354b.mp4" // 👈 your .mp4 video file path
                className="w-full h-[400px] sm:h-[500px] object-contain rounded-2xl transform transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
                onError={(e) => {
                  e.target.poster = "/Blue Modern Perfume Promotion Instagram Post (6).png"; // fallback image
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
