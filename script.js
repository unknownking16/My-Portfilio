


document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");

    function revealAbout() {
        let sectionTop = aboutSection.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            aboutSection.style.opacity = "1";
            aboutSection.style.transform = "translateY(0)";
        }
    }

    aboutSection.style.opacity = "0";
    aboutSection.style.transform = "translateY(50px)";
    aboutSection.style.transition = "all 0.6s ease-in-out";

    window.addEventListener("scroll", revealAbout);
});

document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");

    function revealProjects() {
        projectCards.forEach(card => {
            let cardTop = card.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 50) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    }

    projectCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.6s ease-in-out";
    });

    window.addEventListener("scroll", revealProjects);
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formStatus.textContent = "Please fill out all fields.";
            formStatus.style.color = "red";
            return;
        }

        // Fake form submission effect
        formStatus.textContent = "Sending...";
        formStatus.style.color = "cyan";

        setTimeout(() => {
            formStatus.textContent = "Message Sent Successfully!";
            formStatus.style.color = "lightgreen";
            contactForm.reset();
        }, 2000);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Smooth Scroll
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });

            // Close mobile menu after clicking
            navLinks.classList.remove("active");
        });
    });

    // Sticky Navbar on Scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Toggle Mobile Menu
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
