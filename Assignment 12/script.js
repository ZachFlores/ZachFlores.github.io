const getInfo = async () => {
    try {
        const response = await fetch('https://portiaportia.github.io/json/house-plans.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        const houseContainer = document.getElementById('houseContainer');

        data.forEach(house => {
            const houseContainerDiv = document.createElement('div'); 
            houseContainerDiv.classList.add('house-container');

            const houseElement = document.createElement('div');
            houseElement.classList.add('house');

            const heading = document.createElement('h2');
            heading.classList.add('heading');
            heading.textContent = house.name;

            const coloredDiv = document.createElement('div');
            coloredDiv.classList.add('colored-div');

            const mainImage = document.createElement('img');
            mainImage.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;

            const houseInfo = document.createElement('div');
            houseInfo.classList.add('house-info');
            houseInfo.innerHTML = `
                <p><strong>Size:</strong> ${house.size}</p>
                <p><strong>Bedrooms:</strong> ${house.bedrooms}</p>
                <p><strong>Bathrooms:</strong> ${house.bathrooms}</p>
                <p><strong>Features:</strong> ${house.features.join(', ')}</p>
            `;

            coloredDiv.appendChild(mainImage);
            coloredDiv.appendChild(houseInfo);

            houseElement.appendChild(heading);
            houseElement.appendChild(coloredDiv);

            houseContainerDiv.appendChild(houseElement); 

            if (house.floor_plans && house.floor_plans.length > 0) {
                const floorPlansDiv = document.createElement('div');
                floorPlansDiv.classList.add('floor-plans-container');

                house.floor_plans.forEach(floorPlan => {
                    const floorPlanElement = document.createElement('div');
                    floorPlanElement.classList.add('floor-plan');

                    const floorPlanHeading = document.createElement('h3');
                    floorPlanHeading.textContent = floorPlan.name;

                    const floorPlanImage = document.createElement('img');
                    floorPlanImage.src = `https://portiaportia.github.io/json/images/house-plans/${floorPlan.image}`;

                    floorPlanElement.appendChild(floorPlanHeading);
                    floorPlanElement.appendChild(floorPlanImage);

                    floorPlansDiv.appendChild(floorPlanElement);
                });

                houseContainerDiv.appendChild(floorPlansDiv); 
            }

            houseContainer.appendChild(houseContainerDiv);
        });
    } catch (error) {
        console.error('Error fetching JSON: ', error);
    }
};

getInfo();
