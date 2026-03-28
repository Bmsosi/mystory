import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import ScrollProgress from './ScrollProgress';
import ScrollToTop from './ScrollToTop';

const CountryTemplate = ({ name, description, timezone, coordinates, galleryLink = "/gallery", themeClass = "", reverseLayout = false }) => {
    const [currentTime, setCurrentTime] = useState('');
    const [weather, setWeather] = useState({ temp: '...', condition: 'Loading...' });

    const { language, setLanguage, t } = useLanguage();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLang = () => setIsLangOpen(!isLangOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setIsLangOpen(false);
    };

    useEffect(() => {
        document.title = `${name} | My Story Journey`;
    }, [name, language, t]);

    useEffect(() => {
        // Update time every second
        const timer = setInterval(() => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            setCurrentTime(timeString);
        }, 1000);

        // Fetch weather from Open-Meteo (free, no API key required)
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lng}&current_weather=true`
                );
                const data = await response.json();
                if (data.current_weather) {
                    setWeather({
                        temp: Math.round(data.current_weather.temperature),
                        condition: 'Current Temperature'
                    });
                }
            } catch (error) {
                console.error("Error fetching weather:", error);
                setWeather({ temp: 'N/A', condition: 'Weather unavailable' });
            }
        };

        fetchWeather();
        return () => clearInterval(timer);
    }, [timezone, coordinates]);

    return (
        <div className={`country-page ${themeClass} bg-dots`}>
            <ScrollProgress />
            <nav className="navbar">
                <div className="nav-content">
                    <Link to="/" className="logo-brand">
                        <span className="logo-curly top">Muco</span>
                        <div className="globe-wrapper">
                            <span className="globe-icon">🌐</span>
                            <span className="logo-title">My Story</span>
                        </div>
                        <span className="logo-curly bottom">Journey</span>
                    </Link>
                    <div className="lang-container">
                        <button className="lang-toggle" onClick={toggleLang}>
                            Lang <span className={`arrow ${isLangOpen ? 'up' : 'down'}`}>▾</span>
                        </button>
                        <div className={`lang-dropdown ${isLangOpen ? 'active' : ''}`}>
                            <button onClick={() => changeLanguage('en')} className={language === 'en' ? 'active' : ''}>English</button>
                            <button onClick={() => changeLanguage('sw')} className={language === 'sw' ? 'active' : ''}>Swahili</button>
                            <button onClick={() => changeLanguage('es')} className={language === 'es' ? 'active' : ''}>Spanish</button>
                            <button onClick={() => changeLanguage('rn')} className={language === 'rn' ? 'active' : ''}>Kirundi</button>
                        </div>
                    </div>

                    <button className="hamburger d-mobile" onClick={toggleMenu} aria-label="Menu">
                        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
                    </button>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</Link>
                        <a href="/#projects" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</a>
                        <Link to="/journal" onClick={() => setIsMenuOpen(false)}>{t.nav.journal}</Link>
                        {galleryLink && <Link to={galleryLink} onClick={() => setIsMenuOpen(false)}>{t.nav.gallery}</Link>}
                    </div>
                </div>
            </nav>
            <main className="container page-content">
                <section className={`country-hero glass flex-row ${reverseLayout ? 'flex-row-reverse' : ''}`}>
                    <div className="hero-text-content">
                        <h1>{name}</h1>
                        <p className="country-description">{description}</p>

                        <div className="action-links">
                            <Link to={galleryLink} className="cta-button">{t.gallery.viewGallery}</Link>
                            <Link to="/" className="cta-button secondary">{t.gallery.backToHome}</Link>
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>{t.contact.localTime}</h3>
                            <p className="stat-value">{currentTime || t.contact.calculating}</p>
                        </div>
                        <div className="stat-card">
                            <h3>{t.contact.weather}</h3>
                            <p className="stat-value">{weather.temp}°C</p>
                            <p className="stat-label">{weather.condition}</p>
                        </div>
                    </div>
                </section>
            </main>
            <ScrollToTop />
        </div>
    );
};


export default CountryTemplate;
