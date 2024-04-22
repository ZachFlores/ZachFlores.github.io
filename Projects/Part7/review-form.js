// review-form.js
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
    const name = formData.get("name");
    const review = formData.get("review");

    if (!name || !review) {
      throw new Error("Name and Review are required");
    }

    const response = await fetch("https://zachflores-github-io-2.onrender.com/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        review,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit review form");
    }

    const data = await response.json();

    console.log("Review form submitted successfully:", data);

    e.target.reset();

    const successMessage = document.createElement("p");
    successMessage.textContent = "Review form submitted successfully";
    e.target.parentNode.appendChild(successMessage);

    setTimeout(() => {
      successMessage.remove();
    }, 2000);

    displayReviews();
  } catch (error) {
    console.error("Error submitting review form:", error.message);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = error.message;
    e.target.parentNode.appendChild(errorMessage);

    setTimeout(() => {
      errorMessage.remove();
    }, 2000);
  }
};

const deleteReview = async (id) => {
  try {
    const response = await fetch(`https://zachflores-github-io-2.onrender.com/api/reviews/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete review");
    }

    console.log("Review deleted successfully");

    displayReviews();
  } catch (error) {
    console.error("Error deleting review:", error.message);
  }
};

const displayReviews = async () => {
  try {
    const response = await fetch("https://zachflores-github-io-2.onrender.com/api/reviews");
    const reviews = await response.json();

    const reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = "";

    reviews.forEach((review) => {
      const reviewElement = document.createElement("div");
      reviewElement.classList.add("review");
      reviewElement.innerHTML = `
        <h4>${review.name}: <a href="#" class="delete-review" data-id="${review._id}">&#10005;</a></h4>
        <p>${review.review}</p>
      `;
      reviewContainer.appendChild(reviewElement);
    });

    const deleteButtons = document.querySelectorAll(".delete-review");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const reviewId = e.target.dataset.id;
        deleteReview(reviewId);
      });
    });
  } catch (error) {
    console.error("Error fetching reviews:", error.message);
  }
};

document.getElementById("review-form").addEventListener("submit", submitReviewForm);
displayReviews();
