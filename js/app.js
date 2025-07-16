// Główny plik inicjalizujący aplikację
// Importuje wszystkie moduły i uruchamia aplikację

// Sprawdzenie czy DOM jest załadowany
function domReady(fn) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    fn();
  }
}

// Główna funkcja inicjalizująca
function initializeApp() {
  console.log("🚀 Spark - Inicjalizacja aplikacji...");

  try {
    // Inicjalizacja nawigacji
    if (typeof initializeNavigation === "function") {
      initializeNavigation();
      console.log("✅ Nawigacja zainicjalizowana");
    }

    // Inicjalizacja produktów
    if (typeof initializeProducts === "function") {
      initializeProducts();
      console.log("✅ Produkty zainicjalizowane");
    }

    // Inicjalizacja lazy loading obrazów
    if (
      window.SparkUtils &&
      typeof window.SparkUtils.lazyLoadImages === "function"
    ) {
      window.SparkUtils.lazyLoadImages();
      console.log("✅ Lazy loading obrazów zainicjalizowany");
    }

    // Zapisz timestamp ostatniego uruchomienia
    if (window.SparkUtils && window.SparkUtils.Storage) {
      window.SparkUtils.Storage.set("lastVisit", new Date().toISOString());
    }

    console.log("🎉 Aplikacja Spark została pomyślnie zainicjalizowana!");
  } catch (error) {
    console.error("❌ Błąd podczas inicjalizacji aplikacji:", error);
  }
}

// Sprawdzenie dostępności wszystkich wymaganych skryptów
function checkDependencies() {
  const dependencies = [
    { name: "products", check: () => typeof products !== "undefined" },
    {
      name: "navigation",
      check: () => typeof initializeNavigation === "function",
    },
    {
      name: "productsModule",
      check: () => typeof initializeProducts === "function",
    },
    { name: "utils", check: () => typeof window.SparkUtils !== "undefined" },
  ];

  const missing = dependencies.filter((dep) => !dep.check());

  if (missing.length > 0) {
    console.warn(
      "⚠️ Brakujące zależności:",
      missing.map((dep) => dep.name)
    );
  } else {
    console.log("✅ Wszystkie zależności zostały załadowane");
  }

  return missing.length === 0;
}

// Funkcja obsługi błędów globalnych
function setupErrorHandling() {
  window.addEventListener("error", function (e) {
    console.error("❌ Błąd JavaScript:", e.error);

    // Opcjonalnie: wyślij błąd do systemu monitorowania
    // sendErrorToMonitoring(e.error);
  });

  window.addEventListener("unhandledrejection", function (e) {
    console.error("❌ Nieobsłużona Promise:", e.reason);

    // Zapobiegnij wyświetlaniu błędu w konsoli
    e.preventDefault();
  });
}

// Funkcja optymalizacji wydajności
function optimizePerformance() {
  // Optymalizacja scroll events z throttle
  if (window.SparkUtils && window.SparkUtils.throttle) {
    const optimizedScroll = window.SparkUtils.throttle(() => {
      handleNavbarScroll();
      animateOnScroll();
    }, 16); // ~60fps

    window.removeEventListener("scroll", handleNavbarScroll);
    window.removeEventListener("scroll", animateOnScroll);
    window.addEventListener("scroll", optimizedScroll);
  }

  // Preload krytycznych zasobów
  const criticalImages = ["images/background_photo.jpg"];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
}

// Event listener dla załadowania DOM
domReady(function () {
  // Setup obsługi błędów
  setupErrorHandling();

  // Sprawdź zależności
  const dependenciesOk = checkDependencies();

  if (dependenciesOk) {
    // Inicjalizuj aplikację
    initializeApp();

    // Optymalizuj wydajność
    optimizePerformance();
  } else {
    console.error(
      "❌ Nie można zainicjalizować aplikacji - brakujące zależności"
    );
  }
});

// Eksport dla globalnego dostępu
window.SparkApp = {
  initialize: initializeApp,
  checkDependencies,
  version: "1.0.0",
};
