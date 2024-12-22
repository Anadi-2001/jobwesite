
import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  // State to toggle the visibility of the disclaimer
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // State to keep track of the active social media icon
  const [activeSocial, setActiveSocial] = useState("");

  // Toggle disclaimer visibility
  const toggleDisclaimer = () => {
    setShowDisclaimer((prev) => !prev);
  };

  // Handle social media icon click
  const handleSocialClick = (platform) => {
    setActiveSocial(platform);
    alert(`You clicked on ${platform}`);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <button className="toggle-button" onClick={toggleDisclaimer}>
          {showDisclaimer ? "Hide Disclaimer" : "Show Disclaimer"}
        </button>
        {showDisclaimer && (
          <p>
            <strong>Disclaimer:</strong> All Trademarks and Logos are the
            property of their respective owners, depicted here purely for
            representation purposes. Jobringer.com has taken all reasonable
            steps to ensure that information on this site is genuine. Job
            Applicants are advised to evaluate independently. Jobringer.com
            shall not have any responsibility in this regard. All Jobseeker
            services are strictly designed & meant only for job search
            assistance and to maximize the chances for the jobseekers to get
            their dream job. All Job Seeker Credentials and Employment
            Opportunities are subject to individual merit & evaluation. We do
            not guarantee any job to any jobseeker.
          </p>
        )}
      </div>
      <div className="footer-middle">
        <span>Recognized By</span>
        <span className="startup-india">#startupindia</span>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#terms">Terms and conditions</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#refund">Refund / Cancellation Policy</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#faq">FAQ</a>
          <a href="#blogs">Blogs</a>
        </div>
        <div className="footer-social">
          <span>Follow us on</span>
          <a
            href="#whatsapp"
            className={`icon whatsapp ${activeSocial === "whatsapp" ? "active" : ""}`}
            onClick={() => handleSocialClick("whatsapp")}
          ></a>
          <a
            href="#facebook"
            className={`icon facebook ${activeSocial === "facebook" ? "active" : ""}`}
            onClick={() => handleSocialClick("facebook")}
          ></a>
          <a
            href="#twitter"
            className={`icon twitter ${activeSocial === "twitter" ? "active" : ""}`}
            onClick={() => handleSocialClick("twitter")}
          ></a>
          <a
            href="#linkedin"
            className={`icon linkedin ${activeSocial === "linkedin" ? "active" : ""}`}
            onClick={() => handleSocialClick("linkedin")}
          ></a>
          <a
            href="#instagram"
            className={`icon instagram ${activeSocial === "instagram" ? "active" : ""}`}
            onClick={() => handleSocialClick("instagram")}
          ></a>
          <a
            href="#youtube"
            className={`icon youtube ${activeSocial === "youtube" ? "active" : ""}`}
            onClick={() => handleSocialClick("youtube")}
          ></a>
          <a
            href="#telegram"
            className={`icon telegram ${activeSocial === "telegram" ? "active" : ""}`}
            onClick={() => handleSocialClick("telegram")}
          ></a>
        </div>
      </div>
      <div className="footer-copy">
        <p>© All Rights Reserved @ 2024 Jobtech Ventures Private Limited.</p>
      </div>
    </footer>
  );
};

export default Footer;
