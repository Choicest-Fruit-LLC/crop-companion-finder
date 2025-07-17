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
        // FIX: use crop.img instead of crop.image
        const img = (showImages && crop && crop.img) ? `<img src='${crop.img}' class='crop-image'/>` : "";
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

    // Save notes for the current crop
    document.getElementById('save-notes-btn').onclick = function() {
      const crop = getCurrentCropKey();
      if (crop && cropData[crop]) {
        localStorage.setItem('notes_' + crop, document.getElementById('user-notes').value);
        alert('Notes saved!');
      }
    };

    // Load from localStorage
    let cropHistory = JSON.parse(localStorage.getItem('cropHistory')) || [];
    let favoriteCrops = JSON.parse(localStorage.getItem('favoriteCrops')) || [];

    // Function to add crop to history
    function addToHistory(crop) {
      if (!cropHistory.includes(crop)) {
        cropHistory.unshift(crop);
        if (cropHistory.length > 10) cropHistory.pop(); // Keep last 10
        localStorage.setItem('cropHistory', JSON.stringify(cropHistory));
        renderHistory();
      }
    }

    // Function to add/remove favorite
    function toggleFavorite(crop) {
      if (favoriteCrops.includes(crop)) {
        favoriteCrops = favoriteCrops.filter(c => c !== crop);
      } else {
        favoriteCrops.push(crop);
      }
      localStorage.setItem('favoriteCrops', JSON.stringify(favoriteCrops));
      renderFavorites();
    }

    // Render functions
    function renderHistory() {
      const ul = document.getElementById('crop-history');
      ul.innerHTML = '';
      cropHistory.forEach(crop => {
        const li = document.createElement('li');
        li.textContent = crop;
        const favBtn = document.createElement('button');
        favBtn.textContent = favoriteCrops.includes(crop) ? '★' : '☆';
        favBtn.onclick = () => toggleFavorite(crop);
        li.appendChild(favBtn);
        ul.appendChild(li);
      });
    }

    function renderFavorites() {
      const ul = document.getElementById('favorite-crops');
      ul.innerHTML = '';
      favoriteCrops.forEach(crop => {
        const li = document.createElement('li');
        li.textContent = crop;
        ul.appendChild(li);
      });
    }

    function populateCropDatalist() {
      const datalist = document.getElementById('cropList');
      datalist.innerHTML = '';
      Object.keys(cropData).forEach(crop => {
        const option = document.createElement('option');
        option.value = crop.charAt(0).toUpperCase() + crop.slice(1);
        datalist.appendChild(option);
      });
    }

    function toggleActionButtons() {
      const crop = document.getElementById("cropInput").value.trim();
      document.getElementById("findCompanionsBtn").disabled = !crop;
      document.getElementById("findFoesBtn").disabled = !crop;
      document.getElementById("showDetailsBtn").disabled = !crop;
    }

    function showError(message) {
      const resultsDiv = document.getElementById("results");
      // Suggest valid crops
      const suggestions = Object.keys(cropData)
        .map(crop => crop.charAt(0).toUpperCase() + crop.slice(1))
        .join(', ');
      resultsDiv.innerHTML = `<div class='result-section' style="color:red;">
        <strong>${message}</strong><br>
        <small>Try: ${suggestions}</small>
      </div>`;
    }

    function updateFilterVisibility() {
      const filterCompanions = document.getElementById('filterCompanions').checked;
      const filterPollinators = document.getElementById('filterPollinators').checked;
      const cropBrowser = document.getElementById('cropBrowser');
      if (!filterCompanions && !filterPollinators) {
        cropBrowser.classList.add('hide-filters');
        document.getElementById('cropList').innerHTML = "";
      } else {
        cropBrowser.classList.remove('hide-filters');
      }
    }

    // Add a simple pollinator benefit flag to cropData for demonstration
// (You can expand this as needed)
const pollinatorCrops = [
  "marigold", "squash", "sunflower", "tomato", "borage", "nasturtium", "melon", "watermelon"
];

// List of categories
const cropCategories = [
  "Fruiting Vegetables",
  "Grains & Tall Plants",
  "Root Vegetables",
  "Legumes",
  "Herbs",
  "Fruits",
  "Companion Flowers",
  "Ula"
];

// Dynamically render category checkboxes (unchecked by default)
function renderCategoryFilters() {
  const filterDiv = document.getElementById('categoryFilters');
  filterDiv.innerHTML = cropCategories.map(cat =>
    `<label><input type="checkbox" class="category-filter" value="${cat}" /> ${cat}</label>`
  ).join('');
}

// Attach listeners for category checkboxes
function attachCategoryListeners() {
  document.querySelectorAll('.category-filter').forEach(cb => {
    cb.addEventListener('change', renderCropList);
  });
}

// Update renderCropList to include category filtering
function renderCropList() {
  const cropListDiv = document.getElementById('cropList');
  const cropBrowser = document.getElementById('cropBrowser');
  const checkedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value);
  const showCompanions = document.getElementById('filterCompanions').checked;
  const showPollinators = document.getElementById('filterPollinators').checked;

  let crops = Object.keys(cropData);

  // If no filters are selected, hide list
  if (checkedCategories.length === 0 && !showCompanions && !showPollinators) {
    cropBrowser.classList.add('hide-list');
    cropListDiv.innerHTML = "";
    return;
  } else {
    cropBrowser.classList.remove('hide-list');
  }

  // Filter by category if any selected
  if (checkedCategories.length > 0) {
    crops = crops.filter(crop => checkedCategories.includes(cropData[crop].category));
  }

  // If companions or pollinators are checked, further filter the crops
  if (showCompanions) {
    crops = crops.filter(crop => cropData[crop].companions && cropData[crop].companions.length > 2);
  }
  if (showPollinators) {
    crops = crops.filter(crop => pollinatorCrops.includes(crop));
  }

  if (crops.length === 0) {
    cropListDiv.innerHTML = "<em>No crops match your filters.</em>";
    return;
  }

  cropListDiv.innerHTML = `<ul class="styled-crop-list">${crops.map(crop =>
    `<li class="styled-crop-item">
      <span class="styled-crop-name">${crop.charAt(0).toUpperCase() + crop.slice(1).replace(/_/g, ' ')}</span>
      <span class="styled-crop-desc">${cropData[crop].details}</span>
      <span class="styled-crop-category">${cropData[crop].category}</span>
    </li>`
  ).join('')}</ul>`;
}

// Attach listeners for all filters
document.getElementById('filterCompanions').addEventListener('change', renderCropList);
document.getElementById('filterPollinators').addEventListener('change', renderCropList);
// On page load, render category filters and crop list
window.addEventListener('DOMContentLoaded', () => {
  renderCategoryFilters();
  attachCategoryListeners();
  renderCropList();
});

    // Call these after a search
    // addToHistory(searchedCrop);

    // On page load
    window.onload = function() {
      renderHistory();
      populateCropDatalist();
      document.getElementById("cropInput").focus();
      loadNotesForCrop();
    };

    document.getElementById("cropInput").addEventListener("input", function() {
      if (!this.value.trim()) {
        document.getElementById("results").innerHTML = "";
        document.getElementById('notes-section').style.display = 'none';
      }
    });

    document.getElementById("cropInput").addEventListener("input", toggleActionButtons);
    document.getElementById('cropInput').addEventListener('input', loadNotesForCrop);

    // Theme switching logic
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
const root = document.documentElement;

function setTheme(dark) {
  if (dark) {
    document.documentElement.classList.add('dark-theme');
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '☀️ Switch to Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-theme');
    document.body.classList.remove('dark-theme');
    themeToggle.textContent = '🌙 Switch to Dark Mode';
    localStorage.setItem('theme', 'light');
  }
}

themeToggle.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark-theme'));
});

// On load: set theme from localStorage or system preference
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  setTheme(true);
} else {
  setTheme(false);
}
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