import React from "react";
import { Gift, Link2, TrendingUp, BarChart } from "lucide-react"; // optional icons

function AffiliateProgram() {
  return (
    <div className="min-h-screen  bg-indigo-100 from-gray-50 to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Gift className="w-10 h-10 text-amber-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">
            Affiliate Program
          </h1>
        </div>

        <p className="text-lg text-gray-700 mb-10 text-center leading-relaxed">
          Earn rewards by sharing our{" "}
          <span className="font-semibold">Blog App</span> with your audience!  
          Join our affiliate program today and start growing with us 🚀
        </p>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-start">
            <Link2 className="w-8 h-8 text-amber-600 mb-3" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Unique Referral Link
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Receive your own personal referral link to share with your
              followers, friends, and community.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-start">
            <TrendingUp className="w-8 h-8 text-amber-600 mb-3" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Earn Commission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Get rewarded with a commission for every new subscriber who joins
              through your link.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-start sm:col-span-2">
            <BarChart className="w-8 h-8 text-amber-600 mb-3" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Performance Dashboard
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Track your clicks, sign-ups, and earnings in real-time with our
              built-in affiliate dashboard.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg shadow transition font-semibold">
            Join the Program
          </button>
          <p className="mt-4 text-sm text-gray-500">
            It’s free to join — start earning today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AffiliateProgram;
