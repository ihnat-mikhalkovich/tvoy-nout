document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const contactButtons = document.querySelectorAll('.contact-buttons .btn[data-action]');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            switch(action) {
                case 'email':
                    window.location.href = "mailto:tvoynotebook@gmail.com";
                    break;
                case 'call':
                    window.location.href = "tel:+375295475568";
                    break;
                case 'chat':
                    window.open("https://t.me/tvoynoutymanskaya", "_blank");
                    break;
            }
        });
    });

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const targetSection = document.querySelector('#contact');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Gradient effect on hero
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', function(e) {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const angle = (x / width) * 360;
        hero.style.setProperty('--angle', angle + 'deg');
    });
});