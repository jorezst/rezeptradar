export const recipes = [
  {
    name: "Loaded Smashed Potatoes",
    mainImage:
      "./img/Recipes/Loaded_Smashed_Potatoes/loaded-smashed-potatoes.png",
    time: 60,
    categories: ["Mittagessen", "Abendessen", "Vegetarisch"],
    ingredients: [
      { name: "Kartoffeln", amount: 600, unit: "Gramm" },
      { name: "Avocado", amount: 1, unit: "Stück" },
      { name: "Tomate", amount: 2, unit: "Stück" },
      { name: "Jalapeno", amount: 1, unit: "Stück" },
      { name: "rote Zwiebel", amount: 1, unit: "Stück" },
      { name: "Knoblauchzehe", amount: 1, unit: "Stück" },
      { name: "Limette", amount: 1, unit: "Stück" },
      { name: "Koriander", amount: 10, unit: "Gramm" },
      { name: "Kochsahne", amount: 150, unit: "Gramm" },
      { name: "Gouda", amount: 75, unit: "Gramm" },
      { name: "Gemüsebrühe", amount: 4, unit: "Gramm" },
    ],
    utensils: [
      "Topf mit Deckel",
      "Kleine Schale",
      "Bratpfanne",
      "Kleiner Topf",
      "Kleiner Topf",
    ],
    steps: [
      {
        description:
          "Heize den Backofen auf 250 °C Ober-/Unterhitze (230 °C Umluft) vor.\n" +
          "Erhitze reichlich Wasser im Wasserkocher.\n" +
          "In einen großen Topf reichlich heißes Wasser* füllen, salzen* und aufkochen lassen.\n" +
          "Gewaschene Drillinge zugeben und 12 – 15 Min. garen, bis sie weich sind.",
        image: "./img/Recipes/Loaded_Smashed_Potatoes/step1.png",
      },
      {
        description:
          "Zwiebel fein hacken. \n" +
          "Knoblauch fein hacken. \n" +
          "Jalapeño halbieren, entkernen und fein hacken (Achtung: scharf!). \n" +
          "Tomaten grob würfeln. \n" +
          "Koriander fein hacken. \n" +
          "Limette vierteln.",
        image: "./img/Recipes/Loaded_Smashed_Potatoes/step2.png",
      },
      {
        description:
          "In einer kleinen Schüssel Tomatenwürfel zusammen mit der Hälfte des Korianders," +
          " der Hälfte der Zwiebel, Saft aus 1 [2 | 2] Limettenspalte" +
          " und 1 EL [1,5 EL | 2 EL] Olivenöl* vermengen. Mit Salz*, Pfeffer* und Zucker* abschmecken. ",
        image: "./img/Recipes/Loaded_Smashed_Potatoes/step3.png",
      },
      {
        description:
          "Fertig gekochte Kartoffeln abgießen und auf einem mit Backpapier belegten Backblech verteilen." +
          " Jede Kartoffel mit einem Topfdeckel so andrücken, dass sie aufplatzt und ca. 2 cm flach ist. \n" +
          "Zerdrückte Kartoffeln mit 2 EL [3 EL | 4 EL] Öl* beträufeln, mit der Hälfte vom „Hello Patatas“," +
          " Salz* und Pfeffer* würzen und 6 – 8 Min. im Ofen knusprig backen.",
        image: "./img/Recipes/Loaded_Smashed_Potatoes/step4.png",
      },
      {
        description:
          "In einem kleinen Topf 1 EL [1,5 EL | 2 EL] Öl* erhitzen. Gehackten Knoblauch," +
          " Jalapeñowürfel und restliche Zwiebelwürfel darin 2 – 3 Min. anschwitzen, bis sie anfangen zu duften. \n" +
          "Kochsahne, 50 ml [75 ml | 100 ml]  Wasser*, Gemüsebrühe und restliches „Hello Patatas“ einrühren. \n" +
          "Gouda hineingeben und 3 – 4 Min. unter Rühren erhitzen, bis der Käse schmilzt und eine glatte Soße entsteht.",
        image: "./img/Recipes/Loaded_Smashed_Potatoes/step5.png",
      },
      {
        description:
          "Avocado halbieren, entkernen, das Fruchtfleisch herauslösen und in 2 cm Würfel schneiden. \n" +
          "Smashed Potatoes auf Tellern anrichten und mit der Käsesoße toppen. \n" +
          "Tomatensalat, Avocadowürfel, nach Belieben restliche Kräuter und restliche Limettenspalten dazu servieren.",
        image: "./img/Recipes/Loaded_Smashed_Potatoes/step6.png",
      },
    ],
  },
  {
    name: "BBQ Burritos mit Hackfleisch",
    mainImage: "./img/Recipes/BBQ_Burritos/BBQ_Burritos.png",
    time: 20,
    categories: ["Mittagessen", "Abendessen"],
    ingredients: [
      { name: "gemischtes Hackfleisch", amount: 250, unit: "Gramm" },
      { name: "Weizentortillas", amount: 4, unit: "Stück" },
      { name: "Schwarze bohnen", amount: 380, unit: "Gramm" },
      { name: "BBQ-Soße", amount: 20, unit: "Milliliter" },
      { name: "Gewürzmischung Piri-Piri", amount: 6, unit: "Gramm" },
      { name: "Buttermilch-Zitronen-Dressing", amount: 50, unit: "Milliliter" },
      { name: "Salatherz", amount: 120, unit: "Gramm" },
      { name: "Zwiebel", amount: 1, unit: "Stück" },
      { name: "Tomatenmark", amount: 70, unit: "Gramm" },
    ],
    utensils: ["Sieb", "Große Pfanne", "Große Schüssel"],
    steps: [
      {
        description:
          "Zwiebel halbieren und in feine Streifen schneiden.\n" +
          "Schwarze Bohnen durch ein Sieb abgießen und mit Wasser abspülen.\n" +
          "Eine große Pfanne ohne Fettzugabe erhitzen. Hackfleisch und Zwiebelstreifen darin 4 – 5 Min. anbraten.\n" +
          "In der Zwischenzeit mit dem Rezept fortfahren.",
        image: "./img/Recipes/BBQ_Burritos/step1.png",
      },
      {
        description:
          "Salatherz in feine Streifen schneiden.\n" +
          "In einer großen Schüssel Buttermilch-Zitronen-Dressing und Salatstreifen vermengen.\n" +
          "Tomatenmark, schwarze Bohnen, BBQ Soße und „Hello Piri Piri“ in die Pfanne geben und 1 weitere Min. braten. Mit Salz* und Pfeffer* abschmecken.",
        image: "./img/Recipes/BBQ_Burritos/step2.png",
      },
      {
        description:
          "In einer zweiten großen Pfanne ohne Fettzugabe Weizentortillas 1 – 2 Min. erwärmen. Aus der Pfanne nehmen.\n" +
          "BBQ-Hackfleischfüllung gleichmäßig auf die Wraps verteilen und mit den marinierten Salatstreifen toppen.",
        image: "./img/Recipes/BBQ_Burritos/step3.png",
      },
    ],
  },
  {
    name: "Linguine mit Garnelen",
    mainImage: "./img/Recipes/Linguine_mit_Garnelen/Linguine.png",
    time: 30,
    categories: ["Mittagessen", "Abendessen"],
    ingredients: [
      { name: "Garnelen ohne Schale", amount: 150, unit: "Gramm" },
      { name: "frische Linguine", amount: 375, unit: "Gramm" },
      { name: "Getrocknete Tomaten", amount: 50, unit: "Gramm" },
      { name: "Kirschtomaten", amount: 125, unit: "gramm" },
      { name: "Kochsahne", amount: 150, unit: "Gramm" },
      { name: "Basilikum", amount: 10, unit: "Gramm" },
      { name: "Zitrone", amount: 1, unit: "Stück" },
      { name: "Knoblauchzehe", amount: 1, unit: "Stück" },
      { name: "Hartkäse", amount: 20, unit: "Gramm" },
    ],
    utensils: ["Großer topf", "Große Pfanne", "Sieb"],
    steps: [
      {
        description:
          "Erhitze reichlich Wasser im Wasserkocher.\n" +
          "In einen großen Topf reichlich heißes Wasser* geben, salzen* und aufkochen lassen.\n" +
          "Zitrone halbieren.\n" +
          "Knoblauchzehe andrücken, sodass diese aufplatzt.\n" +
          "In einer großen Pfanne 1 EL [1,5 EL | 2 EL] Öl* erhitzen.\n" +
          "Garnelen und Knoblauchzehe darin 3 Min. scharf anbraten. Garnelen mit einem Spritzer Zitronensaft ablöschen," +
          " mit Salz* und Pfeffer* würzen, dann aus der Pfanne nehmen.",
        image: "./img/Recipes/Linguine_mit_Garnelen/step1.png",
      },
      {
        description:
          "Hitze reduzieren, Kochsahne und 50 ml [75 ml | 100 ml] Wasser* in die Pfanne geben.\n" +
          "Getrocknete Tomaten und Kirschtomaten hinzufügen und alles zusammen 1 – 2 Min. köcheln lassen. Mit Salz* und Pfeffer* abschmecken.\n" +
          "Garnelen zur Soße geben.\n" +
          "Pasta in den Topf mit kochendem Wasser* geben und nach Geschmack 3 – 6 Min. bissfest kochen. Danach durch ein Sieb abgießen.",
        image: "./img/Recipes/Linguine_mit_Garnelen/step2.png",
      },
      {
        description:
          "Gekochte Pasta zur Soße in die Pfanne geben, alles gut vermengen und mit Salz* und Pfeffer* abschmecken.\n" +
          "Pasta auf tiefen Tellern anrichten, mit geraspeltem Hartkäse bestreuen und mit Basilikumblättern garnieren.",
        image: "./img/Recipes/Linguine_mit_Garnelen/step3.png",
      },
    ],
  },
];
