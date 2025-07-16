const cropData = {
      tomato: {
        companions: ["Basil", "Marigold", "Carrot"],
        foes: ["Corn", "Potato"],
        details: "Tomatoes are rich in antioxidants and vitamins. They grow well with basil which helps repel pests."
      },
      corn: {
        companions: ["Beans", "Squash"],
        foes: ["Tomato"],
        details: "Corn provides vertical structure and grows well with beans and squash as part of the Three Sisters."
      },
      carrot: {
        companions: ["Lettuce", "Onion", "Tomato"],
        foes: ["Dill"],
        details: "Carrots are root vegetables and benefit from being planted with onions to deter pests."
      },
      basil: {
        companions: ["Tomato", "Peppers"],
        foes: ["Rue"],
        details: "Basil enhances the flavor of tomatoes and repels insects."
      },
    };

    function getInputCrop() {
      return document.getElementById("cropInput").value.trim().toLowerCase();
    }

    function displayResults(title, list) {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = `<div class='result-section'><h3>${title}</h3><ul>${list.map(item => `<li>${item}</li>`).join('')}</ul></div>`;
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

    function findCompanions() {
      const crop = getInputCrop();
      if (!crop) {
        showError("Please enter a crop name.");
        document.getElementById('notes-section').style.display = 'none';
        return;
      }
      if (cropData[crop]) {
        displayResults("Companion Crops", cropData[crop].companions);
        addToHistory(crop);
        showNotesSection(crop);
      } else {
        showError("Crop not found in database.");
        document.getElementById('notes-section').style.display = 'none';
      }
    }

    function findFoes() {
      const crop = getInputCrop();
      if (cropData[crop]) {
        displayResults("Foe Crops", cropData[crop].foes);
        showNotesSection(crop);
      } else {
        showError("Crop not found in database.");
        document.getElementById('notes-section').style.display = 'none';
      }
    }

    function showDetails() {
      const crop = getInputCrop();
      const resultsDiv = document.getElementById("results");
      if (cropData[crop]) {
        resultsDiv.innerHTML = `<div class='result-section'><h3>Main Crop Details</h3><p>${cropData[crop].details}</p></div>`;
        showNotesSection(crop);
      } else {
        showError("Crop not found in database.");
        document.getElementById('notes-section').style.display = 'none';
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

    // Call these after a search
    // addToHistory(searchedCrop);

    // On page load
    window.onload = function() {
      renderHistory();
      renderFavorites();
      populateCropDatalist();
      document.getElementById("cropInput").focus();
      toggleActionButtons();
    };

    document.getElementById("cropInput").addEventListener("input", function() {
      if (!this.value.trim()) {
        document.getElementById("results").innerHTML = "";
        document.getElementById('notes-section').style.display = 'none';
      }
    });

    document.getElementById("cropInput").addEventListener("input", toggleActionButtons);