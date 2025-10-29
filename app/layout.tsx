import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "NPF Pensions Limited",
  description: "Secure your future with NPF Pensions — trusted Pension Fund Administrators for the Nigerian Police, offering reliable retirement planning and fund management.",
  icons: {
    icon: "/images/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
         <Toaster />
      </body>
    </html>
  );
}
