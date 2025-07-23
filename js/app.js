// Główna aplikacja Spark
// Ten plik inicjalizuje wszystkie komponenty

// Funkcja inicjalizacji aplikacji
function initializeApp() {
  console.log("🚀 Inicjalizacja aplikacji Spark...");

  // Inicjalizacja nawigacji
  if (typeof initializeNavigation === "function") {
    initializeNavigation();
    console.log("✅ Nawigacja zainicjalizowana");
  }

  // Inicjalizacja produktów
  if (typeof initializeProducts === "function") {
    initializeProducts();
    console.log("✅ Produkty zainicjalizowane");
  } else {
    console.error("❌ Funkcja initializeProducts nie została znaleziona");
  }

  console.log("🎉 Aplikacja Spark gotowa!");
}

// Uruchom aplikację gdy DOM jest gotowy
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
