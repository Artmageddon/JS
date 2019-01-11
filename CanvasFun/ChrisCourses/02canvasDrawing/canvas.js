function drawToCanvas() {
	var canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var c = canvas.getContext('2d');
	x = 100;
	y = 100;
	
	c.fillStyle = "rgba(255, 0, 0, 0.5)";
	c.fillRect(100, 100, 100, 100);
	c.fillStyle = "rgba(0, 0, 255, 0.5)";
	c.fillRect(400, 100, 100, 100);
	c.fillStyle = "rgba(0, 255, 0, 0.5)";
	c.fillRect(300, 300, 100, 100);
	console.log(canvas);
	
	x = 50;
	y = 300;
	
	// Line
	c.beginPath();
	c.moveTo(x, y);
	c.lineTo(300, 100);
	c.lineTo(400, 300);
	c.strokeStyle = "red"; // can also be hex value too
	c.stroke();
	
	// Arc / Circle
	c.beginPath();
	c.arc(300, 300, 30, 0, Math.PI * 2, false);
	c.strokeStyle = 'blue';
	c.stroke();
	
	var colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple', 'yellow', 'orange'];
	for (var i = 0; i < 150; i++) {
		x = Math.random() * window.innerWidth;
		y = Math.random() * window.innerHeight;
		c.beginPath();
		c.arc(x, y, 30, 0, Math.PI * 2, false);
		var strokeStyle = colors[Math.floor(Math.random() * colors.length)];
		c.strokeStyle = strokeStyle;
		c.stroke();
	}
}