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
      } else {
        alert("Crop not found in database.");
      }
    }

    function findFoes() {
      const crop = getInputCrop();
      if (cropData[crop]) {
        displayResults("Foe Crops", cropData[crop].foes);
      } else {
        alert("Crop not found in database.");
      }
    }

    function showDetails() {
      const crop = getInputCrop();
      const resultsDiv = document.getElementById("results");
      if (cropData[crop]) {
        resultsDiv.innerHTML = `<div class='result-section'><h3>Main Crop Details</h3><p>${cropData[crop].details}</p></div>`;
      } else {
        alert("Crop not found in database.");
      }
    }

    function closeModal() {
      document.getElementById('descriptionModal').style.display = 'none';
      document.getElementById('appContainer').style.display = 'block';
      document.getElementById('mainTitle').style.display = 'block';
    }