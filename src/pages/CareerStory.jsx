import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";

const CareerStory = () => {
  const { t } = useLanguage();

  return (
    <div className="career-story-page">
      <section className="career-story-hero">
        <h1>{t.careerPage.title}</h1>
        <p>{t.careerPage.subtitle}</p>
      </section>
      <section className="career-story-grid">
        {t.careerPage.sections.map((entry) => (
          <article key={entry.title} className="career-story-card glass">
            <h2>{entry.title}</h2>
            <span className="card-meta">{entry.duration}</span>
            <p>{entry.desc}</p>
            {entry.story && (
              <p className="career-story-story">{entry.story}</p>
            )}
            {entry.languages && entry.languages.length > 0 && (
              <>
                <span className="card-meta">{entry.languagesHeader}</span>
                <ul className="career-story-list">
                  {entry.languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </>
            )}
            {entry.details && entry.details.length > 0 && (
              <>
                <span className="card-meta">{entry.detailsHeader}</span>
                <ul className="career-story-list">
                  {entry.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </>
            )}
          </article>
        ))}
      </section>
      <Link to="/" className="back-home-link">
        {t.careerPage.backHome}
      </Link>
    </div>
  );
};

export default CareerStory;
