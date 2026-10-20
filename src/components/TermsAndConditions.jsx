import React from "react";
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_NUMBER } from "../constants";

export default function TermsAndConditions({ onBack }) {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <button onClick={onBack} className="legal-back-btn">
          ← वापस होम पर जाएं (Back to Home)
        </button>
        <h1 className="legal-title">Terms &amp; Conditions</h1>
        <p className="legal-subtitle">
          Last Updated: {new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>

      <div className="legal-card">
        <section className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and browsing <strong>{SITE_NAME}</strong> (<a href={`https://${SITE_DOMAIN}`} target="_blank" rel="noopener noreferrer">{SITE_DOMAIN}</a>),
            you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local, state, or national laws.
            If you disagree with any part of these terms, you must discontinue the use of this website immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Informational &amp; Entertainment Purpose Only</h2>
          <p>
            All content, numerical records, daily updates, charts, tips, and articles published on {SITE_NAME} are provided strictly for <strong>informational, historical record-keeping, and entertainment purposes</strong>.
          </p>
          <p>
            This website does not run, operate, host, or participate in any illegal betting, gambling, or wagering activities. We do not solicit bets or encourage users to invest money in speculative games.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Eligibility &amp; Age Restriction</h2>
          <p>
            You must be at least <strong>18 years of age</strong> (or the legal age of majority in your jurisdiction) to browse this website.
            If you reside in a region, state, or country where viewing gaming charts or discussions is prohibited by law, you are strictly advised to exit this website immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Accuracy of Results and Data</h2>
          <p>
            While we strive to publish accurate and timely results and historical charts, {SITE_NAME} makes no warranties, expressed or implied, regarding the completeness, timeliness, or absolute accuracy of any information displayed.
            We are not responsible for typographical errors, server downtime, delayed updates, or transmission failures.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. User Conduct &amp; Prohibited Uses</h2>
          <p>Users agree not to:</p>
          <ul>
            <li>Use the website for any unlawful, fraudulent, or harmful purpose.</li>
            <li>Attempt to breach the security of the server, reverse engineer, or disrupt site availability.</li>
            <li>Use automated scrapers, bots, or data harvesting mechanisms without prior consent.</li>
            <li>Misrepresent affiliation with {SITE_NAME} or its administrators.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Third-Party Advertisements &amp; Links</h2>
          <p>
            Our website displays advertisements, banners, and links directing to external third parties (e.g., Telegram channels, WhatsApp contacts, third-party gaming portals).
            We do not endorse, verify, or assume responsibility for transactions, interactions, or monetary arrangements made with third-party promoters or advertisers. All interactions are strictly at your own discretion and risk.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall {SITE_NAME}, its owners, partners, affiliates, or developers be liable for any direct, indirect, incidental, consequential, or punitive damages (including but not limited to loss of profits, financial loss, or personal distress) arising out of your access to, use of, or inability to use this website.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Modifications to Terms</h2>
          <p>
            We reserve the right to revise or modify these Terms and Conditions at any time without prior announcement. By continuing to use the platform, you acknowledge and agree to any revised terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Contact Information</h2>
          <p>
            For inquiries regarding these Terms and Conditions, please contact us via WhatsApp at <strong>{WHATSAPP_NUMBER}</strong>.
          </p>
        </section>

        <div className="legal-actions">
          <button onClick={onBack} className="wave-btn">
            ← वापस मुख्य पृष्ठ (Return to Landing Page)
          </button>
        </div>
      </div>
    </div>
  );
}
