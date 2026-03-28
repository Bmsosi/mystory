import React from 'react';
import CountryTemplate from '../components/CountryTemplate';
import { useLanguage } from '../components/LanguageContext';

const Senegal = () => {
    const { t } = useLanguage();
    return (
    <CountryTemplate
      name={t.countries.senegal.name}
      description={t.countries.senegal.desc}
      timezone="Africa/Dakar"
      coordinates={{ lat: 14.7167, lng: -17.4677 }}
      galleryLink="/gallery/senegal"
      themeClass="theme-senegal"
    />
    );
};

export default Senegal;
