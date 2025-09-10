import React from "react";
import { Truck, RotateCcw } from "lucide-react";

export function InfoCards() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-secondary" />,
      title: "Fast Delivery",
      desc: "Delivered in 2–3 business days",
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-secondary" />,
      title: "Easy Returns",
      desc: "Hassle-free returns within 7 days",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full">
      {features.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-1 items-center gap-4 p-5 bg-[var(--background)] border-2 border-solid border-base-300 shadow hover:shadow-md transition rounded-lg"
        >
          {item.icon}
          <div>
            <h3 className="font-semibold text-base">{item.title}</h3>
            <p className="text-sm text-base">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
