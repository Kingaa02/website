// Zmienne globalne dla produktów
let currentDisplayedProducts = 0;
const productsPerPage = 8;
let filteredProducts = [...products];

// Funkcja do tworzenia karty produktu
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

// Funkcja ładowania większej ilości produktów
function loadMoreProducts() {
  const productsGrid = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMore");

  if (!productsGrid || !loadMoreBtn) return;

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

// Funkcja filtrowania produktów
function filterProducts(type = "all") {
  const productsGrid = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMore");

  if (!productsGrid || !loadMoreBtn) return;

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

  // Aktualizuj aktywny przycisk filtru
  updateActiveFilterButton(type);

  // Załaduj pierwsze produkty
  loadMoreProducts();
}

// Funkcja aktualizacji aktywnego przycisku filtru
function updateActiveFilterButton(activeType) {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.classList.remove("active");

    // Sprawdź który przycisk powinien być aktywny
    const btnType = btn.getAttribute("onclick").match(/'([^']+)'/)[1];
    if (btnType === activeType) {
      btn.classList.add("active");
    }
  });
}

// Funkcja tworzenia filtrów produktów
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

// Inicjalizacja produktów
function initializeProducts() {
  // Ładowanie początkowych produktów
  loadMoreProducts();

  // Event listener dla przycisku "Pokaż więcej"
  const loadMoreBtn = document.getElementById("loadMore");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadMoreProducts);
  }

  // Tworzenie filtrów
  setTimeout(createProductFilters, 100);
}
