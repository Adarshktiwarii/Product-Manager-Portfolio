// Simple Analytics for Consulting Website
(function() {
    'use strict';

    // Track page views
    function trackPageView() {
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href
            });
        }
    }

    // Track button clicks
    function trackButtonClick(buttonText, buttonLocation) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'button_click', {
                button_text: buttonText,
                button_location: buttonLocation
            });
        }
    }

    // Track form submissions
    function trackFormSubmission(formName) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                form_name: formName
            });
        }
    }

    // Track scroll depth
    function trackScrollDepth() {
        let maxScroll = 0;
        const scrollThresholds = [25, 50, 75, 90];
        const trackedThresholds = new Set();

        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                scrollThresholds.forEach(threshold => {
                    if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
                        trackedThresholds.add(threshold);
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'scroll_depth', {
                                scroll_percentage: threshold
                            });
                        }
                    }
                });
            }
        });
    }

    // Track time on page
    function trackTimeOnPage() {
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            if (typeof gtag !== 'undefined') {
                gtag('event', 'time_on_page', {
                    time_seconds: timeOnPage
                });
            }
        });
    }

    // Track section visibility
    function trackSectionVisibility() {
        const sections = document.querySelectorAll('section[id]');
        const visibleSections = new Set();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    if (!visibleSections.has(sectionId)) {
                        visibleSections.add(sectionId);
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'section_view', {
                                section_name: sectionId
                            });
                        }
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));
    }

    // Initialize analytics
    function initAnalytics() {
        // Track initial page view
        trackPageView();
        
        // Track scroll depth
        trackScrollDepth();
        
        // Track time on page
        trackTimeOnPage();
        
        // Track section visibility
        trackSectionVisibility();
        
        // Track button clicks
        document.addEventListener('click', (e) => {
            const button = e.target.closest('button, .btn, .contact-link, .hire-button');
            if (button) {
                const buttonText = button.textContent.trim();
                const buttonLocation = button.closest('section')?.getAttribute('id') || 'unknown';
                trackButtonClick(buttonText, buttonLocation);
            }
        });
        
        // Track form submissions
        document.addEventListener('submit', (e) => {
            const form = e.target;
            const formName = form.getAttribute('id') || form.getAttribute('class') || 'unknown_form';
            trackFormSubmission(formName);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnalytics);
    } else {
        initAnalytics();
    }

    // Export functions for manual tracking
    window.websiteAnalytics = {
        trackPageView,
        trackButtonClick,
        trackFormSubmission,
        trackScrollDepth,
        trackTimeOnPage,
        trackSectionVisibility
    };

})();