import React from "react";
import { Send } from "lucide-react";
import { InputField } from "../inputs";

interface FooterSection {
  title: string;
  links?: { label: string; href: string }[];
  content?: string[];
}

const footerSections: FooterSection[] = [
  {
    title: "Exclusive",
    content: ["111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh."],
    links: [
      { label: "exclusive@gmail.com", href: "mailto:exclusive@gmail.com" },
      { label: "+88015-88888-9999", href: "tel:+88015888889999" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Shop", href: "/shop" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "My Account", href: "/account" },
      { label: "Login / Register", href: "/login" },
      { label: "Cart", href: "/cart" },
      { label: "Wishlist", href: "/wishlist" },
    ],
  },
  {
    title: "Quick Link",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms Of Use", href: "/terms" },
    ],
  },
  {
    title: "Download App",
    content: [
      "Save $3 with App New User Only",
      "Get 10% off your first order",
    ],
  },
  {
    title: "Subscribe",
    content: [`Get 10% off your first order`],
  },
];

const footerBottom = {
  text: "Copyright Rimel 2022. All right reserved",
};

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-secondary-content py-10 overflow-hidden">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {footerSections.map((section, idx) => (
            <div key={idx} className="break-words min-w-0">
              <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                {section.title}
              </h3>

              {section.content &&
                section.content.map((text, i) => (
                  <p
                    key={i}
                    className="text-sm sm:text-base mb-1 sm:mb-2 break-words"
                  >
                    {text}
                  </p>
                ))}

              {section.links &&
                section.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="block text-sm sm:text-base mb-1 sm:mb-2 hover:text-gray-400 break-words truncate"
                  >
                    {link.label}
                  </a>
                ))}

              {section.title === "Subscribe" && (
                <div className="mt-2">
                  <InputField
                    type="email"
                    className="bg-secondary text-secondary-content w-full"
                    placeholder="Enter your email"
                    rightIcon={<Send />}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-neutral-700 mt-8 pt-4 text-center text-sm sm:text-base text-gray-400 px-4 sm:px-6 lg:px-8 break-words">
        {footerBottom.text}
      </div>
    </footer>
  );
};
