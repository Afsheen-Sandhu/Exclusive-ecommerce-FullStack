import React from 'react'
import { RotateCcw, ShieldX, Truck } from 'lucide-react';
import { Heading } from '../headings';

export  function PolicyCard  ()  {
  const policy = [
    {
      icon: <Truck className="w-10 h-10 text-secondary" />,
      title: "Fast Delivery",
      desc: "Delivered in 2–3 business days",
    },
    {
      icon: <RotateCcw className="w-10 h-10 text-secondary" />,
      title: "Easy Returns",
      desc: "Hassle-free returns within 7 days",
    },
    {
      icon: <ShieldX className="w-10 h-10 text-secondary" />,
      title: "Secure Payments",
      desc: "Safe and encrypted transactions",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 py-20">
      <Heading text="Our Policy" textClass="text-primary text-xl sm:text-2xl md:text-3xl font-bold" bulletClass="bg-primary" className="mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {policy.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-3 p-10 bg-[var(--background)] border border-solid border-base-300 shadow-sm  hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {item.icon}
            <div>
              <h3 className="font-semibold text-lg text-base">{item.title}</h3>
              <p className="text-sm mt-1 text-base ">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

