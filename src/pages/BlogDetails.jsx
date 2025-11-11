import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCalendar, FiArrowLeft, FiUser } from "react-icons/fi";

const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { state } = useLocation();
  const navigate = useNavigate();
  const blog = state?.blog;

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-700 mb-4 text-lg">Blog not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-2 bg-[#0A1721] text-white rounded-lg hover:bg-blue-900 transition-all duration-300"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F6F2] text-[#4B2E1B]">
      {/* Back Button */}
      <div className="px-6 sm:px-10 md:px-16 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#5B3A29] text-lg font-semibold hover:underline"
        >
          <FiArrowLeft className="mr-2" /> Back to Blogs
        </button>
      </div>

      {/* Centered Hero Image (not full width) */}
      <div className="w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[90%] md:w-[80%] lg:w-[70%] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      {/* Title, Date, and Author */}
      <div className="w-full px-6 sm:px-10 md:px-16 mt-12">
        <h1 className="font-1 text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-[#7A5B43] text-sm font-medium mb-10">
          <span className="flex items-center gap-2">
            <FiCalendar /> {blog.date}
          </span>
          <span className="flex items-center gap-2">
            <FiUser /> {blog.author || "Admin"}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full px-6 sm:px-10 md:px-16 pb-24 leading-relaxed"
      >
        <div
          className="prose prose-lg max-w-none prose-headings:text-[#5B3A29] prose-strong:text-[#4B2E1B] prose-a:text-[#5B3A29] prose-a:underline hover:prose-a:text-[#3D2417]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
