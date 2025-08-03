import React from "react";
import { Crown, Hammer, ShieldCheck } from "lucide-react";

function Ownership() {
  return (
    <div className="min-h-screen bg-indigo-200 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Crown className="w-10 h-10 text-amber-700" />
          <h1 className="text-4xl font-extrabold text-gray-900">
            Ownership Declaration
          </h1>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          I, <span className="font-semibold text-gray-900">Mohammed Abdul Kareem</span>, 
          hereby declare that this project, <span className="font-bold">myBlog</span>, 
          has been fully developed, designed, and implemented solely by me. 
          This platform is a result of countless hours of dedication, research, 
          coding, and problem-solving. Every feature and component reflects my 
          personal effort and creativity.
        </p>
        <div className="space-y-8">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <Hammer className="w-5 h-5 text-amber-700" /> Hard Work & Dedication
            </h2>
            <p className="text-gray-700">
              Building <span className="font-medium">myBlog</span> required 
              learning, experimenting, debugging, and countless late nights. 
              Every part of this app was crafted carefully to ensure a 
              professional and user-friendly experience.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">
              <ShieldCheck className="w-5 h-5 text-amber-700" /> Legal Ownership
            </h2>
            <p className="text-gray-700">
              This project is legally owned by me and must not be copied, 
              redistributed, or claimed by others without my permission. 
              All rights to the design, code, and content belong to me.
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-12 italic">
          ✨ myBlog is not just a project — its a symbol of my dedication, 
          creativity, and journey as a developer.
        </p>
      </div>
    </div>
  );
}

export default Ownership;
