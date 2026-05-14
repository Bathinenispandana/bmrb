import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PWAInstall from "@/components/PWAInstall";

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
  title: "BMRB | Market Research & Business Intelligence",
  description:
    "Brand Market Research Bureau provides comprehensive market research, brand equity studies, customer satisfaction surveys, and business consulting solutions across India.",
  keywords:
    "market research, brand research, customer satisfaction, B2B research, election surveys, opinion polls, India, business intelligence",
  authors: [{ name: "BMRB" }],
  creator: "BMRB",
  publisher: "Brand Market Research Bureau",
  formatDetection: { email: true, telephone: true, address: true },
  openGraph: {
    type: "website",
    url: "https://bmrb.in",
    title: "Brand Market Research Bureau",
    description: "Professional market research solutions across India",
    images: [
      {
        url: "/images/og-image.avif",
        width: 1200,
        height: 630,
        alt: "BMRB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Market Research Bureau",
    description: "Professional market research solutions",
    images: ["/images/og-image.avif"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "BMRB",
  },
  icons: [
    { rel: "icon", url: "/favicon-b.ico" },
    { rel: "apple-touch-icon", url: "/images/apple-touch-icon.png" },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a1628",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon-b.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#0a1628" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BMRB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-background`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <PWAInstall />
      </body>
    </html>
  );
}
