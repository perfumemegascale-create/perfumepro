import React,{useEffect} from 'react';
import { Shield, User, Database, Lock, FileText, Eye, Mail, Scale } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#fffcfa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center border-b-4 border-[#5B3A29] pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
            <p className="text-gray-500 italic">Effective Date: 01/03/2024</p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Welcome to Scentro, your online destination for divine offerings and spiritual fulfillment.
            This Privacy Policy outlines how we handle your personal information on our website,
            <a href="https://Scentro.com/" className="text-[#5B3A29] hover:underline mx-1">https://Scentro.com/</a>.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are committed to safeguarding your privacy and ensuring that your information is handled responsibly
            and in compliance with applicable laws.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Database className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">A. Personal Information:</h3>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>Your name</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>Contact details (email address, phone number)</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>Billing and shipping addresses</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>Payment information</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">B. Transaction Details:</h3>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>Order history</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>Payment records</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>Invoices and receipts</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">C. Device and Usage Information:</h3>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>IP address</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>Browser type</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>Operating system</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#5B3A29] mr-2">•</span>
                <span>Site interactions (collected through cookies and similar technologies)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How We Collect Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <FileText className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">How We Collect Information</h2>
          </div>
          <p className="text-gray-600 mb-4">We collect information when you:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Create an account</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Make a purchase</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Contact customer support</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Interact with the website</span>
            </li>
          </ul>
        </div>

        {/* Purpose of Collection */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Eye className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Purpose of Collection</h2>
          </div>
          <p className="text-gray-600 mb-4">We collect information for:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Efficient order processing and fulfillment</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Providing excellent customer support</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Communicating important updates and promotions</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Analyzing site usage to optimize user experience</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Complying with legal obligations</span>
            </li>
          </ul>
        </div>

        {/* Sharing of Personal Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Shield className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Sharing of Personal Information</h2>
          </div>
          <p className="text-gray-600 mb-4">We may share Personal Information with:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Service providers (e.g., payment processors, shipping companies) to facilitate order fulfillment</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Legal authorities when required by applicable laws</span>
            </li>
          </ul>
        </div>

        {/* Security Measures */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Lock className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Security Measures</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security measures to protect your Personal Information from unauthorized
            access, disclosure, alteration, and destruction.
          </p>
        </div>

        {/* Retention of Personal Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Retention of Personal Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain your information for as long as necessary to fulfill the purposes outlined in this policy,
            unless a longer retention period is required or permitted by law.
          </p>
        </div>

        {/* User Rights */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <User className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">User Rights</h2>
          </div>
          <p className="text-gray-600 mb-4">As a user, you have the right to:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Access your Personal Information</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Correct inaccuracies in your information</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Withdraw consent for certain data processing</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Request the erasure of your Personal Information</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Object to the processing of your information</span>
            </li>
            <li className="text-gray-700 flex items-start">
              <span className="text-[#5B3A29] mr-2">•</span>
              <span>Obtain the portability of your data to another service</span>
            </li>
          </ul>
        </div>

        {/* Consent */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Consent</h2>
          <p className="text-gray-700 leading-relaxed">
            By using <a href="https://Scentro.com/" className="text-[#5B3A29] hover:underline">https://Scentro.com/</a>,
            you consent to the collection and use of your Personal Information as outlined in this Privacy Policy.
          </p>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify this Privacy Policy. Any changes will be effective immediately upon
            posting on the website.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-[#5B3A29] via-[#3d2820] to-[#2a1a14] rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
          <p className="mb-6 text-center text-indigo-100">
            For inquiries or concerns regarding this Privacy Policy, please contact us at:
          </p>
          <div className="flex justify-center items-center">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <Mail className="mr-3" size={24} />
              <div>
                <p className="text-sm text-indigo-200">Email</p>
                <a href="mailto:scent@storeview.in" className="font-semibold hover:underline">scent@storeview.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <Scale className="text-[#5B3A29] mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Governing Law</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy is governed by and construed in accordance with the laws of Rajpipla, Narmada, Gujarat.
            Any disputes arising from or in connection with this Privacy Policy shall be subject to the exclusive
            jurisdiction of the courts in Rajpipla, Narmada, Gujarat.
          </p>
        </div>

        {/* Footer Message */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <p className="text-gray-600 italic text-lg">
              Thank you for entrusting Scentro with your information. Your privacy is important to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}