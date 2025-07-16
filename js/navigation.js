// Funkcja smooth scroll
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Funkcja do zmiany stylu navbar przy scrollowaniu
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  const scrolled = window.scrollY > 50;

  if (scrolled) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Funkcja do animacji elementów przy scrollowaniu
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".feature-card, .product-card, .stat"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("fade-in");
    }
  });
}

// Funkcja toggle menu mobilnego
function toggleMobileMenu() {
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  if (navMenu && hamburger) {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  }
}

// Inicjalizacja nawigacji
function initializeNavigation() {
  // Event listeners dla nawigacji
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      smoothScroll(target);

      // Zamknij menu mobilne po kliknięciu
      const navMenu = document.querySelector(".nav-menu");
      const hamburger = document.querySelector(".hamburger");
      if (navMenu && hamburger) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  // Event listener dla przycisków hero
  const heroBtns = document.querySelectorAll('.hero-buttons a[href^="#"]');
  heroBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      smoothScroll(target);
    });
  });

  // Event listener dla hamburger menu
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMobileMenu);
  }

  // Event listeners dla scroll events
  window.addEventListener("scroll", function () {
    handleNavbarScroll();
    animateOnScroll();
  });

  // Początkowa animacja elementów
  animateOnScroll();
}
