import React from 'react';
import CountryTemplate from '../components/CountryTemplate';
import { useLanguage } from '../components/LanguageContext';

const Canada = () => {
    const { t } = useLanguage();
    return (
        <CountryTemplate
            name={t.countries.canada.name}
            description={t.countries.canada.desc}
            timezone="America/Toronto"
            coordinates={{ lat: 43.6532, lng: -79.3832 }}
            themeClass="theme-canada"
            reverseLayout={true}
            galleryLink="/gallery/canada"
        />
    );
};

export default Canada;
