const toggleHamburger = () => {
  document.getElementById("nav-items").classList.toggle("hide");
};

window.onload = () => {
  document.getElementById("hamburger").onclick = toggleHamburger;
};

const submitReviewForm = async (e) => {
  e.preventDefault(); 

  const formData = new FormData(e.target); 

  try {
    const response = await fetch(e.target.action, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to submit review form");
    }

    const data = await response.json();

    console.log("Review form submitted successfully:", data);

    e.target.reset();

    const successMessage = document.createElement('p');
    successMessage.textContent = 'Review form submitted successfully';
    e.target.parentNode.appendChild(successMessage);

   
    setTimeout(() => {
      successMessage.remove();
    }, 2000);

    displayReview(formData.get('name'), formData.get('review'));
  } catch (error) {
    console.error("Error submitting review form:", error.message);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Failed to submit review form';
    e.target.parentNode.appendChild(errorMessage);

    setTimeout(() => {
      errorMessage.remove();
    }, 2000);
  }
};

const displayReview = (name, review) => {
  const reviewContainer = document.getElementById("review-container");
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewElement.innerHTML = `
    <h4>${name}:</h4>
    <p>${review}</p>
  `;
  reviewContainer.appendChild(reviewElement);
};

document.getElementById("review-form").onsubmit(submitReviewForm);
