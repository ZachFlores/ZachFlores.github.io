const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
    displayServiceList();
  };
  
  const getAttractions = async () => {
    const url = "data.json";
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const displayServiceList = async () => {
    const serviceListDiv = document.getElementById("service-list");
    const attractions = await getAttractions();
  
    attractions.forEach(attraction => {
      const serviceItem = document.createElement("div");
      serviceItem.classList.add("service-item");
  
      serviceItem.innerHTML = `
        <img src="images/${attraction.img_name}" alt="${attraction.title}">
        <h3>${attraction.title}</h3>
        <p>${attraction.description}</p>
        <ul>
          ${attraction.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <p><strong>Price:</strong> ${attraction.price}</p>
      `;
  
      serviceListDiv.appendChild(serviceItem);
    });
  };
  