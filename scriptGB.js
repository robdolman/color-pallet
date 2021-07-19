
var css = document.querrySelector("h3");
var color1 = document.querrySelector(".color1");
var color2 = document.querrySelector(".color2");
var body = document.getElementById("gradient")

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	 + color1.value + ", " + color2.value + ")";

	 css.textContent = bodu.style.background + ";";
}

// This is the code before the function above is created to adhere to D.R.Y.
// color1.addEventListner("input", function() {
// 	body.style.background = "linear-gradient(to right, "
// 	 + color1.value + ", " + color2.value + ")";
// })

// color2.addEventListner("input", function() {
// 	body.style.background = "linear-gradient(to right, "
// 	 + color1.value + ", " + color2.value + ")";
// })

color1.addEventListner("input", setGradient);

color2.addEventListner("input", setGradient);

