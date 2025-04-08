import React, { useState } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import NavBar from "./Components/NavBar.js";
import Contact_Form from "./Components/ContactForm.js";
import TransformationSection from "./Components/Transformation.js";
import Gallery from "./Components/Gallery.js";
import Hero from "./Components/Hero.js";
import Services from "./Components/Services.js";
import FireHazard from "./Components/FireHazard.js";
// import Testimonial from "./Components/Testimonial.js";
import { AccessibilityWidget } from "react-accessibility";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`landing-page ${isMenuOpen ? "menu-open" : ""}`}>
      <AccessibilityWidget />
      <NavBar toggleMenu={toggleMenu} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kilauea Solutions Inc.</title>
        <meta
          name="description"
          content="Kauai Steep Slope Mowing.
Transforming landscapes with precision. Get your free estimate today!"
        />
        <meta
          name="keywords"
          content="Kauai, steep slope mowing, landscaping, grass mowing, bushes, trees, wet conditions, remote mower"
        />
        <meta name="author" content="Niv" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org/",
            "@type": "Organization",
            name: "Kilauea Solutions Inc.",
            logo: "https://kauaislopemowing.com/logo_1.webp",
            url: "https://kauaislopemowing.com/",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Hawaii,Kauai",
              addressCountry: "United States",
            },
            sameAs: [],
          })}
        </script>
      </Helmet>
      <Hero />
      <Services />
      <FireHazard />
      {/* <Testimonial/> */}
      <Gallery />
      <TransformationSection />
      <Contact_Form />
      <p className="contact-info">
        For inquiries and estimates, contact us at{" "}
        <a href="mailto:Kilaueasolutions@gmail.com">
          Kilaueasolutions@gmail.com
        </a>
      </p>
    </div>
  );
}
