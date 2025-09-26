// 🚀 Product Manager Portfolio - Enhanced Analytics & Performance Monitoring
// Advanced tracking for consulting website optimization

class PortfolioAnalytics {
    constructor() {
        this.startTime = performance.now();
        this.sessionId = this.generateSessionId();
        this.events = [];
        this.performanceMetrics = {};
        this.conversionFunnel = {
            page_view: 0,
            services_viewed: 0,
            case_studies_viewed: 0,
            contact_initiated: 0,
            consultation_requested: 0
        };
        
        this.init();
    }

    init() {
        this.trackPageLoad();
        this.trackBusinessMetrics();
        this.trackUserJourney();
        this.trackPerformance();
        this.trackConversions();
        this.trackEngagement();
        
        // Send analytics every 30 seconds
        setInterval(() => this.sendAnalytics(), 30000);
        
        // Send final analytics on page unload
        window.addEventListener('beforeunload', () => this.sendAnalytics());
    }

    generateSessionId() {
        return 'portfolio_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    trackEvent(eventName, properties = {}) {
        const event = {
            name: eventName,
            timestamp: Date.now(),
            sessionId: this.sessionId,
            url: window.location.href,
            userAgent: navigator.userAgent,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            ...properties
        };
        
        this.events.push(event);
        this.updateConversionFunnel(eventName, properties);
        console.log('📊 Portfolio Analytics:', event);
    }

    updateConversionFunnel(eventName, properties) {
        switch (eventName) {
            case 'page_load':
                this.conversionFunnel.page_view++;
                break;
            case 'section_view':
                if (properties.section === 'services') {
                    this.conversionFunnel.services_viewed++;
                } else if (properties.section === 'case-studies') {
                    this.conversionFunnel.case_studies_viewed++;
                }
                break;
            case 'contact_form_start':
                this.conversionFunnel.contact_initiated++;
                break;
            case 'consultation_request':
                this.conversionFunnel.consultation_requested++;
                break;
        }
    }

    trackPageLoad() {
        window.addEventListener('load', () => {
            const loadTime = performance.now() - this.startTime;
            
            this.trackEvent('page_load', {
                loadTime: Math.round(loadTime),
                pageTitle: document.title,
                referrer: document.referrer,
                device: this.getDeviceType(),
                theme: this.getCurrentTheme()
            });

            this.trackCoreWebVitals();
            this.trackBusinessContext();
        });
    }

    trackBusinessContext() {
        // Track which services are visible
        const services = document.querySelectorAll('.service-card, .service-item');
        this.trackEvent('services_loaded', {
            serviceCount: services.length,
            servicesVisible: Array.from(services).map(s => s.textContent.substring(0, 50).trim())
        });

        // Track case studies
        const caseStudies = document.querySelectorAll('.case-study, .portfolio-item');
        this.trackEvent('case_studies_loaded', {
            caseStudyCount: caseStudies.length
        });

        // Track contact methods available
        const contactMethods = this.getAvailableContactMethods();
        this.trackEvent('contact_methods_available', contactMethods);
    }

    trackBusinessMetrics() {
        // Track service card interactions
        document.querySelectorAll('.service-card, .service-item').forEach((card, index) => {
            card.addEventListener('click', () => {
                this.trackEvent('service_card_click', {
                    serviceIndex: index,
                    serviceName: card.querySelector('h3, .service-title')?.textContent || 'Unknown',
                    timeOnPage: Date.now() - this.startTime
                });
            });

            // Track hover time for engagement
            let hoverStart;
            card.addEventListener('mouseenter', () => {
                hoverStart = Date.now();
            });
            
            card.addEventListener('mouseleave', () => {
                if (hoverStart) {
                    const hoverTime = Date.now() - hoverStart;
                    if (hoverTime > 1000) { // Only track meaningful hovers
                        this.trackEvent('service_card_hover', {
                            serviceIndex: index,
                            hoverDuration: hoverTime
                        });
                    }
                }
            });
        });

        // Track case study engagement
        document.querySelectorAll('.case-study, .portfolio-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                this.trackEvent('case_study_click', {
                    caseStudyIndex: index,
                    caseStudyTitle: item.querySelector('h3, .case-title')?.textContent || 'Unknown'
                });
            });
        });
    }

    trackUserJourney() {
        // Track section visibility with Intersection Observer
        const sections = document.querySelectorAll('section, .section');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionName = entry.target.id || entry.target.className.split(' ')[0] || 'unknown';
                    this.trackEvent('section_view', {
                        section: sectionName,
                        timeOnPage: Date.now() - this.startTime,
                        scrollDepth: this.getScrollDepth()
                    });
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => sectionObserver.observe(section));

        // Track navigation patterns
        document.querySelectorAll('nav a, .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('navigation_click', {
                    destination: link.getAttribute('href'),
                    linkText: link.textContent.trim(),
                    currentSection: this.getCurrentSection()
                });
            });
        });

        // Track CTA button clicks
        document.querySelectorAll('.cta-button, .btn-primary, [data-cta]').forEach(button => {
            button.addEventListener('click', () => {
                this.trackEvent('cta_click', {
                    ctaText: button.textContent.trim(),
                    ctaLocation: this.getElementSection(button),
                    timeOnPage: Date.now() - this.startTime
                });
            });
        });
    }

    trackConversions() {
        // Track contact form interactions
        const contactForms = document.querySelectorAll('form');
        contactForms.forEach(form => {
            const formName = form.id || form.className || 'contact_form';
            
            // Track form start
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('focus', () => {
                    this.trackEvent('contact_form_start', {
                        formName: formName,
                        fieldName: input.name || input.id,
                        timeOnPage: Date.now() - this.startTime
                    });
                }, { once: true }); // Only track first focus
            });

            // Track form completion
            form.addEventListener('submit', (e) => {
                this.trackEvent('contact_form_submit', {
                    formName: formName,
                    timeOnPage: Date.now() - this.startTime,
                    fieldsCompleted: Array.from(inputs).filter(i => i.value.trim()).length,
                    totalFields: inputs.length
                });

                // Special tracking for consultation requests
                if (formName.includes('consultation') || form.querySelector('[name*="consultation"]')) {
                    this.trackEvent('consultation_request', {
                        source: 'contact_form',
                        timeOnPage: Date.now() - this.startTime
                    });
                }
            });
        });

        // Track email/phone link clicks (lead generation)
        document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', () => {
                const type = link.href.startsWith('mailto:') ? 'email' : 'phone';
                this.trackEvent('direct_contact_click', {
                    contactType: type,
                    contactValue: link.href.split(':')[1],
                    location: this.getElementSection(link)
                });
            });
        });

        // Track social media clicks
        document.querySelectorAll('a[href*="linkedin"], a[href*="twitter"], a[href*="github"]').forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('social_media_click', {
                    platform: this.getSocialPlatform(link.href),
                    url: link.href
                });
            });
        });
    }

    trackEngagement() {
        // Track scroll depth milestones
        let maxScroll = 0;
        const milestones = [25, 50, 75, 90, 100];
        const tracked = new Set();

        window.addEventListener('scroll', () => {
            const scrollPercent = this.getScrollDepth();
            maxScroll = Math.max(maxScroll, scrollPercent);

            milestones.forEach(milestone => {
                if (scrollPercent >= milestone && !tracked.has(milestone)) {
                    tracked.add(milestone);
                    this.trackEvent('scroll_milestone', {
                        percentage: milestone,
                        timeOnPage: Date.now() - this.startTime,
                        currentSection: this.getCurrentSection()
                    });
                }
            });
        });

        // Track time spent on page
        setInterval(() => {
            this.trackEvent('time_on_page', {
                duration: Date.now() - this.startTime,
                scrollDepth: maxScroll,
                isActive: this.isUserActive()
            });
        }, 60000); // Every minute

        // Track theme changes
        const themeToggle = document.querySelector('.theme-toggle, [data-theme-toggle]');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.trackEvent('theme_change', {
                    newTheme: this.getCurrentTheme(),
                    timeOnPage: Date.now() - this.startTime
                });
            });
        }
    }

    trackPerformance() {
        // Enhanced Core Web Vitals tracking
        this.trackCoreWebVitals();

        // Track resource performance
        window.addEventListener('load', () => {
            const resources = performance.getEntriesByType('resource');
            
            // Analyze critical resources
            const criticalResources = resources.filter(r => 
                r.name.includes('.css') || r.name.includes('.js') || r.initiatorType === 'img'
            );

            criticalResources.forEach(resource => {
                if (resource.duration > 1000) {
                    this.trackEvent('slow_resource', {
                        name: resource.name.split('/').pop(),
                        duration: Math.round(resource.duration),
                        type: resource.initiatorType,
                        size: resource.transferSize
                    });
                }
            });

            // Overall performance metrics
            const navigation = performance.getEntriesByType('navigation')[0];
            this.trackEvent('performance_metrics', {
                domContentLoaded: Math.round(navigation.domContentLoadedEventEnd),
                loadComplete: Math.round(navigation.loadEventEnd),
                firstPaint: Math.round(performance.getEntriesByType('paint')[0]?.startTime || 0),
                resourceCount: resources.length,
                totalTransferSize: resources.reduce((sum, r) => sum + (r.transferSize || 0), 0)
            });
        });
    }

    trackCoreWebVitals() {
        // Implementation similar to psychology website but with business context
        // ... (Core Web Vitals tracking code)
    }

    // Utility methods
    getDeviceType() {
        const width = window.innerWidth;
        if (width < 768) return 'mobile';
        if (width < 1024) return 'tablet';
        return 'desktop';
    }

    getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') || 
               (document.body.classList.contains('dark') ? 'dark' : 'light');
    }

    getScrollDepth() {
        return Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('section, .section');
        const scrollY = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionBottom = sectionTop + rect.height;

            if (scrollY >= sectionTop && scrollY <= sectionBottom) {
                return section.id || section.className.split(' ')[0] || 'unknown';
            }
        }
        return 'unknown';
    }

    getElementSection(element) {
        const sections = ['hero', 'about', 'services', 'portfolio', 'case-studies', 'contact', 'footer'];
        
        for (const section of sections) {
            const sectionElement = document.querySelector(`.${section}, #${section}`);
            if (sectionElement && sectionElement.contains(element)) {
                return section;
            }
        }
        return 'unknown';
    }

    getSocialPlatform(url) {
        if (url.includes('linkedin')) return 'linkedin';
        if (url.includes('twitter')) return 'twitter';
        if (url.includes('github')) return 'github';
        if (url.includes('instagram')) return 'instagram';
        return 'other';
    }

    getAvailableContactMethods() {
        return {
            hasContactForm: document.querySelector('form') !== null,
            hasEmail: document.querySelector('a[href^="mailto:"]') !== null,
            hasPhone: document.querySelector('a[href^="tel:"]') !== null,
            hasLinkedIn: document.querySelector('a[href*="linkedin"]') !== null,
            hasCalendly: document.querySelector('a[href*="calendly"]') !== null
        };
    }

    isUserActive() {
        // Simple activity detection based on recent interactions
        return Date.now() - this.lastInteraction < 30000; // 30 seconds
    }

    sendAnalytics() {
        if (this.events.length === 0) return;

        const payload = {
            sessionId: this.sessionId,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            events: [...this.events],
            conversionFunnel: {...this.conversionFunnel},
            performanceMetrics: this.performanceMetrics,
            sessionDuration: Date.now() - this.startTime
        };

        console.log('📊 Sending Portfolio Analytics:', payload);
        
        // Send to analytics service (Mixpanel, Google Analytics, etc.)
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(payload)], {type: 'application/json'});
            navigator.sendBeacon('/analytics', blob);
        }

        // Clear sent events
        this.events = [];
    }

    // Public API for manual tracking
    trackConsultationRequest(details) {
        this.trackEvent('consultation_request', {
            ...details,
            source: 'manual_tracking',
            conversionPath: this.getConversionPath()
        });
    }

    trackBusinessInquiry(inquiryType) {
        this.trackEvent('business_inquiry', {
            inquiryType: inquiryType,
            timeOnPage: Date.now() - this.startTime,
            pagesViewed: this.conversionFunnel.page_view
        });
    }

    getConversionPath() {
        return Object.entries(this.conversionFunnel)
            .filter(([key, value]) => value > 0)
            .map(([key, value]) => `${key}:${value}`)
            .join(' → ');
    }

    getAnalyticsSummary() {
        return {
            sessionId: this.sessionId,
            sessionDuration: Date.now() - this.startTime,
            eventsTracked: this.events.length,
            conversionFunnel: this.conversionFunnel,
            currentSection: this.getCurrentSection(),
            scrollDepth: this.getScrollDepth()
        };
    }
}

// Initialize enhanced analytics
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioAnalytics = new PortfolioAnalytics();
    
    // Track user activity
    ['click', 'keydown', 'scroll', 'mousemove'].forEach(event => {
        document.addEventListener(event, () => {
            window.portfolioAnalytics.lastInteraction = Date.now();
        }, { passive: true });
    });
    
    // Track errors
    window.addEventListener('error', (e) => {
        window.portfolioAnalytics.trackEvent('javascript_error', {
            message: e.message,
            filename: e.filename,
            lineNumber: e.lineno
        });
    });
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioAnalytics;
}


