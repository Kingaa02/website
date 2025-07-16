// Dane produktów na podstawie struktury folderów
const products = [
  // Active Foam - aktywne piany do samochodów osobowych
  {
    id: 1,
    name: "Active Foam 1",
    category: "Aktywna Piana - Samochody",
    description:
      "Profesjonalna aktywna piana do mycia samochodów osobowych. Skutecznie usuwa zabrudzenia i nadaje błyszczący efekt.",
    images: [
      "images/Active foam 1/Active_foam_1_1.png",
      "images/Active foam 1/Active_foarm_1_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 2,
    name: "Active Foam 2",
    category: "Aktywna Piana - Samochody",
    description:
      "Zaawansowana formuła aktywnej piany z dodatkiem wosku. Idealna do regularnego mycia pojazdów.",
    images: [
      "images/Active foam 2/Active_foam_2_1.png",
      "images/Active foam 2/Active_foam_2_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 3,
    name: "Active Foam 3",
    category: "Aktywna Piana - Samochody",
    description:
      "Koncentrowana aktywna piana o wysokiej skuteczności. Bezpieczna dla lakieru i elementów plastikowych.",
    images: [
      "images/Active foam 3/Active_foam_3_1.png",
      "images/Active foam 3/Active_foam_3_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 4,
    name: "Active Foam 4",
    category: "Aktywna Piana - Samochody",
    description:
      "Uniwersalna aktywna piana do wszystkich typów pojazdów. Łagodna dla powierzchni, skuteczna w działaniu.",
    images: ["images/Active foam 4/Active_foam_4.png"],
    type: "active-foam",
  },
  {
    id: 5,
    name: "Active Foam 5",
    category: "Aktywna Piana - Samochody",
    description:
      "Premium aktywna piana z dodatkiem kondycjonera lakieru. Zapewnia długotrwały połysk.",
    images: [
      "images/Active foam 5/Active_foam_5_1.png",
      "images/Active foam 5/Active_foam_5_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 6,
    name: "Active Foam 6",
    category: "Aktywna Piana - Samochody",
    description:
      "Ekologiczna aktywna piana biodegradowalna. Przyjazna środowisku i skuteczna w czyszczeniu.",
    images: [
      "images/Active foam 6/Active_foam_6_1.png",
      "images/Active foam 6/Active_foam_6_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 7,
    name: "Active Foam 7",
    category: "Aktywna Piana - Samochody",
    description:
      "Aktywna piana o neutralnym pH. Idealna do delikatnych powierzchni i częstego użytkowania.",
    images: [
      "images/Active foam 7/Active_foam_7_1.png",
      "images/Active foam 7/Active_foam_7_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 8,
    name: "Active Foam 8",
    category: "Aktywna Piana - Samochody",
    description:
      "Wzmocniona aktywna piana do silnych zabrudzeń. Skutecznie radzi sobie z trudnymi plamami.",
    images: ["images/Active foam 8/Active_foam_8.png"],
    type: "active-foam",
  },
  {
    id: 9,
    name: "Active Foam 9",
    category: "Aktywna Piana - Samochody",
    description:
      "Szybko działająca aktywna piana. Oszczędza czas i zapewnia doskonałe rezultaty mycia.",
    images: [
      "images/Active foam 9/Active_foam_9_1.png",
      "images/Active foam 9/Active_foam_9_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 10,
    name: "Active Foam 10",
    category: "Aktywna Piana - Samochody",
    description:
      "Aktywna piana z dodatkiem enzymów. Naturalnie rozkłada zabrudzenia organiczne.",
    images: [
      "images/Active foam 10/Active_foam_10_1.png",
      "images/Active foam 10/Active_foam_10_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 11,
    name: "Active Foam 11",
    category: "Aktywna Piana - Samochody",
    description:
      "Profesjonalna aktywna piana do myjni samochodowych. Wysokowydajna i ekonomiczna.",
    images: [
      "images/Active foam 11/Active_foam_11_1.png",
      "images/Active foam 11/Active_foam_10_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 12,
    name: "Active Foam 12",
    category: "Aktywna Piana - Samochody",
    description:
      "Innowacyjna aktywna piana nowej generacji. Wykorzystuje najnowsze technologie czyszczenia.",
    images: ["images/Active foam 12/Active_foam_12.png"],
    type: "active-foam",
  },

  // Active Foam Truck - aktywne piany do ciężarówek
  {
    id: 13,
    name: "Active Foam Truck 1",
    category: "Aktywna Piana - Ciężarówki",
    description:
      "Specjalna aktywna piana do mycia ciężarówek i pojazdów użytkowych. Usuwa najtrudniejsze zabrudzenia.",
    images: [
      "images/Active foam truck 1/Active_foam_truck_1_1.png",
      "images/Active foam truck 1/Active_foam_truck_1_2.png",
    ],
    type: "active-foam-truck",
  },
  {
    id: 14,
    name: "Active Foam Truck 2",
    category: "Aktywna Piana - Ciężarówki",
    description:
      "Wzmocniona formuła do czyszczenia pojazdów ciężkich. Skuteczna przeciwko olejom i smarom.",
    images: [
      "images/Active foam truck 2/Active_foam_truck_2_1.png",
      "images/Active foam truck 2/Active_foam_truck_2_2.png",
    ],
    type: "active-foam-truck",
  },
  {
    id: 15,
    name: "Active Foam Truck 3",
    category: "Aktywna Piana - Ciężarówki",
    description:
      "Przemysłowa aktywna piana do flotowych myć ciężarówek. Optymalizowana do wielkoskalowego użycia.",
    images: [
      "images/Active foam truck 3/Active_foam_truck_3_1.png",
      "images/Active foam truck 3/Active_foam_truck_3_2.png",
    ],
    type: "active-foam-truck",
  },
  {
    id: 16,
    name: "Active Foam Truck 4",
    category: "Aktywna Piana - Ciężarówki",
    description:
      "Aktywna piana do ciężarówek z dodatkiem odtłuszczacza. Idealnie usuwa zabrudzenia drogowe.",
    images: ["images/Active foam truck 4/Active_foam_truck_4.png"],
    type: "active-foam-truck",
  },
  {
    id: 17,
    name: "Active Foam Truck 5",
    category: "Aktywna Piana - Ciężarówki",
    description:
      "Koncentrowana aktywna piana do pojazdów ciężkich. Ekonomiczne rozwiązanie dla firm transportowych.",
    images: [
      "images/Active foam truck 5/Active_foam_truck_5_1.png",
      "images/Active foam truck 5/Active_foam_truck_5_2.png",
    ],
    type: "active-foam-truck",
  },
  {
    id: 18,
    name: "Active Foam Truck 6",
    category: "Aktywna Piana - Ciężarówki",
    description:
      "Biodegradowalna aktywna piana do ciężarówek. Przyjazna środowisku i bardzo skuteczna.",
    images: [
      "images/Active foam truck 6/Active_foam_truck_6_1.png",
      "images/Active foam truck 6/Active_foam_truck_6_2.png",
    ],
    type: "active-foam-truck",
  },
  {
    id: 19,
    name: "Active Foam Truck 7",
    category: "Aktywna Piana - Ciężarówki",
    description:
      "Alkaliczna aktywna piana do trudnych zabrudzeń na ciężarówkach. Szybkie i skuteczne działanie.",
    images: [
      "images/Active foam truck 7/Active_foam_truck_7_1.png",
      "images/Active foam truck 7/Active_foam_truck_7_2.png",
    ],
    type: "active-foam-truck",
  },
  {
    id: 20,
    name: "Active Foam Truck 8",
    category: "Aktywna Piana - Ciężarówki",
    description:
      "Profesjonalna aktywna piana do myjni ciężarówek. Wysokie stężenie aktywnych składników.",
    images: ["images/Active foam truck 8/Active_foam_truck_8.png"],
    type: "active-foam-truck",
  },

  // Engine Cleaner - środki do czyszczenia silników
  {
    id: 21,
    name: "Engine Cleaner 1",
    category: "Środki do Silników",
    description:
      "Profesjonalny środek do czyszczenia silników. Skutecznie usuwa osady oleju, smaru i brudu.",
    images: [
      "images/Engine cleaner 1/Engine_cleaner_1_1.png",
      "images/Engine cleaner 1/Engine_cleaner_1_2.png",
    ],
    type: "engine-cleaner",
  },
  {
    id: 22,
    name: "Engine Cleaner 2",
    category: "Środki do Silników",
    description:
      "Biodegradowalny środek do czyszczenia komór silnikowych. Bezpieczny dla elektroniki i uszczelek.",
    images: [
      "images/Engine cleaner 2/Engine_cleaner_2_1.png",
      "images/Engine cleaner 2/Engine_cleaner_2_2.png",
    ],
    type: "engine-cleaner",
  },
  {
    id: 23,
    name: "Engine Cleaner 3",
    category: "Środki do Silników",
    description:
      "Wzmocniony środek do czyszczenia silników przemysłowych. Idealny do maszyn budowlanych i rolniczych.",
    images: [
      "images/Engine cleaner 3/Engine_cleaner_3_1.png",
      "images/Engine cleaner 3/Engine_cleaner_3_2.png",
    ],
    type: "engine-cleaner",
  },
  {
    id: 24,
    name: "Engine Cleaner 4",
    category: "Środki do Silników",
    description:
      "Uniwersalny środek do czyszczenia wszystkich typów silników. Łagodny dla powierzchni, skuteczny w działaniu.",
    images: ["images/Engine cleaner 4/Engine_cleaner_4.png"],
    type: "engine-cleaner",
  },
];

// Zmienne globalne
let currentDisplayedProducts = 0;
const productsPerPage = 8;
let filteredProducts = [...products];

// Funkcje pomocnicze
function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "product-card fade-in";

  // Tworzenie sekcji ze zdjęciami
  const imagesHtml = product.images
    .map(
      (image) =>
        `<div class="product-image">
            <img src="${image}" alt="${product.name}" onerror="this.style.display='none'">
        </div>`
    )
    .join("");

  productCard.innerHTML = `
        <div class="product-images">
            ${imagesHtml}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
        </div>
    `;

  return productCard;
}

function loadMoreProducts() {
  const productsGrid = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMore");

  // Pokazuj loading
  loadMoreBtn.innerHTML = '<span class="loading"></span> Ładowanie...';
  loadMoreBtn.disabled = true;

  // Symulacja ładowania
  setTimeout(() => {
    const endIndex = Math.min(
      currentDisplayedProducts + productsPerPage,
      filteredProducts.length
    );

    for (let i = currentDisplayedProducts; i < endIndex; i++) {
      const productCard = createProductCard(filteredProducts[i]);
      productsGrid.appendChild(productCard);

      // Animacja pojawiania się
      setTimeout(() => {
        productCard.style.opacity = "1";
        productCard.style.transform = "translateY(0)";
      }, (i - currentDisplayedProducts) * 100);
    }

    currentDisplayedProducts = endIndex;

    // Ukryj przycisk jeśli wszystkie produkty są wyświetlone
    if (currentDisplayedProducts >= filteredProducts.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.innerHTML = "Pokaż więcej produktów";
      loadMoreBtn.disabled = false;
    }
  }, 800);
}

function filterProducts(type = "all") {
  const productsGrid = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMore");

  // Resetuj wyświetlane produkty
  productsGrid.innerHTML = "";
  currentDisplayedProducts = 0;

  // Filtruj produkty
  if (type === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter((product) => product.type === type);
  }

  // Pokaż przycisk jeśli są produkty do wyświetlenia
  if (filteredProducts.length > productsPerPage) {
    loadMoreBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";
  }

  // Załaduj pierwsze produkty
  loadMoreProducts();
}

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

  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Ładowanie początkowych produktów
  loadMoreProducts();

  // Event listener dla przycisku "Pokaż więcej"
  const loadMoreBtn = document.getElementById("loadMore");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadMoreProducts);
  }

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
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
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
});

// Dodanie filtrów produktów (opcjonalnie)
function createProductFilters() {
  const filtersHtml = `
        <div class="product-filters" style="text-align: center; margin-bottom: 2rem;">
            <button class="filter-btn active" onclick="filterProducts('all')">Wszystkie (24)</button>
            <button class="filter-btn" onclick="filterProducts('active-foam')">Aktywne Piany (12)</button>
            <button class="filter-btn" onclick="filterProducts('active-foam-truck')">Piany do Ciężarówek (8)</button>
            <button class="filter-btn" onclick="filterProducts('engine-cleaner')">Środki do Silników (4)</button>
        </div>
        <style>
            .product-filters {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
            }
            .filter-btn {
                padding: 0.8rem 1.5rem;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                border: 2px solid rgba(255, 255, 255, 0.3);
                border-radius: 25px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.9rem;
            }
            .filter-btn:hover, .filter-btn.active {
                background: white;
                color: #667eea;
            }
            @media (max-width: 768px) {
                .product-filters {
                    flex-direction: column;
                    align-items: center;
                }
                .filter-btn {
                    width: 100%;
                    max-width: 300px;
                }
            }
        </style>
    `;

  const productsSection = document.querySelector(".products .container");
  const productsIntro = document.querySelector(".products-intro");

  if (productsSection && productsIntro) {
    productsIntro.insertAdjacentHTML("afterend", filtersHtml);
  }
}

// Wywołaj tworzenie filtrów po załadowaniu DOM
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(createProductFilters, 100);
});

// Eksportuj dane produktów (dla ewentualnego użycia w innych skryptach)
window.sparkProducts = products;
