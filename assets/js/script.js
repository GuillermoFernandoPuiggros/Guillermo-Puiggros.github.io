// BORRA todo el contenido actual del archivo
// Y PEGA este código completo:

// script.js - JavaScript moderno para tu portfolio

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - Iniciando funciones...');
    generalUtils();
    initMobileNavigation();
    initContactForm();
});

function generalUtils() {
    console.log('Iniciando utils generales...');
    initSmoothScrolling();
    animateSkillBars();
    initInteractiveEffects();
}

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        bar.style.animationPlayState = 'paused';
        observer.observe(bar);
    });
}

function initInteractiveEffects() {
    const fadeElements = document.querySelectorAll('.skill-category, .project-card');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
}

// 🍔 FUNCIÓN MENÚ HAMBURGUESA
function initMobileNavigation() {
    console.log('Iniciando navegación móvil...');
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Crear overlay dinámicamente
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevenir que el click se propague
            console.log('Click en menú hamburguesa');
            navLinks.classList.toggle('nav-active');
            this.classList.toggle('active');
            overlay.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un enlace
        const navLinksItems = document.querySelectorAll('.nav-links a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                console.log('Click en enlace de navegación');
                navLinks.classList.remove('nav-active');
                menuToggle.classList.remove('active');
                overlay.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer click en el overlay
        overlay.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            menuToggle.classList.remove('active');
            overlay.classList.remove('active');
        });
        
        // Cerrar menú al hacer click fuera de él
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('nav-active');
                menuToggle.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    } else {
        console.error('No se encontraron elementos del menú móvil');
    }
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// Para debugging - verifica que el archivo se cargue
console.log('script.js cargado correctamente');