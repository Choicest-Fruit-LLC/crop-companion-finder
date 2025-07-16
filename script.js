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


function getCropThumbnail(cropName) {
  const crop = cropData[cropName.toLowerCase()];
  if (crop && crop.img) {
    return `<img src='${crop.img}' alt='${cropName}' class='crop-thumb' style='width:40px;height:40px;object-fit:cover;border-radius:6px;margin-right:8px;'>`;
  }
  return "";
}

function displayResults(title, list) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<div class='result-section'><h3>${title}</h3><ul>${list.map(item => {
    const thumb = getCropThumbnail(item);
    return `<li style='display:flex;align-items:center;'>${thumb}<span>${item}</span></li>`;
  }).join('')}</ul></div>`;
}

function findCompanions() {
  const crop = getInputCrop();
  const resultsDiv = document.getElementById("results");
  if (cropData[crop]) {
    // Show main crop thumbnail
    const mainThumb = getCropThumbnail(crop);
    resultsDiv.innerHTML = `<div style='display:flex;align-items:center;margin-bottom:10px;'>${mainThumb}<span style='font-size:1.2em;font-weight:bold;'>${crop.charAt(0).toUpperCase() + crop.slice(1)}</span></div>`;
    // Show companions
    displayResults("Companion Crops", cropData[crop].companions);
  } else {
    alert("Crop not found in database.");
  }
}

function findFoes() {
  const crop = getInputCrop();
  const resultsDiv = document.getElementById("results");
  if (cropData[crop]) {
    // Show main crop thumbnail
    const mainThumb = getCropThumbnail(crop);
    resultsDiv.innerHTML = `<div style='display:flex;align-items:center;margin-bottom:10px;'>${mainThumb}<span style='font-size:1.2em;font-weight:bold;'>${crop.charAt(0).toUpperCase() + crop.slice(1)}</span></div>`;
    // Show foes
    displayResults("Foe Crops", cropData[crop].foes);
  } else {
    alert("Crop not found in database.");
  }
}

function showDetails() {
  const crop = getInputCrop();
  const resultsDiv = document.getElementById("results");
  if (cropData[crop]) {
    const mainThumb = getCropThumbnail(crop);
    resultsDiv.innerHTML = `<div style='display:flex;align-items:center;margin-bottom:10px;'>${mainThumb}<span style='font-size:1.2em;font-weight:bold;'>${crop.charAt(0).toUpperCase() + crop.slice(1)}</span></div>` +
      `<div class='result-section'><h3>Main Crop Details</h3><p>${cropData[crop].details}</p></div>`;
  } else {
    alert("Crop not found in database.");
  }
}

    function closeModal() {
      document.getElementById('descriptionModal').style.display = 'none';
      document.getElementById('appContainer').style.display = 'block';
      document.getElementById('mainTitle').style.display = 'block';
    }