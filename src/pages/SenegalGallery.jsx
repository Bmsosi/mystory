import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";
import { useLanguage } from "../components/LanguageContext";

const SenegalGallery = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    document.title = `${t.countries.senegal.galleryTitle} | My Story Journey`;
  }, [language, t]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const images = import.meta.glob("../senegal_gallery/*.{jpg,jpeg,png,JPG}", {
    eager: true,
    query: "?url",
    import: "default",
  });
  const displayImages = Object.values(images);
  const visibleImages = displayImages.slice(0, visibleCount);
  const hasMore = visibleCount < displayImages.length;
  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, displayImages.length));
  };

  const isFaceImage = (src) => {
    if (typeof src !== "string") return false;
    const faceKeywords = [
      "dakar",
      "goree",
      "senegal",
      "boat",
      "harbor",
      "market",
      "festival",
      "portrait",
      "street",
    ];
    return faceKeywords.some((keyword) =>
      src.toLowerCase().includes(keyword.toLowerCase()),
    );
  };

  const wideIndices = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49];

  return (
    <div className="gallery-page theme-senegal">
      <ScrollProgress />
      <nav className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo-brand">
            <span className="logo-curly top">Muco</span>
            <div className="globe-wrapper">
              <span className="globe-icon">🌐</span>
              <span className="logo-title">My Story</span>
            </div>
            <span className="logo-curly bottom">Journey</span>
          </Link>
          <div className="nav-links">
            <Link to="/senegal">{t.countries.senegal.backToCountry}</Link>
            <Link to="/">{t.nav.home}</Link>
          </div>
        </div>
      </nav>
      <main className="container page-content">
        <section className="glass" style={{ padding: "3rem", marginTop: "2rem" }}>
          <h1>{t.countries.senegal.galleryTitle}</h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "2rem",
            }}
          >
            {t.countries.senegal.gallerySub}
          </p>

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
            {visibleImages.length > 0 ? (
              visibleImages.map((src, index) => {
                const isWide = wideIndices.includes(index + 1);
                return (
                  <div
                    key={index}
                    className={`gallery-item-wrapper premium-border ${isWide ? "span-2" : ""}`}
                    onClick={() => setSelectedImage(src)}
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      background: "rgba(0,0,0,0.3)",
                      height: isWide ? "400px" : "300px",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Senegal memory ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: isFaceImage(src) ? "top" : "center",
                        display: "block",
                      }}
                    />
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  gridColumn: "1/-1",
                  textAlign: "center",
                  padding: "3rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <p>{t.gallery.imageComing}</p>
              </div>
            )}
          </div>
          {hasMore && (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button className="view-more-button" onClick={handleViewMore}>
                {t.gallery.viewMore}
              </button>
            </div>
          )}

          <div style={{ marginTop: "3rem" }}>
            <Link to="/senegal" className="cta-button">
              {t.countries.senegal.backToCountry}
            </Link>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen memory"
              className="lightbox-image"
            />
          </div>
        </div>
      )}

      <ScrollToTop />
    </div>
  );
};

export default SenegalGallery;
