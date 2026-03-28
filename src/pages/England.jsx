import React from 'react';
import CountryTemplate from '../components/CountryTemplate';
import { useLanguage } from '../components/LanguageContext';

const England = () => {
    const { t } = useLanguage();
    return (
        <CountryTemplate
            name={t.countries.england.name}
            description={t.countries.england.desc}
            timezone="Europe/London"
            coordinates={{ lat: 51.5074, lng: -0.1278 }}
            galleryLink="/gallery/england"
        />
    );
};

export default England;
