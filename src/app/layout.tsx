import type { Metadata } from "next";
import { League_Spartan, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

// Big section titles — matches client_tech "font-display"
const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

// Card titles & sub-headings — matches client_tech "font-subheading"
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClienTech Solutions — Franchise Growth Marketing Agency",
  description: "Performance marketing and digital infrastructure for franchise brands. We help franchise systems build scalable lead systems and conversion engines that drive sustainable growth.",
  keywords: ["franchise marketing", "franchise lead generation", "franchise growth", "digital marketing for franchises"],
  openGraph: {
    title: "ClienTech Solutions — Franchise Growth Marketing Agency",
    description: "Performance marketing for franchise brands. Build scalable lead systems that drive location-level growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
