import React, { useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard")
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center h-full"
    >
      <div className="flex flex-col gap-1">
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
      </div>
      <button
        className="mt-auto bg-[#A9BCFF] w-80 h-12 rounded-md mx-auto hover:bg-[#48c06e] hover:text-white"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
