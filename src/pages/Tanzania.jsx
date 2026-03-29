import React from 'react';
import CountryTemplate from '../components/CountryTemplate';
import { useLanguage } from '../components/LanguageContext';

const Tanzania = () => {
    const { t } = useLanguage();
    return (
        <CountryTemplate
            name={t.countries.tanzania.name}
            description={t.countries.tanzania.desc}
            timezone="Africa/Dar_es_Salaam"
            coordinates={{ lat: -6.7924, lng: 39.2083 }}
            galleryLink={null}
            galleryComingSoon
        />
    );
};

export default Tanzania;
