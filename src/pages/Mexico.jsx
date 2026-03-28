import React from "react";
import CountryTemplate from "../components/CountryTemplate";
import { useLanguage } from "../components/LanguageContext";

const Mexico = () => {
  const { t } = useLanguage();
  return (
    <CountryTemplate
      name={t.countries.mexico.name}
      description={t.countries.mexico.desc}
      timezone="America/Mexico_City"
      coordinates={{ lat: 19.4326, lng: -99.1332 }}
      themeClass="theme-mexico"
      galleryLink="/gallery/mexico"
      reverseLayout={true}
    />
  );
};

export default Mexico;
