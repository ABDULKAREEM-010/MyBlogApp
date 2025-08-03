import React from "react";
import { Scale, FileText } from "lucide-react"; // optional icons

function Licensing() {
  return (
    <div className="min-h-screen bg-indigo-100 from-gray-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Scale className="w-10 h-10 text-amber-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">Licensing</h1>
        </div>

        <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
          All content and code available in this{" "}
          <span className="font-semibold">Blog App</span> are licensed under the
          following terms:
        </p>

        {/* Licensing Terms */}
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex items-start gap-4">
            <FileText className="w-7 h-7 text-amber-600 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                User-Generated Content
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Content created by users (blogs, images, comments) remains the
                property of its creator. You retain full rights over what you
                publish.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex items-start gap-4">
            <FileText className="w-7 h-7 text-amber-600 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Platform Code & Design
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The source code, design, and overall structure of the platform
                are protected by copyright laws and may not be copied or reused
                without permission.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex items-start gap-4">
            <FileText className="w-7 h-7 text-amber-600 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Redistribution & Resale
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Redistribution, resale, or commercial use of the platform’s
                code, design, or assets without written consent is strictly
                prohibited.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-gray-500 text-center">
          Last updated: July 2025
        </p>
      </div>
    </div>
  );
}

export default Licensing;
