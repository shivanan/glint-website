import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "GSuite Router",
  description: "Open DOCX and XLSX from Finder directly in Google Docs with one click."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <header className="site-header">
          <Link className="brand" href="/">
            <img src="/logo.svg" alt="GSuite Router logo" width={32} height={32} />
            <span>GSuite Router</span>
          </Link>
          <nav className="top-nav" aria-label="Main navigation">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
