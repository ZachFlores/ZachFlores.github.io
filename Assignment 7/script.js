const changeColor = () => {
    document.getElementById("image1");
    

};

document.getElementById("image1").onclick = changeColor;

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {

};

const addStar = () => {
    
    const div = document.getElementById("col3");

    const starry = document.createElement("section");
    div.append(starry);
    starry.classList.add("star");
    ball.style.background = color;

};


document.getElementById("col3").onclick = addStar;

