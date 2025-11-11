import React, { useEffect } from "react";
import { FiUser, FiCalendar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Original Sukhad Chandan – The Eternal Fragrance of Serenity & Devotion",
      author: "Scentra",
      image: "/1_sukhad_chandan.webp",
      date: "November 11, 2025",
      description:
        "Experience the sacred calm of sandalwood with Scentra Original Sukhad Chandan — a divine blend of purity, devotion, and timeless luxury.",
      content: `
    <p><strong>Experience the Purity of Sandalwood in Its Most Authentic Form</strong></p>
    <p>From the heart of Indian tradition comes <strong>Original Sukhad Chandan by Scentra</strong> — a perfume that carries the sacred calm of sandalwood, the essence of devotion, and the warmth of timeless luxury. This fragrance captures the soul of ancient temples and the serene aura of meditation, bringing divine peace to your modern life.</p>
    <p><em>Aroma that calms the mind. Fragrance that uplifts the soul.</em></p>

    <h3>A Sacred Blend of Warmth and Purity</h3>
    <p>Original Sukhad Chandan is not just a scent — it’s a spiritual experience. With its <strong>deep, creamy, and woody aroma</strong>, it instantly transforms your space into a haven of tranquility. Whether for <strong>daily pooja, meditation, satsang, or personal wear</strong>, this perfume becomes your invisible offering of devotion.</p>

    <h3>Why Original Sukhad Chandan Stands Apart</h3>
    <ul>
      <li><strong>🌳 Authentic Sandalwood Essence</strong> – Crafted with real sandalwood notes that evoke the serenity of ancient temples.</li>
      <li><strong>🌿 Alcohol-Free & Gentle on Skin</strong> – A pure and devotion-friendly formulation — perfect for pooja and daily bhakti.</li>
      <li><strong>🕉️ Spiritually Grounding Aroma</strong> – Calms the senses, purifies energy, and helps deepen focus in meditation.</li>
      <li><strong>💫 Timeless Elegance in Every Drop</strong> – Beautifully balanced for both ritual and everyday wear, leaving a divine impression that lasts.</li>
    </ul>

    <h3>Perfect For:</h3>
    <ul>
      <li>Daily <strong>pooja</strong> and <strong>murti shringar</strong></li>
      <li><strong>Satsang</strong>, <strong>bhajan</strong>, and <strong>temple visits</strong></li>
      <li><strong>Meditation</strong> or peaceful reflection</li>
      <li>Gifting to <strong>elders</strong>, <strong>gurus</strong>, or <strong>devotees</strong></li>
      <li>Everyday wear for those who cherish spiritual fragrance</li>
    </ul>

    <p>Let <strong>Original Sukhad Chandan</strong> be your fragrance of devotion — calm, pure, and eternal.</p>

    <h3>How to Use:</h3>
    <ul>
      <li>Spray gently on <strong>pulse points</strong> – wrists, neck, or near the tilak area.</li>
      <li>Apply on <strong>sacred cloth</strong>, <strong>pooja dupatta</strong>, or <strong>thali</strong> for divine aroma.</li>
      <li>Use before <strong>spiritual activities</strong> to create an aura of peace and purity.</li>
    </ul>

    <h3>A Fragrance Rooted in Faith</h3>
    <p>At <strong>Scentra</strong>, we believe true luxury is purity. <strong>Original Sukhad Chandan</strong> is inspired by the sacred rituals of Bharat, where sandalwood signifies peace, humility, and devotion. Every note in this perfume reflects that heritage — turning your moments of worship into experiences of serenity.</p>

    <h3>Why Choose Scentra?</h3>
    <p><strong>Scentra</strong> stands for authentic fragrances crafted with heart, heritage, and harmony. Our perfumes blend traditional essence with modern refinement, designed for those who value both spiritual purity and luxurious craftsmanship.</p>
    <p>With <strong>Original Sukhad Chandan</strong>, we invite you to experience devotion through fragrance — where every breath connects you to calmness, clarity, and divine grace.</p>
  `,
    },
    {
      id: 2,
      title: "Woody Oudh – The Royal Essence of Strength & Sophistication",
      author: "Scentra",
      image: "/4_oudh.webp",
      date: "November 11, 2025",
      description:
        "Step into the world of royal elegance with Scentra Woody Oudh — a majestic blend of depth, strength, and timeless luxury.",
      content: `
    <p><strong>Immerse Yourself in the Majesty of True Oudh</strong></p>
    <p><strong>Woody Oudh by Scentra</strong> is a tribute to timeless sophistication and strength — a fragrance that defines power, grace, and royal allure. Inspired by the noble tradition of oud, this scent weaves the richness of rare agarwood with warm woody tones to create a deep, lasting impression.</p>
    <p><em>A fragrance that commands attention — rich, bold, and unforgettable.</em></p>

    <h3>The Soul of Luxury in Every Note</h3>
    <p>Every drop of <strong>Woody Oudh</strong> captures the spirit of ancient royalty. The fragrance opens with bold woody accords, flows into spicy warmth, and settles into the earthy sweetness of pure agarwood. Its enchanting aroma evokes confidence, mystery, and timeless class — perfect for those who lead with presence.</p>

    <h3>Why Woody Oudh Stands Apart</h3>
    <ul>
      <li><strong>🌲 Authentic Oudh Essence</strong> – Crafted from premium-quality agarwood for a deep, natural, and royal aroma.</li>
      <li><strong>🔥 Long-Lasting & Captivating</strong> – A perfume that lingers elegantly, leaving a sophisticated trail wherever you go.</li>
      <li><strong>💎 Luxurious Woody Warmth</strong> – Perfectly balanced with earthy, spicy, and musky undertones.</li>
      <li><strong>🌙 Versatile for Every Occasion</strong> – Ideal for evening wear, festive gatherings, or intimate moments of reflection.</li>
    </ul>

    <h3>Perfect For:</h3>
    <ul>
      <li><strong>Festive celebrations</strong> and <strong>special occasions</strong></li>
      <li><strong>Evening gatherings</strong> and <strong>royal events</strong></li>
      <li>Those who love <strong>deep, bold, and mature fragrances</strong></li>
      <li><strong>Gifting</strong> to men and women of taste and elegance</li>
      <li>Everyday wear for those who embody confidence and class</li>
    </ul>

    <p>Let <strong>Woody Oudh</strong> envelop you in its majestic warmth — where tradition meets modern sophistication.</p>

    <h3>How to Use:</h3>
    <ul>
      <li>Apply on <strong>pulse points</strong> – wrists, neck, and collar area for an all-day royal scent.</li>
      <li>Spray lightly on <strong>clothing</strong> for a deeper projection that lasts for hours.</li>
      <li>Use before <strong>evening outings</strong> or <strong>celebrations</strong> to leave a luxurious impression.</li>
    </ul>

    <h3>A Fragrance Rooted in Heritage</h3>
    <p><strong>Woody Oudh</strong> celebrates the regal art of perfumery that has graced kings and mystics for centuries. With every note, it tells a story of strength, grace, and devotion — blending ancient richness with contemporary charm.</p>

    <h3>Why Choose Scentra?</h3>
    <p><strong>Scentra</strong> redefines luxury by infusing tradition with refinement. Each perfume is carefully crafted to resonate with soul and style — offering an experience that is both memorable and meaningful.</p>
    <p>With <strong>Woody Oudh</strong>, discover the fragrance of royalty — deep, powerful, and eternally elegant.</p>
  `,
    },

    {
      id: 3,
      title: "Religious Perfume – The Fragrance of Faith, Peace & Divine Connection",
      author: "Scentra",
      image: "/3_religious.webp",
      date: "November 11, 2025",
      description:
        "Embrace the divine essence of spirituality with Scentra Religious Perfume — a sacred fragrance that connects the soul to peace and devotion.",
      content: `
    <p><strong>Where Fragrance Meets Faith</strong></p>
    <p><strong>Religious Perfume by Scentra</strong> is crafted to bring the serenity of devotion into every breath. Inspired by sacred rituals, temple purity, and spiritual calmness, this perfume is a gentle reminder of divine presence and inner peace. It transforms your daily prayers, meditation, and moments of reflection into sacred experiences filled with aroma and tranquility.</p>
    <p><em>A scent of purity that uplifts the spirit and calms the soul.</em></p>

    <h3>A Divine Blend of Spiritual Serenity</h3>
    <p><strong>Religious Perfume</strong> combines the soft essence of floral devotion, the purity of sandalwood, and the soothing calm of traditional temple aromas. Every note carries peace, respect, and sanctity — making it ideal for pooja, satsang, or quiet meditation. It’s not just a fragrance; it’s a spiritual connection in a bottle.</p>

    <h3>Why Religious Perfume Stands Apart</h3>
    <ul>
      <li><strong>🕉️ Temple-Inspired Aroma</strong> – Evokes the sacred scent of incense, sandalwood, and divine rituals.</li>
      <li><strong>🌿 Alcohol-Free & Pure</strong> – Crafted gently for use during pooja, meditation, and devotional activities.</li>
      <li><strong>💫 Calming & Centering</strong> – Helps balance the mind, soothe the heart, and elevate spiritual focus.</li>
      <li><strong>🪔 Suitable for All Ages</strong> – Perfect for those who seek peace and positivity in their daily life.</li>
    </ul>

    <h3>Perfect For:</h3>
    <ul>
      <li><strong>Daily pooja</strong> and <strong>murti shringar</strong></li>
      <li><strong>Temple visits</strong> and <strong>bhajan-satsang</strong></li>
      <li><strong>Meditation</strong>, <strong>yoga</strong>, or silent reflection</li>
      <li><strong>Spiritual gifting</strong> for elders, saints, or devotees</li>
      <li>Everyday wear for those who cherish peace and faith</li>
    </ul>

    <p>Let <strong>Religious Perfume</strong> fill your life with the fragrance of devotion and purity — every note a prayer, every breath a blessing.</p>

    <h3>How to Use:</h3>
    <ul>
      <li>Spray gently on <strong>pulse points</strong> such as wrists, neck, or near the heart.</li>
      <li>Use on <strong>pooja cloths</strong>, <strong>dupattas</strong>, or <strong>temple spaces</strong> for a divine aura.</li>
      <li>Apply before <strong>spiritual practices</strong> to create a peaceful environment.</li>
    </ul>

    <h3>A Fragrance Rooted in Devotion</h3>
    <p><strong>Religious Perfume</strong> is inspired by the timeless heritage of Indian spirituality — where scent and prayer unite the soul with the divine. It brings the same purity, faith, and calmness that once filled ancient temples and sacred rituals.</p>

    <h3>Why Choose Scentra?</h3>
    <p><strong>Scentra</strong> celebrates the harmony of tradition and elegance. Each fragrance is crafted to reflect authenticity, peace, and timeless beauty — connecting modern souls with ancient values through the art of scent.</p>
    <p>With <strong>Religious Perfume</strong>, awaken the divine within — and let every breath remind you of serenity, faith, and light.</p>
  `,
    },

  ];

  return (
    <section id="Blog-section" className="py-12 px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="font-1 text-3xl md:text-4xl font-bold mb-10 text-[#5B3A29] text-center md:text-left">
          Read Our Recent Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-64">
                <div>
                  <div className="flex items-center justify-between text-[#5B3A29] mb-2 text-sm">
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FiUser className="mr-1 text-[#5B3A29]" />
                      <span className="text-[#5B3A29]">{blog.author}</span>
                    </div>
                  </div>

                  <h3 className="font-1 text-lg md:text-xl font-semibold mb-3 text-[#5B3A29] line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="font-2 text-[#5B3A29] mb-4 text-sm md:text-base line-clamp-3">
                    {blog.description}
                  </p>
                </div>

                <Link
                  to={`/blog/${blog.id}`}
                  state={{ blog }}
                  className="flex items-center text-[#5B3A29] font-medium hover:text-[#5B3A29] transition-colors"
                >
                  See Full Article <FiArrowRight className="ml-2 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
