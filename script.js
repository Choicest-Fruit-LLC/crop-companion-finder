  const cropData = {
    // Fruiting Vegetables
  tomato: {
    category: "Fruiting Vegetables",
    companions: ["Basil", "Marigold", "Carrot", "Onion", "Collard Greens"],
    foes: ["Corn", "Potato", "Cucumber"],
    details: "Tomatoes grow well with basil, marigold, and carrots. Avoid planting near corn and potatoes.",
    img: "assets/img/tomato.jpg"
  },
  bell_pepper: {
    category: "Fruiting Vegetables",
    companions: ["Basil", "Onion", "Carrot"],
    foes: ["Fennel"],
    details: "Bell peppers benefit from basil and onions. Avoid fennel.",
    img: "assets/img/different types of peper.png"
  },
  chili_pepper: {
    category: "Fruiting Vegetables",
    companions: ["Basil", "Onion"],
    foes: ["Fennel"],
    details: "Chili peppers grow well with basil and onions.",
    img: "assets/img/chili_pepper.jpg"
  },
  eggplant: {
    category: "Fruiting Vegetables",
    companions: ["Beans", "Peas", "Marigold"],
    foes: ["Fennel"],
    details: "Eggplant benefits from beans and marigold.",
    img: "assets/img/eggplant.jpg"
  },
  cucumber: {
    category: "Fruiting Vegetables",
    companions: ["Beans", "Peas", "Radish", "Sunflower"],
    foes: ["Tomato", "Sage"],
    details: "Cucumbers grow well with beans and peas. Avoid tomatoes and sage.",
    img: "assets/img/cucumber.jpg"
  },
  zucchini: {
    category: "Fruiting Vegetables",
    companions: ["Borage", "Nasturtium", "Corn"],
    foes: ["Potato"],
    details: "Zucchini benefits from borage and nasturtium.",
    img: "assets/img/zucchini.jpg"
  },
  squash: {
    category: "Fruiting Vegetables",
    companions: ["Corn", "Beans", "Nasturtium"],
    foes: [],
    details: "Squash grows well with corn and beans.",
    img: "assets/img/squash.png"
  },
  okra: {
    category: "Fruiting Vegetables",
    companions: ["Peppers", "Melon"],
    foes: [],
    details: "Okra grows well with peppers and melon.",
    img: "assets/img/okra.jpg"
  },
  // Grains & Tall Plants
  corn: {
    category: "Grains & Tall Plants",
    companions: ["Beans", "Squash", "Sunflower"],
    foes: ["Tomato"],
    details: "Corn grows well with beans and squash.",
    img: "assets/img/corn.png"
  },
  sorghum: {
    category: "Grains & Tall Plants",
    companions: ["Peas", "Beans"],
    foes: [],
    details: "Sorghum benefits from peas and beans.",
    img: "assets/img/sorghum.jpg"
  },
  millet: {
    category: "Grains & Tall Plants",
    companions: ["Peas", "Beans"],
    foes: [],
    details: "Millet benefits from peas and beans.",
    img: "assets/img/millet.jpg"
  },
  // Root Vegetables
  carrot: {
    category: "Root Vegetables",
    companions: ["Lettuce", "Onion", "Tomato", "Peas"],
    foes: ["Dill"],
    details: "Carrots benefit from onions and peas.",
    img: "assets/img/carrot.png"
  },
  radish: {
    category: "Root Vegetables",
    companions: ["Carrot", "Lettuce", "Peas"],
    foes: [],
    details: "Radishes grow well with carrots and lettuce.",
    img: "assets/img/radish.jpg"
  },
  beetroot: {
    category: "Root Vegetables",
    companions: ["Onion", "Lettuce"],
    foes: [],
    details: "Beetroot benefits from onions and lettuce.",
    img: "assets/img/beetroot.jpg"
  },
  turnip: {
    category: "Root Vegetables",
    companions: ["Peas", "Onion"],
    foes: [],
    details: "Turnips grow well with peas and onions.",
    img: "assets/img/turnip.jpg"
  },
  potato: {
    category: "Root Vegetables",
    companions: ["Beans", "Corn"],
    foes: ["Tomato", "Cucumber"],
    details: "Potatoes benefit from beans and corn. Avoid tomatoes and cucumbers.",
    img: "assets/img/potato.png"
  },
  sweet_potato: {
    category: "Root Vegetables",
    companions: ["Beans", "Marigold"],
    foes: [],
    details: "Sweet potatoes grow well with beans and marigold.",
    img: "assets/img/sweet_potato.jpg"
  },
  onion: {
    category: "Root Vegetables",
    companions: ["Carrot", "Lettuce", "Strawberry"],
    foes: ["Peas"],
    details: "Onions deter pests for carrots. Avoid peas.",
    img: "assets/img/onion.png"
  },
  garlic: {
    category: "Root Vegetables",
    companions: ["Carrot", "Lettuce", "Strawberry"],
    foes: ["Peas"],
    details: "Garlic benefits carrots and lettuce. Avoid peas.",
    img: "assets/img/garlic.jpg"
  },
  // Legumes
  green_beans: {
    category: "Legumes",
    companions: ["Corn", "Squash", "Carrot"],
    foes: ["Onion", "Garlic"],
    details: "Green beans grow well with corn and squash.",
    img: "assets/img/green_beans.jpg"
  },
  peas: {
    category: "Legumes",
    companions: ["Carrot", "Radish", "Turnip"],
    foes: ["Onion", "Garlic"],
    details: "Peas benefit carrots and radishes.",
    img: "assets/img/peas.jpg"
  },
  soybeans: {
    category: "Legumes",
    companions: ["Corn", "Squash"],
    foes: [],
    details: "Soybeans grow well with corn and squash.",
    img: "assets/img/soybeans.jpg"
  },
  lentils: {
    category: "Legumes",
    companions: ["Carrot", "Radish"],
    foes: [],
    details: "Lentils benefit carrots and radishes.",
    img: "assets/img/lentils.jpg"
  },
  // Herbs
  basil: {
    category: "Herbs",
    companions: ["Tomato", "Peppers"],
    foes: ["Rue"],
    details: "Basil enhances the flavor of tomatoes.",
    img: "assets/img/basil.png"
  },
  mint: {
    category: "Herbs",
    companions: ["Cabbage", "Tomato"],
    foes: [],
    details: "Mint helps deter pests for cabbage and tomato.",
    img: "assets/img/mint.png"
  },
  parsley: {
    category: "Herbs",
    companions: ["Tomato", "Carrot"],
    foes: [],
    details: "Parsley benefits tomatoes and carrots.",
    img: "assets/img/parsley.png"
  },
  cilantro: {
    category: "Herbs",
    companions: ["Tomato", "Spinach"],
    foes: [],
    details: "Cilantro grows well with tomatoes and spinach.",
    img: "assets/img/cilantro.png"
  },
  dill: {
    category: "Herbs",
    companions: ["Cabbage", "Lettuce"],
    foes: ["Carrot"],
    details: "Dill can stunt carrot growth.",
    img: "assets/img/dill.png"
  },
  thyme: {
    category: "Herbs",
    companions: ["Cabbage", "Strawberry"],
    foes: [],
    details: "Thyme benefits cabbage and strawberries.",
    img: "assets/img/thyme.jpg"
  },
  oregano: {
    category: "Herbs",
    companions: ["Cabbage", "Tomato"],
    foes: [],
    details: "Oregano helps cabbage and tomato.",
    img: "assets/img/oregano.jpg"
  },
  sage: {
    category: "Herbs",
    companions: ["Cabbage", "Carrot"],
    foes: ["Cucumber"],
    details: "Sage benefits cabbage and carrots.",
    img: "assets/img/sage.jpg"
  },
  chives: {
    category: "Herbs",
    companions: ["Carrot", "Tomato"],
    foes: [],
    details: "Chives benefit carrots and tomatoes.",
    img: "assets/img/chives.jpg"
  },
  // Fruits (Small-Scale)
  strawberry: {
    category: "Fruits",
    companions: ["Spinach", "Lettuce", "Onion"],
    foes: [],
    details: "Strawberries grow well with spinach and lettuce.",
    img: "assets/img/strawberry.jpg"
  },
  melon: {
    category: "Fruits",
    companions: ["Corn", "Okra"],
    foes: [],
    details: "Melons benefit from corn and okra.",
    img: "assets/img/melon.jpg"
  },
  watermelon: {
    category: "Fruits",
    companions: ["Corn", "Nasturtium"],
    foes: [],
    details: "Watermelon grows well with corn and nasturtium.",
    img: "assets/img/watermelon.jpg"
  },
  raspberry: {
    category: "Fruits",
    companions: ["Garlic", "Chives"],
    foes: [],
    details: "Raspberries benefit from garlic and chives.",
    img: "assets/img/raspberry.jpg"
  },
  blueberry: {
    category: "Fruits",
    companions: ["Thyme", "Borage"],
    foes: [],
    details: "Blueberries grow well with thyme and borage (acidic soil needed).",
    img: "assets/img/blueberry.jpg"
  },
  // Companion Flowers
  marigold: {
    category: "Companion Flowers",
    companions: ["Tomato", "Squash", "Sweet Potato"],
    foes: [],
    details: "Marigolds help repel nematodes and other pests.",
    img: "assets/img/different types and colors of marigold.png"
  },
  nasturtium: {
    category: "Companion Flowers",
    companions: ["Squash", "Watermelon", "Zucchini"],
    foes: [],
    details: "Nasturtium deters pests and benefits squash and watermelon.",
    img: "assets/img/nasturtium.jpg"
  },
  sunflower: {
    category: "Companion Flowers",
    companions: ["Corn", "Cucumber"],
    foes: [],
    details: "Sunflowers attract pollinators and benefit corn and cucumber.",
    img: "assets/img/sunflower.jpg"
  },
  borage: {
    category: "Companion Flowers",
    companions: ["Tomato", "Strawberry", "Zucchini", "Blueberry"],
    foes: [],
    details: "Borage attracts pollinators and benefits tomatoes and strawberries.",
    img: "assets/img/borage.jpg"
  },
  // Collard Greens (added as requested)
  collard_greens: {
    category: "Ula",
    companions: ["Tomato", "Onion", "Mint"],
    foes: ["Strawberry"],
    details: "Collard greens grow well with tomato, onion, and mint.",
    img: "assets/img/collard_greens.jpg"
  }

    };

    const cropInput = document.getElementById("cropInput");
    const cropList = document.getElementById("cropList");
    for (let crop in cropData) {
      const opt = document.createElement("option");
      opt.value = crop.charAt(0).toUpperCase() + crop.slice(1);
      cropList.appendChild(opt);
    }

    cropInput.addEventListener("input", function () {
      const input = this.value.toLowerCase().trim();
      const suggestions = Object.keys(cropData).filter(crop => crop.includes(input));
      cropList.innerHTML = "";
      suggestions.forEach(crop => {
        const option = document.createElement("option");
        option.value = crop.charAt(0).toUpperCase() + crop.slice(1);
        cropList.appendChild(option);
      });
    });

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
      const list = array.map(item => {
        const crop = cropData[item.toLowerCase()];
        const img = crop ? `<img src='${crop.image}' class='crop-image'/>` : "";
        const score = cropData[main]?.companions?.includes(item) ? "⭐️⭐️⭐️⭐️⭐️" : "⭐️⭐️⭐️";
        return `<li>${img} ${item} (${score})</li>`;
      }).join('');
      resultDiv.innerHTML += `<div class='result-card'><strong>${title}</strong><ul>${list}</ul></div>`;
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
        const img = `<img src='${cropData[crop].image}' class='crop-image'/>`;
        const badge = `<span class='category-badge'>${cat}</span>`;
        showMessage("🌟 Crop Details", img + badge + " " + cropData[crop].details);
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