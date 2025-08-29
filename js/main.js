// Main JavaScript for Consulting Website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initTypingAnimation();
    initServices();
    initCaseStudies();
    initExperience();
    initScrollAnimations();
    initNavigation();
    initThemeToggle();
    initMobileMenu();
    initContactForm();
    initNewsletterForm();
    initConsultationModal();
    initCustomCursor();
    initFloatingShapes();
    initScrollProgress();
    initCountUpAnimations();
    initLoader();
});

// Typing Animation
function initTypingAnimation() {
    const typedText = document.getElementById('typed-text');
    const cursor = document.querySelector('.typing-cursor');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentWord = '';

    function type() {
        const words = window.websiteData.typingWords;
        currentWord = words[wordIndex];

        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 150;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(type, typeSpeed);
    }

    if (typedText) {
        setTimeout(type, 1000);
    }
}

// Services Section
function initServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;

    const services = window.websiteData.services;
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card reveal';
        serviceCard.style.setProperty('--service-color', service.color);
        
        serviceCard.innerHTML = `
            <div class="service-icon" style="background: ${service.color}">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li><i class="fas fa-check"></i>${feature}</li>`).join('')}
            </ul>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

// Case Studies Section
function initCaseStudies() {
    const caseStudyGrid = document.getElementById('caseStudyGrid');
    if (!caseStudyGrid) return;

    const caseStudies = window.websiteData.caseStudies;
    
    caseStudies.forEach(study => {
        const caseStudyCard = document.createElement('div');
        caseStudyCard.className = 'case-study-card reveal';
        
        caseStudyCard.innerHTML = `
            <div class="case-study-header">
                <div class="case-study-meta">
                    <span class="case-study-industry">${study.industry}</span>
                    <span class="case-study-duration">${study.duration}</span>
                </div>
                <h3 class="case-study-title">${study.title}</h3>
                <p class="case-study-client">${study.client}</p>
            </div>
            
            <div class="case-study-content">
                <div class="case-study-section">
                    <h4>Challenge</h4>
                    <p>${study.challenge}</p>
                </div>
                
                <div class="case-study-section">
                    <h4>Solution</h4>
                    <p>${study.solution}</p>
                </div>
                
                <div class="case-study-section">
                    <h4>Results</h4>
                    <ul class="case-study-results">
                        ${study.results.map(result => `<li>${result}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="case-study-technologies">
                    ${study.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        caseStudyGrid.appendChild(caseStudyCard);
    });
}

// Experience Timeline
function initExperience() {
    const experienceTimeline = document.getElementById('experienceTimeline');
    if (!experienceTimeline) return;

    const experience = window.websiteData.experience;
    
    experience.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item reveal ${exp.type}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-marker">
                <div class="timeline-dot"></div>
                <div class="timeline-line"></div>
            </div>
            
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-title">${exp.title}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <div class="timeline-period">${exp.period}</div>
                    <div class="timeline-location">${exp.location}</div>
                </div>
                
                <p class="timeline-description">${exp.description}</p>
                
                <div class="timeline-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="timeline-technologies">
                    ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        experienceTimeline.appendChild(timelineItem);
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    
    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileMenuToggle?.addEventListener('click', openMobileMenu);
    mobileMenuClose?.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay?.addEventListener('click', closeMobileMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Contact Form
function initContactForm() {
    const consultationForm = document.getElementById('consultationForm');
    if (!consultationForm) return;

    consultationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = consultationForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(consultationForm);
            const response = await fetch(consultationForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showToast('Thank you! I\'ll get back to you within 24 hours.');
                consultationForm.reset();
                // Close the modal
                const consultationModal = document.getElementById('consultationModal');
                if (consultationModal) {
                    consultationModal.classList.remove('show');
                    document.body.style.overflow = '';
                }
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showToast('Sorry, there was an error. Please try again or contact me directly.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = document.getElementById('newsletterSubmit');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Subscribing...</span>';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(newsletterForm);
            const response = await fetch(newsletterForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Thank you for subscribing! You\'ll receive my insights soon.');
                newsletterForm.reset();
            } else {
                throw new Error('Subscription failed');
            }
        } catch (error) {
            alert('Sorry, there was an error. Please try again.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Consultation Modal
function initConsultationModal() {
    const consultationButton = document.getElementById('hireButton');
    const consultationModal = document.getElementById('consultationModal');
    const modalClose = document.getElementById('consultationModalClose');

    function openConsultationModal() {
        consultationModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeConsultationModal() {
        consultationModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (consultationButton) {
        consultationButton.addEventListener('click', (e) => {
            e.preventDefault();
            openConsultationModal();
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeConsultationModal);
    }

    if (consultationModal) {
        consultationModal.addEventListener('click', (e) => {
            if (e.target === consultationModal) {
                closeConsultationModal();
            }
        });
    }

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && consultationModal.classList.contains('show')) {
            closeConsultationModal();
        }
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .case-study-card, .timeline-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// Floating Shapes Animation
function initFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const animationDuration = 20 + index * 5;
        const animationDelay = index * 2;
        
        shape.style.animation = `float ${animationDuration}s ease-in-out ${animationDelay}s infinite`;
    });
}

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Count Up Animations
function initCountUpAnimations() {
    const countUpElements = document.querySelectorAll('.count-up');
    
    const countUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    element.textContent = Math.floor(current);
                }, 16);
                
                countUpObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });

    countUpElements.forEach(el => countUpObserver.observe(el));
}

// Loader
function initLoader() {
    const loader = document.querySelector('.loader');
    if (!loader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 1000);
    });
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = toast.querySelector('.toast-icon');
    
    if (!toast || !toastMessage) return;
    
    // Update message and icon
    toastMessage.textContent = message;
    
    if (type === 'error') {
        toast.style.background = 'var(--error)';
        toastIcon.className = 'fas fa-exclamation-circle toast-icon';
    } else {
        toast.style.background = 'var(--success)';
        toastIcon.className = 'fas fa-check-circle toast-icon';
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Phone number click handler
document.addEventListener('DOMContentLoaded', function() {
    const callMeBtn = document.getElementById('callMeBtn');
    if (callMeBtn) {
        callMeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Would you like to call me?')) {
                window.location.href = 'tel:+919131620063';
            }
        });
    }
});