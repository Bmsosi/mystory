import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";
import { useLanguage } from "../components/LanguageContext";

const MexicoGallery = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = `${t.countries.mexico.galleryTitle} | My Story Journey`;
  }, [language, t]);

  // load all images from each region folder so we can show full grids
  const mexicoCityObjs = import.meta.glob(
    "../mexico_city_gallery/*.{jpg,jpeg,png,JPG}",
    { eager: true, query: "?url", import: "default" },
  );
  const oaxacaObjs = import.meta.glob(
    "../oaxaca_gallery/*.{jpg,jpeg,png,JPG}",
    { eager: true, query: "?url", import: "default" },
  );
  const chiapasObjs = import.meta.glob(
    "../chiapas_gallery/*.{jpg,jpeg,png,JPG}",
    { eager: true, query: "?url", import: "default" },
  );
  const queretaroObjs = import.meta.glob(
    "../queretaro_gallery/*.{jpg,jpeg,png,JPG}",
    { eager: true, query: "?url", import: "default" },
  );

  const mexicoCityImgs = Object.values(mexicoCityObjs);
  const oaxacaImgs = Object.values(oaxacaObjs);
  const chiapasImgs = Object.values(chiapasObjs);
  const queretaroImgs = Object.values(queretaroObjs);

  const sections = [
    {
      key: "mexicoCity",
      title: t.countries.mexico.subgalleries.mexicoCity.title,
      desc: t.countries.mexico.subgalleries.mexicoCity.desc,
      images: mexicoCityImgs,
    },
    {
      key: "oaxaca",
      title: t.countries.mexico.subgalleries.oaxaca.title,
      desc: t.countries.mexico.subgalleries.oaxaca.desc,
      images: oaxacaImgs,
    },
    {
      key: "chiapas",
      title: t.countries.mexico.subgalleries.chiapas.title,
      desc: t.countries.mexico.subgalleries.chiapas.desc,
      images: chiapasImgs,
    },
    {
      key: "queretaro",
      title: t.countries.mexico.subgalleries.queretaro.title,
      desc: t.countries.mexico.subgalleries.queretaro.desc,
      images: queretaroImgs,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCounts, setVisibleCounts] = useState(() => {
    const initial = {};
    sections.forEach((section) => {
      initial[section.key] = 10;
    });
    return initial;
  });

  const handleViewMore = (sectionKey, total) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [sectionKey]: Math.min(prev[sectionKey] + 5, total),
    }));
  };

  const sectionBlocks = sections.map((s) => {
    const countForSection = Math.min(
      visibleCounts[s.key] ?? 10,
      s.images.length,
    );
    const visibleImages = s.images.slice(0, countForSection);
    const hasMoreSection = countForSection < s.images.length;

    return (
      <div key={s.key} style={{ marginBottom: "3rem" }}>
        <h2 style={{ color: "white", marginBottom: "0.5rem" }}>{s.title}</h2>
        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1rem" }}>
          {s.desc}
        </p>
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {visibleImages.length > 0 ? (
            visibleImages.map((src, idx) => (
              <div
                key={idx}
                className="gallery-item-wrapper premium-border"
                onClick={() => setSelectedImage(src)}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "rgba(0,0,0,0.3)",
                  height: "300px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={src}
                  alt={`${s.title} ${idx + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))
          ) : (
            <div
              style={{
                width: "100%",
                height: "180px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {t.gallery.imageComing}
            </div>
          )}
        </div>
        {hasMoreSection && (
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <button
              className="view-more-button"
              onClick={() => handleViewMore(s.key, s.images.length)}
            >
              {t.gallery.viewMore}
            </button>
          </div>
        )}
      </div>
    );
  });

  // lightbox escape key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="gallery-page theme-mexico">
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
            <Link to="/mexico">{t.countries.mexico.backToCountry}</Link>
            <Link to="/">{t.nav.home}</Link>
          </div>
        </div>
      </nav>
      <main className="container page-content">
        <section
          className="glass"
          style={{ padding: "3rem", marginTop: "2rem" }}
        >
          <h1>{t.countries.mexico.galleryTitle}</h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "2rem",
            }}
          >
            {t.countries.mexico.gallerySub}
          </p>

          {sectionBlocks}

          <div style={{ marginTop: "3rem" }}>
            <Link to="/mexico" className="cta-button">
              {t.countries.mexico.backToCountry}
            </Link>
          </div>
        </section>
      </main>
      {/* lightbox overlay */}
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

export default MexicoGallery;
