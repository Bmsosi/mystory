import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';
import ScrollProgress from '../components/ScrollProgress';
import ScrollToTop from '../components/ScrollToTop';

const Journal = () => {
    const { t, language, setLanguage } = useLanguage();
    const [isLangOpen, setIsLangOpen] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectedStory, setSelectedStory] = React.useState(null);

    useEffect(() => {
        document.title = `${t.journal.title} | My Story Journey`;
    }, [language, t]);

    const toggleLang = () => setIsLangOpen(!isLangOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setIsLangOpen(false);
    };

    const posts = [
        {
            id: 'canada',
            title: language === 'en' ? "The Arrival in Canada" :
                language === 'sw' ? "Kufika Canada" :
                    language === 'es' ? "La llegada a Canadá" : "Gushika muri Kanada",
            date: "February 2024",
            excerpt: t.journey.canada.desc,
            content: t.journey.canada.desc,
            category: "Milestone"
        },
        {
            id: 'mexico',
            title: t.journal.posts.mexico.title,
            date: t.journal.posts.mexico.date,
            excerpt: t.journal.posts.mexico.excerpt,
            content: t.journal.posts.mexico.content,
            category: "Travel"
        }
    ];

    return (
        <div className="journal-page">
            <ScrollProgress />
            <nav className="navbar">
                <div className="nav-content">
                    <Link to="/" className="logo-brand">
                        <div className="globe-wrapper">
                            <span className="globe-icon">🌐</span>
                            <span className="logo-title">My Story</span>
                        </div>
                        <span className="logo-curly bottom">Muco A.</span>
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
                        <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>{t.nav.gallery}</Link>
                    </div>
                </div>
            </nav>

            <main className="container page-content">
                <header className="journal-header glass">
                    <h1>{t.journal.title}</h1>
                    <p>{t.journal.subtext}</p>
                </header>

                <div className="journal-grid">
                    {posts.map(post => (
                        <article key={post.id} className="journal-card glass">
                            <div className="journal-category">{post.category}</div>
                            <h2>{post.title}</h2>
                            <div className="journal-date">{post.date}</div>
                            <p>{post.excerpt}</p>
                            <button
                                className="read-more-btn"
                                onClick={() => setSelectedStory(post)}
                            >
                                {t.journal.readMore} →
                            </button>
                        </article>
                    ))}
                </div>

                {selectedStory && (
                    <div className="story-modal-overlay" onClick={() => setSelectedStory(null)}>
                        <div className="story-modal glass" onClick={e => e.stopPropagation()}>
                            <button className="close-modal" onClick={() => setSelectedStory(null)}>×</button>
                            <div className="modal-header">
                                <span className="journal-category">{selectedStory.category}</span>
                                <h1>{selectedStory.title}</h1>
                                <p className="modal-date">{selectedStory.date}</p>
                            </div>
                            <div className="modal-body">
                                <p className="story-text">{selectedStory.content}</p>
                            </div>
                            <div className="modal-footer">
                                <button className="cta-button" onClick={() => setSelectedStory(null)}>Back to Journal</button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="journal-empty glass">
                    <p>{t.journal.comingSoon}</p>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <Link to="/" className="cta-button">{t.nav.home}</Link>
                </div>
            </main>
            <ScrollToTop />
        </div>
    );
};

export default Journal;
