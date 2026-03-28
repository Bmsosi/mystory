import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollProgress from '../components/ScrollProgress';
import ScrollToTop from '../components/ScrollToTop';
import { useLanguage } from '../components/LanguageContext';

const BurundiGallery = () => {
    const { t, language } = useLanguage();
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleCount, setVisibleCount] = useState(10);

    // Handle escape key to close lightbox
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    useEffect(() => {
        document.title = `${t.countries.burundi.galleryTitle} | My Story Journey`;
    }, [language, t]);
    // Dynamically import all images from the burundi_gallery directory
    const images = import.meta.glob('../burundi_gallery/*.{jpg,jpeg,png,JPG}', { eager: true, query: '?url', import: 'default' });
    const displayImages = Object.values(images);
    const visibleImages = displayImages.slice(0, visibleCount);
    const hasMore = visibleCount < displayImages.length;
    const handleViewMore = () => {
        setVisibleCount((prev) => Math.min(prev + 5, displayImages.length));
    };

    // Helper to determine if an image likely contains a face and needs top alignment
    const isFaceImage = (src) => {
        if (typeof src !== 'string') return false;
        const faceKeywords = [
            'teen', 'kids', 'family', 'brothers', 'friends', 'selfie', 'sis', 'baby',
            'mom', 'grandson', 'young', 'mashekh', 'pires', 'aziz', 'bashir',
            'arafanura', 'dami', 'nura', 'schoolgirl', 'Muco'
        ];
        return faceKeywords.some(keyword => src.toLowerCase().includes(keyword.toLowerCase()));
    };

    return (
        <div className="gallery-page">
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
                    <div className="nav-links">
                        <Link to="/burundi">{t.countries.burundi.backToCountry}</Link>
                        <Link to="/">{t.nav.home}</Link>
                    </div>
                </div>
            </nav>
            <main className="container page-content">
                <section className="glass" style={{ padding: '3rem', marginTop: '2rem' }}>
                    <h1>{t.countries.burundi.galleryTitle}</h1>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
                        {t.countries.burundi.gallerySub}
                    </p>

                    <div className="gallery-grid animated-grid-bg" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gridAutoFlow: 'dense',
                        gap: '2.5rem',
                        padding: '2.5rem',
                        borderRadius: '16px'
                    }}>
                        {visibleImages.length > 0 ? (
                            visibleImages.map((src, index) => {
                                const isWide = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49].includes(index + 1);
                                return (
                                    <div
                                    key={index}
                                        className={`gallery-item-wrapper premium-border ${isWide ? 'span-2' : ''}`}
                                        onClick={() => setSelectedImage(src)}
                                        style={{
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            background: 'rgba(0,0,0,0.3)',
                                            height: isWide ? '400px' : '300px'
                                        }}>
                                        <img
                                            src={src}
                                            alt={`Burundi memory ${index + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: isFaceImage(src) ? 'top' : 'center',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                );
                            })
                        ) : (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.5)' }}>
                                <p>No images found in the gallery folder.</p>
                            </div>
                        )}
                    </div>
                    {hasMore && (
                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <button className="view-more-button" onClick={handleViewMore}>
                                {t.gallery.viewMore}
                            </button>
                        </div>
                    )}

                    <div style={{ marginTop: '3rem' }}>
                        <Link to="/burundi" className="cta-button">{t.countries.burundi.backToCountry}</Link>
                    </div>
                </section>
            </main>
            <ScrollToTop />

            {/* Lightbox Overlay */}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content">
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
                        <img src={selectedImage} alt="Fullscreen memory" className="lightbox-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BurundiGallery;
