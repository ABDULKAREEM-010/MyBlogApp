import React from "react";
import { HelpCircle, Mail } from "lucide-react"; // icons

function Help() {
  return (
    <div className="min-h-[75vh] bg-indigo-100 from-gray-50 to-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <HelpCircle className="w-10 h-10 text-amber-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">Help Center</h1>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Stuck somewhere? Don’t worry — we’re here to help!  
          Reach out to our support team and your issue will be resolved as quickly as possible.
        </p>

        {/* Contact Card */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
          <Mail className="w-10 h-10 text-amber-600 mb-3" />
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h2>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kareemmohammedabdul616@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-base"
          >
            kareemmohammedabdul616@gmail.com
          </a>
          <p className="text-sm text-gray-600 mt-2">
            We usually respond within <span className="font-medium">6 hours</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;
