import React from 'react';
import CountryTemplate from '../components/CountryTemplate';
import { useLanguage } from '../components/LanguageContext';

const Egypt = () => {
    const { t } = useLanguage();
    return (
        <CountryTemplate
            name={t.countries.egypt.name}
            description={t.countries.egypt.desc}
            timezone="Africa/Cairo"
            coordinates={{ lat: 30.0444, lng: 31.2357 }}
            themeClass="theme-egypt"
            galleryLink="/gallery/egypt"
        />
    );
};

export default Egypt;
