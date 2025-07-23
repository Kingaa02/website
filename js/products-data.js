// Dane produktów
const products = [
  {
    id: 1,
    name: "Active Foam 1",
    category: "active-foam",
    description:
      "Profesjonalna aktywna piana do mycia pojazdów osobowych i ciężarowych. Zaawansowana formuła skutecznie usuwa brud, kurz drogowy i pozostałości owadów z powierzchni lakierowanych.",
    images: [
      "images/Active foam 1/Active_foam_1_1.png",
      "images/Active foam 1/Active_foarm_1_2.png",
      "images/Active foam 2/Active_foam_2_1.png",
      "images/Active foam 2/Active_foam_2_2.png",
      "images/Active foam 3/Active_foam_3_1.png",
      "images/Active foam 3/Active_foam_3_2.png",
      "images/Active foam 4/Active_foam_4.png",
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "5,5", imageIndex: 2 },
      { label: "10,2", imageIndex: 4 },
      { label: "21", imageIndex: 6 },
    ],
    details: {
      volume: "1L, 5L, 25L",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Wysokowydajna formuła aktywnej piany",
        "Bezpieczna dla wszystkich rodzajów lakierów",
        "Doskonała przyczepność do powierzchni pionowych",
        "Łatwe spłukiwanie bez pozostawiania smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_1-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Active Foam 2",
    category: "active-foam",
    description:
      "Zaawansowana aktywna piana do mycia pojazdów osobowych i ciężarowych. Skutecznie usuwa zabrudzenia drogowe, tłuszcze i inne zanieczyszczenia, pozostawiając powierzchnię czystą i lśniącą.",
    images: [
      "images/Active foam 5/Active_foam_5_1.png", // 1kg
      "images/Active foam 5/Active_foam_5_2.png",
      "images/Active foam 6/Active_foam_6_1.png", // 5.5kg
      "images/Active foam 6/Active_foam_6_2.png",
      "images/Active foam 7/Active_foam_7_1.png", // 10.5kg
      "images/Active foam 7/Active_foam_7_2.png",
      "images/Active foam 8/Active_foam_8.png", // 21kg
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "5,5", imageIndex: 2 },
      { label: "10,5", imageIndex: 4 },
      { label: "21", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 5,5kg, 10,5kg, 21kg",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Silna i skuteczna formuła piany",
        "Bezpieczna dla lakieru i elementów plastikowych",
        "Doskonała przyczepność do powierzchni",
        "Łatwe spłukiwanie bez smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_2-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Active Foam 3",
    category: "active-foam",
    description:
      "Wysoko skoncentrowana aktywna piana do mycia pojazdów osobowych i ciężarowych. Skutecznie usuwa brud drogowy, tłuszcze i inne zanieczyszczenia, pozostawiając powierzchnię czystą i lśniącą.",
    images: [
      "images/Active foam 9/Active_foam_9_1.png", // 1kg
      "images/Active foam 9/Active_foam_9_2.png",
      "images/Active foam 10/Active_foam_10_1.png", // 5.5kg
      "images/Active foam 10/Active_foam_10_2.png",
      "images/Active foam 11/Active_foam_11_1.png", // 10.5kg
      "images/Active foam 11/Active_foam_10_2.png",
      "images/Active foam 12/Active_foam_12.png", // 21kg
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "5,5", imageIndex: 2 },
      { label: "10,5", imageIndex: 4 },
      { label: "21", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 5,5kg, 10,5kg, 21kg",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Wysokowydajna formuła aktywnej piany",
        "Bezpieczna dla wszystkich rodzajów lakierów",
        "Doskonała przyczepność do powierzchni pionowych",
        "Łatwe spłukiwanie bez pozostawiania smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_3-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Active Foam Truck 1",
    category: "active-foam-truck",
    description:
      "Skoncentrowana aktywna piana do mycia pojazdów ciężarowych i maszyn. Skutecznie usuwa trudne zabrudzenia drogowe, tłuszcze i oleje, pozostawiając powierzchnię czystą.",
    images: [
      "images/Active foam truck 1/Active_foam_truck_1_1.png", // 1kg
      "images/Active foam truck 1/Active_foam_truck_1_2.png",
      "images/Active foam truck 2/Active_foam_truck_2_1.png", // 5.5kg
      "images/Active foam truck 2/Active_foam_truck_2_2.png",
      "images/Active foam truck 3/Active_foam_truck_3_1.png", // 11.1kg
      "images/Active foam truck 3/Active_foam_truck_3_2.png",
      "images/Active foam truck 4/Active_foam_truck_4.png", // 22kg
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "5,5", imageIndex: 2 },
      { label: "11,1", imageIndex: 4 },
      { label: "22", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 5,5kg, 11,1kg, 22kg",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Specjalna formuła do pojazdów ciężarowych",
        "Silne działanie odtłuszczające",
        "Bezpieczna dla lakieru i elementów metalowych",
        "Łatwe spłukiwanie bez smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_Truck_1-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Active Foam Truck 2",
    category: "active-foam-truck",
    description:
      "Zaawansowana aktywna piana do mycia pojazdów ciężarowych i maszyn. Skutecznie usuwa trudne zabrudzenia drogowe, tłuszcze i oleje, pozostawiając powierzchnię czystą.",
    images: [
      "images/Active foam truck 5/Active_foam_truck_5_1.png", // 1kg
      "images/Active foam truck 5/Active_foam_truck_5_2.png",
      "images/Active foam truck 6/Active_foam_truck_6_1.png", // 5kg - 1
      "images/Active foam truck 6/Active_foam_truck_6_2.png", // 5kg - 2
      "images/Active foam truck 7/Active_foam_truck_7_1.png", // 11kg - 1
      "images/Active foam truck 7/Active_foam_truck_7_2.png", // 11kg - 2
      "images/Active foam truck 8/Active_foam_truck_8.png", // 22kg
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "6", imageIndex: 2 },
      { label: "11", imageIndex: 4 },
      { label: "22", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 6kg, 11kg, 22kg",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Zaawansowana formuła do pojazdów ciężarowych",
        "Silne działanie czyszczące i odtłuszczające",
        "Bezpieczna dla lakieru i elementów metalowych",
        "Łatwe spłukiwanie bez smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_Truck_2-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 6,
    name: "Engine Cleaner",
    category: "engine-cleaner",
    description:
      "Profesjonalny środek do czyszczenia silników i elementów mechanicznych. Skutecznie usuwa tłuszcze, oleje i trudne zabrudzenia.",
    images: [
      "images/Engine cleaner 1/Engine_cleaner_1_1.png",
      "images/Engine cleaner 1/Engine_cleaner_1_2.png",
      "images/Engine cleaner 2/Engine_cleaner_2_1.png",
      "images/Engine cleaner 2/Engine_cleaner_2_2.png",
      "images/Engine cleaner 3/Engine_cleaner_3_1.png",
      "images/Engine cleaner 3/Engine_cleaner_3_2.png",
      "images/Engine cleaner 4/Engine_cleaner_4.png",
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "5", imageIndex: 2 },
      { label: "10", imageIndex: 4 },
      { label: "20", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 5kg, 10kg, 20kg",
      ph: "--",
      dilution: "wg zaleceń producenta",
      temperature: "--",
      features: [
        "Skutecznie usuwa tłuszcze i oleje",
        "Bezpieczny dla metalu i tworzyw sztucznych",
        "Szybkie działanie",
        "Łatwe spłukiwanie",
        "Ekonomiczne dozowanie",
        "Do zastosowań profesjonalnych",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami",
        "Nanieść na powierzchnię silnika lub części mechanicznych",
        "Odczekać kilka minut",
        "Spłukać dokładnie wodą lub wytrzeć szmatką",
      ],
      safety:
        "Stosować zgodnie z kartą charakterystyki produktu. Unikać kontaktu z oczami i skórą. Przechowywać w miejscu niedostępnym dla dzieci.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Engine_Cleaner-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Active Foam Truck 2",
    category: "active-foam-truck",
    description:
      "Zaawansowana aktywna piana do mycia pojazdów ciężarowych i maszyn. Skutecznie usuwa trudne zabrudzenia drogowe, tłuszcze i oleje, pozostawiając powierzchnię czystą.",
    images: [
      "images/Active foam truck 5/Active_foam_truck_5_1.png", // 1kg
      "images/Active foam truck 5/Active_foam_truck_5_2.png",
      "images/Active foam truck 6/Active_foam_truck_6_1.png", // 5kg - 1
      "images/Active foam truck 6/Active_foam_truck_6_2.png", // 5kg - 2
      "images/Active foam truck 7/Active_foam_truck_7_1.png", // 11kg - 1
      "images/Active foam truck 7/Active_foam_truck_7_2.png", // 11kg - 2
      "images/Active foam truck 8/Active_foam_truck_8.png", // 22kg
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "6", imageIndex: 2 },
      { label: "11", imageIndex: 4 },
      { label: "22", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 6kg, 11kg, 22kg",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Zaawansowana formuła do pojazdów ciężarowych",
        "Silne działanie czyszczące i odtłuszczające",
        "Bezpieczna dla lakieru i elementów metalowych",
        "Łatwe spłukiwanie bez smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_Truck_2-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 1,
    name: "Active Foam 1",
    category: "active-foam",
    description:
      "Profesjonalna aktywna piana do mycia pojazdów osobowych i ciężarowych. Zaawansowana formuła skutecznie usuwa brud, kurz drogowy i pozostałości owadów z powierzchni lakierowanych.",
    images: [
      "images/Active foam 1/Active_foam_1_1.png",
      "images/Active foam 1/Active_foarm_1_2.png",
      "images/Active foam 2/Active_foam_2_1.png",
      "images/Active foam 2/Active_foam_2_2.png",
      "images/Active foam 3/Active_foam_3_1.png",
      "images/Active foam 3/Active_foam_3_2.png",
      "images/Active foam 4/Active_foam_4.png",
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "5,5", imageIndex: 2 },
      { label: "10,2", imageIndex: 4 },
      { label: "21", imageIndex: 6 },
    ],
    details: {
      volume: "1L, 5L, 25L",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Wysokowydajna formuła aktywnej piany",
        "Bezpieczna dla wszystkich rodzajów lakierów",
        "Doskonała przyczepność do powierzchni pionowych",
        "Łatwe spłukiwanie bez pozostawiania smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_1-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Active Foam 2",
    category: "active-foam",
    description:
      "Zaawansowana aktywna piana do mycia pojazdów osobowych i ciężarowych. Skutecznie usuwa zabrudzenia drogowe, tłuszcze i inne zanieczyszczenia, pozostawiając powierzchnię czystą i lśniącą.",
    images: [
      "images/Active foam 5/Active_foam_5_1.png", // 1kg
      "images/Active foam 5/Active_foam_5_2.png",
      "images/Active foam 6/Active_foam_6_1.png", // 5.5kg
      "images/Active foam 6/Active_foam_6_2.png",
      "images/Active foam 7/Active_foam_7_1.png", // 10.5kg
      "images/Active foam 7/Active_foam_7_2.png",
      "images/Active foam 8/Active_foam_8.png", // 21kg
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "5,5", imageIndex: 2 },
      { label: "10,5", imageIndex: 4 },
      { label: "21", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 5,5kg, 10,5kg, 21kg",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Silna i skuteczna formuła piany",
        "Bezpieczna dla lakieru i elementów plastikowych",
        "Doskonała przyczepność do powierzchni",
        "Łatwe spłukiwanie bez smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_2-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Active Foam 3",
    category: "active-foam",
    description:
      "Wysoko skoncentrowana aktywna piana do mycia pojazdów osobowych i ciężarowych. Skutecznie usuwa brud drogowy, tłuszcze i inne zanieczyszczenia, pozostawiając powierzchnię czystą i lśniącą.",
    images: [
      "images/Active foam 9/Active_foam_9_1.png", // 1kg
      "images/Active foam 9/Active_foam_9_2.png",
      "images/Active foam 10/Active_foam_10_1.png", // 5.5kg
      "images/Active foam 10/Active_foam_10_2.png",
      "images/Active foam 11/Active_foam_11_1.png", // 10.5kg
      "images/Active foam 11/Active_foam_10_2.png",
      "images/Active foam 12/Active_foam_12.png", // 21kg
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "5,5", imageIndex: 2 },
      { label: "10,5", imageIndex: 4 },
      { label: "21", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 5,5kg, 10,5kg, 21kg",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Wysokowydajna formuła aktywnej piany",
        "Bezpieczna dla wszystkich rodzajów lakierów",
        "Doskonała przyczepność do powierzchni pionowych",
        "Łatwe spłukiwanie bez pozostawiania smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_3-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Active Foam Truck 1",
    category: "active-foam-truck",
    description:
      "Skoncentrowana aktywna piana do mycia pojazdów ciężarowych i maszyn. Skutecznie usuwa trudne zabrudzenia drogowe, tłuszcze i oleje, pozostawiając powierzchnię czystą.",
    images: [
      "images/Active foam truck 1/Active_foam_truck_1_1.png", // 1kg
      "images/Active foam truck 1/Active_foam_truck_1_2.png",
      "images/Active foam truck 2/Active_foam_truck_2_1.png", // 5.5kg
      "images/Active foam truck 2/Active_foam_truck_2_2.png",
      "images/Active foam truck 3/Active_foam_truck_3_1.png", // 11.1kg
      "images/Active foam truck 3/Active_foam_truck_3_2.png",
      "images/Active foam truck 4/Active_foam_truck_4.png", // 22kg
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "5,5", imageIndex: 2 },
      { label: "11,1", imageIndex: 4 },
      { label: "22", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 5,5kg, 11,1kg, 22kg",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Specjalna formuła do pojazdów ciężarowych",
        "Silne działanie odtłuszczające",
        "Bezpieczna dla lakieru i elementów metalowych",
        "Łatwe spłukiwanie bez smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_Truck_1-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Active Foam Truck 2",
    category: "active-foam-truck",
    description:
      "Zaawansowana aktywna piana do mycia pojazdów ciężarowych i maszyn. Skutecznie usuwa trudne zabrudzenia drogowe, tłuszcze i oleje, pozostawiając powierzchnię czystą.",
    images: [
      "images/Active foam truck 5/Active_foam_truck_5_1.png", // 1kg
      "images/Active foam truck 5/Active_foam_truck_5_2.png",
      "images/Active foam truck 6/Active_foam_truck_6_1.png", // 5kg - 1
      "images/Active foam truck 6/Active_foam_truck_6_2.png", // 5kg - 2
      "images/Active foam truck 7/Active_foam_truck_7_1.png", // 11kg - 1
      "images/Active foam truck 7/Active_foam_truck_7_2.png", // 11kg - 2
      "images/Active foam truck 8/Active_foam_truck_8.png", // 22kg
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "6", imageIndex: 2 },
      { label: "11", imageIndex: 4 },
      { label: "22", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 6kg, 11kg, 22kg",
      ph: "7-8",
      dilution: "1:10 - 1:50",
      temperature: "5°C - 40°C",
      features: [
        "Zaawansowana formuła do pojazdów ciężarowych",
        "Silne działanie czyszczące i odtłuszczające",
        "Bezpieczna dla lakieru i elementów metalowych",
        "Łatwe spłukiwanie bez smug",
        "Ekonomiczne dozowanie",
        "Biodegradowalna formuła",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami (1:10 - 1:50)",
        "Nanieść pianę za pomocą lancy pianowej lub natryskiwacza",
        "Pozostawić na powierzchni przez 2-5 minut",
        "Nie pozwolić na wyschnięcie produktu",
        "Spłukać dokładnie strumieniem wody pod ciśnieniem",
        "Nie stosować na gorących powierzchniach",
      ],
      safety:
        "Produkt należy przechowywać w temperaturze od 5°C do 25°C, chronić przed działaniem promieni słonecznych i mrozu. Stosować zgodnie z kartą charakterystyki produktu. W przypadku kontaktu z oczami przemyć dużą ilością czystej wody i skonsultować się z lekarzem.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Active_Foam_Truck_2-PL-pl.pdf",
        },
      ],
    },
  },
  {
    id: 6,
    name: "Engine Cleaner",
    category: "engine-cleaner",
    description:
      "Profesjonalny środek do czyszczenia silników i elementów mechanicznych. Skutecznie usuwa tłuszcze, oleje i trudne zabrudzenia.",
    images: [
      "images/Engine cleaner 1/Engine_cleaner_1_1.png",
      "images/Engine cleaner 1/Engine_cleaner_1_2.png",
      "images/Engine cleaner 2/Engine_cleaner_2_1.png",
      "images/Engine cleaner 2/Engine_cleaner_2_2.png",
      "images/Engine cleaner 3/Engine_cleaner_3_1.png",
      "images/Engine cleaner 3/Engine_cleaner_3_2.png",
      "images/Engine cleaner 4/Engine_cleaner_4.png",
    ],
    volumes: [
      { label: "1", imageIndex: 0 },
      { label: "5", imageIndex: 2 },
      { label: "10", imageIndex: 4 },
      { label: "20", imageIndex: 6 },
    ],
    details: {
      volume: "1kg, 5kg, 10kg, 20kg",
      ph: "--",
      dilution: "wg zaleceń producenta",
      temperature: "--",
      features: [
        "Skutecznie usuwa tłuszcze i oleje",
        "Bezpieczny dla metalu i tworzyw sztucznych",
        "Szybkie działanie",
        "Łatwe spłukiwanie",
        "Ekonomiczne dozowanie",
        "Do zastosowań profesjonalnych",
      ],
      application: [
        "Rozcieńczyć produkt zgodnie z zaleceniami",
        "Nanieść na powierzchnię silnika lub części mechanicznych",
        "Odczekać kilka minut",
        "Spłukać dokładnie wodą lub wytrzeć szmatką",
      ],
      safety:
        "Stosować zgodnie z kartą charakterystyki produktu. Unikać kontaktu z oczami i skórą. Przechowywać w miejscu niedostępnym dla dzieci.",
      downloads: [
        {
          name: "Charakterystyka produktu",
          url: "downloads/SDS-SPARK_Engine_Cleaner-PL-pl.pdf",
        },
      ],
    },
  },
];
