import React from 'react';
import CountryTemplate from '../components/CountryTemplate';
import { useLanguage } from '../components/LanguageContext';

const Kenya = () => {
    const { t } = useLanguage();
    return (
        <CountryTemplate
            name={t.countries.kenya.name}
            description={t.countries.kenya.desc}
            timezone="Africa/Nairobi"
            coordinates={{ lat: -1.2921, lng: 36.8219 }}
        />
    );
};

export default Kenya;
