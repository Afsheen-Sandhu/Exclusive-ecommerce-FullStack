import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactSidebar } from "./ContactSidebar";

export const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-12 pt-10 min-h-screen px-4 sm:px-6 md:px-12 lg:px-16">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4">
        <ContactSidebar />
      </div>

      {/* Form */}
      <div className="w-full md:flex-1">
        <ContactForm />
      </div>
    </section>
  );
};
