import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthWrapper from "@/context/AuthWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Squid-ATG TASK 1",
  description: "A true design is not only asthetically pleasing but also functional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is added here to prevent extension-based errors
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased bg-black`}>
       
        <AuthWrapper>
        {children}
        </AuthWrapper>
        
      </body>
    </html>
  );
}