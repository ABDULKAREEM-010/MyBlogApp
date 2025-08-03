import React from "react";
import { Mail, Linkedin } from "lucide-react"; // icons

function ContactUs() {
  return (
    <div className="min-h-[75vh] bg-indigo-100 from-gray-50 to-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Have questions, feedback, or collaboration ideas?  
          We’d love to hear from you — let’s connect!
        </p>

        {/* Contact Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kareemmohammedabdul616@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <Mail className="w-10 h-10 text-amber-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Email</h2>
            <p className="text-blue-600 hover:underline break-words">
              kareemmohammedabdul616@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/mohammedabdul-kareem/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <Linkedin className="w-10 h-10 text-amber-600 mb-3" />
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              LinkedIn
            </h2>
            <p className="text-blue-600 hover:underline">
              mohammedabdul-kareem
            </p>
          </a>
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-sm text-gray-500">
          I usually respond within <span className="font-medium">6 hours</span>.
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
