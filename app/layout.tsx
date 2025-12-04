import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import { ConsentManager } from "../components/consent-manager";

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
    		<ConsentManager>
    			
            {children}
            <Script id="tawk-to" strategy="afterInteractive">
                {`
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
              var s1=document.createElement("script"),
              s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69049a6665e9a6194e3c192c/1j8svm91a';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `}
            </Script>
            <Toaster />
          
    		</ConsentManager>
    	</body>
        </html>
      )
}
