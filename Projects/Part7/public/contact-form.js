const toggleHamburger = () => {
  document.getElementById("nav-items").classList.toggle("hide");
};

window.onload = () => {
  document.getElementById("hamburger").onclick = toggleHamburger;
};

const submitContactForm = async (event) => {
  event.preventDefault(); 

  const formData = new FormData(event.target); 
  
  try {
    const response = await fetch(event.target.action, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    const data = await response.json();

    console.log("Contact form submitted successfully:", data);

    event.target.reset();

    const successMessage = document.createElement('p');
    successMessage.textContent = 'Contact form submitted successfully';
    event.target.appendChild(successMessage);

    setTimeout(() => {
      successMessage.remove();
    }, 2000);
  } catch (error) {
    console.error("Error submitting contact form:", error.message);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Failed to submit contact form';
    event.target.appendChild(errorMessage);

    setTimeout(() => {
      errorMessage.remove();
    }, 2000);
  }
};

document.getElementById("contact-form").onsubmit = submitContactForm;
