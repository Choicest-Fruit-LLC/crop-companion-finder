const cropData = {
      tomato: {
        companions: ["Basil", "Marigold", "Carrot"],
        foes: ["Corn", "Potato"],
        details: "Tomatoes are rich in antioxidants and vitamins. They grow well with basil which helps repel pests.",
        img: "assets/img/pexels-elina-araja-1743227-3377405.jpg"
      },
      corn: {
        companions: ["Beans", "Squash"],
        foes: ["Tomato"],
        details: "Corn provides vertical structure and grows well with beans and squash as part of the Three Sisters.",
        img: "assets/img/corn.jpg"
      },
      carrot: {
        companions: ["Lettuce", "Onion", "Tomato"],
        foes: ["Dill"],
        details: "Carrots are root vegetables and benefit from being planted with onions to deter pests.",
        img: "assets/img/carrot.jpg"
      },
      basil: {
        companions: ["Tomato", "Peppers"],
        foes: ["Rue"],
        details: "Basil enhances the flavor of tomatoes and repels insects.",
        img: "assets/img/basil.jpg"
      },
      marigold: {
        companions: ["Tomato"],
        foes: [],
        details: "Marigolds help repel nematodes and other pests.",
        img: "assets/img/marigold.jpg"
      },
      beans: {
        companions: ["Corn", "Squash"],
        foes: [],
        details: "Beans fix nitrogen in the soil and grow well with corn and squash.",
        img: "assets/img/beans.jpg"
      },
      squash: {
        companions: ["Corn", "Beans"],
        foes: [],
        details: "Squash provides ground cover and grows well with corn and beans.",
        img: "assets/img/squash.jpg"
      },
      lettuce: {
        companions: ["Carrot"],
        foes: [],
        details: "Lettuce grows well with carrots and helps shade the soil.",
        img: "assets/img/lettuce.jpg"
      },
      onion: {
        companions: ["Carrot"],
        foes: [],
        details: "Onions deter pests for carrots.",
        img: "assets/img/onion.jpg"
      },
      peppers: {
        companions: ["Basil"],
        foes: [],
        details: "Peppers benefit from basil as a companion.",
        img: "assets/img/peppers.jpg"
      },
      potato: {
        companions: [],
        foes: ["Tomato"],
        details: "Potatoes should not be planted near tomatoes.",
        img: "assets/img/potato.jpg"
      },
      dill: {
        companions: [],
        foes: ["Carrot"],
        details: "Dill can stunt carrot growth.",
        img: "assets/img/dill.jpg"
      },
      rue: {
        companions: [],
        foes: ["Basil"],
        details: "Rue is not a good companion for basil.",
        img: "assets/img/rue.jpg"
      }
  };

    function getInputCrop() {
      return document.getElementById("cropInput").value.toLowerCase().trim();
    }

    function displayResults(title, list) {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = `<div class='result-section'><h3>${title}</h3><ul>${list.map(item => `<li>${item}</li>`).join('')}</ul></div>`;
    }

    function findCompanions() {
      const crop = getInputCrop();
      if (cropData[crop]) {
        displayResults("Companion Crops", cropData[crop].companions);
        addToHistory(crop);
        loadNotesForCrop();
      } else {
        showError("Crop not found in database.");
        loadNotesForCrop();
      }
    }

    function findFoes() {
      const crop = getInputCrop();
      if (cropData[crop]) {
        displayResults("Foe Crops", cropData[crop].foes);
        addToHistory(crop);
        loadNotesForCrop();
      } else {
        alert("Crop not found in database.");
        loadNotesForCrop();
      }
    }

    function showDetails() {
      const crop = getInputCrop();
      const resultsDiv = document.getElementById("results");
      if (cropData[crop]) {
        resultsDiv.innerHTML = `<div class='result-section'><h3>Main Crop Details</h3><p>${cropData[crop].details}</p></div>`;
        addToHistory(crop);
        loadNotesForCrop();
      } else {
        alert("Crop not found in database.");
        loadNotesForCrop();
      }
    }

    function closeModal() {
      document.getElementById('descriptionModal').style.display = 'none';
      document.getElementById('appContainer').style.display = 'block';
      document.getElementById('mainTitle').style.display = 'block';
    }

    function showNotesSection(crop) {
      const notesSection = document.getElementById('notes-section');
      const notesTextarea = document.getElementById('user-notes');
      notesSection.style.display = 'block';
      // Load saved note for this crop
      const savedNotes = localStorage.getItem('notes_' + crop) || '';
      notesTextarea.value = savedNotes;
      // Save button event
      document.getElementById('save-notes-btn').onclick = function() {
        localStorage.setItem('notes_' + crop, notesTextarea.value);
        alert('Notes saved!');
      };
    }

    function getCurrentCropKey() {
      // Get the normalized crop name from input
      return document.getElementById("cropInput").value.toLowerCase().trim();
    }

    // Load notes when a crop is selected/searched
    function loadNotesForCrop() {
      const crop = getCurrentCropKey();
      const notesTextarea = document.getElementById('user-notes');
      if (crop && cropData[crop]) {
        notesTextarea.value = localStorage.getItem('notes_' + crop) || '';
        notesTextarea.disabled = false;
        document.getElementById('save-notes-btn').disabled = false;
      } else {
        notesTextarea.value = '';
        notesTextarea.disabled = true;
        document.getElementById('save-notes-btn').disabled = true;
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

    // Call these after a search
    // addToHistory(searchedCrop);

    // On page load
    window.onload = function() {
      renderHistory();
      renderFavorites();
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