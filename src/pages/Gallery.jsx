import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";
import ScrollToTop from "../components/ScrollToTop";
import { useLanguage } from "../components/LanguageContext";

// Import flag/country icons for the hub
import burundiImg from "../countryimages/burundi.png";
import egyptImg from "../countryimages/egypt.png";
import mexicoImg from "../countryimages/mexico0.png";
import englandImg from "../countryimages/england.png";
import kenyaImg from "../countryimages/kenya.png";
import canadaImg from "../countryimages/canada.png";
import ugandaImg from "../countryimages/uganda.png";
import rwandaImg from "../countryimages/rwanda.png";
import tanzaniaImg from "../countryimages/tanzania.png";
import senegalImg from "../countryimages/senegal.png";
import scotlandImg from "../countryimages/scotland.png";

const Gallery = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = `${t.nav.gallery} | My Story Journey`;
  }, [language, t]);

  // opportunistically compute mexico image count from subfolders (will be zero if no files or folders exist yet)
  const mexicoCityImgs = import.meta.glob(
    "../mexico_city_gallery/*.{jpg,jpeg,png,JPG}",
    { eager: true, query: "?url", import: "default" },
  );
  const oaxacaImgs = import.meta.glob(
    "../oaxaca_gallery/*.{jpg,jpeg,png,JPG}",
    { eager: true, query: "?url", import: "default" },
  );
  const chiapasImgs = import.meta.glob(
    "../chiapas_gallery/*.{jpg,jpeg,png,JPG}",
    { eager: true, query: "?url", import: "default" },
  );
  const queretaroImgs = import.meta.glob(
    "../queretaro_gallery/*.{jpg,jpeg,png,JPG}",
    { eager: true, query: "?url", import: "default" },
  );
  const mexicoCount =
    Object.values(mexicoCityImgs).length +
    Object.values(oaxacaImgs).length +
    Object.values(chiapasImgs).length +
    Object.values(queretaroImgs).length;
  const canadaImgs = import.meta.glob("../canada_gallery/*.{jpg,jpeg,png,JPG}", {
    eager: true,
    query: "?url",
    import: "default",
  });
  const canadaCount = Object.values(canadaImgs).length;
  const senegalImgs = import.meta.glob("../senegal_gallery/*.{jpg,jpeg,png,JPG}", {
    eager: true,
    query: "?url",
    import: "default",
  });
  const senegalCount = Object.values(senegalImgs).length;

  const galleries = [
    {
      name: t.countries.burundi.name,
      path: "/gallery/burundi",
      image: burundiImg,
      count: 52,
    },
    {
      name: t.countries.egypt.name,
      path: "/gallery/egypt",
      image: egyptImg,
      count: 37,
    },
    {
      name: t.countries.mexico.name,
      path: "/gallery/mexico",
      image: mexicoImg,
      count: mexicoCount,
    },
    { name: t.countries.england.name, path: "#", image: englandImg, count: 0 },
    { name: t.countries.kenya.name, path: "#", image: kenyaImg, count: 0 },
    { name: t.countries.canada.name, path: "/gallery/canada", image: canadaImg, count: canadaCount },
    { name: t.countries.uganda.name, path: "#", image: ugandaImg, count: 0 },
    { name: t.countries.rwanda.name, path: "#", image: rwandaImg, count: 0 },
    {
      name: t.countries.tanzania.name,
      path: "#",
      image: tanzaniaImg,
      count: 0,
    },
    { name: t.countries.senegal.name, path: "/gallery/senegal", image: senegalImg, count: senegalCount },
    {
      name: t.countries.scotland.name,
      path: "#",
      image: scotlandImg,
      count: 0,
    },
  ];

  return (
    <div className="gallery-page">
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
            <Link to="/">{t.nav.home}</Link>
          </div>
        </div>
      </nav>
      <main className="container page-content">
        <section
          className="glass"
          style={{ padding: "3rem", marginTop: "2rem" }}
        >
          <h1>{t.nav.gallery}</h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "3rem",
            }}
          >
            {t.galleryHub.subtext}
          </p>

          <div
            className="gallery-hub-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {galleries.map((g) => (
              <Link
                key={g.name}
                to={g.path}
                className="gallery-card-link"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="gallery-hub-card glass"
                  style={{
                    padding: "1.5rem",
                    textAlign: "center",
                    transition: "transform 0.3s ease, border-color 0.3s ease",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: g.path !== "#" ? "pointer" : "default",
                    opacity: g.path !== "#" ? 1 : 0.6,
                  }}
                >
                  <img
                    src={g.image}
                    alt={g.name}
                    style={{
                      width: "100px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      marginBottom: "1rem",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    }}
                  />
                  <h3 style={{ margin: "0.5rem 0", color: "white" }}>
                    {g.name}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {g.count > 0
                      ? `${g.count} ${t.galleryHub.photos}`
                      : t.galleryHub.comingSoon}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "4rem" }}>
            <Link to="/" className="cta-button">
              {t.nav.home}
            </Link>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Gallery;
