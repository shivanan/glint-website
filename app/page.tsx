import Link from "next/link";

export const DOWNLOAD_URL = "https://vgo7rwf0zaioakwd.public.blob.vercel-storage.com/Glint-0.1.0.dmg";

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
            {/* <Link className="button-secondary" href="/privacy">
              Read Privacy Policy
            </Link> */}
          </div>
        </div>

        <div className="hero-card" aria-label="Glint app preview">
          <img src="/logo.svg" alt="Glint app icon" width={140} height={140} />
          <h2>Glint</h2>
          <p>macOS utility for Microsoft Office files and Google Workspace.</p>
          <ul>
            <li>Open docx files in Google Docs</li>
            <li>Open xlsx files in Google Sheets</li>
            <li>Support for multiple Google accounts.</li>
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
              <h3>Install  Glint</h3>
              <p>Download the app, move it to Applications, and allow it in macOS when prompted.</p>
            </div>
            <div className="step-shot" style={{height:'300px'}} role="img" aria-label="App Screenshot">
              <img src='dmg.jpg'  style={{boxShadow:'none'}} />
            </div>
          </article>

          <article className="step-section">
            <div className="step-content">
              <p className="step-number">02</p>
              <h3>Run  Glint</h3>
              <p>Go to Launchpad and run Glint. Add your Google account.</p>
            </div>
            <div className="step-shot" style={{height:'400px'}} role="img" aria-label="Main Window">
              <img src='main-1.png' style={{boxShadow:'none'}}/>
            </div>
          </article>
             <article className="step-section">
            <div className="step-content">
              <p className="step-number">03</p>
              <h3>Sign-in with Google</h3>
              <p>Authorize Glint with Google. You need to do this only once.</p>
            </div>
            <div className="step-shot" style={{height:'350px'}} role="img" aria-label="Google Authentication">
              <img src='google-permissions.png' style={{boxShadow:'none'}}/>
            </div>
          </article>

          <article className="step-section">
            <div className="step-content">
              <p className="step-number">04</p>
              <h3>Select a .docx or .xlsx file</h3>
              <p>In Finder, click a supported Microsoft Office file you want to work on. Use the context menu to open with Glint. You can also drag files into the app or into the Dock icon.</p>
            </div>
            <div className="step-shot" style={{height:'300px'}} role="img" aria-label="Open file">
              <img src='finder.png' />
            </div>
          </article>

          <article className="step-section">
            <div className="step-content">
              <p className="step-number">05</p>
              <h3>Files open up in Google Docs</h3>
              <p>Your document gets uploaded and opens in Google Docs. (Opening the same file again goes back to the same document in Google Docs without re-uploading it)</p>
            </div>
            <div className="step-shot" style={{height:'300px'}} role="img" aria-label="Edit file">
              <img src='chrome.jpg' />
            </div>
          </article>
          <article className="step-section">
            <div className="step-content">
              <p className="step-number">06</p>
              <h3>Setup defaults</h3>
              <p>Set Glint as the default app for opening documents under preferences. So you just need to double-click your files to open in Google Docs. Hit Cmd+, to get the preferences panel.</p>
            </div>
            <div className="step-shot" style={{height:'300px'}} role="img" aria-label="Prefrences">
              <img src='prefs.png' style={{boxShadow:'none'}} />
            </div>
          </article>
         
        </div>
      </section>
        <section className="faq" aria-labelledby="FAQ">
        <div className="faq-header">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Is this safe?</h2>
          <p>Yes. None of your data goes anywhere else besides Google. There is no other cloud component. This is straight from your Mac to Google Docs.</p>

          <h2>Can I link multiple Google Accounts.</h2>
          <p>Sure. Just click 'Add Account' or choose 'Add Account' from the File Menu. If you have multiple Google accounts you will be prompted to select one when opening a file.</p>

          <h2>What happens if I open the same file from Finder twice?</h2>
          <p>The first time you open the file it gets uploaded to Google Docs and a new document is created in your drive. The next time you open it, it will open the same document that was created earlier.</p>

          <h2>What if I want to open a particular document locally?</h2>
          <p>If Glint is your default app for documents, you can always right-click the file and choose another app.</p>


          <h2>How does it know to open the same document. What happens if I duplicate it or move it in Finder?</h2>
          <p>Glint uses macOS file system attributes to store the Google account and url. So if you duplicate the file, the Google Doc url is also duplicated.</p>

          </div>
        </section>
    </>
  );
}
