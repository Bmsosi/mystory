import React from 'react';
import CountryTemplate from '../components/CountryTemplate';
import { useLanguage } from '../components/LanguageContext';

const Uganda = () => {
    const { t } = useLanguage();
    return (
        <CountryTemplate
            name={t.countries.uganda.name}
            description={t.countries.uganda.desc}
            timezone="Africa/Kampala"
            coordinates={{ lat: 0.3476, lng: 32.5825 }}
            galleryLink={null}
            galleryComingSoon
        />
    );
};

export default Uganda;
