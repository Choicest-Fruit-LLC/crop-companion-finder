const cropData = {
    // Fruiting Vegetables
  tomato: {
    category: "Fruiting Vegetables",
    companions: ["Basil", "Marigold", "Carrot", "Onion", "Collard Greens"],
    foes: ["Corn", "Potato", "Cucumber"],
    details: "Tomatoes grow well with basil, marigold, and carrots. Avoid planting near corn and potatoes.",
    img: "assets/img/tomato.jpg",
    benefits: ""
  },
  bell_pepper: {
    category: "Fruiting Vegetables",
    companions: ["Basil", "Onion", "Carrot"],
    foes: ["Fennel"],
    details: "Bell peppers benefit from basil and onions. Avoid fennel.",
    img: "assets/img/different types of peper.png",
    benefits: ""
  },
  chili_pepper: {
    category: "Fruiting Vegetables",
    companions: ["Basil", "Onion"],
    foes: ["Fennel"],
    details: "Chili peppers grow well with basil and onions.",
    img: "assets/img/chili_pepper.jpg",
    benefits: ""
  },
  eggplant: {
    category: "Fruiting Vegetables",
    companions: ["Beans", "Peas", "Marigold"],
    foes: ["Fennel"],
    details: "Eggplant benefits from beans and marigold.",
    img: "assets/img/eggplant.jpg",
    benefits: ""
  },
  cucumber: {
    category: "Fruiting Vegetables",
    companions: ["Beans", "Peas", "Radish", "Sunflower"],
    foes: ["Tomato", "Sage"],
    details: "Cucumbers grow well with beans and peas. Avoid tomatoes and sage.",
    img: "assets/img/cucumber.jpg",
    benefits: ""
  },
  zucchini: {
    category: "Fruiting Vegetables",
    companions: ["Borage", "Nasturtium", "Corn"],
    foes: ["Potato"],
    details: "Zucchini benefits from borage and nasturtium.",
    img: "assets/img/zucchini.jpg",
    benefits: ""
  },
  squash: {
    category: "Fruiting Vegetables",
    companions: ["Corn", "Beans", "Nasturtium"],
    foes: [],
    details: "Squash grows well with corn and beans.",
    img: "assets/img/squash.png",
    benefits: ""
  },
  okra: {
    category: "Fruiting Vegetables",
    companions: ["Peppers", "Melon"],
    foes: [],
    details: "Okra grows well with peppers and melon.",
    img: "assets/img/okra.jpg",
    benefits: ""
  },
  // Grains & Tall Plants
  corn: {
    category: "Grains & Tall Plants",
    companions: ["Beans", "Squash", "Sunflower"],
    foes: ["Tomato"],
    details: "Corn grows well with beans and squash.",
    img: "assets/img/corn.png",
    benefits: ""
  },
  sorghum: {
    category: "Grains & Tall Plants",
    companions: ["Peas", "Beans"],
    foes: [],
    details: "Sorghum benefits from peas and beans.",
    img: "assets/img/sorghum.jpg",
    benefits: ""
  },
  millet: {
    category: "Grains & Tall Plants",
    companions: ["Peas", "Beans"],
    foes: [],
    details: "Millet benefits from peas and beans.",
    img: "assets/img/millet.jpg",
    benefits: ""
  },
  // Root Vegetables
  carrot: {
    category: "Root Vegetables",
    companions: ["Lettuce", "Onion", "Tomato", "Peas"],
    foes: ["Dill"],
    details: "Carrots benefit from onions and peas.",
    img: "assets/img/carrot.png",
    benefits: ""
  },
  radish: {
    category: "Root Vegetables",
    companions: ["Carrot", "Lettuce", "Peas"],
    foes: [],
    details: "Radishes grow well with carrots and lettuce.",
    img: "assets/img/radish.jpg",
    benefits: ""
  },
  beetroot: {
    category: "Root Vegetables",
    companions: ["Onion", "Lettuce"],
    foes: [],
    details: "Beetroot benefits from onions and lettuce.",
    img: "assets/img/beetroot.jpg",
    benefits: ""
  },
  turnip: {
    category: "Root Vegetables",
    companions: ["Peas", "Onion"],
    foes: [],
    details: "Turnips grow well with peas and onions.",
    img: "assets/img/turnip.jpg",
    benefits: ""
  },
  potato: {
    category: "Root Vegetables",
    companions: ["Beans", "Corn"],
    foes: ["Tomato", "Cucumber"],
    details: "Potatoes benefit from beans and corn. Avoid tomatoes and cucumbers.",
    img: "assets/img/potato.png",
    benefits: ""
  },
  sweet_potato: {
    category: "Root Vegetables",
    companions: ["Beans", "Marigold"],
    foes: [],
    details: "Sweet potatoes grow well with beans and marigold.",
    img: "assets/img/sweet_potato.jpg",
    benefits: ""
  },
  onion: {
    category: "Root Vegetables",
    companions: ["Carrot", "Lettuce", "Strawberry"],
    foes: ["Peas"],
    details: "Onions deter pests for carrots. Avoid peas.",
    img: "assets/img/onion.png",
    benefits: ""
  },
  garlic: {
    category: "Root Vegetables",
    companions: ["Carrot", "Lettuce", "Strawberry"],
    foes: ["Peas"],
    details: "Garlic benefits carrots and lettuce. Avoid peas.",
    img: "assets/img/garlic.jpg",
    benefits: ""
  },
  // Legumes
  green_beans: {
    category: "Legumes",
    companions: ["Corn", "Squash", "Carrot"],
    foes: ["Onion", "Garlic"],
    details: "Green beans grow well with corn and squash.",
    img: "assets/img/green_beans.jpg",
    benefits: ""
  },
  peas: {
    category: "Legumes",
    companions: ["Carrot", "Radish", "Turnip"],
    foes: ["Onion", "Garlic"],
    details: "Peas benefit carrots and radishes.",
    img: "assets/img/peas.jpg",
    benefits: ""
  },
  soybeans: {
    category: "Legumes",
    companions: ["Corn", "Squash"],
    foes: [],
    details: "Soybeans grow well with corn and squash.",
    img: "assets/img/soybeans.jpg",
    benefits: ""
  },
  lentils: {
    category: "Legumes",
    companions: ["Carrot", "Radish"],
    foes: [],
    details: "Lentils benefit carrots and radishes.",
    img: "assets/img/lentils.jpg",
    benefits: ""
  },
  // Herbs
  basil: {
    category: "Herbs",
    companions: ["Tomato", "Peppers"],
    foes: ["Rue"],
    details: "Basil enhances the flavor of tomatoes.",
    img: "assets/img/basil.png",
    benefits: ""
  },
  mint: {
    category: "Herbs",
    companions: ["Cabbage", "Tomato"],
    foes: [],
    details: "Mint helps deter pests for cabbage and tomato.",
    img: "assets/img/mint.png",
    benefits: ""
  },
  parsley: {
    category: "Herbs",
    companions: ["Tomato", "Carrot"],
    foes: [],
    details: "Parsley benefits tomatoes and carrots.",
    img: "assets/img/parsley.png",
    benefits: ""
  },
  cilantro: {
    category: "Herbs",
    companions: ["Tomato", "Spinach"],
    foes: [],
    details: "Cilantro grows well with tomatoes and spinach.",
    img: "assets/img/cilantro.png",
    benefits: ""
  },
  dill: {
    category: "Herbs",
    companions: ["Cabbage", "Lettuce"],
    foes: ["Carrot"],
    details: "Dill can stunt carrot growth.",
    img: "assets/img/dill.png",
    benefits: ""
  },
  thyme: {
    category: "Herbs",
    companions: ["Cabbage", "Strawberry"],
    foes: [],
    details: "Thyme benefits cabbage and strawberries.",
    img: "assets/img/thyme.jpg",
    benefits: ""
  },
  oregano: {
    category: "Herbs",
    companions: ["Cabbage", "Tomato"],
    foes: [],
    details: "Oregano helps cabbage and tomato.",
    img: "assets/img/oregano.jpg",
    benefits: ""
  },
  sage: {
    category: "Herbs",
    companions: ["Cabbage", "Carrot"],
    foes: ["Cucumber"],
    details: "Sage benefits cabbage and carrots.",
    img: "assets/img/sage.jpg",
    benefits: ""
  },
  chives: {
    category: "Herbs",
    companions: ["Carrot", "Tomato"],
    foes: [],
    details: "Chives benefit carrots and tomatoes.",
    img: "assets/img/chives.jpg",
    benefits: ""
  },
  // Fruits (Small-Scale)
  strawberry: {
    category: "Fruits",
    companions: ["Spinach", "Lettuce", "Onion"],
    foes: [],
    details: "Strawberries grow well with spinach and lettuce.",
    img: "assets/img/strawberry.jpg",
    benefits: ""
  },
  melon: {
    category: "Fruits",
    companions: ["Corn", "Okra"],
    foes: [],
    details: "Melons benefit from corn and okra.",
    img: "assets/img/melon.jpg",
    benefits: ""
  },
  watermelon: {
    category: "Fruits",
    companions: ["Corn", "Nasturtium"],
    foes: [],
    details: "Watermelon grows well with corn and nasturtium.",
    img: "assets/img/watermelon.jpg",
    benefits: ""
  },
  raspberry: {
    category: "Fruits",
    companions: ["Garlic", "Chives"],
    foes: [],
    details: "Raspberries benefit from garlic and chives.",
    img: "assets/img/raspberry.jpg",
    benefits: ""
  },
  blueberry: {
    category: "Fruits",
    companions: ["Thyme", "Borage"],
    foes: [],
    details: "Blueberries grow well with thyme and borage (acidic soil needed).",
    img: "assets/img/blueberry.jpg",
    benefits: ""
  },
  // Companion Flowers
  marigold: {
    category: "Companion Flowers",
    companions: ["Tomato", "Squash", "Sweet Potato"],
    foes: [],
    details: "Marigolds help repel nematodes and other pests.",
    img: "assets/img/different types and colors of marigold.png",
    benefits: ""
  },
  nasturtium: {
    category: "Companion Flowers",
    companions: ["Squash", "Watermelon", "Zucchini"],
    foes: [],
    details: "Nasturtium deters pests and benefits squash and watermelon.",
    img: "assets/img/nasturtium.jpg",
    benefits: ""
  },
  sunflower: {
    category: "Companion Flowers",
    companions: ["Corn", "Cucumber"],
    foes: [],
    details: "Sunflowers attract pollinators and benefit corn and cucumber.",
    img: "assets/img/sunflower.jpg",
    benefits: ""
  },
  borage: {
    category: "Companion Flowers",
    companions: ["Tomato", "Strawberry", "Zucchini", "Blueberry"],
    foes: [],
    details: "Borage attracts pollinators and benefits tomatoes and strawberries.",
    img: "assets/img/borage.jpg",
    benefits: ""
  },
  // Collard Greens (added as requested)
  collard_greens: {
    category: "Ula",
    companions: ["Tomato", "Onion", "Mint"],
    foes: ["Strawberry"],
    details: "Collard greens grow well with tomato, onion, and mint.",
    img: "assets/img/collard_greens.jpg",
    benefits: ""
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

    // Utility: Get a random gardening tip
function getRandomTip() {
  const tips = [
    "🌿 Did you know? Marigolds can deter nematodes in the soil.",
    "🌱 Rotate your crops each year to prevent soil-borne diseases.",
    "🌻 Sunflowers attract pollinators to your garden.",
    "🥕 Carrots love loose, sandy soil for best growth.",
    "🪴 Mulching helps retain soil moisture and suppress weeds.",
    "🍅 Basil planted near tomatoes can improve their flavor.",
    "🌾 Beans fix nitrogen in the soil, benefiting neighboring plants.",
    "🌼 Companion planting can naturally reduce pests and boost yields.",
    "🌧️ Water early in the morning to reduce evaporation.",
    "🌿 Healthy soil is the foundation of a thriving garden."
  ];
  return tips[Math.floor(Math.random() * tips.length)];
}

// Collapsible card HTML generator
function collapsibleCard(title, content, open = false) {
  return `
    <details class="result-card" ${open ? "open" : ""}>
      <summary style="font-weight:bold;cursor:pointer;">${title}</summary>
      <div style="margin-top:10px;">${content}</div>
    </details>
  `;
}

// Update showMessage to use collapsible cards
function showMessage(title, msg) {
  const div = document.getElementById("results");
  div.innerHTML += collapsibleCard(title, msg, true);
}

// Update displayResultCard to use collapsible cards
function displayResultCard(title, array, showImages = false, main = "") {
  const resultDiv = document.getElementById("results");
  if (!array || !array.length) {
    resultDiv.innerHTML += collapsibleCard(title, "<p>No crops found.</p>", true);
    return;
  }
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
        ${collapsibleCard(
          `<span style="display:flex;align-items:center;">${img}<span style="margin-left:8px;">${item}</span></span>`,
          `<div style="margin-top:6px;">${details}</div><div style="font-size:0.9em;">${score}</div>`
        )}
      </li>
    `;
  });
  listHtml += `</ul>`;
  resultDiv.innerHTML += collapsibleCard(title, listHtml, true);
  // Add random tip at the bottom
  resultDiv.innerHTML += `<div class="gardening-tip" style="margin-top:18px;font-style:italic;color:#40916c;">${getRandomTip()}</div>`;
}

// Update showDetails and showBenefits to use collapsible cards
function showDetails() {
  clearResults();
  const crop = getInputCrop();
  saveToHistory(crop);
  if (cropData[crop]) {
    const cat = cropData[crop].category;
    const img = `<img src='${cropData[crop].img}' class='crop-image'/>`;
    const badge = `<span class='category-badge'>${cat}</span>`;
    showMessage("🌟 Crop Details", img + badge + " " + cropData[crop].details);
    document.getElementById("results").innerHTML += `<div class="gardening-tip" style="margin-top:18px;font-style:italic;color:#40916c;">${getRandomTip()}</div>`;
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
    showMessage("🌱 Crop Benefits", img + badge + " " + cropData[crop].benefits);
    document.getElementById("results").innerHTML += `<div class="gardening-tip" style="margin-top:18px;font-style:italic;color:#40916c;">${getRandomTip()}</div>`;
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