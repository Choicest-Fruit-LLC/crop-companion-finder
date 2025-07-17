const cropData = {
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
    img: "assets/img/different types of peper.png",
    benefits: "These nutrients can contribute to heart health, cancer prevention, improved vision, and skin health.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
  },
  chili_pepper: {
    category: "Fruiting Vegetables",
    companions: ["Basil", "Onion"],
    foes: ["Fennel"],
    details: "Chili peppers grow well with basil and onions.",
    img: "assets/img/chili_pepper.jpg",
    benefits: "Improved heart health, enhanced metabolism, and potential cancer-fighting properties.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
  },
  eggplant: {
    category: "Fruiting Vegetables",
    companions: ["Beans", "Peas", "Marigold"],
    foes: ["Fennel"],
    details: "Eggplant benefits from beans and marigold.",
    img: "assets/img/eggplant.jpg",
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
    img: "assets/img/zucchini.jpg",
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
  okra: {
    category: "Fruiting Vegetables",
    companions: ["Peppers", "Melon"],
    foes: [],
    details: "Okra grows well with peppers and melon.",
    img: "assets/img/okra.jpg",
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
  millet: {
    category: "Grains & Tall Plants",
    companions: ["Peas", "Beans"],
    foes: [],
    details: "Millet benefits from peas and beans.",
    img: "assets/img/millet.jpg",
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
    img: "assets/img/radish.jpg",
    benefits: "Low in calories and a good source of fiber, which aids digestion and promotes feelings of fullness",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Sandy, Well-Drained Soil"]
  },
  beetroot: {
    category: "Root Vegetables",
    companions: ["Onion", "Lettuce"],
    foes: [],
    details: "Beetroot benefits from onions and lettuce.",
    img: "assets/img/beetroot.jpg",
    benefits: "Improved blood flow, lower blood pressure, and enhanced athletic performance",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Loamy, Well-Drained Soil"]
  },
  turnip: {
    category: "Root Vegetables",
    companions: ["Peas", "Onion"],
    foes: [],
    details: "Turnips grow well with peas and onions.",
    img: "assets/img/turnip.jpg",
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
    img: "assets/img/sweet_potato.jpg",
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
  garlic: {
    category: "Root Vegetables",
    companions: ["Carrot", "Lettuce", "Strawberry"],
    foes: ["Peas"],
    details: "Garlic benefits carrots and lettuce. Avoid peas.",
    img: "assets/img/garlic.jpg",
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
    img: "assets/img/peas.jpg",
    benefits: "A good source of plant-based protein and fiber, which aid in digestion and promote feelings of fullness.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Well-Drained Soil"]
  },
  soybeans: {
    category: "Legumes",
    companions: ["Corn", "Squash"],
    foes: [],
    details: "Soybeans grow well with corn and squash.",
    img: "assets/img/soybeans.jpg",
    benefits: "A good source of protein, fiber, and several vitamins and minerals, including iron, folate, and potassium.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Well-Drained Soil"]
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
    img: "assets/img/basil.png",
    benefits: "Incorporating both soy and basil into your diet can potentially offer a range of health benefits, as both ingredients are recognized for their nutritional value and beneficial compounds.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Well-Drained Soil"]
  },
  mint: {
    category: "Herbs",
    companions: ["Cabbage", "Tomato"],
    foes: [],
    details: "Mint helps deter pests for cabbage and tomato.",
    img: "assets/img/mint.png",
    benefits: "Aids digestion, freshens breath, and may help reduce stress and headaches.",
    tags: ["⛅ Partial Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Moist Soil"]
  },
  parsley: {
    category: "Herbs",
    companions: ["Tomato", "Carrot"],
    foes: [],
    details: "Parsley benefits tomatoes and carrots.",
    img: "assets/img/parsley.png",
    benefits: "Supports digestion, boosts the immune system, improves heart health, and may protect against certain cancers.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Moist, Well-Drained Soil"]
  },
  cilantro: {
    category: "Herbs",
    companions: ["Tomato", "Spinach"],
    foes: [],
    details: "Cilantro grows well with tomatoes and spinach.",
    img: "assets/img/cilantro.png",
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
    img: "assets/img/thyme.jpg",
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
    img: "assets/img/chives.jpg",
    benefits: "A good source of vitamins C, K, and A, as well as antioxidants, which can help boost the immune system, improve bone health, and protect against cellular damage from free radicals.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Moist, Well-Drained Soil"]
  },
  // Fruits (Small-Scale)
  strawberry: {
    category: "Fruits",
    companions: ["Spinach", "Lettuce", "Onion"],
    foes: [],
    details: "Strawberries grow well with spinach and lettuce.",
    img: "assets/img/strawberry.jpg",
    benefits: "A great source of vitamins, antioxidants, and fiber, contributing to heart health, immune support, and digestive wellness.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic Soil", "🌱 Moist, Well-Drained Soil"]
  },
  melon: {
    category: "Fruits",
    companions: ["Corn", "Okra"],
    foes: [],
    details: "Melons benefit from corn and okra.",
    img: "assets/img/melon.jpg",
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
  raspberry: {
    category: "Fruits",
    companions: ["Garlic", "Chives"],
    foes: [],
    details: "Raspberries benefit from garlic and chives.",
    img: "assets/img/raspberry.jpg",
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
    img: "assets/img/different types and colors of marigold.png",
    benefits: "May help with wound healing, reduce inflammation, and even offer some sun protection for the skin.",
    tags: ["☀️ Full Sun", "🧪 Neutral pH Soil", "🌱 Well-Drained Soil"]
  },
  nasturtium: {
    category: "Companion Flowers",
    companions: ["Squash", "Watermelon", "Zucchini"],
    foes: [],
    details: "Nasturtium deters pests and benefits squash and watermelon.",
    img: "assets/img/nasturtium.jpg",
    benefits: "Provides pest control, edible flowers and leaves, and potential medicinal properties.",
    tags: ["☀️ Full Sun", "🧪 Slightly Acidic to Neutral Soil", "🌱 Well-Drained Soil"]
  },
  sunflower: {
    category: "Companion Flowers",
    companions: ["Corn", "Cucumber"],
    foes: [],
    details: "Sunflowers attract pollinators and benefit corn and cucumber.",
    img: "assets/img/sunflower.jpg",
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

// Helper: Normalize crop key for lookup
function normalizeCropKey(input) {
  return input.toLowerCase().replace(/\s+/g, "_").trim();
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
      return cropInput.value.toLowerCase().trim();
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
        const crop = cropData[item.toLowerCase()];
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

    function updateHistoryDisplay() {
      const history = JSON.parse(localStorage.getItem("cropHistory")) || [];
      const div = document.getElementById("results");
      if (!history.length) return;
      const html = history.map(item => `<li onclick='prefillCrop("${item}")'>${item}</li>`).join('');
      div.innerHTML += `<div class='result-card'><strong>🕘 Recent Searches</strong><ul>${html}</ul></div>`;
    }

    function prefillCrop(name) {
      cropInput.value = name;
      showDetails();
    }

    function findCompanions() {
      clearResults();
      const crop = getInputCrop();
      saveToHistory(crop);
      if (cropData[crop]) {
        displayResultCard("✅ Companion Crops", cropData[crop].companions, true, crop);
      } else {
        showMessage("Not Found", "Crop not found in database.");
      }
    }

    function findFoes() {
      clearResults();
      const crop = getInputCrop();
      saveToHistory(crop);
      if (cropData[crop]) {
        displayResultCard("⚠️ Foe Crops", cropData[crop].foes, true, crop);
      } else {
        showMessage("Not Found", "Crop not found in database.");
      }
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
});