import React from "react";
import { Shield, User, Lock, Share2, Cookie, RefreshCw } from "lucide-react";

function PrivacyPolicy() {
  return (
    <div className="min-h-[75vh] bg-indigo-100 from-gray-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-10 h-10 text-amber-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information when you use our Blog App.
        </p>

        {/* Section Boxes */}
        <div className="space-y-8">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <User className="w-5 h-5 text-amber-600" /> 1. Information We Collect
            </h2>
            <p className="text-gray-700">
              When you register or use the app, we may collect information such
              as your name, email address, and any content you post (e.g., blog
              posts, images).
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <Shield className="w-5 h-5 text-amber-600" /> 2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Manage your account and profile</li>
              <li>Display your posts and activity</li>
              <li>Improve our platform and user experience</li>
              <li>Send important updates or notifications</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <Lock className="w-5 h-5 text-amber-600" /> 3. Data Security
            </h2>
            <p className="text-gray-700">
              We take reasonable measures to protect your personal data.
              However, no online platform can guarantee complete security. Please
              keep your login information secure.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <Share2 className="w-5 h-5 text-amber-600" /> 4. Sharing of Information
            </h2>
            <p className="text-gray-700">
              We do not sell or share your personal data with third parties.
              Your content is only visible to other users within the app as
              intended.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <Cookie className="w-5 h-5 text-amber-600" /> 5. Cookies and Analytics
            </h2>
            <p className="text-gray-700">
              We may use cookies and basic analytics to understand how users
              interact with the app and improve usability.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <User className="w-5 h-5 text-amber-600" /> 6. Your Rights
            </h2>
            <p className="text-gray-700">
              You have the right to view, update, or delete your account and
              associated data at any time.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <RefreshCw className="w-5 h-5 text-amber-600" /> 7. Updates to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy occasionally. If significant
              changes are made, we will notify you via the app or email.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-12">Last updated: July 2025</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
