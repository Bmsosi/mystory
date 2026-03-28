import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mucoImg from '../assets/muco.jpg';
import { translations, useLanguage } from '../components/LanguageContext';
import ScrollToTop from '../components/ScrollToTop';
import ScrollProgress from '../components/ScrollProgress';
import useScrollReveal from '../hooks/useScrollReveal';

// Import country images
import burundiImg from '../countryimages/burundi.png';
import egyptImg from '../countryimages/egypt.png';
import mexicoImg from '../countryimages/mexico0.png';
import englandImg from '../countryimages/england.png';
import kenyaImg from '../countryimages/kenya.png';
import canadaImg from '../countryimages/canada.png';
import ugandaImg from '../countryimages/uganda.png';
import rwandaImg from '../countryimages/rwanda.png';
import tanzaniaImg from '../countryimages/tanzania.png';
import senegalImg from '../countryimages/senegal.png';
import scotlandImg from '../countryimages/scotland.png';

function Home() {
    const { language, setLanguage, t } = useLanguage();
    const fallbackCountries = translations.en.countries;
    const travelCountries = t.countries || fallbackCountries;
    const travelPalette = [
        { key: 'burundi', icon: burundiImg, path: '/burundi' },
        { key: 'egypt', icon: egyptImg, path: '/egypt' },
        { key: 'mexico', icon: mexicoImg, path: '/mexico' },
        { key: 'england', icon: englandImg, path: '/england' },
        { key: 'kenya', icon: kenyaImg, path: '/kenya' },
        { key: 'canada', icon: canadaImg, path: '/canada' },
        { key: 'uganda', icon: ugandaImg, path: '/uganda' },
        { key: 'rwanda', icon: rwandaImg, path: '/rwanda' },
        { key: 'tanzania', icon: tanzaniaImg, path: '/tanzania' },
        { key: 'senegal', icon: senegalImg, path: '/senegal' },
        { key: 'scotland', icon: scotlandImg, path: '/scotland' },
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleLang = () => setIsLangOpen(!isLangOpen);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        setIsLangOpen(false);
    };

    // Scroll reveal hooks for each section
    const timelineRef = useScrollReveal('.timeline-item');
    const skillsRef = useScrollReveal('.skill-card');
    const projectsRef = useScrollReveal('.project-card');
    const testimonialsRef = useScrollReveal('.testimonial-card');
    const travelsRef = useScrollReveal('.travel-card');

    const [formStatus, setFormStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        document.title = `Aboubakar Muco | ${t.hero.title}`;
    }, [language, t]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setErrorMessage('');

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/xdalyyoj", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus(''), 5000);
            } else {
                const data = await response.json();
                setFormStatus('error');
                setErrorMessage(data.errors ? data.errors.map(error => error.message).join(", ") : 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setFormStatus('error');
            setErrorMessage('Network error. Please check your connection.');
        }
    };

    return (
        <div className="home-page">
            <ScrollProgress />
            <nav className="navbar">
                <div className="nav-content">
                    <div className="logo-brand">
                        <span className="logo-curly top">Muco</span>
                        <div className="globe-wrapper">
                            <span className="globe-icon">🌐</span>
                            <span className="logo-title">My Story</span>
                        </div>
                        <span className="logo-curly bottom">Journey</span>
                    </div>

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
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</a>
                        <a href="#journey" onClick={() => setIsMenuOpen(false)}>{t.nav.journey}</a>
                        <a href="#travels" onClick={() => setIsMenuOpen(false)}>{t.nav.travels}</a>
                        <Link to="/journal" onClick={() => setIsMenuOpen(false)}>{t.nav.journal}</Link>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
                        <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>{t.nav.gallery}</Link>
                    </div>
                </div>
            </nav>

            <main>
                <section id="about" className="hero bg-dots">
                    <div className="hero-bg-blobs">
                        <div className="blob blob-1"></div>
                        <div className="blob blob-2"></div>
                        <div className="blob blob-3"></div>
                    </div>
                    <div className="container hero-container flex-row">
                        <div className="hero-image-wrapper">
                            <img src={mucoImg} alt="Muco" className="profile-image" />
                        </div>
                        <div className="hero-text">
                            <h1>{t.hero.title}</h1>
                            <p className="hero-subtext">
                                {t.hero.subtext}
                            </p>
                            <h1 className="profile-title">{t.hero.profile}</h1>
                            <h2>{t.hero.name}</h2>
                            <p className="hero-subtext">
                                {t.hero.bio}
                            </p>
                            <div className="hero-cta-group">
                                <Link to="/career" className="cta-button secondary">{t.hero.readMore}</Link>
                                <a href="#contact" className="cta-button">{t.hero.cta}</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="skills theme-burundi bg-dots">
                    <div className="container" ref={skillsRef}>
                        <h2 className="section-title align-center">{t.skills.title}</h2>
                        <div className="skills-grid">
                            <div className="skill-card glass reveal">
                                <div className="skill-icon">💻</div>
                                <h3>{t.skills.tech}</h3>
                                <p>{t.skills.techDesc}</p>
                            </div>
                            <div className="skill-card glass reveal">
                                <div className="skill-icon">🗣️</div>
                                <h3>{t.skills.lang}</h3>
                                <p>{t.skills.langDesc}</p>
                            </div>
                            <div className="skill-card glass reveal">
                                <div className="skill-icon">🎓</div>
                                <h3>{t.skills.education}</h3>
                                <p>{t.skills.educationDesc}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="projects bg-waves theme-egypt">
                    <div className="container" ref={projectsRef}>
                        <h2 className="align-center">{t.projects.title}</h2>
                        <p className="section-subtext align-center">{t.projects.subtext}</p>
                        <div className="projects-grid">
                            {t.projects.list.map((project, index) => (
                                <div key={index} className={`project-card glass flex-row reveal ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                                    <div className="project-header">
                                        <span className="project-date">{project.date}</span>
                                        <h3>{project.title}</h3>
                                        <p className="project-role">{project.role}</p>
                                        <div className="project-tech">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="project-desc">{project.desc}</p>
                                    {project.focus && (
                                        <p className="project-focus">{project.focus}</p>
                                    )}
                                    {project.link && (
                                        <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                                            {t.projects.viewProject}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="journey" className="journey">
                    <div className="container" ref={timelineRef}>
                        <h2>{t.journey.title}</h2>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3>{t.journey.burundi.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: t.journey.burundi.desc }}></p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3>{t.journey.egypt.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: t.journey.egypt.desc }}></p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3>{t.journey.loop.title}</h3>
                                    <p>{t.journey.loop.desc}</p>
                                    <ul className="timeline-list">
                                        <li>{t.journey.loop.mexico}</li>
                                        <li>{t.journey.loop.england}</li>
                                        <li>{t.journey.loop.kenya}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3>{t.journey.canada.title}</h3>
                                    <p>{t.journey.canada.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="travels" className="travels">
                    <div className="container" ref={travelsRef}>
                        <h2>{t.travels.title}</h2>
                        <p className="section-subtext">{t.travels.subtext}</p>
                <div className="travel-grid">
                    {travelPalette.map((item) => {
                        const translatedName =
                            travelCountries?.[item.key]?.name ||
                            fallbackCountries?.[item.key]?.name;
                        if (!translatedName) return null;
                        return (
                            <Link key={item.key} to={item.path} className="travel-card reveal">
                                <img src={item.icon} alt={translatedName} className="travel-icon" loading="lazy" />
                                {translatedName}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>

                <section id="testimonials" className="testimonials">
                    <div className="container" ref={testimonialsRef}>
                        <h2>{t.testimonials.title}</h2>
                        <p className="section-subtext">{t.testimonials.subtext}</p>
                        <div className="testimonials-grid">
                            {t.testimonials.list.map((item, index) => (
                                <div key={index} className="testimonial-card glass reveal">
                                    <div className="quote-icon">"</div>
                                    <p className="testimonial-text">{item.text}</p>
                                    <div className="testimonial-author">
                                        <h4>{item.name}</h4>
                                        <p>{item.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="contact" className="contact">
                    <div className="container">
                        <h2>{t.contact.title}</h2>
                        <div className="glass contact-content">
                            <p>{t.contact.subtext}</p>
                            {formStatus === 'success' ? (
                                <div className="success-message">
                                    <h3>{t.contact.successTitle}</h3>
                                    <p>{t.contact.successMessage}</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <input type="text" name="name" placeholder={t.contact.name} required />
                                    <input type="email" name="email" placeholder={t.contact.email} required />
                                    <textarea name="message" placeholder={t.contact.message} required></textarea>
                                    <button type="submit" className="cta-button" disabled={formStatus === 'sending'}>
                                        {formStatus === 'sending' ? 'Sending...' : t.contact.send}
                                    </button>
                                    {formStatus === 'error' && <p className="error-message" style={{ color: '#ef4444', marginTop: '1rem' }}>{errorMessage}</p>}
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-section">
                        <h3>{t.contact.footerInfoTitle}</h3>
                        <p>{t.hero.subtext}</p>
                    </div>
                    <div className="footer-section">
                        <h3>{t.nav.journey}</h3>
                        <ul className="footer-links">
                            <li><a href="#about">{t.nav.about}</a></li>
                            <li><a href="#journey">{t.nav.journey}</a></li>
                            <li><a href="#travels">{t.nav.travels}</a></li>
                            <li><Link to="/gallery">{t.nav.gallery}</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>{t.contact.footerSocialTitle}</h3>
                        <div className="social-links">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">LinkedIn</a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">Twitter</a>
                            <a href="mailto:contact@example.com" title="Email">Email</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p>&copy; {new Date().getFullYear()} - Aboubakar Muco. {t.hero.title}.</p>
                    </div>
                </div>
            </footer>
            <ScrollToTop />
        </div>
    );
}

export default Home;

