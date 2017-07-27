// variable for welcome card dissapearing
var welcomeTimer = 50;

function welcomeT() {
	setTimeout(fadeT, 1500);
}

function fadeT() {
	setInterval(reduceOpac, 250)
}

function reduceOpac() {
	var opacity = document.getElementById('welcomeHome').style.opacity;
	opacity = opacity - 12.5%;
}