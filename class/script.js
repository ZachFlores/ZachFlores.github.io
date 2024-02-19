const imageList = document.getElementById('imageList');

// Loop through each image and add onclick event listener
const images = imageList.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const description = document.createElement('div');
    description.textContent = image.getAttribute('data-description');
    description.className = 'description';
    image.parentNode.insertBefore(description, image.nextSibling);

    // Hide the description initially
    description.style.display = 'none';

    // Add onclick event listener to show/hide description
    image.onclick = () => {
        if (description.style.display === 'none') {
            description.style.display = 'inline-block';
        } else {
            description.style.display = 'none';
        }
    };
}