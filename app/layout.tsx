import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Reob Sustainable Audio",
    default: "Reob | Handcrafted Sustainable Audio & High-Fidelity Sound",
  },
  description: "Experience the pinnacle of sound with Reob. Sustainable, handcrafted audio products designed for the modern connoisseur. Pure sound, purified design.",
  metadataBase: new URL("https://reob-audio.com"),
  keywords: ["Sustainable Headphones", "Luxury Audio", "Handcrafted Speakers", "High-Fidelity Sound"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reob-audio.com",
    siteName: "Reob",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${bodoni.variable} antialiased bg-[#faf9f6] text-[#2c2c2c] selection:bg-[#2c2c2c] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
