import React from "react";
import ContactSection from "../component/contact/ContctSection";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold py-3">Contact Page Management</h1>

      <div className="w-full max-w-7xl border border-gray-200 py-6 rounded">
        <ContactSection />
      </div>
    </div>
  );
};


export default ContactUs;
