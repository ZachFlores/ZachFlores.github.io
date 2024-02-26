document.addEventListener("DOMContentLoaded", function() {
    const advertisements = [
        "Beautiful Realistic Art!",
        "Unbeliveable Details!",
        "Breathtaking Views!",
        "Stunning Features!",
        "Unique and Diverse Coloring!"
    ];

    const advertisementElement = document.querySelector('.advertisement');
    let index = 0;

    advertisementElement.textContent = advertisements[index];

    setInterval(function() {
        index = (index + 1) % advertisements.length;
        advertisementElement.textContent = advertisements[index];
    }, 2000);

    const imageGallery = document.querySelector('.image-gallery');
    
    const imageAttributions = [
        { src: 'Images/mountain-lake.jpg', attribution: 'Image by vecstock on Freepik', link: 'https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7' },
        { src: 'Images/golden.jpg', attribution: 'Image by wirestock on Freepik', link: 'https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4' },
        { src: 'Images/garden.jpg', attribution: 'Image by wirestock on Freepik', link: 'https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4' },
        { src: 'Images/small-house.jpg', attribution: 'Image by wirestock on Freepik', link: 'https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4' },
        { src: 'Images/snow.jpg', attribution: 'Image by wirestock on Freepik', link: 'https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4' }
    ];

    imageAttributions.forEach(item => {
        const image = document.createElement('img');
        image.src = item.src;
        image.alt = item.attribution;
        image.style.margin = '10px auto'; 
        imageGallery.appendChild(image);

        const attribution = document.createElement('p');
        attribution.style.margin = '5px auto'; 
        imageGallery.appendChild(attribution);

        const link = document.createElement('a');
        link.href = item.link;
        link.target = '_blank'; 
        link.textContent = item.attribution;
        link.style.display = 'inline-block';
        link.style.color = 'inherit'; 
        link.style.cursor = 'pointer'; 
        attribution.appendChild(link);
    });
});
