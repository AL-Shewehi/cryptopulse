"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NeoButton } from "../ui/NeoButton";
import { ChevronDown, Menu, Minus, Plus, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Pages",
    href: "",
    links: [
      {
        name: "FAQ",
        href: "/faq",
      },
      {
        name: "Sign In",
        href: "/signin",
      },
      {
        name: "Sign Up",
        href: "/signup",
      },
      {
        name: "Pricing",
        href: "/pricing",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [DropdownOpen, setDropdownOpen] = useState("");
  return (
    <div className="flex sticky top-0 justify-between md:justify-evenly items-center p-8 bg-background z-50 ">
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={80}
        priority
        className="w-32 md:w-48 h-auto object-contain"
      />
      <div className="hidden gap-6 items-center md:flex ">
        {navItems.map((item) => (
          <div key={item.name} className="relative group ">
            <Link
              href={item.href}
              className="flex items-center gap-1 hover:text-primary transition-colors py-2 font-heading tracking-wider text-foreground"
            >
              {item.name}
              {item.links && (
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              )}
            </Link>

            {/* Dropdown Menu */}
            {item.links && (
              <div
                className="
                  absolute mt-2 flex-col gap-3 p-4 min-w-50 z-50 rounded-md
                  bg-card border border-border shadow-[2px_2px_0px_0px_var(--color-primary)]
                  invisible opacity-0 translate-y-2
                  group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300 ease-out
                "
              >
                {item.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium font-sans block py-2 border-b border-border last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-10 ">
        <div className="hidden sm:block">
          <NeoButton>Get Started</NeoButton>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} type="button" aria-label="Toggle Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 bg-background/50 backdrop-blur-sm"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="h-full w-72 fixed top-0 right-0 bg-card/90 border border-border shadow-[2px_2px_0px_0px_var(--color-primary)] z-50  p-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-primary block ml-auto"
              aria-label="Close Menu"
            >
              <X size={30} />
            </button>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (item.links) {
                        setDropdownOpen(
                          DropdownOpen === item.name ? "" : item.name,
                        );
                      }
                    }}
                    className="flex items-center justify-between hover:text-primary transition-colors py-2 font-heading tracking-wider text-foreground
                  border-b border-border"
                  >
                    {item.name}
                    {item.links && (
                      <button aria-label="Toggle Dropdown">
                        {DropdownOpen === item.name ? (
                          <Minus size={16} />
                        ) : (
                          <Plus size={16} />
                        )}
                      </button>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.links && (
                    <div
                      className={`${
                        DropdownOpen === item.name
                          ? "flex flex-col gap-3 p-4 min-w-50 z-50"
                          : "hidden"
                      }`}
                    >
                      {item.links.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="text-foreground hover:text-primary transition-colors font-medium font-sans block py-2 border-b border-border last:border-0"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
