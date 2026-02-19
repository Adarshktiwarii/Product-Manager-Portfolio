document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initNavigation();
    initMobileMenu();
    initTypewriter();
    initScrollAnimations();
    initStatsCounter();
    initModal();
    initFormSubmission();
    initNewsletterForm();
    initFloatingConsultation();
    initSmoothScrolling();
    initLearnMoreButton();
});

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

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
    });
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    const links = document.querySelectorAll('.mobile-nav-link');

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
        const spans = btn.querySelectorAll('span');
        spans.forEach((span, i) => {
            if (menu.classList.contains('active')) {
                if (i === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (i === 1) span.style.opacity = '0';
                if (i === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            const spans = btn.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
}

function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const words = [
        'Product Strategy',
        'AI Adoption',
        'Data & Analytics',
        'Digital Transformation',
        'Team Leadership',
        'Growth Engineering'
    ];
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function type() {
        const word = words[wordIdx];
        if (deleting) {
            el.textContent = word.substring(0, charIdx - 1);
            charIdx--;
        } else {
            el.textContent = word.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = 120;
        if (deleting) speed = 60;
        if (!deleting && charIdx === word.length) {
            speed = 2000;
            deleting = true;
        } else if (deleting && charIdx === 0) {
            deleting = false;
            wordIdx = (wordIdx + 1) % words.length;
            speed = 400;
        }
        setTimeout(type, speed);
    }

    type();
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    const els = document.querySelectorAll('.service-card, .work-card, .stat-item, .contact-item, .approach-card, .timeline-item');
    els.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;
        observer.observe(el);
    });
}

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
        const increment = target / 40;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 25);
    }
}

function openModal() {
    const modal = document.getElementById('consultationModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        const input = modal.querySelector('input');
        if (input) input.focus();
    }, 200);
}

function closeModal() {
    const modal = document.getElementById('consultationModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function initModal() {
    const modal = document.getElementById('consultationModal');
    const close = document.getElementById('modalClose');
    const btns = document.querySelectorAll('#consultationBtn, #contactConsultationBtn');

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    close.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
    });
}

function initFloatingConsultation() {
    const btn = document.getElementById('floatingConsultationBtn');
    if (btn) btn.addEventListener('click', openModal);
}

function initFormSubmission() {
    const form = document.getElementById('consultationForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                showToast('Thanks! I\'ll get back to you within 24 hours.');
                form.reset();
                closeModal();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            showToast('Something went wrong. Please try again or email me directly.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                showToast('Subscribed! Check your inbox soon.');
                form.reset();
            } else {
                throw new Error('Subscription failed');
            }
        } catch (error) {
            showToast('Could not subscribe. Please try again.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMessage');
    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 64,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initLearnMoreButton() {
    const btn = document.getElementById('learnMoreBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            const about = document.querySelector('#about');
            if (about) {
                window.scrollTo({ top: about.offsetTop - 64, behavior: 'smooth' });
            }
        });
    }
}

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

window.addEventListener('resize', () => {
    const menu = document.getElementById('mobileMenu');
    if (menu && window.innerWidth > 768) {
        menu.classList.remove('active');
    }
});
