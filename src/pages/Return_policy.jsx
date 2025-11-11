import React,{useEffect} from 'react';
import { Package, Clock, Truck, CreditCard, AlertCircle, Mail, Phone } from 'lucide-react';

export default function ReturnPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#fffcfa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center border-b-4 border-[#5B3A29] pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Return Policy</h1>
            <p className="text-gray-500 italic">Effective Date: 01/02/2024</p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            At Scentro, we value our customers and aim to ensure your satisfaction with every purchase.
            If for any reason you are not completely satisfied with your purchase, we offer a straightforward return
            policy to make the process as simple as possible. Please carefully review the following guidelines regarding returns.
          </p>
        </div>

        {/* Eligibility Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Package className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Eligibility for Returns</h2>
          </div>
          <p className="text-gray-600 mb-4">To qualify for a return, please ensure the following conditions are met:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>The item must be in its original packaging.</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>The item must be unused and in the same condition as received.</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>You must initiate the return process within 1 day from the date of delivery.</span>
            </li>
          </ul>
        </div>

        {/* Non-Returnable Items */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <AlertCircle className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Non-Returnable Items</h2>
          </div>
          <p className="text-gray-600 mb-4">Certain items are not eligible for return. These include:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Items marked as final sale or clearance.</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Customized or personalized items.</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Items damaged due to misuse, accidents, or neglect.</span>
            </li>
          </ul>
        </div>

        {/* Return Process */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Clock className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Return Process</h2>
          </div>
          <p className="text-gray-600 mb-4">To start a return, please follow these steps:</p>
          <div className="bg-[#faebd75c] border-l-4 border-[#5B3A29] p-6 rounded-r-lg">
            <ol className="space-y-4">
              <li className="text-gray-700">
                <span className="font-semibold text-[#5B3A29]">Step 1:</span> Contact our customer support team at
                <a href="mailto:scent@storeview.in" className="text-[#5B3A29] hover:underline ml-1">scent@storeview.in</a> to inform us of your intention to return.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-[#5B3A29]">Step 2:</span> Provide your order number, details of the item(s) you wish to return, and the reason for the return.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-[#5B3A29]">Step 3:</span> Our customer support team will guide you through the return process and issue a return authorization if your return is eligible.
              </li>
            </ol>
          </div>
        </div>

        {/* Return Shipping */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Truck className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Return Shipping</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Customers are responsible for the cost of return shipping unless the return is due to an error on our part
            or a defective product. For your protection, we recommend using a trackable shipping service when returning items.
          </p>
        </div>

        {/* Refund Process */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <CreditCard className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Refund Process</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Once we receive the returned item and confirm its eligibility, we will process your refund.
            Refunds will be issued to the original payment method used for the purchase.
          </p>
          <div className="bg-[#faebd75c] border-l-4 border-[#5B3A29] p-4 rounded-r-lg">
            <p className="text-gray-700 font-semibold">Refund Timeframe:</p>
            <p className="text-gray-600">
              Please allow up to 7 business days for the refund to be processed and reflected in your account.
              The exact timeframe may vary depending on your payment provider.
            </p>
          </div>
        </div>

        {/* Damaged or Defective Items */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Damaged or Defective Items</h2>
          <p className="text-gray-700 leading-relaxed">
            If you receive a damaged or defective item, please contact our customer support team immediately for assistance.
            We will arrange for a replacement or issue a refund, depending on the circumstances.
          </p>
        </div>

        {/* Exchange Policy */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Exchange Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            Currently, Scentro does not offer exchanges. If you require a different item, color, or size,
            please initiate a return for the unwanted item and place a new order for the desired item.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-[#5B3A29] via-[#3d2820] to-[#2a1a14]  rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
          <p className="mb-6 text-center text-indigo-100">
            If you have any questions or concerns regarding our Return Policy, please do not hesitate to contact our customer support team:
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

        {/* Changes to Policy */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Return Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Scentra reserves the right to update or modify this Return Policy as needed.
            Any changes will be effective immediately upon posting on our website.
          </p>
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-600 italic">
              Thank you for choosing Scentra. We appreciate your business and strive to provide a hassle-free shopping experience for all our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}