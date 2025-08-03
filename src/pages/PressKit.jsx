import React from "react";
import { Image as ImageIcon, FileText, Download } from "lucide-react"; // optional icons

function PressKit() {
  return (
    <div className="min-h-screen bg-indigo-100 from-gray-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <ImageIcon className="w-10 h-10 text-amber-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">Press Kit</h1>
        </div>

        <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
          Download our official logos, screenshots, and resources for{" "}
          <span className="font-semibold">media coverage</span>.
        </p>

        {/* Resource List */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-start">
            <FileText className="w-8 h-8 text-amber-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              App Screenshots
            </h2>
            <p className="text-gray-600 mb-4">
              High-resolution images of our app for use in media and publications.
            </p>
            <button className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-start">
            <ImageIcon className="w-8 h-8 text-amber-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Logos & Icons
            </h2>
            <p className="text-gray-600 mb-4">
              Official brand assets including logos, icons, and color palette.
            </p>
            <button className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-start sm:col-span-2">
            <FileText className="w-8 h-8 text-amber-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Company Info
            </h2>
            <p className="text-gray-600 mb-4">
              Get our company background, mission statement, and product details
              in a handy PDF.
            </p>
            <button className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-sm text-gray-500 text-center">
          Need something else? Contact our{" "}
          <span className="font-semibold">media team</span>.
        </p>
      </div>
    </div>
  );
}

export default PressKit;
