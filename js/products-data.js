// Dane produktów - TYLKO 24 produkty
const products = [
  // Active Foam 1 - aktywne piany do samochodów osobowych (ID 1-4)
  {
    id: 1,
    name: "Active Foam 1 (1 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: [
      "images/Active foam 1/Active_foam_1_1.png",
      "images/Active foam 1/Active_foarm_1_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 2,
    name: "Active Foam 1 (5.5 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: [
      "images/Active foam 2/Active_foam_2_1.png",
      "images/Active foam 2/Active_foam_2_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 3,
    name: "Active Foam 1 (10.2 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: [
      "images/Active foam 3/Active_foam_3_1.png",
      "images/Active foam 3/Active_foam_3_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 4,
    name: "Active Foam 1 (21 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: ["images/Active foam 4/Active_foam_4.png"],
    type: "active-foam",
  },

  // Active Foam 2 - aktywne piany do samochodów osobowych (ID 5-8)
  {
    id: 5,
    name: "Active Foam 2 (1 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: [
      "images/Active foam 5/Active_foam_5_1.png",
      "images/Active foam 5/Active_foam_5_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 6,
    name: "Active Foam 2 (5.5 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: [
      "images/Active foam 6/Active_foam_6_1.png",
      "images/Active foam 6/Active_foam_6_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 7,
    name: "Active Foam 2 (10.5 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: [
      "images/Active foam 7/Active_foam_7_1.png",
      "images/Active foam 7/Active_foam_7_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 8,
    name: "Active Foam 2 (21 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: ["images/Active foam 8/Active_foam_8.png"],
    type: "active-foam",
  },

  // Active Foam 3 - aktywne piany do samochodów osobowych (ID 9-12)
  {
    id: 9,
    name: "Active Foam 3 (1 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: [
      "images/Active foam 9/Active_foam_9_1.png",
      "images/Active foam 9/Active_foam_9_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 10,
    name: "Active Foam 3 (5.5 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: [
      "images/Active foam 10/Active_foam_10_1.png",
      "images/Active foam 10/Active_foam_10_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 11,
    name: "Active Foam 3 (10.5 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: [
      "images/Active foam 11/Active_foam_11_1.png",
      "images/Active foam 11/Active_foam_10_2.png",
    ],
    type: "active-foam",
  },
  {
    id: 12,
    name: "Active Foam 3 (21 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wysoko skoncentrowany preparat o dużym efekcie pienienia, przeznaczony do mycia bezdotykowego. Skutecznie usuwa brud drogowy, olej silnikowy i resztki insektów.",
    images: ["images/Active foam 12/Active_foam_12.png"],
    type: "active-foam",
  },

  // Active Foam Truck 1 - aktywne piany do ciężarówek (ID 13-16)
  {
    id: 13,
    name: "Active Foam Truck 1 (1 kg)",
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
    name: "Active Foam Truck 1 (5.5 kg)",
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
    name: "Active Foam Truck 1 (11.1 kg)",
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
    name: "Active Foam Truck 1 (22 kg)",
    category: "Aktywna Piana - Ciężarówki",
    description:
      "Aktywna piana do ciężarówek z dodatkiem odtłuszczacza. Idealnie usuwa zabrudzenia drogowe.",
    images: ["images/Active foam truck 4/Active_foam_truck_4.png"],
    type: "active-foam-truck",
  },

  // Active Foam Truck 2 - aktywne piany do ciężarówek (ID 17-20)
  {
    id: 17,
    name: "Active Foam Truck 2 (1 kg)",
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
    name: "Active Foam Truck 2 (6 kg)",
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
    name: "Active Foam Truck 2 (11 kg)",
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
    name: "Active Foam Truck 2 (22 kg)",
    category: "Aktywna Piana - Ciężarówki",
    description:
      "Profesjonalna aktywna piana do myjni ciężarówek. Wysokie stężenie aktywnych składników.",
    images: ["images/Active foam truck 8/Active_foam_truck_8.png"],
    type: "active-foam-truck",
  },

  // Engine Cleaner - środki do czyszczenia silników (ID 21-24)
  {
    id: 21,
    name: "Engine Cleaner (1 kg)",
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
    name: "Engine Cleaner (5 kg)",
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
    name: "Engine Cleaner (10 kg)",
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
    name: "Engine Cleaner (20 kg)",
    category: "Środki do Silników",
    description:
      "Uniwersalny środek do czyszczenia wszystkich typów silników. Łagodny dla powierzchni, skuteczny w działaniu.",
    images: ["images/Engine cleaner 4/Engine_cleaner_4.png"],
    type: "engine-cleaner",
  },
];

// Eksportuj dane produktów
window.sparkProducts = products;

function displayProductDetails(product) {
  // Kategoria
  document.getElementById("productCategory").textContent = product.category;

  // Nazwa produktu
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

  document.getElementById("productDescription").innerHTML =
    detailedDescription.replace(/\n/g, "<br><br>");

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
