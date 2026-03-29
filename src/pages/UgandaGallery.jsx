import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";
import { useLanguage } from "../components/LanguageContext";

const UgandaGallery = () => {
  const { t, language } = useLanguage();
  const galleryTitle = `${t.countries.uganda.name} Gallery Images`;

  useEffect(() => {
    document.title = `${galleryTitle} | My Story Journey`;
  }, [galleryTitle, language]);

  return (
    <div className="gallery-page">
      <ScrollProgress />
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo-brand">
            <div className="globe-wrapper">
              <span className="globe-icon">🌐</span>
              <span className="logo-title">My Story</span>
            </div>
            <span className="logo-curly bottom">Muco A.</span>
          </Link>
          <div className="nav-links">
            <Link to="/uganda">Back to Uganda</Link>
            <Link to="/">{t.nav.home}</Link>
          </div>
        </div>
      </nav>
      <main className="container page-content">
        <section className="glass" style={{ padding: "3rem", marginTop: "2rem" }}>
          <h1>{galleryTitle}</h1>
          <div
            className="gallery-grid animated-grid-bg"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2.5rem",
              padding: "2.5rem",
              borderRadius: "16px",
            }}
          >
            <div
              style={{
                gridColumn: "1/-1",
                textAlign: "center",
                padding: "3rem",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <p>Images coming soon.</p>
            </div>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link to="/uganda" className="cta-button">
              Back to Uganda
            </Link>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default UgandaGallery;
