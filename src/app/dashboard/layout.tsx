"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {user,loading:authLoading}=useAuth();
  const router=useRouter();
    useEffect(() => {
  if (!user && !authLoading) {
    router.replace("/");
  }
}, [user, authLoading, router]);
if(!user){
  
  return <div className="h-screen"></div>;
}
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
