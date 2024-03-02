class Tree {
    constructor(name, image) {
      this.name = name;
      this.image = image;
    }
  
    getSection() {
      return `
        <div class="tree" onclick="openModal('${this.name}', '${this.image}')">
          <h3>${this.name}</h3>
          <img src="Images/${this.image}">
        </div>
      `;
    }
  }
  
  const trees = [
    new Tree("Red Maple", "/maple.jpg"),
    new Tree("Bald Cypress", "cypress.jpg"),
    new Tree("Japanese flowering cherry", "cherry.jpg"),
    new Tree("Palmetto", "palmetto.jpg")
  ];
  
  function displayTrees() {
    const treeContainer = document.getElementById("treeContainer");
    trees.forEach(tree => {
      treeContainer.innerHTML += tree.getSection();
    });
  }
  
  displayTrees();
  
  const modal = document.getElementById("myModal");
  
  function openModal(name, image) {
    const modalContent = modal.querySelector(".modal-content");
   //Harvard youtube video: https://www.youtube.com/watch?v=LfaMVlDaQ24&t=72062s
    let treeInfo;
    switch (name) {
      case "Red Maple":
        treeInfo = {
          type: "Deciduous",
          growthRate: "Medium",
          height: "20-30 meters",
          lifespan: "100 years",
          habitat: "Temperate forests"
        };
        break;
      case "Bald Cypress":
        treeInfo = {
          type: "Deciduous conifer",
          growthRate: "Fast",
          height: "30-40 meters",
          lifespan: "600 years",
          habitat: "Swamps and wetlands"
        };
        break;
      case "Japanese flowering cherry":
        treeInfo = {
          type: "Deciduous",
          growthRate: "Medium",
          height: "15-25 meters",
          lifespan: "15-25 years",
          habitat: "Temperate forests"
        };
        break;
      case "Palmetto":
        treeInfo = {
          type: "Palm",
          growthRate: "Slow",
          height: "3-10 meters",
          lifespan: "Unknown",
          habitat: "Coastal areas"
        };
        break;
      default:
        treeInfo = {};
    }

    const treeDescriptions = {
        "Red Maple": "The Red Maple, also known as Acer rubrum, is a deciduous tree native to eastern North America. It is renowned for its vibrant red foliage in the fall, making it a popular choice for landscaping.",
        "Bald Cypress": "The Bald Cypress, scientifically known as Taxodium distichum, is a deciduous conifer native to the southeastern United States. It is well-adapted to wet environments and is often found in swamps and wetlands.",
        "Japanese flowering cherry": "The Japanese flowering cherry, or Prunus serrulata, is a deciduous tree native to Japan. It is prized for its beautiful pink or white blossoms that cover the tree in spring, making it a favorite in gardens and parks.",
        "Palmetto": "The Palmetto, also known as Sabal palmetto, is a species of palm native to the southeastern United States. It is characterized by its fan-shaped leaves and is commonly found in coastal areas."
      };
  
    const leftColumnContent = `
      <h2 id="treeHead">${name}</h2>
      <div class="tree-info">
        <div>
          <h4>Type:</h4><p>${treeInfo.type}</p>
          <h4>Growth Rate:</h4><p>${treeInfo.growthRate}</p>
        </div>
        <div>
          <h4>Height:</h4><p>${treeInfo.height}</p>
          <h4>Lifespan:</h4><p>${treeInfo.lifespan}</p>
          <h4>Habitat:</h4><p>${treeInfo.habitat}</p>
        </div>
      </div>
      <p>${treeDescriptions[name]}</p>
    `;
    
    const rightColumnContent = `
      <img src="images/${image}">
    `;
    
    const modalContentHTML = `
      <span class="close" id="closeModal">&times;</span>
      <div class="modal-columns">
        <div class="modal-left-column">${leftColumnContent}</div>
        <div class="modal-right-column">${rightColumnContent}</div>
      </div>
    `;
  
    modalContent.innerHTML = modalContentHTML;
    
    modal.style.display = "block";
  }
  
  const closeModal = () => {
    modal.style.display = "none";
  };
  
  window.onclick = event => {
    if (event.target == modal) {
      closeModal();
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeModal");
    if (closeBtn) {
      close.onclick = () => {
        closeModal();
      };
    }
    
    const modalCloseBtn = modal.querySelector(".close");
    if (modalCloseBtn) {
      modalCloseBtn.onclick = () => {
        closeModal();
      };
    }
  });
