let isBouncing = false;
let intervalId = null; 

const startBouncing = () => {
    const ball = document.getElementById('ball');
    const sectionHeight = document.getElementById('ballcolumn').offsetHeight - ball.offsetHeight;
    let position = 0;
    
    if (!isBouncing) {
        isBouncing = true;
        let direction = 1;

        intervalId = setInterval(() => {
            if (position >= sectionHeight) {
                direction = -1;
            } else if (position <= 0) {
                direction = 1;
            }

            position += direction * 5; 
            ball.style.setProperty('--ball-top', position + 'px'); 
        }, 20); 
    } else {
        clearInterval(intervalId); 
        isBouncing = false;
    }
};



const imageList = document.getElementById('imageList');

const descriptions = [
    "Downward dog",
    "Leg stretch",
    "Ballerina",
    "Hand up",
    "Twist",
    "Cartwheel",
    "Sway",
    "Okay get it"
    
];

const images = imageList.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    const description = document.createElement('div');
    description.textContent = descriptions[i];
    description.className = 'description';
    description.style.display = 'none'; 
    images[i].parentNode.insertBefore(description, images[i].nextSibling);

    images[i].onclick = () => {
        const currentDisplay = description.style.display;
        description.style.display = currentDisplay === 'none' ? 'inline-block' : 'none';
    };
}

document.getElementById("start").onclick = startBouncing;

