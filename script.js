// Static version JavaScript (no backend API calls)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Scroll to top functionality
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'fixed bottom-6 right-6 bg-dental-blue text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 pointer-events-none z-50';
    scrollToTopBtn.style.transform = 'scale(0)';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.pointerEvents = 'auto';
            scrollToTopBtn.style.transform = 'scale(1)';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
            scrollToTopBtn.style.transform = 'scale(0)';
        }
    });

    // Navigation bar background on scroll
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.classList.add('shadow-lg');
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.style.backgroundColor = 'white';
                navbar.style.backdropFilter = 'none';
            }
        });
    }

    // Animation on scroll for service cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initialize animation states
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Phone number click handling
    const phoneLinks = document.querySelectorAll('a[href="tel:+39"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Phone number clicked');
        });
    });
});

// WhatsApp functionality - opens WhatsApp with pre-defined message
function openWhatsApp(serviceType) {
    // ⚠️ CONFIGURAZIONE OBBLIGATORIA: Sostituisci con il tuo numero WhatsApp
    const phoneNumber = '393881234567'; // Esempio: il tuo numero +39 388 1234567 diventa 393881234567
    
    const messages = {
        'prima-visita': `Salve! Vorrei prenotare una prima visita presso il vostro studio dentistico a Circello.

Potreste comunicarmi le vostre disponibilità per una prima consulenza?

Cordiali saluti`,

        'igiene': `Ciao! Vorrei prenotare una seduta di igiene e pulizia dentale presso il vostro studio a Circello.

Potreste comunicarmi le vostre disponibilità?

Grazie!`,

        'visita-controllo': `Salve! Avrei bisogno di prenotare una visita di controllo presso il vostro studio dentistico.

Quando sareste disponibili per un appuntamento?

Cordiali saluti`,

        'ortodonzia': `Buongiorno! Sono interessato/a a una consulenza ortodontica (apparecchi dentali) presso il vostro studio a Circello.

Potreste darmi informazioni sui vostri trattamenti ortodontici e le disponibilità?

Grazie mille!`,

        'estetica': `Ciao! Vorrei informazioni sui vostri trattamenti di estetica dentale (sbiancamento, faccette, ecc.) presso lo studio di Circello.

Potreste comunicarmi disponibilità per una consulenza?

Cordialmente`,

        'implantologia': `Salve Dottore! Sono interessato/a ai vostri servizi di implantologia dentale.

Potreste darmi informazioni sui trattamenti disponibili e fissare una prima consulenza?

Grazie per l'attenzione`,

        'parodontologia': `Buongiorno! Avrei bisogno di una consulenza parodontologica per problemi alle gengive.

Sareste disponibili per una visita specialistica presso il vostro studio?

Cordiali saluti`,

        'pediatrica': `Ciao! Vorrei prenotare una visita per mio/a figlio/a presso il vostro studio di odontoiatria pediatrica a Circello.

Quando potreste riceverci?

Grazie mille!`,

        'urgenza': `🚨 URGENZA DENTALE 🚨

Salve Dottore, ho un'urgenza dentale e avrei bisogno di un appuntamento il prima possibile.

Potreste aiutarmi? Quando sareste disponibili?

Grazie!`,

        'visita-generale': `Ciao! Vorrei prenotare una visita presso il vostro studio dentistico a Circello (Viale San Vito 6).

Potreste comunicarmi le vostre disponibilità?

Cordialmente`,

        'altro': `Salve! Vorrei richiedere informazioni sui servizi del vostro studio dentistico a Circello.

Potreste contattarmi per maggiori dettagli?

Grazie!`
    };
    
    const message = messages[serviceType] || messages['altro'];
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new window/tab
    window.open(whatsappURL, '_blank');
}

// WhatsApp general booking function
function openWhatsAppBooking() {
    openWhatsApp('visita-generale');
}

// WhatsApp general contact function
function openWhatsAppGeneral() {
    openWhatsApp('altro');
}

// Utility functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[\d\s\-\(\)]{8,}$/;
    return re.test(phone);
}