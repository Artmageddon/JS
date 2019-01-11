function drawToCanvas() {
	var canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var c = canvas.getContext('2d');
	x = 100;
	y = 100;
	
	c.fillRect(x, y, x, y);
	console.log(canvas);
}