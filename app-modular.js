/* 
Spark - Profesjonalna chemia samochodowa
Główny plik JavaScript - ładuje wszystkie moduły

Kolejność ładowania jest ważna:
1. Dane produktów (products-data.js)
2. Funkcje pomocnicze (utils.js)
3. Nawigacja (navigation.js)
4. Produkty (products.js)
5. Główna aplikacja (app.js)
*/

// Funkcja dynamicznego ładowania skryptów
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Ładowanie wszystkich modułów w odpowiedniej kolejności
async function loadAllModules() {
  try {
    console.log("📦 Ładowanie modułów Spark...");

    // 1. Dane produktów
    await loadScript("./js/products-data.js");
    console.log(" Dane produktów załadowane");

    // 2. Funkcje pomocnicze
    await loadScript("./js/utils.js");
    console.log(" Funkcje pomocnicze załadowane");

    // 3. Nawigacja
    await loadScript("./js/navigation.js");
    console.log(" Nawigacja załadowana");

    // 4. Produkty
    await loadScript("./js/products.js");
    console.log(" Moduł produktów załadowany");

    // 5. Główna aplikacja
    await loadScript("./js/app.js");
    console.log(" Główna aplikacja załadowana");

    console.log(" Wszystkie moduły załadowane pomyślnie!");
  } catch (error) {
    console.error(" Błąd ładowania modułów:", error);
  }
}

// Uruchom ładowanie modułów
loadAllModules();
