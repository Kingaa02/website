// Dane produktów na podstawie struktury folderów
const products = [
  // Active Foam - aktywne piany do samochodów osobowych
  {
    id: 1,
    name: "Active Foam (1 kg)",
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
    name: "Active Foam (5.5 kg)",
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
    name: "Active Foam (10.2 kg)",
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
    name: "Active Foam (21 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Uniwersalna aktywna piana do wszystkich typów pojazdów. Łagodna dla powierzchni, skuteczna w działaniu.",
    images: ["images/Active foam 4/Active_foam_4.png"],
    type: "active-foam",
  },
  {
    id: 5,
    name: "Active Foam 2 (1 kg)",
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
    name: "Active Foam 2 (5.5 kg)",
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
    name: "Active Foam 2 (10.5 kg)",
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
    name: "Active Foam 2 (21 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Wzmocniona aktywna piana do silnych zabrudzeń. Skutecznie radzi sobie z trudnymi plamami.",
    images: ["images/Active foam 8/Active_foam_8.png"],
    type: "active-foam",
  },
  {
    id: 9,
    name: "Active Foam 3 (1 kg)",
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
    name: "Active Foam 3 (5.5 kg)",
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
    name: "Active Foam 3 (10.5 kg)",
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
    name: "Active Foam 3 (21 kg)",
    category: "Aktywna Piana - Samochody",
    description:
      "Innowacyjna aktywna piana nowej generacji. Wykorzystuje najnowsze technologie czyszczenia.",
    images: ["images/Active foam 12/Active_foam_12.png"],
    type: "active-foam",
  },

  // Active Foam Truck - aktywne piany do ciężarówek
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

  // Engine Cleaner - środki do czyszczenia silników
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
