import React from "react";

// Image Database
const bannerDatabase = {
  Sukhad_Chandan: {
    left: "/Benefits Chandan.webp",
    right: "/Aura Chandan.webp",
  },
  Oud: {
    left: "/Benifit Oudh.webp",
    right: "/Aura Woodyoudh.webp",
  },
  Ocean: {
    left: "/Benifit - ocean.webp",
    right: "/Aura Ocean.webp",
  },
  Religous: {
    left: "/Benifit Religious.webp",
    right: "/aura religious.webp",
  },
  Scento: {
    left: "/Benifit  Scento.webp",
    right: "/Aura Scento.webp",
  },
};

const TwoPostImages = ({ variant = "Chandan" }) => {
  // Find matching variant (case-insensitive fallback)
  const current = bannerDatabase[variant] || bannerDatabase["Chandan"];

  return (
    <section className="flex flex-col md:flex-row w-full h-full">
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src={current.left}
          alt={`${variant} Left`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src={current.right}
          alt={`${variant} Right`}
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default TwoPostImages;
