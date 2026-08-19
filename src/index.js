// 1. First, import your Firebase setup (Notice the .js at the end!)
import app from './firebase.js';

// 2. These logs will run only if the import above is completely successful
alert("JavaScript and Firebase are working!");
console.log("Firebase is connected and ready!", app);


// =========================================
// 3. DARK / LIGHT MODE TOGGLE (saves preference)
// =========================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const rootEl = document.documentElement;

function applyTheme(theme) {
    if (theme === 'dark') {
        rootEl.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        rootEl.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

try {
    const savedTheme = localStorage.getItem('ukw-theme');
    if (savedTheme) applyTheme(savedTheme);
} catch (e) { /* storage unavailable — default to light */ }

themeToggle.addEventListener('click', () => {
    const isDark = rootEl.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    try { localStorage.setItem('ukw-theme', newTheme); } catch (e) { }
});

// =========================================
// 4. MOBILE MENU TOGGLE
// =========================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// =========================================
// 5. CONTACT FORM (Real Handler)
// =========================================
const contactForm = document.getElementById('contactForm');

// This script safely lets the form send data to your email, then resets the text boxes!
contactForm.addEventListener('submit', () => {
    alert('Thank you for contacting UKW Engineering Solutions! Your inquiry has been sent. We will review it and get back to you within 24 hours.');
    
    // A tiny half-second delay to let the data leave the website before clearing the screen inputs
    setTimeout(() => { contactForm.reset(); }, 500);
});

// =========================================
// 6. HEADER SHADOW ON SCROLL
// =========================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.boxShadow = window.scrollY > 50
        ? '0 4px 20px rgba(0,0,0,0.15)'
        : '0 2px 10px rgba(0,0,0,0.05)';
});
