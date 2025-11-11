import React,{useEffect} from 'react';
import { Truck, MapPin, Clock, DollarSign, Package, Search, Bell, AlertCircle, Mail, Phone } from 'lucide-react';

export default function ShippingPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#fffcfa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center border-b-4 border-[#5B3A29] pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Shipping Policy</h1>
            <p className="text-gray-500 italic">Effective Date: 01/03/2024</p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Thank you for choosing Scentra for your spiritual and wellness needs. Our Shipping Policy outlines
            the details of how we handle shipping and delivery of our products. Please read this policy carefully to
            understand our procedures.
          </p>
        </div>

        {/* Shipping Destinations */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Shipping Destinations</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Scentra currently offers shipping within India. We are committed to providing reliable and efficient
            shipping services to our valued customers across the country.
          </p>
        </div>

        {/* Processing Time */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Clock className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Processing Time</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Orders are typically processed within 1-2 business days from the date of purchase. Our processing time may
            vary during peak seasons, promotions, or holidays.
          </p>
        </div>

        {/* Shipping Methods */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Truck className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Shipping Methods</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We partner with trusted logistics providers to ensure the safe and timely delivery of your orders. The shipping
            methods available will be displayed during the checkout process, allowing you to choose the option that best
            suits your needs.
          </p>
        </div>

        {/* Shipping Charges */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <DollarSign className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Shipping Charges</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Shipping charges are calculated based on the weight of the products, the shipping destination, and the selected
            shipping method. The total shipping cost will be displayed at the checkout before you complete your purchase.
          </p>
        </div>

        {/* Estimated Delivery Time */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Package className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Estimated Delivery Time</h2>
          </div>
          <div className="bg-[#faebd75c] border-l-4 border-[#5B3A29] p-6 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed mb-3">
              The estimated delivery time depends on your location and the selected shipping method. Typically, orders are
              delivered within <span className="font-semibold text-[#5B3A29]">5-10 business days</span> after processing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please note that delivery times may be affected by external factors, such as weather conditions or unforeseen
              logistics issues.
            </p>
          </div>
        </div>

        {/* Order Tracking */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Search className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Order Tracking</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once your order is shipped, you will receive a confirmation email containing a tracking number and a link to
            track your order's delivery status.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You can also track your order through the "Order History" section in your Scentra account.
          </p>
        </div>

        {/* Delivery Attempts */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery Attempts</h2>
          <p className="text-gray-700 leading-relaxed">
            Our shipping partners will make reasonable attempts to deliver your order to the provided shipping address.
            If you are unavailable at the time of delivery, the courier may leave a notification or contact you to
            reschedule the delivery.
          </p>
        </div>

        {/* Shipping Updates */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Bell className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Shipping Updates</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Scentra is committed to keeping you informed about the status of your order. We will provide regular
            updates via email, including:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Order confirmation</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Shipment notification</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Any relevant tracking information</span>
            </li>
          </ul>
        </div>

        {/* Shipping Restrictions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <AlertCircle className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Shipping Restrictions</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Please note that there are certain locations where we may be unable to deliver due to legal or logistical
            restrictions. If your location falls into such a category, we will notify you promptly, and a refund will
            be processed.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-[#5B3A29] via-[#3d2820] to-[#2a1a14]  rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
          <p className="mb-6 text-center text-indigo-100">
            If you have any questions or concerns regarding our Shipping Policy, please contact our customer support team:
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <Mail className="mr-3" size={24} />
              <div>
                <p className="text-sm text-indigo-200">Email</p>
                <a href="mailto:scent@storeview.in" className="font-semibold hover:underline">scent@storeview.in</a>
              </div>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <Phone className="mr-3" size={24} />
              <div>
                <p className="text-sm text-indigo-200">Phone</p>
                <a href="tel:+918850011652" className="font-semibold hover:underline">+91 8850011652</a>
              </div>
            </div>
          </div>
        </div>

        {/* Changes to Shipping Policy */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Shipping Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Scentra reserves the right to modify this Shipping Policy. Any changes will be effective immediately
            upon posting on the website.
          </p>
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-600 italic text-lg">
              Thank you for choosing Scentra. We strive to provide you with an exceptional shopping experience,
              including reliable and timely deliveries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}