"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Sainik Welfare", path: "/welfare" },
  { name: "Achievements", path: "/achievements" },
  { name: "Volunteers", path: "/volunteers" },
  { name: "Activities", path: "/activities" },
  { name: "Annual Reports", path: "/reports" },
];

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    navy: "bg-blue-900 text-white hover:bg-blue-800 shadow-lg hover:shadow-xl",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg"
          : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center shadow-md group-hover:scale-105 transition-all">
              <Image
                src="/nss1.jpg"
                alt="NSS Logo"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
            <div className="sm:block">
              <h1 className="font-bold text-xl text-gray-900">
                NSS GEC Patan
              </h1>
              <p className="text-xs text-gray-500">Not Me But You</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  pathname === link.path
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Admin Button */}
          <div className="hidden lg:block">
            <Link href="/admin">
              <Button variant="navy" size="sm">
                Admin Login
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  pathname === link.path
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/admin" onClick={() => setIsOpen(false)}>
              <Button
                variant="navy"
                size="sm"
                className="w-full mt-2"
              >
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
