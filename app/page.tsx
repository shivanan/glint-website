import Link from "next/link";

const DOWNLOAD_URL = "https://example.com/GSuiteRouter.dmg";

export default function HomePage() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">macOS Utility App</p>
        <h1 id="hero-title">Open Finder files in Google Docs instantly.</h1>
        <p className="subtitle">
          GSuite Router lets you open <strong>.docx</strong> and <strong>.xlsx</strong> files from Finder directly in
          Google Docs and Google Sheets with one click.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href={DOWNLOAD_URL}>
            Download for macOS
          </a>
          <Link className="button-secondary" href="/privacy">
            Read Privacy Policy
          </Link>
        </div>
      </div>

      <div className="hero-card" aria-label="GSuite Router app preview">
        <img src="/logo.svg" alt="GSuite Router app icon" width={140} height={140} />
        <h2>GSuite Router</h2>
        <p>Finder extension utility for Microsoft Office files and Google Workspace.</p>
        <ul>
          <li>Open DOCX in Google Docs</li>
          <li>Open XLSX in Google Sheets</li>
          <li>Designed for macOS workflows</li>
        </ul>
      </div>
    </section>
  );
}
