import React from 'react';
import CountryTemplate from '../components/CountryTemplate';
import { useLanguage } from '../components/LanguageContext';

const Burundi = () => {
    const { t } = useLanguage();
    return (
        <CountryTemplate
            name={t.countries.burundi.name}
            description={t.countries.burundi.desc}
            timezone="Africa/Bujumbura"
            coordinates={{ lat: -3.3731, lng: 29.9189 }}
            galleryLink="/gallery/burundi"
            themeClass="theme-burundi"
        />
    );
};

export default Burundi;
