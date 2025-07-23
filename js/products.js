// Funkcja do tworzenia karty produktu
function createProductCard(product, isEmpty = false) {
  console.log(
    "🏗️ Tworzenie karty produktu:",
    isEmpty ? "PUSTA" : product ? product.name : "BRAK DANYCH"
  );

  const productCard = document.createElement("div");
  productCard.className = "product-card";
  productCard.style.opacity = "0";
  productCard.style.transform = "translateY(30px)";
  productCard.style.transition = "all 0.6s ease";

  if (!isEmpty) {
    productCard.style.cursor = "pointer";
    // Dodanie event listenera do kliknięcia tylko dla produktu z danymi
    productCard.addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
    });
  }

  if (isEmpty) {
    // Pusta karta produktu
    productCard.innerHTML = `
      <div class="product-images">
        <div class="product-image empty-image">
          <i class="fas fa-plus" style="font-size: 2rem; color: #666;"></i>
        </div>
      </div>
      <div class="product-info">
        <h3 style="color: #666;">Wkrótce...</h3>
        <p class="product-description" style="color: #888;">Nowy produkt już wkrótce w naszej ofercie</p>
      </div>
    `;
  } else {
    // Karta z produktem
    if (!product) {
      console.error("❌ Brak danych produktu!");
      return null;
    }

    console.log(
      "📸 Liczba zdjęć produktu:",
      product.images ? product.images.length : 0
    );

    // Tworzenie sekcji ze zdjęciami
    const imagesHtml = product.images
      .slice(0, 2) // Pokazuj tylko pierwsze 2 zdjęcia w karcie
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
              <h3>${product.name}</h3>
              <p class="product-description">${product.description}</p>
          </div>
      `;
  }

  return productCard;
}

// Funkcja do wyświetlania 6 kart produktów (1 z danymi, 5 pustych)
function displayProducts() {
  const productsGrid = document.getElementById("productsGrid");

  if (!productsGrid) {
    console.error("❌ Nie znaleziono elementu productsGrid");
    return;
  }

  console.log("📦 Wyświetlanie produktów...");
  console.log(
    "🔍 Liczba dostępnych produktów:",
    products ? products.length : 0
  );
  console.log(
    "📄 Pierwszy produkt:",
    products && products[0] ? products[0] : "brak"
  );

  // Wyczyść siatkę produktów
  productsGrid.innerHTML = "";

  // Dodaj karty dla czterech pierwszych produktów (jeśli istnieją)
  let realProducts = 0;
  if (products && products.length > 0) {
    for (let i = 0; i < 4 && i < products.length; i++) {
      console.log("✅ Tworzenie karty dla produktu:", products[i].name);
      const productCard = createProductCard(products[i], false);
      productsGrid.appendChild(productCard);
      realProducts++;
      // Animacja pojawiania się
      setTimeout(() => {
        productCard.style.opacity = "1";
        productCard.style.transform = "translateY(0)";
      }, (i + 1) * 100);
    }
  } else {
    console.error("❌ Brak produktów do wyświetlenia");
  }

  // Dodaj puste karty, aby było łącznie 6
  console.log("➕ Dodawanie pustych kart...");
  for (let i = realProducts; i < 6; i++) {
    const emptyCard = createProductCard(null, true);
    productsGrid.appendChild(emptyCard);
    // Animacja pojawiania się z opóźnieniem
    setTimeout(() => {
      emptyCard.style.opacity = "1";
      emptyCard.style.transform = "translateY(0)";
    }, (i + 1) * 100);
  }

  console.log("✅ Zakończono wyświetlanie produktów");
}

// Inicjalizacja produktów
function initializeProducts() {
  console.log("🚀 Inicjalizacja modułu produktów...");

  // Sprawdź czy zmienna products jest dostępna
  if (typeof products === "undefined") {
    console.error("❌ Zmienna 'products' nie jest dostępna!");
    console.log("🔄 Próba ponownego ładowania za 500ms...");
    setTimeout(initializeProducts, 500);
    return;
  }

  console.log("✅ Zmienna 'products' jest dostępna");
  // Wyświetlenie 6 kart produktów
  displayProducts();
}
