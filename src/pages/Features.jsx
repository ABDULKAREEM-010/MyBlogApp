import React from "react";
import { PenTool, MessageCircle, LayoutDashboard, Smartphone, Search } from "lucide-react"; // icons

function Features() {
  return (
    <div className="min-h-[75vh] bg-indigo-100 from-gray-50 to-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Features
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Our Blog App provides an easy and engaging platform to{" "}
          <span className="font-semibold">create, share, and explore content</span>.  
          Designed for writers, readers, and communities to connect seamlessly.
        </p>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <PenTool className="w-10 h-10 text-amber-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Create & Publish
            </h2>
            <p className="text-gray-600 text-sm">
              Write and publish blog posts instantly with our simple editor.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <MessageCircle className="w-10 h-10 text-amber-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Engage with Readers
            </h2>
            <p className="text-gray-600 text-sm">
              Connect through comments and likes to build stronger communities.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <LayoutDashboard className="w-10 h-10 text-amber-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Personalized Dashboard
            </h2>
            <p className="text-gray-600 text-sm">
              Manage all your posts and activities from a clean dashboard.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <Smartphone className="w-10 h-10 text-amber-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Responsive Design
            </h2>
            <p className="text-gray-600 text-sm">
              Enjoy a seamless experience across desktop, tablet, and mobile.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
            <Search className="w-10 h-10 text-amber-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              SEO-Friendly
            </h2>
            <p className="text-gray-600 text-sm">
              Optimized structure ensures better reach and visibility on search engines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
