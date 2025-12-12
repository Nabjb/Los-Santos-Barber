import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://lossantosbarbers.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Los Santos Barbershop - Premium Barber in Nicosia, Cyprus",
    template: "%s | Los Santos Barbershop",
  },
  description:
    "Los Santos Barbershop - The best barbershop in Nicosia, Cyprus. Expert haircuts, beard grooming, and hot towel shaves. 4.9⭐ rating with 38+ reviews. Book your appointment today!",
  keywords: [
    "los santos barber",
    "los santos barbershop",
    "barbershop nicosia",
    "barber cyprus",
    "haircut nicosia",
    "beard trim nicosia",
    "barbershop pallouriotissa",
    "premium barber cyprus",
    "best barbershop nicosia",
    "men's grooming nicosia",
    "classic cuts cyprus",
    "beard grooming nicosia",
    "hot towel shave cyprus",
  ],
  authors: [{ name: "Los Santos Barbershop" }],
  creator: "Los Santos Barbershop",
  publisher: "Los Santos Barbershop",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Los Santos Barbershop",
    title: "Los Santos Barbershop - Premium Barber in Nicosia, Cyprus",
    description:
      "The best barbershop in Nicosia, Cyprus. Expert haircuts, beard grooming, and hot towel shaves. 4.9⭐ rating. Book your appointment today!",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Los Santos Barbershop - Premium Grooming Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Santos Barbershop - Premium Barber in Nicosia",
    description:
      "The best barbershop in Nicosia, Cyprus. Expert haircuts, beard grooming, and hot towel shaves. 4.9⭐ rating.",
    images: [`${siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
  category: "Barbershop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

