const updateThermometer = () => {
    const goal = 1000;
    const funds = document.getElementById("txt-funds").value;
    const errorSpan = document.getElementById("funds-error");
    errorSpan.innerHTML = "";
    const therm = document.getElementById("thermometer");
    document.querySelector(":root").style.setProperty("--funds, 0%");

    if (isNaN(funds)) {
        errorSpan.innerHTML = "* Not a valid number";
        
    }
    else if(funds < 0) {
        errorSpan.innerHTML = "* Negative number";
    }

    const percent = funds / goal;
    document.querySelector(":root").style.setProperty("--funds", percent + "%");
};

const evalForm = (e) => {
    e.preventDefault();

};

document.getElementById("btn-cont").onclick = updateThermometer;
document.getElementById("my-form").onsubmit = evalForm;