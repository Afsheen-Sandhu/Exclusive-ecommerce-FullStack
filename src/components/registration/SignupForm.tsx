"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../ui/inputs";
import { Button } from "../ui/buttons";
import Link from "next/link";
import { signupSchema, type SignupSchemaType } from "@/lib/validations/signup-schema";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupSchemaType) => {
    console.log("Form Submitted:", data);
    // call your signup API here
  };

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen w-full bg-[var(--background)]">
      {/* Left Image Section (on bottom for small screens) */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 p-4 md:p-6 ">
        {["https://images.unsplash.com/photo-1555066931-bf19f8fd1085?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","/darw2.avif","/cart.avif","/4.avif"].map((src, i) => (
          <div key={i} className="w-full h-40 md:h-56 lg:h-64 overflow-hidden  shadow-md">
            <img src={src} alt={`Image ${i+1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Right Form Section (on top for small screens) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-16 py-12">
        {/* Heading */}
        <div className="mb-8 md:mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold ">Sign up To Exclusive</h2>
          <p className="text-secondary text-base md:text-2xl mt-2">Enter your details below</p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 w-full max-w-md mx-auto md:mx-0">
          <InputField
            label="Name"
            type="text"
            variant="underline"
            placeholder="Enter your name"
            sizes="lg"
            className="w-full"
            {...register("name")}
            error={errors.name?.message}
          />

          <InputField
            label="Email"
            type="email"
            variant="underline"
            placeholder="Enter your email"
            sizes="lg"
            className="w-full"
            {...register("email")}
            error={errors.email?.message}
          />

          <InputField
            label="Password"
            type="password"
            variant="underline"
            placeholder="Enter your password"
            sizes="lg"
            className="w-full"
            {...register("password")}
            error={errors.password?.message}
          />

          <Button type="submit" variant="solid" size="md" className="w-full" label="Sign Up" />
        </form>

        {/* Footer */}
        <div className="mt-6 text-center md:text-left">
          <span className="text-gray-600 text-sm md:text-base">
            Already have an account?{" "}
            <Link href="/login" className="text-primary ml-1 font-medium hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
