import { useEffect, useRef } from 'react';

/**
 * useScrollReveal - attaches an IntersectionObserver to a container ref.
 * When child elements matching `selector` enter the viewport they receive
 * the class `is-visible`, triggering a CSS fade-in animation.
 *
 * @param {string} selector - CSS selector for child elements to observe
 * @param {object} options  - IntersectionObserver options
 */
const useScrollReveal = (selector = '.reveal', options = {}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const targets = container.querySelectorAll(selector);
        if (!targets.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // fire once
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
        );

        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [selector]);

    return containerRef;
};

export default useScrollReveal;
