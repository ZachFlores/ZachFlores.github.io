const ex1 = document.getElementById("ex1");
const ex2 = document.getElementById("ex2");
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");

selectEx1 = () => {
    col1.classList.add("visible");
    col2.classList.remove("visible");
};

selectEx2 = () => {
    col2.classList.add("visible");
    col1.classList.remove("visible");
};
document.getElementById("ex1").onclick = selectEx1;
document.getElementById("ex2").onclick = selectEx2;

   



const changeImage = () => {
const image = document.getElementById("image");
const input = document.getElementById("input");
const text = input.value.toLowerCase();
   
    let imagePath;
    if (text === "w") {
        imagePath = "Images/work.jpg";
      } else if (text === "p") {
        imagePath = "Images/birthday.jpg";
      } else if (text === "c") {
        imagePath = "Images/clown.jpg";
      } else if (text === "s") {
        imagePath = "Images/shovel.jpg";
      } else if (text === "r") {
        imagePath = "Images/rain.jpg";
      } else if (text === "b") {
        imagePath = "Images/read.jpg";
      } else {
        imagePath = "Images/original.jpg";
      }
      image.src = imagePath;
    }
const yogaSlide = () => {
const slider = document.getElementById("slide");
const yoga = document.getElementById("yoga");
const sliderValue = slider.value;

switch (sliderValue) {
    case "1": 
        yoga.src = "Images/yoga1.jpg";
        break;
    case "2":
        yoga.src = "Images/yoga2.jpg";
        break;
    case "3":
        yoga.src = "Images/yoga3.jpg";
        break;
    case "4":
        yoga.src = "Images/yoga4.jpg";
        break;
    case "5":
        yoga.src = "Images/yoga5.jpg";
        break;
    case "6":
        yoga.src = "Images/yoga6.jpg";
        break;
    case "7":
        yoga.src = "Images/yoga7.jpg";
        break;
    case "8":
        yoga.src = "Images/yoga8.jpg";
        break;
    default:
        yoga.src = "Images/yoga4.jpeg";
}

}

document.getElementById("input").oninput = changeImage;
document.getElementById("slide").oninput = yogaSlide;

