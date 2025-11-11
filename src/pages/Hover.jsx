import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProductCard = ({ image, title }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-[#5B3A29]">
      <div className="relative p-4 group">
        <img
          src={image}
          alt={title}
          className="w-full h-full p-4 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-white text-3xl font-light tracking-wide text-center px-2">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default function ProductSlider() {
  const products = [
    {
      id: 1,
      title: "Sukhad Chandan",
      image: "/Original-sukhad-chandan-perfume.png",
    },
    {
      id: 2,
      title: "Oud",
      image: "/Oud_perfume.png",
    },
    {
      id: 3,
      title: "Ocean",
      image: "/Ocean_perfume.png",
    },
    {
      id: 4,
      title: "Religious",
      image: "/Religious_perfume.png",
    },
    {
      id: 5,
      title: "Scento",
      image: "/Scento_perfume.png",
    },
  ];

  useEffect(() => {
    const interval = setTimeout(() => {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");
      bullets.forEach((bullet) => {
        bullet.innerHTML = `
          <svg width="24" height="36" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="0" width="8" height="4" rx="1" fill="currentColor" opacity="0.8" />
            <rect x="7" y="4" width="6" height="3" fill="currentColor" opacity="0.9" />
            <path d="M4 7 L4 24 Q4 26 6 26 L14 26 Q16 26 16 24 L16 7 Z" fill="currentColor" />
          </svg>`;
      });
    }, 400);
    return () => clearTimeout(interval);
  }, []);

  return (
    <div id="product-section" className=" bg-gradient-to-br from-gray-50 to-[#D8A47F] py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 max-w-7xl">
          <h1 className="font-1 text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 text-[#5B3A29] text-center">
            Our Product
          </h1>
          <p className="font-7 text-base sm:text-lg text-gray-700 leading-relaxed text-center">
            Dive into the world of fragrances — each crafted to evoke emotion
            and elevate your senses.
          </p>
        </div>

        {/* Slider */}
        <div className="relative pb-24">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {products.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard image={p.image} title={p.title} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Custom Pagination Container */}
          <div className="custom-pagination absolute left-1/2  bottom-0 flex justify-center"></div>
        </div>
      </div>

      {/* Bullet Styling */}
      <style>{`
        .custom-pagination {
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          height: 40px;
        }

        .swiper-pagination-bullet {
          background: transparent !important;
          width: 32px !important;
          height: 40px !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #9ca3af;
          opacity: 0.9;
        }

        .swiper-pagination-bullet-active {
          color: #5B3A29 !important;
          transform: scale(1.2);
          opacity: 1;
        }

        .swiper-pagination-bullet:hover {
          color: #5B3A29;
          transform: scale(1.1);
        }

        @media (max-width: 640px) {
          .swiper-pagination-bullet {
            width: 26px !important;
            height: 34px !important;
          }
        }
      `}</style>
    </div>
  );
}

