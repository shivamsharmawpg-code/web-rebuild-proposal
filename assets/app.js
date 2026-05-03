document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    
    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            siteNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Basic mobile menu handling if needed
            if (siteNav.classList.contains('active')) {
                siteNav.style.display = 'block';
                siteNav.style.position = 'absolute';
                siteNav.style.top = '80px';
                siteNav.style.left = '0';
                siteNav.style.width = '100%';
                siteNav.style.background = 'white';
                siteNav.style.padding = '2rem';
                siteNav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                
                const navList = siteNav.querySelector('.navlist');
                navList.style.flexDirection = 'column';
                navList.style.textAlign = 'center';
            } else {
                siteNav.style.display = ''; // Reset to CSS default
            }
        });
    }

    // Scroll Header Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .section-header, .panel').forEach(el => {
        el.style.opacity = '0'; // Initial state for observer
        observer.observe(el);
    });
});
