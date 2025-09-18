// Modern AI-Themed Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeroImageOptimization();
    initThemeToggle();
    initNavigation();
    initMobileMenu();
    initTypewriter();
    initAnimatedBackground();
    initScrollAnimations();
    initStatsCounter();
    initModal();
    initFormSubmission();
    initNewsletterForm();
    initFloatingConsultation();
    initSmoothScrolling();
    initLearnMoreButton();
    initConsultationForm();
});

// Enhanced Form Functionality
function initConsultationForm() {
    const form = document.getElementById('consultationForm');
    const submitBtn = document.getElementById('submitBtn');
    const challengeTextarea = document.getElementById('challenge');
    const charCount = document.getElementById('charCount');
    const industrySelect = document.getElementById('industry');
    const industryOtherGroup = document.getElementById('industryOtherGroup');
    const referralSelect = document.getElementById('referral');
    const referralOtherGroup = document.getElementById('referralOtherGroup');
    const successState = document.getElementById('successState');
    const returnBtn = document.getElementById('returnToWebsite');

    if (!form) return;

    // Character counter for challenge textarea
    if (challengeTextarea && charCount) {
        challengeTextarea.addEventListener('input', () => {
            const length = challengeTextarea.value.length;
            charCount.textContent = length;
            
            if (length > 1000) {
                charCount.style.color = 'var(--warning)';
            } else if (length > 800) {
                charCount.style.color = 'var(--text-secondary)';
            } else {
                charCount.style.color = 'var(--text-muted)';
            }
        });
    }

    // Conditional fields
    if (industrySelect && industryOtherGroup) {
        industrySelect.addEventListener('change', () => {
            if (industrySelect.value === 'Other') {
                industryOtherGroup.style.display = 'block';
            } else {
                industryOtherGroup.style.display = 'none';
                document.getElementById('industryOther').value = '';
            }
        });
    }

    if (referralSelect && referralOtherGroup) {
        referralSelect.addEventListener('change', () => {
            if (referralSelect.value === 'Other') {
                referralOtherGroup.style.display = 'block';
            } else {
                referralOtherGroup.style.display = 'none';
                document.getElementById('referralOther').value = '';
            }
        });
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Analytics: form_submit_attempt
        if (window.mixpanel) {
            mixpanel.track('form_submit_attempt');
        }

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        try {
            // Submit to Formspree
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Show success state
                form.style.display = 'none';
                successState.style.display = 'block';
                successState.setAttribute('aria-live', 'polite');
                
                // Analytics: form_submit_success
                if (window.mixpanel) {
                    mixpanel.track('form_submit_success');
                }
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Analytics: form_submit_fail
            if (window.mixpanel) {
                mixpanel.track('form_submit_fail', { error: error.message });
            }
            
            // Show error message
            showFormError('Failed to submit form. Please try again.');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });

    // Return to website button
    if (returnBtn) {
        returnBtn.addEventListener('click', () => {
            const modal = document.getElementById('consultationModal');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            
            // Reset form
            form.reset();
            form.style.display = 'block';
            successState.style.display = 'none';
            if (industryOtherGroup) industryOtherGroup.style.display = 'none';
            if (referralOtherGroup) referralOtherGroup.style.display = 'none';
            if (charCount) charCount.textContent = '0';
        });
    }

    // Track form field interactions
    const formFields = form.querySelectorAll('input, textarea, select');
    let formStarted = false;

    formFields.forEach(field => {
        field.addEventListener('focus', () => {
            if (!formStarted) {
                formStarted = true;
                // Analytics: form_start
                if (window.mixpanel) {
                    mixpanel.track('form_start');
                }
            }
        });

        field.addEventListener('blur', () => {
            if (field.value.trim()) {
                // Analytics: form_field_complete
                if (window.mixpanel) {
                    mixpanel.track('form_field_complete', { field: field.name });
                }
            }
        });
    });
}

// Helper function to show form errors
function showFormError(message) {
    const form = document.getElementById('consultationForm');
    let errorDiv = form.querySelector('.form-error');
    
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.style.cssText = `
            background: var(--error);
            color: white;
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 16px;
            font-size: 14px;
        `;
        form.insertBefore(errorDiv, form.firstChild);
    }
    
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    // Hide error after 5 seconds
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

// Hero Image Optimization
function initHeroImageOptimization() {
    const heroImg = document.querySelector('.hero-image img');
    if (heroImg) {
        // Add loaded class when image loads
        if (heroImg.complete) {
            heroImg.style.opacity = '1';
        } else {
            heroImg.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            // Add error handling
            heroImg.addEventListener('error', function() {
                console.error('Failed to load hero image');
                // Optionally set a fallback image
                this.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'hero-image-placeholder';
                fallback.innerHTML = '<i class="fas fa-user-circle"></i>';
                this.parentElement.appendChild(fallback);
            });
        }
    }
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add animation effect
        themeToggle.style.transform = 'scale(0.8)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Active link highlighting
    function updateActiveLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu when clicking on links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Typewriter Effect
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    
    const words = ['Strategic Planning', 'Data Analytics', 'Digital Innovation', 'AI Adoption', 'Agile Management', 'Product Management'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = 150;
        
        if (isDeleting) {
            typeSpeed /= 2;
        }
        
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
    
    type();
}

// Animated Background
function initAnimatedBackground() {
    // Background animation is handled by CSS
    // This function can be used for any additional background effects
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
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .work-card, .stat-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Stats Counter Animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 30);
    }
}

// Modal Functionality
// Global modal functions
function openModal() {
    const modal = document.getElementById('consultationModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Focus first input
    setTimeout(() => {
        const firstInput = modal.querySelector('input');
        if (firstInput) firstInput.focus();
    }, 300);
}

function closeModal() {
    const modal = document.getElementById('consultationModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function initModal() {
    const modal = document.getElementById('consultationModal');
    const modalClose = document.getElementById('modalClose');
    const consultationBtns = document.querySelectorAll('#consultationBtn, #contactConsultationBtn');
    
    // Open modal
    consultationBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', closeModal);
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Floating Consultation Button
function initFloatingConsultation() {
    const floatingConsultationBtn = document.getElementById('floatingConsultationBtn');
    if (floatingConsultationBtn) {
        floatingConsultationBtn.addEventListener('click', () => {
            openModal();
        });
    }
}

// Form Submission
function initFormSubmission() {
    const form = document.getElementById('consultationForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showToast('Thank you! I\'ll get back to you in 24-48 hours.', 'success');
                form.reset();
                closeModal();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showToast('Sorry, there was an error. Please try again or contact me directly.', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Newsletter Form Handling
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
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
                showToast('Thank you for subscribing! You\'ll receive our first newsletter soon.', 'success');
                newsletterForm.reset();
            } else {
                throw new Error('Newsletter subscription failed');
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            showToast('Sorry, there was an error. Please try again.', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}



// Toast Notifications
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    // Update message and styling
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Learn More Button
function initLearnMoreButton() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Utility function for scrolling to sections
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Close modal function (for external use)
function closeModal() {
    const modal = document.getElementById('consultationModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Performance optimizations
window.addEventListener('load', () => {
    // Remove loading states
    document.body.classList.add('loaded');
    
    // Preload critical resources
    const criticalImages = document.querySelectorAll('img[data-src]');
    criticalImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (navMenu && window.innerWidth > 768) {
        navMenu.classList.remove('active');
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    }
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    // Subtle parallax effect for neural grid
    const neuralGrid = document.getElementById('neuralGrid');
    if (neuralGrid) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        neuralGrid.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    
    img.addEventListener('error', () => {
        img.style.display = 'none';
    });
});

// Healthcare Tech Visual Effects
function initAdvancedEffects() {
    // Parallax effect for healthcare elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const healthcareElements = document.querySelectorAll('.dna-helix, .neural-network, .heartbeat-monitor, .data-flow');
        
        healthcareElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            element.style.transform += ` translateY(${scrolled * speed}px)`;
        });
    });
    
    // Interactive DNA helix
    const dnaHelix = document.querySelector('.dna-helix');
    if (dnaHelix) {
        dnaHelix.addEventListener('mouseenter', () => {
            dnaHelix.style.animationPlayState = 'paused';
        });
        
        dnaHelix.addEventListener('mouseleave', () => {
            dnaHelix.style.animationPlayState = 'running';
        });
    }
    
    // Neural network interaction
    const neurons = document.querySelectorAll('.neuron');
    neurons.forEach(neuron => {
        neuron.addEventListener('mouseenter', () => {
            neuron.style.animationDuration = '0.5s';
        });
        
        neuron.addEventListener('mouseleave', () => {
            neuron.style.animationDuration = '3s';
        });
    });
    
    // ECG pulse interaction
    const ecgPulses = document.querySelectorAll('.ecg-pulse');
    ecgPulses.forEach(pulse => {
        pulse.addEventListener('mouseenter', () => {
            pulse.style.animationDuration = '0.5s';
        });
        
        pulse.addEventListener('mouseleave', () => {
            pulse.style.animationDuration = '2s';
        });
    });
}

// Initialize advanced effects
initAdvancedEffects();