"use client";
import Image from "next/image";
import React from "react";
import Input from "@/components/ui/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {motion} from "framer-motion"
import { Loader2 } from "lucide-react";
import { signupSchema } from "@/lib/validations";



type SignUpFormValues = z.infer<typeof signupSchema>;

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Sign up data: " + JSON.stringify(data));
  };
  return (
    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity:100, y:0}} transition={{duration: 0.5}} className=" flex items-center justify-center min-h-screen">
      <div className=" bg-card/50 p-8 rounded-lg shadow-md backdrop-blur-sm w-full max-w-lg">
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
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <p className="text-center text-muted-foreground mb-4">
          Create an account to get started
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col  md:flex-row gap-4">
            <Input
              id="firstName"
              label="First Name"
              placeholder="Enter your first name"
              register={register("firstName")}
              error={errors.firstName?.message}
            />
            <Input
              id="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              register={register("lastName")}
              error={errors.lastName?.message}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              register={register("email")}
              error={errors.email?.message}
            />
            <Input
              id="phone"
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              register={register("phone")}
              error={errors.phone?.message}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              register={register("password")}
              error={errors.password?.message}
            />
            <Input
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              register={register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          </div>

          <div className="flex flex-col gap-1">
            {/* سطر الشروط واللينك */}
            <div className="flex items-center gap-1">
              <label
                className="flex items-center gap-2 cursor-pointer group"
                data-cursor="hover"
              >
                <input
                  type="checkbox"
                  className="hidden peer"
                  {...register("terms")}
                />
                <span className="w-4 h-4 border-2 border-primary rounded flex items-center justify-center transition-colors peer-checked:bg-primary text-transparent peer-checked:text-background">
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
                  I agree to the
                </span>
              </label>
              <a
                href="#"
                className="text-primary hover:underline text-sm"
                data-cursor="hover"
              >
                Terms and Conditions
              </a>
            </div>

            {/* رسالة الخطأ تظهر تحت السطر بهدوء */}
            {errors.terms && (
              <span className="text-xs text-red-400 mt-1">
                {errors.terms.message}
              </span>
            )}
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
                Signing up...
              </>
            ) : (
              "Sign Up"
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
            <Image
              src="/google.png"
              alt="Google"
              width={50}
              height={50}
              priority
            />
          </button>
          <button className="hover:scale-110 transition-transform">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={50}
              height={50}
              priority
            />
          </button>
          <button className="hover:scale-110 transition-transform">
            <Image
              src="/microsoft.png"
              alt="Microsoft"
              width={50}
              height={50}
              priority
            />
          </button>
        </div>
        <p className="text-center text-muted-foreground mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-primary hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default Page;
