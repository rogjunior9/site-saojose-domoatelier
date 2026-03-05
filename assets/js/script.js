/**
 * LP Domo Atelier - São José
 * JavaScript Functions - Journey-Based Copy
 */

// Toggle FAQ Accordion
function toggleFaq(element) {
    const parent = element.parentElement;
    const isActive = parent.classList.contains('active');

    // Close all others
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Toggle current
    if (!isActive) {
        parent.classList.add('active');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to cards
document.querySelectorAll('.why-card, .beauty-card, .present-card, .produto-card, .faq-item, .urgency-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// WhatsApp tracking (optional - for analytics)
const whatsappLinks = document.querySelectorAll('.whatsapp-button, .whatsapp-button-large, .whatsapp-float');

whatsappLinks.forEach(link => {
    link.addEventListener('click', function () {
        const ctaType = this.classList.contains('whatsapp-float') ? 'float' :
            this.classList.contains('whatsapp-button-large') ? 'urgency-cta' : 'product';
        console.log('WhatsApp click detected:', { cta: ctaType });

        // Meta Pixel Tracking
        if (typeof fbq === 'function') {
            fbq('track', 'Contact', {
                content_name: 'WhatsApp Click',
                content_category: ctaType
            });
        }
    });
});

// Track conversion events
function trackConversion(type) {
    console.log('Conversion tracked:', type);
    // Meta Pixel Tracking
    if (typeof fbq === 'function') {
        fbq('track', 'Lead', {
            content_name: type
        });
    }
}

// Lazy loading placeholder for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Parallax effect for hero (subtle)
function initParallax() {
    const hero = document.querySelector('.hero');

    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        if (scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = rate + 'px';
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    initLazyLoading();
    initParallax();

    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');

    // Console branding
    console.log('%c🛐 Domo Atelier - São José', 'font-size: 16px; font-weight: bold; color: #D4AF37;');
    console.log('%c"A beleza da Igreja, no coração do seu lar"', 'font-style: italic; color: #8B7355;');
});

// Utility: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Detect scroll for navbar changes (if needed)
const handleScroll = debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add any scroll-based effects here
}, 10);

window.addEventListener('scroll', handleScroll);

// Add entrance animations to sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});
