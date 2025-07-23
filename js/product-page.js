/* filepath: c:\Users\LENOVO\Desktop\website\js\product-page.js */
// Product Page JavaScript
document.addEventListener("DOMContentLoaded", function () {
  setupVolumeButtons();
  // Pobierz ID produktu z URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  if (!productId || !products) {
    console.error("Nie znaleziono produktu");
    window.location.href = "index.html";
    return;
  }

  // Znajdź produkt
  const product = products.find((p) => p.id === productId);

  if (!product) {
    console.error("Produkt nie istnieje");
    window.location.href = "index.html";
    return;
  }

  if (!product) {
    // Jeśli nie znaleziono produktu, pokaż komunikat "Coming Soon"
    document.querySelector(".product-content").innerHTML = `
    <div class="coming-soon">
      <h2>Coming Soon</h2>
      <p>Strona produktu w przygotowaniu.</p>
      <a href="index.html#products" class="btn-primary">Powrót do produktów</a>
    </div>
  `;
    return;
  }

  // Wypełnij dane produktu tylko dla Active Foam 1
  displayProductDetails(product);
  setupImageGallery(product);
  setupDownloadLinks(product);
});

function showComingSoonMessage(product) {
  // Ukryj główną zawartość
  const productContent = document.querySelector(".product-content");

  // Stwórz komunikat "Coming Soon"
  productContent.innerHTML = `
    <div class="coming-soon-container">
      <div class="coming-soon-content">
        <div class="coming-soon-icon">
          <i class="fas fa-clock"></i>
        </div>
        <h1>${product.name}</h1>
        <h2>Coming Soon :)</h2>
        <p>Strona tego produktu jest w przygotowaniu.<br>Wkrótce dostępne będą szczegółowe informacje.</p>
        <a href="index.html#products" class="btn-primary">
          <i class="fas fa-arrow-left"></i>
          Powrót do produktów
        </a>
      </div>
    </div>
  `;

  // Aktualizuj tytuł strony
  document.title = `${product.name} - Coming Soon - Spark`;
}

function generateProductFeatures(product) {
  // Użyj cech z product.details.features jeśli istnieją
  if (product.details && product.details.features) {
    return product.details.features;
  }

  // Fallback - stare cechy statyczne
  const baseFeatures = [
    "Wysoka koncentracja składników aktywnych",
    "Doskonały efekt pienienia",
    "Bezpieczne dla lakieru samochodowego",
  ];

  if (
    product.category === "active-foam" &&
    product.name.includes("Active Foam 1")
  ) {
    return [
      ...baseFeatures,
      "Skutecznie usuwa brud drogowy",
      "Usuwa olej silnikowy i resztki insektów",
      "Nie uszkadza metali nieżelaznych",
      "Dodatki antykorozyjne",
      "Piana łatwo spływa z powierzchni",
      "Kompatybilny z systemami dozowania",
      "Przeznaczony do mycia bezdotykowego",
    ];
  } else if (product.type === "active-foam-truck") {
    return [
      ...baseFeatures,
      "Specjalnie dla pojazdów ciężkich",
      "Usuwa trudne zabrudzenia",
      "Odporna na oleje i smary",
      "Ekonomiczne zużycie",
    ];
  } else if (product.type === "engine-cleaner") {
    return [
      ...baseFeatures,
      "Bezpieczny dla elektroniki",
      "Usuwa osady oleju",
      "Nie uszkadza uszczelek",
      "Szybkie działanie",
    ];
  }

  return baseFeatures;
}

function displayProductDetails(product) {
  // Kategoria i nazwa produktu w nagłówku
  document.getElementById("productCategory").textContent = product.category;
  document.getElementById("productName").textContent = product.name;

  // Szczegółowy opis dla produktów Active Foam 1
  let detailedDescription = product.description;

  if (product.name.includes("Active Foam 1")) {
    // Wyciągnij wagę z nazwy produktu
    const weightMatch = product.name.match(/\(([\d.,]+)\s*kg\)/);
    const weight = weightMatch ? weightMatch[1] : "nie określona";

    detailedDescription = `Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego pojazdów. Skutecznie usuwa brud drogowy, zanieczyszczenia, olej silnikowy oraz resztki insektów z powierzchni karoserii.

Produkt nie uszkadza powłok wykonanych z metali nieżelaznych, a powstająca piana łatwo spływa z powierzchni. Zawiera specjalne dodatki antykorozyjne, które chronią metalowe elementy pojazdu podczas procesu mycia.

Formuła jest w pełni kompatybilna z każdym systemem dozowania w samoobsługowych stacjach myjni, co czyni ją idealnym wyborem zarówno dla zastosowań zawodowych, jak i konsumenckich (gospodarstwa domowe).

Waga opakowania: ${weight} kg
Przeznaczenie: Zastosowanie zawodowe i konsumenckie
Typ aplikacji: Mycie bezdotykowe`;
  }

  // Zmniejszone odstępy między akapitami - z <br><br> na <br>
  document.getElementById("productDescription").innerHTML =
    detailedDescription.replace(/\n/g, "<br>");

  // Cechy produktu
  const features = generateProductFeatures(product);
  const featuresList = document.getElementById("productFeatures");
  featuresList.innerHTML = "";

  features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  // Aktualizuj tytuł strony
  document.title = `${product.name} - Spark`;
}

function setupImageGallery(product) {
  // Ustaw obsługę przycisków objętości pod galerią
  setupVolumeButtons(product);
  const mainImage = document.getElementById("mainProductImage");
  const thumbnailGallery = document.getElementById("thumbnailGallery");

  if (product.images.length === 0) {
    mainImage.src = "images/placeholder.png";
    mainImage.alt = "Brak zdjęcia";
    return;
  }

  // Ustaw główne zdjęcie
  mainImage.src = product.images[0];
  mainImage.alt = product.name;

  // Utwórz miniaturki jeśli jest więcej niż jedno zdjęcie
  if (product.images.length > 1) {
    thumbnailGallery.innerHTML = "";

    product.images.forEach((image, index) => {
      const thumbnail = document.createElement("div");
      thumbnail.className = `thumbnail ${index === 0 ? "active" : ""}`;

      const img = document.createElement("img");
      img.src = image;
      img.alt = `${product.name} - zdjęcie ${index + 1}`;
      img.onerror = function () {
        this.parentElement.style.display = "none";
      };

      thumbnail.appendChild(img);

      // Event listener dla zmiany głównego zdjęcia
      thumbnail.addEventListener("click", () => {
        mainImage.src = image;

        // Aktualizuj aktywną miniaturkę
        document
          .querySelectorAll(".thumbnail")
          .forEach((t) => t.classList.remove("active"));
        thumbnail.classList.add("active");
      });

      thumbnailGallery.appendChild(thumbnail);
    });
  }
}

function setupVolumeButtons(product) {
  // Dynamiczne generowanie przycisków objętości na podstawie product.volumes
  const volumesList = document.querySelector(".volumes-list");
  const mainImage = document.getElementById("mainProductImage");
  if (!volumesList || !product || !mainImage || !product.volumes) return;

  volumesList.innerHTML = "";
  product.volumes.forEach((vol, idx) => {
    const btn = document.createElement("button");
    btn.className = "volume-item";
    btn.setAttribute("data-image-index", vol.imageIndex);
    btn.innerHTML = `<span class="volume-number">${vol.label}</span> kg`;
    btn.addEventListener("click", function () {
      if (product.images[vol.imageIndex]) {
        mainImage.src = product.images[vol.imageIndex];
        mainImage.alt = product.name + " - zdjęcie " + (vol.imageIndex + 1);
      }
      // Ustaw aktywny przycisk
      document
        .querySelectorAll(".volume-item")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      // Przeskakująca ramka w miniaturkach
      const thumbnails = document.querySelectorAll(".thumbnail");
      thumbnails.forEach((t, i) =>
        t.classList.toggle("active", i === vol.imageIndex)
      );
    });
    volumesList.appendChild(btn);
  });
}

function setupDownloadLinks(product) {
  const downloadsSection = document.querySelector(".product-downloads");
  const downloadButtons = document.querySelector(".download-buttons");

  // Wyczyść istniejące przyciski
  downloadButtons.innerHTML = "";

  // Użyj linków z product.details.downloads jeśli istnieją
  if (product.details && product.details.downloads) {
    product.details.downloads.forEach((download) => {
      const button = createDownloadButton(
        "fas fa-file-alt",
        download.name,
        download.url
      );
      downloadButtons.appendChild(button);
    });
  } else {
    // Fallback - stare linki dla Active Foam 1
    if (product.name.includes("Active Foam 1")) {
      const sdsBtn = createDownloadButton(
        "fas fa-file-alt",
        "Charakterystyka produktu (SDS)",
        "downloads/SDS-SPARK_Active_Foam_1-PL-pl.pdf"
      );
      downloadButtons.appendChild(sdsBtn);
    } else {
      // Dla pozostałych produktów - zwykła "Charakterystyka produktu"
      const characteristicBtn = createDownloadButton(
        "fas fa-file-alt",
        "Charakterystyka produktu",
        generateCharacteristicFilename(product)
      );
      downloadButtons.appendChild(characteristicBtn);
    }
  }
}

function createDownloadButton(iconClass, buttonText, filePath) {
  const button = document.createElement("a");
  button.className = "download-btn";
  button.href = filePath;
  button.download = filePath.split("/").pop();

  button.innerHTML = `
    <i class="${iconClass}"></i>
    ${buttonText}
  `;

  // Usuń onclick całkowicie - pozwól na normalne działanie linka
  return button;
}

function generateCharacteristicFilename(product) {
  const productSlug = product.name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  return `downloads/${productSlug}-charakterystyka.pdf`;
}
