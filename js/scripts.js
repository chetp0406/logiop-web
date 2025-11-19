document.addEventListener('DOMContentLoaded', () => {
    const modals = ['demoModal', 'screenshotModal'];

    modals.forEach(id => {
        const modalEl = document.getElementById(id);
        if (!modalEl) return;

        modalEl.addEventListener('show.bs.modal', () => {
            modalEl.classList.add('zoom-in');
        });

        modalEl.addEventListener('hidden.bs.modal', () => {
            modalEl.classList.remove('zoom-in');
        });
    });

    window.addEventListener('scroll', function () {
        // Change navbar bg on scroll
        const nav = document.getElementById('mainNav');
        if (window.scrollY > 50) {
            nav.classList.add('navbar-scrolled');
        } else {
            nav.classList.remove('navbar-scrolled');
        }

        // Activate nav links on scroll
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 75; // adjust for navbar height
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });
        });
    });

    // Back-to-top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});