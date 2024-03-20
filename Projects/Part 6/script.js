const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
    displayServiceList();
  };
  
  const getServices = async () => {
    const url = "JSON/cyber.json";
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const displayServiceList = async () => {
    const services = await getServices();
  
    if (!services) {
      console.error("Error fetching services data.");
      return;
    }
  
    const serviceListHTML = services.map(service => `
      <div class="service-item">
        <img src="images/${service.img_name}" alt="${service.title}">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <ul>
          ${service.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <p><strong>Price:</strong> ${service.price}</p>
      </div>
    `).join('');
  
    document.getElementById("service-list").innerHTML = serviceListHTML;
  };
  