// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu element and add to navbar
    const navbar = document.querySelector('.navbar-container');
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    navbar.appendChild(hamburger);
    
    // Handle hamburger click
    hamburger.addEventListener('click', function() {
        const navMenu = document.querySelector('.navbar ul');
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Handle scroll behavior for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scroll');
        } else {
            navbar.classList.remove('scroll');
        }
    });

    // Handle clicks outside menu to close it
    document.addEventListener('click', function(event) {
        const navMenu = document.querySelector('.navbar ul');
        const hamburgerBtn = document.querySelector('.hamburger');
        
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !hamburgerBtn.contains(event.target)) {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
});