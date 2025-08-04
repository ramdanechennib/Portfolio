// Effet de texte animé
const typed = new Typed('.multiple-text', {
    strings: ['Développeur Full Stack', 'Designer UI/UX', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Curseur personnalisé
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Changement de couleur du header au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
    
    // Fermer le menu mobile lors du scroll
    menuToggle.classList.remove('active');
    navbar.classList.remove('active');
});

// Animation au scroll
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Effet de surbrillance au survol des liens
const links = document.querySelectorAll('a, button, .services-box, .portfolio-box');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('link-grow');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-grow');
    });
});

// Animation des compétences
const skillBars = document.querySelectorAll('.skill-level');

function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Observer pour déclencher l'animation des compétences
const aboutSection = document.querySelector('.about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);

// Envoi du formulaire
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulation d'envoi
    const btn = contactForm.querySelector('button');
    btn.textContent = 'Envoi en cours...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.textContent = 'Message envoyé!';
        btn.style.backgroundColor = '#4CAF50';
        contactForm.reset();
        
        setTimeout(() => {
            btn.textContent = 'Envoyer';
            btn.style.backgroundColor = '';
            btn.disabled = false;
        }, 2000);
    }, 1500);
});