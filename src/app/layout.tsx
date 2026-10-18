import type { Metadata, Viewport } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";
import { MotionProvider } from "@/components/ui/MotionProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// VERIFY: production domain is unconfirmed; set NEXT_PUBLIC_SITE_URL in deployment.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aniket.de";
const title = `${portfolioData.name} | ${portfolioData.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: portfolioData.seoDescription,
  openGraph: { title, description: portfolioData.seoDescription, type: "website", url: "/" },
  twitter: { card: "summary", title, description: portfolioData.seoDescription },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0D0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Font variables live on <html> so the :root theme tokens in globals.css can resolve them.
  return (
    <html lang="en" className={`scroll-smooth ${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
