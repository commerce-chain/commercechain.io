import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/home/Footer";
import { PostHogProvider } from "@/components/analytics/PostHogProvider";
import { TopNav } from "@/components/nav/TopNav";
import "@/app/globals.css";
import "@/styles/tokens.css";

const display = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-display-next", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body-next", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono-next", display: "swap" });
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-YCLV0R6XC3";

export const metadata: Metadata = {
  metadataBase: new URL("https://commercechain.io"),
  title: { default: "Commerce Chain", template: "%s | Commerce Chain" },
  description: "Open framework for governed supply and demand chain operations.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <PostHogProvider>
          <TopNav />
          {children}
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
