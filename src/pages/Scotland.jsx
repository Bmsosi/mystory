import React from 'react';
import CountryTemplate from '../components/CountryTemplate';
import { useLanguage } from '../components/LanguageContext';

const Scotland = () => {
    const { t } = useLanguage();
    return (
        <CountryTemplate
            name={t.countries.scotland.name}
            description={t.countries.scotland.desc}
            timezone="Europe/London"
            coordinates={{ lat: 55.9533, lng: -3.1883 }}
            galleryLink="/gallery/scotland"
        />
    );
};

export default Scotland;
