// Initial Setup
var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// create a mouse object to get the x and y values of the mouse
var mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2
};

var colors = [
	'#2185C5', 
	'#7ECEFD', 
	'#FFF6E5', 
	'#FF7F66'
];

var gravity = 1;
var friction = 0.9;

// Event listeners
addEventListener('mousemove', function(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener('resize', function ()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;	
});

// Utility Functions
function randomIntFromRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() *
		colors.length)];
}

// Objects
function Object(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;	
	this.color = color;
	this.update = function() {
		
		this.draw();
	};
 	
	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);		
		c.fillStyle = this.color;
		c.fill();
		c.stroke();
		c.closePath();
	};	
}

function init() {
	
};

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height
		);
}

init();
animate();