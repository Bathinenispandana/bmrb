import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Brand Market Research Bureau | Market Research Organization",
  description:
    "BMRB is a full-service market research organization providing qualitative data, business consulting, and research solutions across India.",
  keywords:
    "market research, brand research, customer satisfaction, B2B research, election surveys, opinion polls, India",
  openGraph: {
    title: "Brand Market Research Bureau",
    description:
      "A full-service market research organization providing insights across India",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <link rel="icon" href="/favicon-b.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
