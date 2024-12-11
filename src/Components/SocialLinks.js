import React from "react";
export default function SocialLinks({ isBackgroundGreen }) {
  return (
    <div className="social-links">
      <a
        href="mailto:Kilaueasolutions@gmail.com"
        className={`social-link ${isBackgroundGreen ? "bright-outline" : ""}`}
      >
        <img src={"email.webp"} alt="Email" />
      </a>
      <a
        href="tel:808-755-1887"
        className={`social-link ${isBackgroundGreen ? "bright-outline" : ""}`}
      >
        <img src={"phone.webp"} alt="Phone" />
      </a>
    </div>
  );
}
