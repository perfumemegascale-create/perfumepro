import React, { useState } from "react";

const BulkOrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const WEBSITE_SOURCE = "perfume"; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const data = {
      full_name: formData.fullName,
      mobile_no: formData.phone,
      product_name: formData.product,
      quantity: formData.quantity,
      enquiry_message: formData.message,
      source: WEBSITE_SOURCE, 
    };

    try {
      const response = await fetch(
        "http://10.27.1.106/perfume_backend/submit_bulk_orders.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          phone: "",
          product: "",
          quantity: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the server. Please try again later.");
    }
  };

  const products = [
    "Sukhad Chandan",
    "Woody Oudh",
    "Ocean",
    "Religious Perfume",
    "SCENTO",
  ];

  return (
    <div className="max-w-sm mx-auto my-12 p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-white to-[#f1f3f6] font-[Poppins] transition-all">
      <h2 className="text-center mb-6 text-[#5B3A29] text-2xl font-bold">
        📦 Bulk Order
      </h2>

      {submitted && (
        <p className="text-center text-green-600 font-medium mb-4">
          ✅ Your order has been submitted!
        </p>
      )}

      {error && (
        <p className="text-center text-red-600 font-medium mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl border border-gray-300 outline-none text-[15px] shadow-inner focus:ring-2 focus:ring-amber-800 transition-all"
        />

        {/* Phone Field */}
        <div className="flex gap-2">
          <select
            disabled
            className="w-[90px] rounded-xl border border-gray-300 text-[15px] px-3 py-3 bg-gray-100 cursor-not-allowed"
          >
            <option value="+91">🇮🇳 +91</option>
          </select>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 outline-none text-[15px] shadow-inner focus:ring-2 focus:ring-amber-800 transition-all"
          />
        </div>

        {/* Product Dropdown */}
        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
          className={`px-4 py-3 rounded-xl border border-gray-300 outline-none text-[15px] shadow-inner focus:ring-2 focus:ring-amber-800 transition-all ${
            formData.product === "" ? "text-gray-400" : "text-gray-800"
          }`}
        >
          <option value="" disabled hidden>
            Select Perfume
          </option>
          {products.map((prod, i) => (
            <option key={i} value={prod}>
              {prod}
            </option>
          ))}
        </select>

        {/* Quantity */}
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-xl border border-gray-300 outline-none text-[15px] shadow-inner focus:ring-2 focus:ring-amber-800 transition-all"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Enquiry Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="px-4 py-3 rounded-xl border border-gray-300 outline-none text-[15px] shadow-inner focus:ring-2 focus:ring-amber-800 transition-all resize-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="py-3 rounded-xl bg-[#5B3A29] text-white text-[16px] font-semibold hover:scale-105 transition-transform"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BulkOrderForm;
