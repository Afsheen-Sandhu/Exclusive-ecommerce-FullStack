"use client";
import React, { useState } from "react";
import { InputField } from "../ui/inputs";
import { Button } from "../ui/buttons";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* First three inline fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-2">
        <InputField
          className="w-full"
          type="text"
          name="name"
          variant="filled"
          placeholder="Your name"
          required
          sizes="lg"
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="email"
          name="email"
          variant="filled"
          placeholder="Your email"
          required
          className="w-full"
          sizes="lg"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          className="w-full "
          type="text"
          name="phone"
          variant="filled"
          placeholder="Your number"
          required
          sizes="lg"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* Message field */}
      <div>
        <textarea
          className="w-full h-52 border border-transparent bg-base-300 text-base-content placeholder-neutral/50 
                     focus-within:border-primary rounded-none py-2 px-3 leading-none text-lg focus:outline-none focus:ring-primary"
          name="message"
          placeholder="Your message"
          required
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {/* Button */}
      <div className="flex pt-4 justify-center md:justify-end items-center">
        <Button
          variant="solid"
          className="!px-12 whitespace-nowrap"
          label="Send Message"
        />
      </div>
    </div>
  );
};
