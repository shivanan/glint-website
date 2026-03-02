import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Script from "next/script";
import { DOWNLOAD_URL } from "./page";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Glint",
  description: "Open DOCX and XLSX from Finder directly in Google Docs with one click."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="emUgWE38YJNjCYCuZjRiFrGRCMcRyVFh-46pU-kYYPk" />
      </head>
      <body className={inter.variable}>
        <header className="site-header">
          <Link className="brand" href="/">
            <img src="/logo.svg" alt="Glint logo" width={32} height={32} />
            <span>Glint</span>
          </Link>
          <nav className="top-nav" aria-label="Main navigation">
            <Link href={DOWNLOAD_URL}>Download</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdNNIsng6iL0GhSIDDuLNa7z8cTz0enVDzPE4CoIbCZVz5tGA/viewform?usp=publish-editor'>Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-6QSB25YB1F"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-6QSB25YB1F');
  `}
</Script>

      </body>
    </html>
  );
}
