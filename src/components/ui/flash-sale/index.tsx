"use client";
import React, { useEffect, useState } from "react";

interface FlashSaleCountdownProps {
  endTime: string;
  label?: string;
  variant?: "default" | "boxed";
}

export const FlashSaleCountdown: React.FC<FlashSaleCountdownProps> = ({
  endTime,
  label,
  variant = "default",
}) => {
  const calculateTimeLeft = () => {
    const difference = new Date(endTime).getTime() - new Date().getTime();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  const formatTime = (value: number) => String(value).padStart(2, "0");

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex flex-col items-center md:items-start w-full gap-3">
      {/* Label */}
      {label && (
        <h2 className="text-sm sm:text-base md:text-lg font-extrabold tracking-wide uppercase">
          {label}
        </h2>
      )}

      {/* Default Variant */}
      {variant === "default" && (
        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 md:gap-6 text-secondary  items-center">
          <h3 className="text-base sm:text-lg md:text-2xl font-bold w-full md:w-auto text-center md:text-left">
            Flash Sale:
          </h3>
          {units.map((unit, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[50px] sm:min-w-[60px]"
            >
              <time className="text-lg sm:text-xl md:text-3xl font-extrabold tracking-wider leading-none">
                {formatTime(unit.value)}
                {i < units.length - 1 && (
                  <span className="text-primary pl-1">:</span>
                )}
              </time>
              <span className="text-[9px] sm:text-xs font-semibold mt-1 uppercase tracking-wider text-center">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Boxed Variant */}
      {variant === "boxed" && (
        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-2 md:gap-6">
          {units.map((unit, i) => (
            <div key={i} className="flex flex-col items-center mb-2 text-white">
              <div className="w-12 h-12 sm:w-10 sm:h-10 md:w-16 md:h-16 flex items-center  justify-center rounded-4xl hover:text-black hover:bg-white border-2 border-white shadow-md bg-black/30">
                <time className="text-sm sm:text-sm md:text-2xl font-extrabold leading-none ">
                  {formatTime(unit.value)}
                </time>
              </div>
              <span className="text-[9px] sm:text-xs font-semibold mt-1 sm:mt-2 uppercase tracking-wider text-center">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
