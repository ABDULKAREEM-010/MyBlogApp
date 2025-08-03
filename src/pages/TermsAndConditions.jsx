import React from "react";
import { ShieldCheck } from "lucide-react"; 

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-indigo-100 from-gray-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <ShieldCheck className="w-10 h-10 text-amber-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">
            Terms & Conditions
          </h1>
        </div>

        <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
          Welcome to our <span className="font-semibold">Blog App</span>. By
          accessing or using this website, you agree to the terms below. Please
          read carefully — if you do not agree, kindly do not use the platform.
        </p>

        <div className="space-y-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              1. Use of the Platform
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This blog app is intended to provide users a space to create,
              read, and manage blog posts. You agree to use the app only for
              lawful purposes. You must not post or share any content that is
              abusive, defamatory, offensive, or violates any laws or the rights
              of others.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              2. User Registration
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To access certain features such as creating posts, you need to
              create an account using a valid email address. You are responsible
              for maintaining the confidentiality of your account information
              and for all activities that occur under your account.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              3. User Content
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content you post (such as blog posts, images, and comments)
              remains your property. However, by posting it on this platform,
              you grant us a non-exclusive, royalty-free license to use,
              display, and distribute your content within the app to other
              users.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              4. Moderation and Removal
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to remove or edit any content that we
              determine violates these terms, is harmful, or negatively impacts
              the experience of other users. We may also suspend or terminate
              accounts found to be abusive or malicious.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              5. Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We value your privacy. Personal information you provide during
              registration or while using the app is handled according to our{" "}
              <span className="font-semibold">Privacy Policy</span>. We do not
              sell your data to third parties.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This platform is provided <em>"as is"</em> without warranties of
              any kind. We are not responsible for any loss, damage, or data
              breach that may occur while using the app. Use the platform at
              your own risk.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-amber-700 mb-3">
              7. Changes to These Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these terms periodically. We encourage you to review
              this page regularly. Continued use of the blog app after updates
              means you agree to the revised terms.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500 text-center">
          Last updated: July 2025
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
