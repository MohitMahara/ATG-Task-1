"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const firstLetter = user?.name?.charAt(0).toUpperCase();
  return (
    <nav
      className={`
        layout-padding
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-gray-900/70 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="global flex items-center justify-between py-6">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="logo"
            className="min-w-[131px] cursor-pointer"
            priority
          />
        </Link>

        {/* Right Side */}

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="hidden md:block text-sm text-[#9E9E9E] hover:text-white transition-colors"
          >
            Home
          </Link>
          {!user ? (
            <div className="">
              <Link
                href="/signup"
                className="text-sm text-[#9E9E9E] hover:text-white transition-colors"
              >
                SignUp
              </Link>
            </div>
          ) : (
            <Link className="w-10 h-10 mx-auto rounded-full bg-[#2a2a31] flex items-center justify-center text-xl font-semibold" href={'/dashboard/setting'}>
              {firstLetter}
            </Link>
          )}

          <Button className="px-4 py-3 lg:px-8 lg:py-4">Download <span className="hidden md:inline ">Template</span></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
