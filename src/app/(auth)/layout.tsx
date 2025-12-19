"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen max-h-screen bg-black flex items-center justify-center">
    
      <div className="w-full max-w-7xl flex justify-between gap-16 pl-0 lg:pl-20">
        <div className="w-full pb-10 md:pt-20 lg:pt-50 lg:w-fit text-white flex flex-col px-8 lg:px-0 items-center lg:items-start justify-center">
            <Link href={"/"}>
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="logo"
          className="absolute top-5 left-5 md:left-10 lg:left-20 min-w-[131px] cursor-pointer"
          priority
        />
      </Link>
          {children}
        </div>

      <div className="hidden lg:inline h-screen sticky top-0 right-10">
          <img
            src="/images/login_layout.png"
            alt=""
            className="h-full w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
