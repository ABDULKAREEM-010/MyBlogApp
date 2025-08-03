import React from "react";
import { Lock } from "lucide-react"; // optional, remove if not using lucide-react

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-indigo-100 from-gray-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Lock className="w-10 h-10 text-amber-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>
        </div>

        <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
          Your privacy is important to us. This policy explains how we collect,
          use, and safeguard your information when you use our{" "}
          <span className="font-semibold">Blog App</span>.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect personal details such as your name, email address,
              and profile picture when you register. Additionally, we collect
              non-personal data such as browser type, IP address, and app usage
              statistics to improve our services.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              2. How We Use Your Data
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information is used to create and manage your account,
              improve our app features, provide customer support, and ensure the
              safety of the platform. We do not sell your personal data to third
              parties.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              3. Sharing of Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may share data with trusted service providers who help us
              operate the app. We may also disclose information if required by
              law, or to protect the rights, property, and safety of our users.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              4. Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use industry-standard measures to protect your data from
              unauthorized access, alteration, or disclosure. However, no online
              system is 100% secure, and you share your information at your own
              risk.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              5. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have the right to access, update, or delete your personal
              information at any time. Please contact us if you want to exercise
              these rights.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              6. Updates to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We encourage
              you to review this page regularly to stay informed of how we are
              protecting your data.
            </p>
          </div>
        </div>

        {/* Last updated */}
        <p className="mt-10 text-sm text-gray-500 text-center">
          Last updated: July 2025
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
