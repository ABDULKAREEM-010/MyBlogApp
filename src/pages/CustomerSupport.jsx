import React from "react";
import { Headset, Clock, HelpCircle } from "lucide-react"; // icons

function CustomerSupport() {
  return (
    <div className="min-h-[75vh] bg-indigo-100 from-gray-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Headset className="w-10 h-10 text-amber-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">
            Customer Support
          </h1>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Our dedicated support team is available <span className="font-semibold">24/7</span> 
          to assist you with technical issues, billing queries, and general app guidance.  
          We’re here to ensure your experience is smooth and hassle-free.
        </p>

        {/* Support Options */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <Clock className="w-10 h-10 text-amber-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              24/7 Availability
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              No matter the time zone, our team is always available to provide
              support and resolve issues quickly.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
            <HelpCircle className="w-10 h-10 text-amber-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Guidance & Help
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Whether it’s troubleshooting, billing, or general app usage, our
              experts will guide you step by step.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-gray-500">
          Need immediate help? Reach us via {""}
          <span className="font-medium text-amber-600">live chat</span> or{" "}
          <span className="font-medium text-amber-600">support email</span>.
        </p>
      </div>
    </div>
  );
}

export default CustomerSupport;
