import React from "react";
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_NUMBER } from "../constants";

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <button onClick={onBack} className="legal-back-btn">
          ← वापस होम पर जाएं (Back to Home)
        </button>
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-subtitle">
          Last Updated: {new Date().toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>

      <div className="legal-card">
        <section className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>{SITE_NAME}</strong> (<a href={`https://${SITE_DOMAIN}`} target="_blank" rel="noopener noreferrer">{SITE_DOMAIN}</a>).
            We respect your privacy and are committed to protecting any personal information you may provide while using our website.
            This Privacy Policy outlines the types of information we collect, how it is utilized, and your choices regarding your data.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>
            We may collect both non-personal identification information and personal information in the following ways:
          </p>
          <ul>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, operating system, IP address, device type, ISP, referring/exit pages, and clickstream data collected automatically via server logs and analytics.
            </li>
            <li>
              <strong>Voluntarily Provided Information:</strong> When you contact our support team or representatives via WhatsApp, Telegram, or email, we may retain your phone number, message history, and queries to provide assistance.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Cookies and Web Beacons</h2>
          <p>
            Like any other website, {SITE_NAME} uses &quot;cookies&quot;. These cookies store information including visitors&apos; preferences and the pages on the website that the visitor accessed or visited.
            The information is used to optimize user experience by customizing web page content based on browser type or other technical parameters.
          </p>
          <p>
            You can choose to disable cookies through your individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers&apos; respective websites.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. How We Use Collected Information</h2>
          <p>The information collected may be used to:</p>
          <ul>
            <li>Operate and maintain the website and display live information accurately.</li>
            <li>Improve, personalize, and expand our website performance and user experience.</li>
            <li>Understand and analyze how visitors interact with our services and charts.</li>
            <li>Respond to customer queries, support requests, and communication.</li>
            <li>Detect, prevent, and address technical or security issues.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Third-Party Links &amp; Advertisements</h2>
          <p>
            Our website may contain links to third-party websites, promotional banners, or messaging services (e.g., WhatsApp, Telegram, external portals).
            Please note that we have no control over the privacy practices, content, or policies of external websites. We strongly encourage you to review the Privacy Policy of every site you visit.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Data Security</h2>
          <p>
            We adopt standard data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of non-personal or communicated data.
            However, please be aware that no transmission over the internet or electronic storage method is 100% secure.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Children&apos;s Information</h2>
          <p>
            {SITE_NAME} is intended solely for individuals who are at least 18 years of age or the age of majority in their respective jurisdiction. We do not knowingly collect any personal identifiable information from children under the age of 18. If you believe your child provided this kind of information on our website, please contact us immediately.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Consent &amp; Updates</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms. We reserve the right to amend or update this policy at any time without prior notice.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Contact Us</h2>
          <p>
            If you have questions or suggestions regarding our Privacy Policy, feel free to reach out to our team via WhatsApp at <strong>{WHATSAPP_NUMBER}</strong> or through our official channels on {SITE_DOMAIN}.
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
