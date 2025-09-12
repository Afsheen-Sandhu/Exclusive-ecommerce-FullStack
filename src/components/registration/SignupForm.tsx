"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../ui/inputs";
import { Button, ToggleButton } from "../ui/buttons";
import Link from "next/link";
import {
  signupSchema,
  type SignupSchemaType,
} from "@/lib/validations/signup-schema";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Eye, EyeClosed } from "lucide-react";
export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupSchemaType) => {
    console.log("Form Submitted:", data);

    axios
      .post("/api/auth/signup", data)
      .then((res) => {
        console.log("Signup API response:", res.data);
        toast.success("Signup successful");
        router.push("/");
      })
      .catch((err: any) => {
        if (err.response?.data?.error) {
          toast.error(err.response.data.error);
        } else {
          toast.error("Something went wrong. Try again.");
        }
        console.error("Signup error:", err);
      });
  };

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen w-full bg-[var(--background)]">
      {/* Left Image Section (on bottom for small screens) */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 p-4 md:p-6 ">
        {[
          "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "/darw2.avif",
          "/cart.avif",
          "/4.avif",
        ].map((src, i) => (
          <div
            key={i}
            className="w-full h-40 md:h-56 lg:h-64 overflow-hidden  shadow-md"
          >
            <img
              src={src}
              alt={`Image ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right Form Section (on top for small screens) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-16 py-12">
        {/* Heading */}
        <div className="mb-8 md:mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold ">
            Sign up To Exclusive
          </h2>
          <p className="text-secondary text-base md:text-2xl mt-2">
            Enter your details below
          </p>
        </div>

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6 w-full max-w-md mx-auto md:mx-0"
        >
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

          <div className="relative w-full">
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="underline"
              placeholder="Enter your password"
              sizes="lg"
              className="w-full pr-10" // 👈 add padding so text doesn't overlap icon
              {...register("password")}
            />

            {/* Eye Icon inside input */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}  
            </button>

            {errors.password && (
              <p className="text-red-600 text-sm mt-1 font-medium">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="solid"
            size="md"
            className="w-full"
            label="Sign Up"
          />
        </form>

        {/* Footer */}
        <div className="mt-6 text-center md:text-left">
          <span className="text-gray-600 text-sm md:text-base">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary ml-1 font-medium hover:underline"
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
