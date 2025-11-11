import React, { useEffect } from "react";
import { FileText, ShoppingCart, AlertTriangle, DollarSign, Package, CreditCard, Link2, MessageSquare, User, Shield, Scale, Mail, MapPin, Phone } from 'lucide-react';

export default function TermsAndConditions() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#fffcfa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center border-b-4 border-[#5B3A29] pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Terms and Conditions</h1>
            <p className="text-gray-500 italic">Please read these terms carefully before using our services</p>
          </div>

          <div className="bg-[#faebd75c] border-l-4 border-[#5B3A29] p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">OVERVIEW</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Bhagvat Prasadam! These Terms and Conditions govern your use of our website and services.
              By accessing or using our website, you agree to comply with these terms. Please read them carefully before proceeding.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <ShoppingCart className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 1 - ONLINE STORE TERMS</h2>
          </div>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">1.1</span> By agreeing to these Terms, you confirm that you are at least the age of majority in your state or province of residence.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">1.2</span> You may not use our products for any illegal or unauthorized purpose, nor violate any laws in your jurisdiction (including but not limited to copyright laws).
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">1.3</span> You must not transmit any worms or viruses or any code of a destructive nature.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">1.4</span> A breach or violation of any of the Terms will result in an immediate termination of your Services.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <FileText className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 2 - GENERAL CONDITIONS</h2>
          </div>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">2.1</span> We reserve the right to refuse service to anyone for any reason at any time.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">2.2</span> You understand that your content (not including credit card information) may be transferred unencrypted and involve (a) transmissions over various networks and (b) changes to conform and adapt to the technical requirements of connecting networks or devices.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">2.3</span> You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service without express written permission by us.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <AlertTriangle className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
          </div>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">3.1</span> We are not responsible if the information made available on this site is not accurate, complete, or current.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">3.2</span> The material on this site is provided for general information only and should not be relied upon as the sole basis for making decisions without consulting primary, more accurate, or more timely sources of information.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <DollarSign className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h2>
          </div>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">4.1</span> Prices for our products are subject to change without notice.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">4.2</span> We reserve the right to modify or discontinue the Service (or any part or content thereof) without notice at any time.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">4.3</span> We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service.
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Package className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 5 - PRODUCTS OR SERVICES</h2>
          </div>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">5.1</span> Certain products or services may be available exclusively online through the website.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">5.2</span> We have made every effort to display as accurately as possible the colors and images of our products that appear at the store.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">5.3</span> We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region, or jurisdiction.
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <CreditCard className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</h2>
          </div>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">6.1</span> We reserve the right to refuse any order you place with us.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">6.2</span> You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">6.3</span> For more detail, please review our Returns Policy.
            </li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">SECTION 7 - OPTIONAL TOOLS</h2>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">7.1</span> We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">7.2</span> You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations, or conditions of any kind.
            </li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Link2 className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 8 - THIRD-PARTY LINKS</h2>
          </div>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">8.1</span> Certain content, products, and services available via our Service may include materials from third-parties.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">8.2</span> Third-party links on this site may direct you to third-party websites that are not affiliated with us.
            </li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <MessageSquare className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h2>
          </div>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">9.1</span> If, at our request, you send certain specific submissions (for example, contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise, you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate, and otherwise use in any medium any comments that you forward to us.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">9.2</span> We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.
            </li>
          </ul>
        </div>

        {/* Section 10 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <User className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 10 - PERSONAL INFORMATION</h2>
          </div>
          <p className="text-gray-700 ml-6">
            <span className="font-semibold text-[#5B3A29]">10.1</span> Your submission of personal information through the store is governed by our Privacy Policy.
          </p>
        </div>

        {/* Section 11 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</h2>
          <p className="text-gray-700 ml-6">
            <span className="font-semibold text-[#5B3A29]">11.1</span> Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies, or omissions.
          </p>
        </div>

        {/* Section 12 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Shield className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 12 - PROHIBITED USES</h2>
          </div>
          <p className="text-gray-700 ml-6">
            <span className="font-semibold text-[#5B3A29]">12.1</span> In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content for any unlawful purpose; to violate any laws; to infringe on intellectual property rights; to harass, abuse, or discriminate against others; or to submit false information.
          </p>
        </div>

        {/* Section 13 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">13.1</span> We do not guarantee that your use of our service will be uninterrupted, timely, secure, or error-free.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">13.2</span> You expressly agree that your use of the service is at your sole risk. All products and services are provided "as is" and "as available" without warranties.
            </li>
            <li className="text-gray-700">
              <span className="font-semibold text-[#5B3A29]">13.3</span> In no case shall Bhagvat Prasadam or its affiliates be liable for any damages, including lost profits or savings, arising from your use of the Service.
            </li>
          </ul>
        </div>

        {/* Section 14 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">SECTION 14 - INDEMNIFICATION</h2>
          <p className="text-gray-700 ml-6">
            <span className="font-semibold text-[#5B3A29]">14.1</span> You agree to indemnify and hold Bhagvat Prasadam harmless from any claim arising from your breach of these Terms or violation of any law.
          </p>
        </div>

        {/* Section 15 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">SECTION 15 - SEVERABILITY</h2>
          <p className="text-gray-700 ml-6">
            <span className="font-semibold text-[#5B3A29]">15.1</span> If any provision of these Terms is deemed unlawful or unenforceable, it will be enforced to the fullest extent permitted, and the remainder of the Terms will remain in effect.
          </p>
        </div>

        {/* Section 16 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">SECTION 16 - TERMINATION</h2>
          <p className="text-gray-700 ml-6">
            <span className="font-semibold text-[#5B3A29]">16.1</span> These Terms are effective unless and until terminated by you or us. We may terminate the agreement at any time for any breach or violation of these Terms.
          </p>
        </div>

        {/* Section 17 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">SECTION 17 - ENTIRE AGREEMENT</h2>
          <p className="text-gray-700 ml-6">
            <span className="font-semibold text-[#5B3A29]">17.1</span> These Terms constitute the entire agreement between you and us and supersede any prior agreements.
          </p>
        </div>

        {/* Section 18 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Scale className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">SECTION 18 - GOVERNING LAW</h2>
          </div>
          <p className="text-gray-700 ml-6">
            <span className="font-semibold text-[#5B3A29]">18.1</span> These Terms are governed by the laws of India.
          </p>
        </div>

        {/* Section 19 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">SECTION 19 - CHANGES TO TERMS OF SERVICE</h2>
          <p className="text-gray-700 ml-6">
            <span className="font-semibold text-[#5B3A29]">19.1</span> We reserve the right to update or modify these Terms at any time. It is your responsibility to check this page for updates.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-[#5B3A29] via-[#3d2820] to-[#2a1a14] rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">SECTION 20 - CONTACT INFORMATION</h2>
          <p className="mb-6 text-center text-indigo-100">
            Questions about the Terms of Service should be sent to us at:
          </p>
          <div className="space-y-4">
            <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <Mail className="mr-3 mt-1" size={24} />
              <div>
                <p className="text-sm text-indigo-200">Email</p>
                <a href="mailto:scent@storeview.in" className="font-semibold hover:underline block">scent@storeview.in</a>
              </div>
            </div>
            <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <MapPin className="mr-3 mt-1" size={24} />
              <div>
                <p className="text-sm text-indigo-200">Postal Address</p>
                <p className="font-semibold">412, New Escon Plaza, Amroli,</p>
                <p className="font-semibold">Surat, Gujarat 394107</p>
              </div>
            </div>
            <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <Phone className="mr-3 mt-1" size={24} />
              <div>
                <p className="text-sm text-indigo-200">Contact No</p>
                <a href="tel:+918850011652" className="font-semibold hover:underline">+91 8850011652</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}