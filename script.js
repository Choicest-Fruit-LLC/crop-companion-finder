const cropData = {
  // Leafy Greens
  arugula: {
  category: "Leafy Greens",
  companions: ["Carrot", "Celery", "Lettuce"],
  foes: ["Brassicas", "Eggplant"],
  details: "Arugula grows best in cool weather and prefers moist, well-drained soil with full sun or partial shade.",
  img: "assets/img/arugula.jpg",
  benefits: "Arugula is rich in vitamin K and nitrates, which may help regulate blood pressure and support bone health.",
  tags: ["⛅ Partial Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
},

beet_greens: {
  category: "Leafy Greens",
  companions: ["Broccoli", "Brussels Sprouts", "Onions"],
  foes: ["Pole Beans"],
  details: "Beet greens are the leafy tops of beets and can be harvested while the roots are still growing.",
  img: "assets/img/beet_greens.jpg",
  benefits: "A good source of vitamins A, C, and K, as well as iron and fiber.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
},

bok_choy: {
  category: "Leafy Greens",
  companions: ["Beets", "Carrots", "Celery"],
  foes: ["Strawberries", "Tomatoes"],
  details: "Bok choy, or pak choi, prefers cool weather and grows best in fertile, moist, well-drained soil.",
  img: "assets/img/bok_choy.jpg",
  benefits: "Rich in calcium, magnesium, and vitamin K, which support bone strength and immune function.",
  tags: ["⛅ Partial Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Moist, Fertile Soil"]
},

chard: {
  category: "Leafy Greens",
  companions: ["Cauliflower", "Onions", "Garlic"],
  foes: ["Pole Beans"],
  details: "Swiss chard is a fast-growing leafy vegetable that thrives in full sun and rich, well-drained soil.",
  img: "assets/img/chard.jpg",
  benefits: "Contains antioxidants like vitamins A and C, as well as fiber and iron to support immune and blood health.",
  tags: ["☀️ Full Sun", "🧪 Neutral Soil", "🌱 Moist, Well-Drained Soil"]
},

collard_greens: {
  category: "Leafy Greens",
  companions: ["Onions", "Garlic", "Leeks"],
  foes: ["Strawberries"],
  details: "Collard greens grow best in cooler seasons and require fertile, well-drained soil with plenty of sun.",
  img: "assets/img/collard_greens.jpg",
  benefits: "High in vitamins K, A, and C, plus antioxidants and fiber for heart and digestive health.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Rich, Well-Drained Soil"]
},

endive: {
  category: "Leafy Greens",
  companions: ["Carrots", "Parsley", "Onions"],
  foes: ["Potatoes"],
  details: "Endive is a cool-season crop in the chicory family, best grown in moist, rich soil with ample sunlight.",
  img: "assets/img/endive.jpg",
  benefits: "A good source of fiber, folate, and vitamin K; supports digestion and bone health.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Fertile Soil"]
},

frisee: {
  category: "Leafy Greens",
  companions: ["Basil", "Garlic", "Dill"],
  foes: ["Fennel"],
  details: "Frisée is a curly endive that prefers cooler weather and well-drained, moderately rich soil.",
  img: "assets/img/frisee.jpg",
  benefits: "Provides fiber, vitamins A and K, and promotes healthy digestion and liver function.",
  tags: ["⛅ Partial Sun", "🧪 Neutral Soil", "🌱 Moist, Well-Drained Soil"]
},

kale: {
  category: "Leafy Greens",
  companions: ["Peas", "Radish", "Dill"],
  foes: ["Strawberries"],
  details: "Kale is a hardy crop that thrives in cool climates and moist, fertile soil.",
  img: "assets/img/kale.jpg",
  benefits: "High in vitamins A, C, and K, antioxidants, and fiber, supporting immunity and bone health.",
  tags: ["☀️ Full Sun", "🧪 Neutral to Slightly Acidic Soil", "🌱 Moist, Well-Drained Soil"]
},

lettuce: {
  category: "Leafy Greens",
  companions: ["Beetroot", "Basil", "Onions"],
  foes: ["Parsley"],
  details: "Lettuce grows best in cool weather and loose, fertile soil with consistent moisture.",
  img: "assets/img/lettuce.jpg",
  benefits: "Rich in water, fiber, and vitamin A; great for hydration and skin health.",
  tags: ["⛅ Partial Sun", "🧪 Neutral pH Soil", "🌱 Moist, Loose Soil"]
},

mustard_greens: {
  category: "Leafy Greens",
  companions: ["Onions", "Garlic", "Celery"],
  foes: ["Strawberries"],
  details: "Mustard greens grow rapidly in cool weather and prefer rich, moist soil.",
  img: "assets/img/mustard_greens.jpg",
  benefits: "Rich in vitamins A, C, and K; may help reduce inflammation and support detoxification.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Moist, Well-Drained Soil"]
},

spinach: {
  category: "Leafy Greens",
  companions: ["Lettuce", "Kale", "Radishes"],
  foes: ["Potatoes"],
  details: "Spinach grows well in cool weather with moist, nitrogen-rich soil and some protection from intense sun.",
  img: "assets/img/spinach.jpg",
  benefits: "Loaded with iron, calcium, and folate, spinach supports blood, bone, and eye health.",
  tags: ["⛅ Partial Sun", "🧪 Slightly Acidic Soil", "🌱 Moist, Fertile Soil"]
},

swiss_chard: {
  category: "Leafy Greens",
  companions: ["Lettuce", "Beans", "Radishes"],
  foes: ["Pole Beans"],
  details: "Swiss chard prefers cool weather but tolerates heat; grows in rich, moist soil with full sun.",
  img: "assets/img/swiss_chard.jpg",
  benefits: "Provides vitamins A, C, and K, and minerals like magnesium and potassium for cardiovascular health.",
  tags: ["☀️ Full Sun", "🧪 Neutral Soil", "🌱 Rich, Well-Drained Soil"]
},

    // Fruiting Vegetables
  tomato: {
    category: "Fruiting Vegetables",
    companions: ["Basil", "Marigold", "Carrot", "Onion", "Collard Greens"],
    foes: ["Corn", "Potato", "Cucumber"],
    details: "Tomatoes grow well with basil, marigold, and carrots. Avoid planting near corn and potatoes.",
    img: "assets/img/tomato.jpg",
    benefits: "These nutrients can contribute to heart health, cancer prevention, improved vision, and skin health.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
  },
  bell_pepper: {
    category: "Fruiting Vegetables",
    companions: ["Basil", "Onion", "Carrot"],
    foes: ["Fennel"],
    details: "Bell peppers benefit from basil and onions. Avoid fennel.",
    img: "assets/img/bellpepper.webp",
    benefits: "These nutrients can contribute to heart health, cancer prevention, improved vision, and skin health.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
  },
  chili_pepper: {
    category: "Fruiting Vegetables",
    companions: ["Basil", "Onion"],
    foes: ["Fennel"],
    details: "Chili peppers grow well with basil and onions.",
    img: "assets/img/chilipepper.webp",
    benefits: "Improved heart health, enhanced metabolism, and potential cancer-fighting properties.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
  },
  eggplant: {
    category: "Fruiting Vegetables",
    companions: ["Beans", "Peas", "Marigold"],
    foes: ["Fennel"],
    details: "Eggplant benefits from beans and marigold.",
    img: "assets/img/eggplant.webp",
    benefits: "It's packed with fiber, vitamins, and antioxidants, which can contribute to heart health, improved digestion, and potentially even brain health.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
  },
  cucumber: {
    category: "Fruiting Vegetables",
    companions: ["Beans", "Peas", "Radish", "Sunflower"],
    foes: ["Tomato", "Sage"],
    details: "Cucumbers grow well with beans and peas. Avoid tomatoes and sage.",
    img: "assets/img/cucumber.jpg",
    benefits: "They can promote hydration, support heart health, and may help manage blood sugar and weight.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Moist Soil"]
  },
  zucchini: {
    category: "Fruiting Vegetables",
    companions: ["Borage", "Nasturtium", "Corn"],
    foes: ["Potato"],
    details: "Zucchini benefits from borage and nasturtium.",
    img: "assets/img/zucchini.webp",
    benefits: "It supports eye health, aids digestion, and may contribute to weight management",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
  },
  squash: {
    category: "Fruiting Vegetables",
    companions: ["Corn", "Beans", "Nasturtium"],
    foes: [],
    details: "Squash grows well with corn and beans.",
    img: "assets/img/squash.png",
    benefits: "It supports eye health, aids digestion, and may contribute to weight management.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
  },
  broccoli: {
  category: "Fruiting Vegetables",
  companions: ["Beets", "Celery", "Onions"],
  foes: ["Tomatoes", "Strawberries"],
  details: "Broccoli is a cool-season crop that grows best in fertile, well-drained soil and full sun. It produces large flower heads harvested before blooming.",
  img: "assets/img/broccoli.jpg",
  benefits: "Broccoli supports heart health, digestion, bone strength, and may reduce the risk of certain cancers due to its high vitamin and antioxidant content.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
},

broccoflower: {
  category: "Fruiting Vegetables",
  companions: ["Beets", "Onions", "Celery"],
  foes: ["Strawberries", "Tomatoes"],
  details: "Broccoflower is a hybrid between broccoli and cauliflower, sharing similar growing needs and flavor characteristics.",
  img: "assets/img/broccoflower.jpg",
  benefits: "Rich in vitamin C, fiber, and antioxidants that support the immune system, aid digestion, and promote bone health.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
},

brussels_sprouts: {
  category: "Fruiting Vegetables",
  companions: ["Dill", "Garlic", "Onions"],
  foes: ["Strawberries", "Tomatoes"],
  details: "Brussels sprouts grow on tall stalks and produce small, cabbage-like buds. They prefer cool temperatures and fertile, firm soil.",
  img: "assets/img/brussels_sprouts.jpg",
  benefits: "Rich in vitamin K, C, and fiber, they support immune health, digestion, and reduce inflammation.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
},

cabbage: {
  category: "Fruiting Vegetables",
  companions: ["Garlic", "Onions", "Dill"],
  foes: ["Tomatoes", "Strawberries"],
  details: "Cabbage is a hardy leafy vegetable that forms tight heads and thrives in cool climates with well-drained, fertile soil.",
  img: "assets/img/cabbage.jpg",
  benefits: "Supports digestion, heart health, and weight management; high in fiber, vitamin C, and antioxidants.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
},

cauliflower: {
  category: "Fruiting Vegetables",
  companions: ["Celery", "Beets", "Onions"],
  foes: ["Strawberries", "Tomatoes"],
  details: "Cauliflower is a cool-weather crop grown for its dense, edible white head made of undeveloped flower buds.",
  img: "assets/img/cauliflower.jpg",
  benefits: "Rich in vitamin C and fiber; supports digestion, bone health, and immune function.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
},

kohlrabi: {
  category: "Fruiting Vegetables",
  companions: ["Beets", "Bush Beans", "Celery"],
  foes: ["Tomatoes", "Pole Beans"],
  details: "Kohlrabi is a bulbous stem vegetable that grows above ground and can be eaten raw or cooked. It thrives in cool weather.",
  img: "assets/img/kohlrabi.jpg",
  benefits: "High in fiber and vitamin C; supports immunity, digestion, and bone strength.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
},

tomatillo: {
  category: "Fruiting Vegetables",
  companions: ["Marigolds", "Carrots", "Cilantro"],
  foes: ["Potatoes", "Fennel"],
  details: "Tomatillos are small, green, tangy fruits encased in papery husks. They are heat-loving and require cross-pollination for good yields.",
  img: "assets/img/tomatillo.jpg",
  benefits: "Rich in vitamin C, potassium, and antioxidants; supports immune health and metabolism.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
},
  okra: {
    category: "Fruiting Vegetables",
    companions: ["Peppers", "Melon"],
    foes: [],
    details: "Okra grows well with peppers and melon.",
    img: "assets/img/okra.webp",
    benefits: "Rich in vitamins A and C, okra supports skin health and may aid in digestion.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Well-Drained Soil"]
  },
  // Grains & Tall Plants
  corn: {
    category: "Grains & Tall Plants",
    companions: ["Beans", "Squash", "Sunflower"],
    foes: ["Tomato"],
    details: "Corn grows well with beans and squash.",
    img: "assets/img/corn.png",
    benefits: "Has beneficial antioxidants, fiber, vitamins and minerals.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Well-Drained Soil"]
  },
  sorghum: {
    category: "Grains & Tall Plants",
    companions: ["Peas", "Beans"],
    foes: [],
    details: "Sorghum benefits from peas and beans.",
    img: "assets/img/sorghum.jpg",
    benefits: "A a good source of fiber, antioxidants, and essential minerals like iron, magnesium, and potassium",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Well-Drained Soil"]
  },
  rice: {
  category: "Grains & Tall Plants",
  companions: ["Azolla", "Legumes", "Water Spinach"],
  foes: ["Wheat", "Barley", "Sorghum"],
  details: "Rice is a water-loving grain crop traditionally grown in flooded fields, requiring warm temperatures and long growing seasons.",
  img: "assets/img/rice.jpg",
  benefits: "A staple food rich in carbohydrates, rice provides energy and small amounts of protein, B vitamins, and minerals like magnesium and selenium.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral pH", "💧 Flooded or Constant Moisture"]
},

sweetcorn: {
  category: "Grains & Tall Plants",
  companions: ["Beans", "Cucumbers", "Melons", "Squash"],
  foes: ["Tomatoes"],
  details: "Sweetcorn is a warm-season crop with tall stalks and sweet kernels. It grows best in rich, well-drained soil and full sun.",
  img: "assets/img/sweetcorn.jpg",
  benefits: "Rich in fiber, antioxidants, and B vitamins; sweetcorn supports digestion, heart health, and helps reduce risk of certain chronic diseases.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Rich, Well-Drained Soil"]
},

sunflower_seed: {
  category: "Grains & Tall Plants",
  companions: ["Corn", "Tomatoes", "Cucumbers", "Peppers"],
  foes: ["Potatoes", "Beans"],
  details: "Sunflowers are tall, heat-loving plants known for their large blooms and nutrient-dense seeds. They can act as natural trellises or windbreaks.",
  img: "assets/img/sunflower.jpg",
  benefits: "Sunflower seeds are a good source of healthy fats, vitamin E, selenium, and magnesium, which support heart and immune health.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Well-Drained Soil"]
},

  millet: {
    category: "Grains & Tall Plants",
    companions: ["Peas", "Beans"],
    foes: [],
    details: "Millet benefits from peas and beans.",
    img: "assets/img/millets.jpg",
    benefits: "Improved digestion, potential diabetes management, weight management support, and reduced risk of heart disease",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Sandy or Well-Drained Soil"]
  },
  // Root Vegetables
  carrot: {
    category: "Root Vegetables",
    companions: ["Lettuce", "Onion", "Tomato", "Peas"],
    foes: ["Dill"],
    details: "Carrots benefit from onions and peas.",
    img: "assets/img/carrot.png",
    benefits: "Supporting healthy vision and boosting the immune system to aiding digestion and potentially reducing the risk of certain cancers",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Sandy, Well-Drained Soil"]
  },
  radish: {
    category: "Root Vegetables",
    companions: ["Carrot", "Lettuce", "Peas"],
    foes: [],
    details: "Radishes grow well with carrots and lettuce.",
    img: "assets/img/radish.webp",
    benefits: "Low in calories and a good source of fiber, which aids digestion and promotes feelings of fullness",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Sandy, Well-Drained Soil"]
  },
  beetroot: {
    category: "Root Vegetables",
    companions: ["Onion", "Lettuce"],
    foes: [],
    details: "Beetroot benefits from onions and lettuce.",
    img: "assets/img/Beetroot.webp",
    benefits: "Improved blood flow, lower blood pressure, and enhanced athletic performance",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Loamy, Well-Drained Soil"]
  },
  turnip: {
    category: "Root Vegetables",
    companions: ["Peas", "Onion"],
    foes: [],
    details: "Turnips grow well with peas and onions.",
    img: "assets/img/turnip.webp",
    benefits: "A good source of vitamins C and K, folate, and potassium, and they also contain fiber and antioxidants.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Loamy, Moist Soil"]
  },
  potato: {
    category: "Root Vegetables",
    companions: ["Beans", "Corn"],
    foes: ["Tomato", "Cucumber"],
    details: "Potatoes benefit from beans and corn. Avoid tomatoes and cucumbers.",
    img: "assets/img/potato.png",
    benefits: "A good source of vitamin C, vitamin B6, and potassium, which support heart and digestive health.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Loose, Well-Drained Soil"]
  },
  sweet_potato: {
    category: "Root Vegetables",
    companions: ["Beans", "Marigold"],
    foes: [],
    details: "Sweet potatoes grow well with beans and marigold.",
    img: "assets/img/sweet_potato.JPG",
    benefits: "A good source of vitamin C, vitamin B6, and potassium, which support heart and digestive health",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Sandy, Well-Drained Soil"]
  },
  onion: {
    category: "Root Vegetables",
    companions: ["Carrot", "Lettuce", "Strawberry"],
    foes: ["Peas"],
    details: "Onions deter pests for carrots. Avoid peas.",
    img: "assets/img/onion.png",
    benefits: "Rich in vitamins and minerals, onions support heart health and may help regulate blood sugar levels.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Loose, Well-Drained Soil"]
  },
  celeriac: {
  category: "Root Vegetables",
  companions: ["Spinach", "Beans", "Cabbage"],
  foes: ["Corn"],
  details: "Celeriac is a root vegetable in the parsley family, grown for its large, knobby, and earthy-flavored root. It requires consistent moisture and cool weather to develop properly.",
  img: "assets/img/Celeriac.jpg",
  benefits: "Rich in vitamin K, phosphorus, and fiber, celeriac supports bone health, heart health, and digestion.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
},

daikon: {
  category: "Root Vegetables",
  companions: ["Peas", "Oregano", "Carrots"],
  foes: ["Potatoes"],
  details: "Daikon, or Japanese radish, is a large, mild-flavored winter radish popular in Asian cuisines. It grows best in cool weather with loose, deeply cultivated soil.",
  img: "assets/img/Daikon.jpg",
  benefits: "Daikon supports digestion, acts as a natural decongestant and diuretic, and may provide anti-cancer properties due to its glucosinolates.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Loose, Well-Drained Soil"]
},

horseradish: {
  category: "Root Vegetables",
  companions: ["Potatoes", "Apple Trees", "Rhubarb"],
  foes: ["Beans"],
  details: "Horseradish is a hardy perennial grown for its pungent root, often grated fresh for condiments. It can become invasive if not managed.",
  img: "assets/img/Horseradish.jpg",
  benefits: "Horseradish contains glucosinolates that may support the immune system, aid digestion, and offer antimicrobial and anticancer effects.",
  tags: ["☀️ Full Sun", "🧪 Neutral to Slightly Alkaline Soil", "🌱 Moist, Well-Drained Soil"]
},

parsnip: {
  category: "Root Vegetables",
  companions: ["Onions", "Garlic", "Leeks"],
  foes: ["Carrots"],
  details: "Parsnips are cream-colored root vegetables that develop a sweet flavor after a frost. They grow best in deep, loose soil.",
  img: "assets/img/Parsnip.jpg",
  benefits: "Parsnips provide fiber, potassium, vitamins C and K, and folate, supporting immunity, blood pressure regulation, and heart health.",
  tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Deep, Loose, Well-Drained Soil"]
},

rutabaga: {
  category: "Root Vegetables",
  companions: ["Peas", "Beets", "Turnips", "Beans"],
  foes: ["Cabbage"],
  details: "Rutabagas are root vegetables similar to turnips, with a sweeter flavor and yellow flesh. They require a long, cool growing season.",
  img: "assets/img/Rutabaga.jpg",
  benefits: "Rutabagas are high in fiber, vitamin C, potassium, and antioxidants, which support immune function and cellular health.",
  tags: ["☀️ Full Sun", "🧪 Neutral to Slightly Acidic Soil", "🌱 Moist, Well-Drained Soil"]
},
  garlic: {
    category: "Root Vegetables",
    companions: ["Carrot", "Lettuce", "Strawberry"],
    foes: ["Peas"],
    details: "Garlic benefits carrots and lettuce. Avoid peas.",
    img: "assets/img/garlic.webp",
    benefits: "Garlic, particularly aged garlic extract, can help lower blood pressure in individuals with hypertension.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Loose, Well-Drained Soil"]
  },
  // Legumes
  green_beans: {
    category: "Legumes",
    companions: ["Corn", "Squash", "Carrot"],
    foes: ["Onion", "Garlic"],
    details: "Green beans grow well with corn and squash.",
    img: "assets/img/green_beans.jpg",
    benefits: "A good source of vitamins A, C, and K, as well as folate and fiber.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Well-Drained Soil"]
  },
  peas: {
    category: "Legumes",
    companions: ["Carrot", "Radish", "Turnip"],
    foes: ["Onion", "Garlic"],
    details: "Peas benefit carrots and radishes.",
    img: "assets/img/peas.webp",
    benefits: "A good source of plant-based protein and fiber, which aid in digestion and promote feelings of fullness.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Well-Drained Soil"]
  },
  soybeans: {
    category: "Legumes",
    companions: ["Corn", "Squash"],
    foes: [],
    details: "Soybeans grow well with corn and squash.",
    img: "assets/img/soybeans.webp",
    benefits: "A good source of protein, fiber, and several vitamins and minerals, including iron, folate, and potassium.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
  },
  azuki_beans: {
  category: "Legumes",
  companions: ["Corn", "Cucumber", "Strawberries"],
  foes: ["Garlic", "Onions"],
  details: "Azuki beans thrive in warm climates with full sun and fertile, well-drained soil.",
  img: "assets/img/azuki_beans.webp",
  benefits: "Rich in protein, fiber, and beneficial plant compounds; supports heart health and digestion.",
  tags: ["☀️ Full Sun", "🧪 Neutral to Slightly Acidic Soil", "🌱 Well-Drained Soil"]
},

black_beans: {
  category: "Legumes",
  companions: ["Carrots", "Cucumbers", "Corn"],
  foes: ["Onions", "Garlic"],
  details: "Black beans prefer warm weather and fertile, loamy soil with good drainage.",
  img: "assets/img/black_beans.webp",
  benefits: "High in protein, fiber, iron, and antioxidants.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Well-Drained Soil"]
},

black_eyed_peas: {
  category: "Legumes",
  companions: ["Corn", "Strawberries", "Cucumbers"],
  foes: ["Garlic", "Onions"],
  details: "Black-eyed peas need warm temperatures and grow best in sandy, well-drained soil.",
  img: "assets/img/black_eyed_peas.webp",
  benefits: "Excellent source of folate, fiber, and protein.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Sandy, Well-Drained Soil"]
},

borlotti_bean: {
  category: "Legumes",
  companions: ["Carrots", "Celery", "Corn"],
  foes: ["Onions", "Fennel"],
  details: "Borlotti beans prefer full sun and moist, well-drained loamy soil.",
  img: "assets/img/borlotti_bean.webp",
  benefits: "Packed with fiber, protein, and complex carbohydrates.",
  tags: ["☀️ Full Sun", "🧪 Neutral Soil", "🌱 Well-Drained Loamy Soil"]
},

broad_beans: {
  category: "Legumes",
  companions: ["Spinach", "Potatoes", "Lettuce"],
  foes: ["Fennel"],
  details: "Broad beans grow well in cool weather and heavy, rich soil.",
  img: "assets/img/broad_beans.webp",
  benefits: "Rich in fiber, folate, and iron.",
  tags: ["⛅ Partial Sun", "🧪 Neutral to Slightly Alkaline Soil", "🌱 Heavy, Rich Soil"]
},

chickpeas: {
  category: "Legumes",
  companions: ["Cucumbers", "Corn", "Potatoes"],
  foes: ["Onions", "Garlic"],
  details: "Chickpeas need warm, dry climates and sandy, well-drained soil.",
  img: "assets/img/chickpeas.webp",
  benefits: "High in protein, fiber, and essential nutrients like manganese and folate.",
  tags: ["☀️ Full Sun", "🧪 Neutral to Slightly Alkaline Soil", "🌱 Sandy, Well-Drained Soil"]
},

kidney_beans: {
  category: "Legumes",
  companions: ["Corn", "Cucumbers", "Carrots"],
  foes: ["Onions", "Garlic"],
  details: "Kidney beans thrive in warm climates and loose, well-draining soil.",
  img: "assets/img/kidney_beans.webp",
  benefits: "Great source of protein, iron, and dietary fiber.",
  tags: ["☀️ Full Sun", "🧪 Neutral Soil", "🌱 Loose, Well-Drained Soil"]
},

lima_beans: {
  category: "Legumes",
  companions: ["Corn", "Cucumbers", "Potatoes"],
  foes: ["Onions"],
  details: "Lima beans grow best in warm temperatures and fertile, well-drained loamy soil.",
  img: "assets/img/lima_beans.webp",
  benefits: "Rich in iron, manganese, and dietary fiber.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Well-Drained Loamy Soil"]
},

mung_beans: {
  category: "Legumes",
  companions: ["Corn", "Cucumbers", "Squash"],
  foes: ["Onions", "Garlic"],
  details: "Mung beans prefer hot climates with well-drained sandy or loamy soil.",
  img: "assets/img/mung_beans.webp",
  benefits: "Excellent source of plant-based protein and antioxidants.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Sandy or Loamy Well-Drained Soil"]
},

peanuts: {
  category: "Legumes",
  companions: ["Corn", "Sunflowers", "Cucumbers"],
  foes: ["Onions"],
  details: "Peanuts require long warm seasons and sandy, loose soil to develop underground pods.",
  img: "assets/img/peanuts.webp",
  benefits: "High in healthy fats, protein, and B vitamins.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Loose, Sandy Soil"]
},

pinto_beans: {
  category: "Legumes",
  companions: ["Corn", "Cucumbers", "Carrots"],
  foes: ["Onions", "Garlic"],
  details: "Pinto beans grow best in warm climates with well-drained, slightly acidic soil.",
  img: "assets/img/pinto_beans.webp",
  benefits: "Good source of protein, fiber, and folate.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
},

snap_peas: {
  category: "Legumes",
  companions: ["Carrots", "Radishes", "Lettuce"],
  foes: ["Onions", "Garlic"],
  details: "Snap peas prefer cool weather and moist, fertile soil.",
  img: "assets/img/snap_peas.webp",
  benefits: "Rich in vitamins A, C, and K as well as fiber.",
  tags: ["⛅ Partial Sun", "🧪 Neutral to Slightly Acidic Soil", "🌱 Moist, Fertile Soil"]
},

succotash: {
  category: "Legumes",
  companions: ["Corn", "Squash"],
  foes: ["Onions"],
  details: "Succotash is a dish typically made from lima beans and corn; both grow well together in warm climates with rich, loamy soil.",
  img: "assets/img/succotash.webp",
  benefits: "Nutritionally balanced blend of protein, fiber, and essential nutrients from both legumes and corn.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Rich, Well-Drained Loamy Soil"]
},

  lentils: {
    category: "Legumes",
    companions: ["Carrot", "Radish"],
    foes: [],
    details: "Lentils benefit carrots and radishes.",
    img: "assets/img/lentils.jpg",
    benefits: "A great source of plant-based protein and can help manage cholesterol and potentially reduce menopause symptoms.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Sandy, Well-Drained Soil"]
  },
  // Herbs
  basil: {
    category: "Herbs",
    companions: ["Tomato", "Peppers"],
    foes: ["Rue"],
    details: "Basil enhances the flavor of tomatoes.",
    img: "assets/img/basil.jpeg",
    benefits: "Incorporating both soy and basil into your diet can potentially offer a range of health benefits, as both ingredients are recognized for their nutritional value and beneficial compounds.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Well-Drained Soil"]
  },
  mint: {
    category: "Herbs",
    companions: ["Cabbage", "Tomato"],
    foes: [],
    details: "Mint helps deter pests for cabbage and tomato.",
    img: "assets/img/Mint.webp",
    benefits: "Aids digestion, freshens breath, and may help reduce stress and headaches.",
    tags: ["⛅ Partial Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Moist Soil"]
  },
  parsley: {
    category: "Herbs",
    companions: ["Tomato", "Carrot"],
    foes: [],
    details: "Parsley benefits tomatoes and carrots.",
    img: "assets/img/parsley.jpg",
    benefits: "Supports digestion, boosts the immune system, improves heart health, and may protect against certain cancers.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Moist, Well-Drained Soil"]
  },
  cilantro: {
    category: "Herbs",
    companions: ["Tomato", "Spinach"],
    foes: [],
    details: "Cilantro grows well with tomatoes and spinach.",
    img: "assets/img/Cilantro.jpeg",
    benefits: "Cilantro, also known as coriander leaves, offers several potential health benefits, supported by traditional use and some scientific studies.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Well-Drained Soil"]
  },
  dill: {
    category: "Herbs",
    companions: ["Cabbage", "Lettuce"],
    foes: ["Carrot"],
    details: "Dill can stunt carrot growth.",
    img: "assets/img/dill.png",
    benefits: "May help reduce LDL cholesterol levels.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
  },
  thyme: {
    category: "Herbs",
    companions: ["Cabbage", "Strawberry"],
    foes: [],
    details: "Thyme benefits cabbage and strawberries.",
    img: "assets/img/Thyme.jpeg",
    benefits: "Can help boost immunity, relieve coughs and sore throats, and reduce inflammation.",
    tags: ["☀️ Full Sun", "🧪 Slightly Alkaline Soil", "🌱 Sandy, Well-Drained Soil"]
  },
  oregano: {
    category: "Herbs",
    companions: ["Cabbage", "Tomato"],
    foes: [],
    details: "Oregano helps cabbage and tomato.",
    img: "assets/img/oregano.jpg",
    benefits: "May help fight bacteria, reduce inflammation, and potentially lower cholesterol.",
    tags: ["☀️ Full Sun", "🧪 Neutral to Slightly Alkaline Soil", "🌱 Well-Drained Soil"]
  },
  sage: {
    category: "Herbs",
    companions: ["Cabbage", "Carrot"],
    foes: ["Cucumber"],
    details: "Sage benefits cabbage and carrots.",
    img: "assets/img/sage.jpg",
    benefits: "May support cognitive enhancement, diabetes management, cholesterol balance, and relief from menopausal symptoms.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Well-Drained Soil"]
  },
  chives: {
    category: "Herbs",
    companions: ["Carrot", "Tomato"],
    foes: [],
    details: "Chives benefit carrots and tomatoes.",
    img: "assets/img/Chives.jpeg",
    benefits: "A good source of vitamins C, K, and A, as well as antioxidants, which can help boost the immune system, improve bone health, and protect against cellular damage from free radicals.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Moist, Well-Drained Soil"]
  },
  // Fruits (Small-Scale)
  strawberry: {
    category: "Fruits",
    companions: ["Spinach", "Lettuce", "Onion"],
    foes: [],
    details: "Strawberries grow well with spinach and lettuce.",
    img: "assets/img/strawberry.jpeg",
    benefits: "A great source of vitamins, antioxidants, and fiber, contributing to heart health, immune support, and digestive wellness.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Moist, Well-Drained Soil"]
  },
  melon: {
    category: "Fruits",
    companions: ["Corn", "Okra"],
    foes: [],
    details: "Melons benefit from corn and okra.",
    img: "assets/img/melon.jpeg",
    benefits: "Excellent sources of vitamins A and C, which support immune function, skin health, and eye health.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Sandy, Well-Drained Soil"]
  },
  watermelon: {
    category: "Fruits",
    companions: ["Corn", "Nasturtium"],
    foes: [],
    details: "Watermelon grows well with corn and nasturtium.",
    img: "assets/img/watermelon.jpg",
    benefits: "May support improved heart health, better skin and eye health, and potentially even reduce the risk of certain cancers.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Sandy, Well-Drained Soil"]
  },
  apple: {
  category: "Fruits",
  companions: ["Chives", "Garlic", "Chamomile"],
  foes: ["Walnut", "Grass"],
  details: "Apples thrive in temperate climates with well-drained, loamy soil and full sun exposure.",
  img: "assets/img/apple.webp",
  benefits: "High in fiber, vitamin C, and antioxidants; supports heart and gut health.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Loamy Soil"]
},

citrus: {
  category: "Fruits",
  companions: ["Basil", "Marigold", "Dill"],
  foes: ["Apricots", "Walnuts"],
  details: "Citrus trees need warm climates, full sun, and sandy, well-drained soil.",
  img: "assets/img/citrus.webp",
  benefits: "Excellent source of vitamin C, potassium, and flavonoids.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Sandy, Well-Drained Soil"]
},

figs: {
  category: "Fruits",
  companions: ["Lavender", "Comfrey", "Marigold"],
  foes: ["Root Crops"],
  details: "Figs grow best in warm climates with full sun and moderately fertile, well-drained soil.",
  img: "assets/img/figs.webp",
  benefits: "Rich in fiber, antioxidants, and natural sugars.",
  tags: ["☀️ Full Sun", "🧪 Neutral to Slightly Alkaline Soil", "🌱 Well-Drained Soil"]
},

mulberries: {
  category: "Fruits",
  companions: ["Chives", "Garlic", "Marigold"],
  foes: ["Black Walnut"],
  details: "Mulberries prefer full sun and moist, fertile soil with good drainage.",
  img: "assets/img/mulberries.webp",
  benefits: "High in vitamin C, iron, and antioxidants; supports immune health.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Moist, Fertile Soil"]
},

nectarines: {
  category: "Fruits",
  companions: ["Chives", "Garlic", "Dill"],
  foes: ["Tomatoes", "Potatoes"],
  details: "Nectarines grow well in warm climates with full sun and well-drained sandy or loamy soil.",
  img: "assets/img/nectarines.webp",
  benefits: "Rich in vitamins A and C, antioxidants, and fiber.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Sandy or Loamy Soil"]
},

orange: {
  category: "Fruits",
  companions: ["Basil", "Nasturtium", "Dill"],
  foes: ["Apricots", "Walnuts"],
  details: "Orange trees thrive in warm temperatures and require sandy, well-drained soil with full sunlight.",
  img: "assets/img/orange.webp",
  benefits: "Excellent source of vitamin C, potassium, and fiber.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Sandy, Well-Drained Soil"]
},

peach: {
  category: "Fruits",
  companions: ["Chives", "Garlic", "Marigold"],
  foes: ["Tomatoes", "Potatoes"],
  details: "Peach trees do best in full sun and sandy loam soil with good drainage.",
  img: "assets/img/peach.webp",
  benefits: "Rich in vitamins A and C, fiber, and antioxidants.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Sandy Loam Soil"]
},

pear: {
  category: "Fruits",
  companions: ["Chives", "Nasturtium", "Marigold"],
  foes: ["Walnuts", "Tomatoes"],
  details: "Pears prefer cool to temperate climates with well-drained loamy soil and full sun.",
  img: "assets/img/pear.webp",
  benefits: "Good source of dietary fiber, vitamin C, and copper.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Well-Drained Loamy Soil"]
},

persimmons: {
  category: "Fruits",
  companions: ["Mint", "Garlic", "Lemon Balm"],
  foes: ["Black Walnut"],
  details: "Persimmons need full sun and well-drained loamy soil, thriving in warmer temperate zones.",
  img: "assets/img/persimmons.webp",
  benefits: "Rich in vitamins A and C, fiber, and antioxidants.",
  tags: ["☀️ Full Sun", "🧪 Neutral to Slightly Acidic Soil", "🌱 Well-Drained Loamy Soil"]
},

plum: {
  category: "Fruits",
  companions: ["Chives", "Garlic", "Chamomile"],
  foes: ["Tomatoes", "Potatoes"],
  details: "Plum trees do well in full sun and sandy, well-drained soil.",
  img: "assets/img/plum.webp",
  benefits: "Good source of vitamin C, fiber, and antioxidants.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Sandy Soil"]
},

plantain: {
  category: "Fruits",
  companions: ["Legumes", "Sweet Potatoes", "Yarrow"],
  foes: ["Strong Shade Trees"],
  details: "Plantains thrive in hot, humid climates with rich, moist, and well-drained soil.",
  img: "assets/img/plantain.webp",
  benefits: "High in carbohydrates, vitamin A, and potassium; ideal for energy and digestive health.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Rich, Moist, Well-Drained Soil"]
},

pomegranates: {
  category: "Fruits",
  companions: ["Lavender", "Basil", "Yarrow"],
  foes: ["Excessive Shade Plants"],
  details: "Pomegranates need hot, dry climates with full sun and well-drained soil.",
  img: "assets/img/pomegranates.webp",
  benefits: "Rich in antioxidants, vitamin C, and polyphenols; supports heart and immune health.",
  tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Well-Drained Soil"]
},

  raspberry: {
    category: "Fruits",
    companions: ["Garlic", "Chives"],
    foes: [],
    details: "Raspberries benefit from garlic and chives.",
    img: "assets/img/raspberry.jpeg",
    benefits: "Raspberries also contain vitamin C, an antioxidant ideal for immune health.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Loamy, Well-Drained Soil"]
  },
  blueberry: {
    category: "Fruits",
    companions: ["Thyme", "Borage"],
    foes: [],
    details: "Blueberries grow well with thyme and borage (acidic soil needed).",
    img: "assets/img/blueberry.jpg",
    benefits: "May support heart health, improve brain function, aid digestion, and potentially protect against certain cancers and chronic diseases.",
    tags: ["☀️ Full Sun", "🧪 Acidic Soil", "🌱 Peaty, Well-Drained Soil"]
  },
  // Companion Flowers
  marigold: {
    category: "Companion Flowers",
    companions: ["Tomato", "Squash", "Sweet Potato"],
    foes: [],
    details: "Marigolds help repel nematodes and other pests.",
    img: "assets/img/marigold.png",
    benefits: "May help with wound healing, reduce inflammation, and even offer some sun protection for the skin.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Well-Drained Soil"]
  },
  nasturtium: {
    category: "Companion Flowers",
    companions: ["Squash", "Watermelon", "Zucchini"],
    foes: [],
    details: "Nasturtium deters pests and benefits squash and watermelon.",
    img: "assets/img/Nasturtium.jpeg",
    benefits: "Provides pest control, edible flowers and leaves, and potential medicinal properties.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Well-Drained Soil"]
  },
  sunflower: {
    category: "Companion Flowers",
    companions: ["Corn", "Cucumber"],
    foes: [],
    details: "Sunflowers attract pollinators and benefit corn and cucumber.",
    img: "assets/img/Sunflower.jpeg",
    benefits: "May promote heart health, boost the immune system, and potentially help with weight management.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Loamy, Well-Drained Soil"]
  },
  borage: {
    category: "Companion Flowers",
    companions: ["Tomato", "Strawberry", "Zucchini", "Blueberry"],
    foes: [],
    details: "Borage attracts pollinators and benefits tomatoes and strawberries.",
    img: "assets/img/borage.jpg",
    benefits: "Borage, particularly its seed oil, is rich in gamma-linolenic acid (GLA), an omega-6 fatty acid known for its anti-inflammatory properties. GLA helps reduce inflammation by decreasing the production of inflammatory proteins and promoting the production of anti-inflammatory prostaglandins.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Moist, Well-Drained Soil"]
  },
  // Collard Greens (added as requested)
  collard_greens: {
    category: "Ula",
    companions: ["Tomato", "Onion", "Mint"],
    foes: ["Strawberry"],
    details: "Collard greens grow well with tomato, onion, and mint.",
    img: "assets/img/collard_greens.jpg",
    benefits: "May support improved vision, bone health, digestion, and may help protect against chronic diseases like cancer and heart disease.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Moist, Well-Drained Soil"]
  }

    };

    // --- Smart Search with Autocomplete & Highlight Companions ---

const cropInput = document.getElementById("cropInput");
const cropList = document.getElementById("cropList");

// Helper: Normalize crop key for lookup, handling plurals
function normalizeCropKey(input) {
  let key = input.toLowerCase().replace(/\s+/g, "_").trim();
  // Handle simple English plurals
  if (!cropData[key]) {
    // Remove trailing 'es' or 's' if present and try again
    if (key.endsWith("es") && cropData[key.slice(0, -2)]) {
      key = key.slice(0, -2);
    } else if (key.endsWith("s") && cropData[key.slice(0, -1)]) {
      key = key.slice(0, -1);
    }
  }
  return key;
}

// Autocomplete suggestions as user types
cropInput.addEventListener("input", function () {
  const input = normalizeCropKey(this.value);
  const suggestions = Object.keys(cropData).filter(crop =>
    crop.includes(input)
  );
  cropList.innerHTML = "";
  suggestions.forEach(crop => {
    const option = document.createElement("option");
    // Show crop name with spaces, not underscores
    option.value = crop.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    cropList.appendChild(option);
  });

  // Highlight companions in real-time
  highlightCompanions(input);
});

// Highlight companions in the UI as user types
function highlightCompanions(mainCropKey) {
  clearResults();
  if (!mainCropKey || !cropData[mainCropKey]) return;
  const companions = cropData[mainCropKey].companions || [];
  if (companions.length === 0) return;

  const html = companions.map(item => {
    const crop = cropData[normalizeCropKey(item)];
    const img = crop && crop.img ? `<img src='${crop.img}' class='crop-image'/>` : "";
    return `<li style="background:#d8f3dc;border-radius:8px;margin-bottom:8px;padding:8px;">
      ${img}<strong>${item}</strong>
    </li>`;
  }).join('');
  document.getElementById("results").innerHTML =
    `<div class='result-card'><strong>Matching Companions</strong><ul>${html}</ul></div>`;
}

    function toggleDarkMode() {
      const html = document.documentElement;
      html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
    }

    function getInputCrop() {
      return normalizeCropKey(cropInput.value);
    }

    function clearResults() {
      document.getElementById("results").innerHTML = "";
    }

    function displayResultCard(title, array, showImages = false, main = "") {
      const resultDiv = document.getElementById("results");
      if (!array || !array.length) {
        resultDiv.innerHTML += `<div class='result-card'><strong>${title}</strong><p>No crops found.</p></div>`;
        return;
      }
      // Animated card list
      let listHtml = `<ul class="result-card-list">`;
      array.forEach((item, idx) => {
        const key = normalizeCropKey(item); // <-- always normalize
        const crop = cropData[key];
        const img = (showImages && crop && crop.img)
          ? `<img src='${crop.img}' class='crop-image' alt='${item}' style='margin-bottom:8px;'/>`
          : `<span style="font-size:2em;">🌱</span>`;
        const score = cropData[main]?.companions?.includes(item) ? "⭐️⭐️⭐️⭐️⭐️" : "⭐️⭐️⭐️";
        const details = crop?.details || "";
        listHtml += `
          <li class="crop-card" style="--delay:${idx * 0.08}s;">
            <div class="crop-card-inner">
              <div class="crop-card-front">
                ${img}
                <div style="font-weight:bold;margin-top:6px;">${item}</div>
                <div style="font-size:0.9em;">${score}</div>
              </div>
              <div class="crop-card-back">
                <div style="font-weight:bold;">${item}</div>
                <div style="margin-top:6px;">${details}</div>
              </div>
            </div>
          </li>
        `;
      });
      listHtml += `</ul>`;
      resultDiv.innerHTML += `<div class='result-card'><strong>${title}</strong>${listHtml}</div>`;
    }

    function showMessage(title, msg) {
      const div = document.getElementById("results");
      div.innerHTML += `<div class='result-card'><strong>${title}</strong><p>${msg}</p></div>`;
    }

    function saveToHistory(crop) {
      if (!crop) return;
      let history = JSON.parse(localStorage.getItem("cropHistory")) || [];
      history = history.filter(item => item !== crop);
      history.unshift(crop);
      if (history.length > 5) history = history.slice(0, 5);
      localStorage.setItem("cropHistory", JSON.stringify(history));
      updateHistoryDisplay();
    }

    // Collapsible Recent Searches
function updateHistoryDisplay() {
  const history = JSON.parse(localStorage.getItem("cropHistory")) || [];
  const listDiv = document.getElementById("recent-searches-list");
  if (!listDiv) return;
  if (!history.length) {
    listDiv.innerHTML = "<div style='color:#888;'>No recent searches.</div>";
    return;
  }
  const html = "<ul>" + history.map(item =>
    `<li onclick='prefillCrop("${item}")'>${item.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</li>`
  ).join('') + "</ul>";
  listDiv.innerHTML = html;
}

// Toggle open/close
document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("toggle-recent-btn");
  const arrow = document.getElementById("recent-arrow");
  const listDiv = document.getElementById("recent-searches-list");
  if (toggleBtn && listDiv && arrow) {
    toggleBtn.onclick = function() {
      listDiv.classList.toggle("open");
      arrow.textContent = listDiv.classList.contains("open") ? "▲" : "▼";
    };
    // Optionally open by default
    // listDiv.classList.add("open");
    // arrow.textContent = "▲";
  }
  updateHistoryDisplay();
});

    function prefillCrop(name) {
      cropInput.value = name;
      showDetails();
    }

    function showSpinner() {
      document.getElementById("loading-spinner").style.display = "flex";
    }

function hideSpinner() {
  document.getElementById("loading-spinner").style.display = "none";
}
function showSuccess() {
  const el = document.getElementById("success-animation");
  el.style.display = "flex";
  setTimeout(() => { el.style.display = "none"; }, 1200);
}


// Example usage: wrap main actions
function findCompanions() {
  clearResults();
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    showSuccess();
    const crop = getInputCrop();
    saveToHistory(crop);
    if (cropData[crop]) {
      displayResultCard("✅ Companion Crops", cropData[crop].companions, true, crop);
    } else {
      showMessage("Not Found", "Crop not found in database.");
    }
  }, 700); // simulate loading
}

function findFoes() {
  clearResults();
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    showSuccess();
    const crop = getInputCrop();
    saveToHistory(crop);
    if (cropData[crop]) {
      displayResultCard("⚠️ Foe Crops", cropData[crop].foes, true, crop);
    } else {
      showMessage("Not Found", "Crop not found in database.");
    }
  }, 700);
}

    function showDetails() {
      clearResults();
      const crop = getInputCrop();
      saveToHistory(crop);
      if (cropData[crop]) {
        const cat = cropData[crop].category;
        const img = `<img src='${cropData[crop].img}' class='crop-image'/>`;
        const badge = `<span class='category-badge'>${cat}</span>`;
        const tags = cropData[crop].tags ? cropData[crop].tags.map(tag => `<span class="crop-tag">${tag}</span>`).join(' ') : "";
        showMessage("🌟 Crop Details", img + badge + " " + cropData[crop].details + `<div class="crop-tags">${tags}</div>`);
      } else {
        showMessage("Not Found", "Crop not found in database.");
      }
    }

function showBenefits() {
  clearResults();
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    showSuccess();
    const crop = getInputCrop();
    saveToHistory(crop);
    if (cropData[crop]) {
      const cat = cropData[crop].category;
      const img = `<img src='${cropData[crop].img}' class='crop-image'/>`;
      const badge = `<span class='category-badge'>${cat}</span>`;
      const tags = cropData[crop].tags ? cropData[crop].tags.map(tag => `<span class="crop-tag">${tag}</span>`).join(' ') : "";
      showMessage("🌱 Crop Benefits", img + badge + " " + cropData[crop].benefits + `<div class="crop-tags">${tags}</div>`);
      showFavoriteStar(crop);
    } else {
      showMessage("Not Found", "Crop not found in database.");
    }
  }, 700);
}

function filterByCategory() {
      const selected = document.getElementById("categorySelect").value;
      cropList.innerHTML = "";
      for (let crop in cropData) {
        if (!selected || cropData[crop].category === selected) {
          const opt = document.createElement("option");
          opt.value = crop.charAt(0).toUpperCase() + crop.slice(1);
          cropList.appendChild(opt);
        }
      }
    }

    window.addEventListener("DOMContentLoaded", updateHistoryDisplay);

    // --- Daily Gardening Tip ---
const gardeningTips = [
  "Water your plants early in the morning to reduce evaporation.",
  "Rotate your crops each season to prevent soil depletion.",
  "Mulch your garden beds to retain moisture and suppress weeds.",
  "Encourage pollinators by planting flowers like marigold and borage.",
  "Remove weeds regularly to give your crops more nutrients.",
  "Compost kitchen scraps to enrich your garden soil.",
  "Check the underside of leaves for pests each week.",
  "Use companion planting to naturally deter pests.",
  "Harvest vegetables regularly to encourage more production.",
  "Test your soil pH for optimal plant health."
];

function showDailyTip() {
  const tipDiv = document.getElementById("daily-tip");
  // Use the current date as a seed for the tip of the day
  const today = new Date();
  const seed = today.getFullYear() * 1000 + today.getMonth() * 50 + today.getDate();
  const tipIndex = seed % gardeningTips.length;
  tipDiv.textContent = "🌱 Tip of the Day: " + gardeningTips[tipIndex];
}

window.addEventListener("DOMContentLoaded", showDailyTip);

document.getElementById("start-btn").addEventListener("click", function() {
  document.getElementById("intro-modal").style.display = "none";
  document.querySelector(".app-container").style.display = "block";
  document.querySelector(".dark-toggle").style.display = "inline-block";
  document.querySelector(".app-footer").style.display = "block";
});

function showIntroModal() {
  const modal = document.getElementById("intro-modal");
  const app = document.querySelector(".app-container");
  if (modal && app) {
    modal.style.display = "flex";
    app.classList.add("app-blur");
  }
}

function hideIntroModal() {
  const modal = document.getElementById("intro-modal");
  const app = document.querySelector(".app-container");
  if (modal && app) {
    modal.style.display = "none";
    app.classList.remove("app-blur");
  }
}

window.addEventListener("DOMContentLoaded", function() {
  showIntroModal();
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.onclick = hideIntroModal;
  }

  const saveNotesBtn = document.getElementById('save-notes-btn');
  if (saveNotesBtn) {
    saveNotesBtn.onclick = function() {
      const crop = getCurrentCropKey();
      if (crop && cropData[crop]) {
        localStorage.setItem('notes_' + crop, document.getElementById('user-notes').value);
        alert('Notes saved!');
      }
    };
  }

});

function loadNotesForCrop(crop) {
  if (!crop) return;
  const notes = localStorage.getItem('notes_' + crop) || '';
  document.getElementById('user-notes').value = notes;
}
const notes = document.getElementById('user-notes');
notes.addEventListener('input', () => {
  notes.style.height = 'auto';
  notes.style.height = notes.scrollHeight + 'px';
});

const crops = [
  "Tomato",
  "Corn",
  "Carrot",
  "Basil",
  "Marigold",
  "Potato",
  "Onion",
  "Peas",
  "Cabbage",
  "Spinach"
];

function generateCrop() {
  const index = Math.floor(Math.random() * crops.length);
  const cropName = crops[index];
  document.getElementById("result").textContent = cropName;
  document.getElementById("cropInput").value = cropName; // Autofill search bar
  cropInput.dispatchEvent(new Event("input")); // Trigger autocomplete and highlight
}


// --- Favorites Logic ---

// Add or remove a crop from favorites
function toggleFavorite(crop) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const idx = favorites.indexOf(crop);
  if (idx === -1) {
    favorites.push(crop);
  } else {
    favorites.splice(idx, 1);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavoritesDisplay();
}

// Show favorites section
function updateFavoritesDisplay() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favDiv = document.getElementById("favorites-list");
  if (!favDiv) return;
  if (!favorites.length) {
    favDiv.innerHTML = "<div style='color:#888;'>No favorites yet.</div>";
    return;
  }
  favDiv.innerHTML = favorites.map(crop => {
    const key = normalizeCropKey(crop);
    const cropObj = cropData[key];
    const img = cropObj && cropObj.img ? `<img src='${cropObj.img}' class='crop-image' style='width:32px;height:32px;margin-right:8px;'/>` : "";
    return `<div class="fav-item">
      ${img}<span>${crop.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</span>
      <button class="fav-btn" title="Remove from favorites" onclick="toggleFavorite('${crop}')">★</button>
    </div>`;
  }).join('');
}

// Show star button after crop is searched
function showFavoriteStar(crop) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const isFav = favorites.includes(crop);
  // Find the last result-card (where crop details are shown)
  const cards = document.querySelectorAll('.result-card');
  if (!cards.length) return;
  const lastCard = cards[cards.length - 1];
  // Remove any existing star
  const oldStar = lastCard.querySelector('.fav-btn');
  if (oldStar) oldStar.remove();
  // Add star button next to crop name/title
  const strong = lastCard.querySelector('strong');
  if (strong) {
    const starBtn = document.createElement('button');
    starBtn.className = 'fav-btn';
    starBtn.innerHTML = isFav ? "★" : "☆";
    starBtn.title = isFav ? "Remove from favorites" : "Add to favorites";
    starBtn.onclick = function(e) {
      e.stopPropagation();
      toggleFavorite(crop);
      // Update star appearance
      starBtn.innerHTML = isFav ? "☆" : "★";
      starBtn.title = isFav ? "Add to favorites" : "Remove from favorites";
    };
    strong.appendChild(starBtn);
  }
}

// Update showDetails, showBenefits, findCompanions, findFoes to show star after search
function showDetails() {
  clearResults();
  const crop = getInputCrop();
  saveToHistory(crop);
  if (cropData[crop]) {
    const cat = cropData[crop].category;
    const img = `<img src='${cropData[crop].img}' class='crop-image'/>`;
    const badge = `<span class='category-badge'>${cat}</span>`;
    const tags = cropData[crop].tags ? cropData[crop].tags.map(tag => `<span class="crop-tag">${tag}</span>`).join(' ') : "";
    showMessage("🌟 Crop Details", img + badge + " " + cropData[crop].details + `<div class="crop-tags">${tags}</div>`);
  } else {
    showMessage("Not Found", "Crop not found in database.");
  }
}

function showBenefits() {
  clearResults();
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    showSuccess();
    const crop = getInputCrop();
    saveToHistory(crop);
    if (cropData[crop]) {
      const cat = cropData[crop].category;
      const img = `<img src='${cropData[crop].img}' class='crop-image'/>`;
      const badge = `<span class='category-badge'>${cat}</span>`;
      const tags = cropData[crop].tags ? cropData[crop].tags.map(tag => `<span class="crop-tag">${tag}</span>`).join(' ') : "";
      showMessage("🌱 Crop Benefits", img + badge + " " + cropData[crop].benefits + `<div class="crop-tags">${tags}</div>`);
    } else {
      showMessage("Not Found", "Crop not found in database.");
    }
  }, 700);
}

function findCompanions() {
  clearResults();
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    showSuccess();
    const crop = getInputCrop();
    saveToHistory(crop);
    if (cropData[crop]) {
      displayResultCard("✅ Companion Crops", cropData[crop].companions, true, crop);
    } else {
      showMessage("Not Found", "Crop not found in database.");
    }
  }, 700);
}

function findFoes() {
  clearResults();
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    showSuccess();
    const crop = getInputCrop();
    saveToHistory(crop);
    if (cropData[crop]) {
      displayResultCard("⚠️ Foe Crops", cropData[crop].foes, true, crop);
    
    } else {
      showMessage("Not Found", "Crop not found in database.");
    }
  }, 700);
}

// --- Main Favorite Button Logic --- //

function updateMainFavoriteBtn() {
  const btn = document.getElementById('favorite-main-btn');
  const star = document.getElementById('favorite-main-star');
  const label = document.getElementById('favorite-main-label');
  const rawCrop = cropInput.value;
  const crop = normalizeCropKey(rawCrop);
  if (!btn || !star || !label || !cropData[crop]) {
    btn.style.display = "none";
    return;
  }
  btn.style.display = "inline-flex";
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const isFav = favorites.includes(crop);
  star.textContent = isFav ? "★" : "☆";
  label.textContent = isFav ? "Remove from Favorites" : "Add to Favorites";
  btn.title = isFav ? "Remove from favorites" : "Add to favorites";
}

document.getElementById('favorite-main-btn').addEventListener('click', function() {
  const rawCrop = cropInput.value;
  const crop = normalizeCropKey(rawCrop);
  if (cropData[crop]) {
    toggleFavorite(crop);
    updateMainFavoriteBtn();
  }
});

// Update favorite button whenever crop input changes or after search
cropInput.addEventListener('input', updateMainFavoriteBtn);
["findCompanions", "findFoes", "showDetails", "showBenefits"].forEach(fn => {
  const orig = window[fn];
  if (typeof orig === "function") {
    window[fn] = function(...args) {
      orig.apply(this, args);
      updateMainFavoriteBtn();
    };
  }
});

// On load, update the button
window.addEventListener("DOMContentLoaded", updateMainFavoriteBtn);


async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const text = document.getElementById('user-notes').value.trim();
  if (!text) {
    alert("Please enter some notes first.");
    return;
  }

  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 10, 20);

  doc.save("My_Notes.pdf");
}
