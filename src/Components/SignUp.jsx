import React, { useState } from "react";
import InputField from "./InputField";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signupSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Email is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password ahould atleast have 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });
const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center h-full"
    >
      <div className="flex flex-col">
        <InputField
          placeholder="Enter name"
          label="Name"
          errors={errors.name}
          {...register("name")}
        />
        <InputField
          placeholder="Enter email"
          label="Email"
          errors={errors.email}
          {...register("email")}
        />
        <InputField
          placeholder="Enter password"
          label="Password"
          errors={errors.password}
          {...register("password")}
          type="password"
        />
        <InputField
          placeholder="Confirm password"
          label="Confirm password"
          errors={errors.confirmPassword}
          {...register("confirmPassword")}
          type="password"
        />
      </div>
      <button
        className="mt-auto bg-[#A9BCFF] w-80 h-12 rounded-md mx-auto hover:bg-[#48c06e] hover:text-white"
        type="submit"
      >
        Sign-up
      </button>
    </form>
  );
};

export default SignUp;
