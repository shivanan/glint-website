import Link from "next/link";

const DOWNLOAD_URL = "https://example.com/Glint.dmg";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">macOS Utility App</p>
          <h1 id="hero-title">Open Finder files in Google Docs instantly.</h1>
          <p className="subtitle">
            Glint lets you open <strong>.docx</strong> and <strong>.xlsx</strong> files from Finder directly in Google
            Docs and Google Sheets with one click.
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

        <div className="hero-card" aria-label="Glint app preview">
          <img src="/logo.svg" alt="Glint app icon" width={140} height={140} />
          <h2>Glint</h2>
          <p>Finder extension utility for Microsoft Office files and Google Workspace.</p>
          <ul>
            <li>Open DOCX in Google Docs</li>
            <li>Open XLSX in Google Sheets</li>
            <li>Designed for macOS workflows</li>
          </ul>
        </div>
      </section>

      <section className="how-it-works" aria-labelledby="how-it-works-title">
        <div className="how-header">
          <p className="eyebrow">How It Works</p>
          <h2 id="how-it-works-title">From Finder file to Google editor in four quick steps.</h2>
        </div>
        <div className="steps-stack">
          <article className="step-section">
            <div className="step-content">
              <p className="step-number">01</p>
              <h3>Install Glint</h3>
              <p>Download the app, move it to Applications, and allow it in macOS when prompted.</p>
            </div>
            <div className="step-shot" role="img" aria-label="Placeholder screenshot for step 1">
              Screenshot placeholder
            </div>
          </article>

          <article className="step-section">
            <div className="step-content">
              <p className="step-number">02</p>
              <h3>Select a DOCX or XLSX file</h3>
              <p>In Finder, click a supported Microsoft Office file you want to work on.</p>
            </div>
            <div className="step-shot" role="img" aria-label="Placeholder screenshot for step 2">
              Screenshot placeholder
            </div>
          </article>

          <article className="step-section">
            <div className="step-content">
              <p className="step-number">03</p>
              <h3>Open with Glint</h3>
              <p>Use the context menu or default app routing to send the file to Google Docs or Sheets.</p>
            </div>
            <div className="step-shot" role="img" aria-label="Placeholder screenshot for step 3">
              Screenshot placeholder
            </div>
          </article>

          <article className="step-section">
            <div className="step-content">
              <p className="step-number">04</p>
              <h3>Continue editing in Google</h3>
              <p>Your browser opens the right Google editor so you can keep working immediately.</p>
            </div>
            <div className="step-shot" role="img" aria-label="Placeholder screenshot for step 4">
              Screenshot placeholder
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
