import React, { useState, useEffect } from "react";

const FAQSection = ({ variant }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    Sukhad_Chandan: {
      image: "/Ingridient Chandan.webp",
      faqs: [
        {
          q: "What makes Sukhad Chandan unique ?",
          a: "Its authentic sandalwood essence brings peace, warmth, and spiritual calmness in every spray.",
        },
        {
          q: "Is it suitable for everyday wear ?",
          a: "Yes, it’s gentle, long-lasting, and ideal for both daily use and meditation sessions.",
        },
        {
          q: "Can men and women both wear it ?",
          a: "Absolutely — its balanced woody aroma suits everyone beautifully.",
        },
        {
          q: "How long does the scent last ?",
          a: "It lasts for 6–8 hours depending on the weather and skin type.",
        },
      ],
    },
    Oud: {
      image: "/Ingrident Oudh.webp",
      faqs: [
        {
          q: "What makes Woody Oudh stand out ?",
          a: "Its rich mix of oudh, sandalwood, and amber creates a royal and luxurious aroma.",
        },
        {
          q: "Is it a long-lasting fragrance ?",
          a: "Yes, its deep woody base ensures a lasting scent for up to 10 hours.",
        },
        {
          q: "When should I wear Woody Oudh ?",
          a: "Best for evenings, functions, or special occasions — when you want to stand out.",
        },
        {
          q: "Is it gender-specific ?",
          a: "It’s a bold unisex fragrance — strong yet elegant.",
        },
      ],
    },
    Ocean: {
      image: "/Ingrident Ocean.webp",
      faqs: [
        {
          q: "What type of fragrance is Ocean Perfume ?",
          a: "A refreshing aquatic fragrance that captures the energy of ocean waves and coastal air.",
        },
        {
          q: "Is Ocean Perfume good for warm weather ?",
          a: "Yes! It’s light, cool, and perfect for summer and tropical climates.",
        },
        {
          q: " Is it a unisex perfume ?",
          a: "Yes, both men and women can enjoy its clean, breezy freshness.",
        },
        {
          q: "How strong is the scent ?",
          a: "It’s moderately strong — refreshing without being overpowering.",
        },
      ],
    },
    Religous: {
      image: "/Ingrident Religious.webp",
      faqs: [
        {
          q: "What kind of perfume is this ?",
          a: "A soothing, spiritual fragrance inspired by sacred woods and temple florals.",
        },
        {
          q: "When can I use it ?",
          a: " Ideal for meditation, prayer, yoga, or peaceful daily moments.",
        },
        {
          q: " Is it alcohol-free ?",
          a: "Yes, it’s crafted from natural oils and resins — skin-safe and gentle.",
        },
        {
          q: "Can it be used by both men and women ?",
          a: "Absolutely — it’s a divine unisex scent designed for everyone seeking serenity.",
        },
      ],
    },
    Scento: {
      image: "/Ingrident Scento.webp",
      faqs: [
        {
          q: "What kind of fragrance is SS Scento ?",
          a: "A modern, fresh-floral Eau de Parfum with a warm woody-musk base — elegant and lasting.",
        },
        {
          q: "How long does it last ?",
          a: "With its premium fragrance-locking formula, it lasts 6–10 hours easily.",
        },
        {
          q: " Is it suitable for all occasions ?",
          a: "Yes — perfect for office wear, casual outings, and evening events alike.",
        },
        {
          q: "Is it unisex ?",
          a: "Yes, its balanced notes make it ideal for both men and women.",
        },
      ],
    },
  };

  const normalizedVariant =
    variant && typeof variant === "string"
      ? variant.trim().toLowerCase()
      : "sukhad_chandan";

  const matchedKey = Object.keys(faqData).find(
    (key) => key.toLowerCase() === normalizedVariant
  );

  const selectedVariant = faqData[matchedKey] || faqData.Sukhad_Chandan;

  const toggleIndex = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const scrollToForm = () => {
    const form = document.getElementById("contactForm");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    setOpenIndex(null);
  }, [variant]);

  return (
    <section id="FAQ-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Side - Image */}
          <div className="order-1 lg:order-1">
            <img
              key={variant}
              src={selectedVariant.image}
              alt={`${variant} perfume`}
              className="w-full h-full sm:h-96 lg:h-full object-contain transition-all duration-500 rounded-xl"
              onError={(e) => {
                e.target.src =
                  "/Blue Modern Perfume Promotion Instagram Post (6).png";
              }}
            />
          </div>

          {/* Right Side - FAQ */}
          <div className="order-2 lg:order-2 p-6 sm:p-10 lg:p-12">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="font-1 text-5xl md:text-6xl font-bold leading-tight mb-4 text-[#5B3A29]">
                Frequently Asked Questions
              </h2>
              <p className="font-7 text-gray-600 mb-8 text-base leading-relaxed">
                Discover everything you need to know about our {variant} perfume
                — from ingredients to usage and care.
              </p>

              <div className="space-y-4">
                {selectedVariant.faqs.map((faq, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div
                      key={i}
                      className="border border-[#f1e0c5] bg-[#f1e0c5] backdrop-blur-sm rounded-2xl transition-all duration-300 hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleIndex(i)}
                        className="w-full flex justify-between items-start text-left px-5 sm:px-6 py-4 focus:outline-none"
                      >
                        <span className="font-2 text-base sm:text-lg font-medium text-gray-900 font-serif">
                          {faq.q}
                        </span>
                        <svg
                          className={`w-5 h-5 transform transition-transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      <div
                        className={`transition-all bg-white/60 overflow-hidden px-5 sm:px-6 ${
                          isOpen
                            ? "max-h-40 pb-4 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="font-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <button
                  id="Form"
                  onClick={scrollToForm}
                  className="inline-block bg-gradient-to-r from-[#5B3A29] to-[#3d2820] hover:from-[#6B4A39] hover:to-[#4d3830] text-white text-sm font-semibold px-6 py-3 rounded-2xl shadow-md transition-all duration-300"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
