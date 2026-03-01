import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sourceSans3 = Source_Sans_3({
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
      <body className={sourceSans3.variable}>
        <header className="site-header">
          <Link className="brand" href="/">
            <img src="/logo.svg" alt="Glint logo" width={32} height={32} />
            <span>Glint</span>
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
