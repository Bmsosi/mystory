import React from 'react';
import CountryTemplate from '../components/CountryTemplate';
import { useLanguage } from '../components/LanguageContext';

const Rwanda = () => {
    const { t } = useLanguage();
    return (
        <CountryTemplate
            name={t.countries.rwanda.name}
            description={t.countries.rwanda.desc}
            timezone="Africa/Kigali"
            coordinates={{ lat: -1.9403, lng: 29.8739 }}
        />
    );
};

export default Rwanda;
