"use client";
import Image from "next/image";
import React from "react";
import Input from "@/components/ui/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { signinSchema } from "@/lib/validations";



type SignInFormValues = z.infer<typeof signinSchema>;

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signinSchema),
  });
  const onSubmit = async (data: SignInFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Sign in data: " + JSON.stringify(data));
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex items-center justify-center min-h-screen"
    >
      <div className=" bg-card/50 p-8 rounded-lg shadow-md w-full max-w-lg">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto mb-4"
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <p className="text-center text-muted-foreground mb-4">
          Sign in to your account to continue
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            register={register("email")}
            error={errors.email?.message}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            register={register("password")}
            error={errors.password?.message}
          />

          <div className="flex items-center justify-between">
            <label
              className="flex items-center gap-2 cursor-pointer group"
              data-cursor="hover"
            >
              <input
                type="checkbox"
                className="hidden peer"
                {...register("rememberMe")}
              />

              <span
                className="w-4 h-4 border-2 border-primary rounded flex items-center justify-center transition-colors
               peer-checked:bg-primary text-transparent peer-checked:text-background"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>

              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Remember me
              </span>
            </label>

            <a href="#" className="text-sm text-primary hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-black py-2 rounded-md hover:bg-primary/80 flex items-center justify-center gap-2 transition-colors
             disabled:bg-primary/30 disabled:cursor-not-allowed"
            disabled={isSubmitting}
            data-cursor={isSubmitting ? "disabled" : "hover"}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2" size={16} />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="w-full h-px bg-border"></div>
          <span className="text-sm text-muted-foreground">Or</span>
          <div className="w-full h-px bg-border"></div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="hover:scale-110 transition-transform">
            <Image src="/google.png" alt="Google" width={50} height={50} />
          </button>
          <button className="hover:scale-110 transition-transform">
            <Image src="/facebook.png" alt="Facebook" width={50} height={50} />
          </button>
          <button className="hover:scale-110 transition-transform">
            <Image
              src="/microsoft.png"
              alt="Microsoft"
              width={50}
              height={50}
            />
          </button>
        </div>
        <p className="text-center text-muted-foreground mt-6">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-primary hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default Page;
