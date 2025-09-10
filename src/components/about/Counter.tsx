"use client";
import { RotateCcw, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import React, { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number; // in ms
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 10; // update every 10ms
    const totalSteps = duration / incrementTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className="font-bold text-primary text-3xl">{count}k</span>;
};

const policy = [
  {
    icon: <Truck className="w-10 h-10 text-base" />,
    title: "Fast Delivery",
    desc: "Delivered in 2–3 business days",
    end: 70.5,
  },
  {
    icon: <RotateCcw className="w-10 h-10 text-base" />,
    title: "Easy Returns",
    desc: "Hassle-free returns within 7 days",
    end: 95,
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-base" />,
    title: "Secure Payments",
    desc: "Safe and encrypted transactions",
    end: 500,
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-base" />,
    title: "Trusted Shopping",
    desc: "Loved by thousands of customers",
    end: 25,
  },
];

export  function StatsSection() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {policy.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4 p-8 bg-base  border-1 border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-center h-20 w-20 ">
              {item.icon}
            </div>
            <Counter end={item.end} duration={3000} />
            <p className=" font-semibold text-lg">{item.title}</p>
            <p className=" text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
