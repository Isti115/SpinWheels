var canvas, context;
var width, height;

var direction;

function init()
{
	data = namesArray;
	
	canvas = document.getElementById("display");
	context = canvas.getContext("2d");
	
	canvas.width = 500; window.innerWidth;
	canvas.height = 500; window.innerHeight;
	
	width = canvas.width;
	height = canvas.height;
	
	context.translate(width / 2, height / 2);
	
	context.beginPath();
	context.arc(0, 0, (width + height) / 4 - 1, rad(0), rad(360));
	context.fillStyle = "#afdecb";
	context.fill();
	context.beginPath();
	context.arc(0, 0, (width + height) / 40, rad(0), rad(360));
	context.fillStyle = "#ffffff";
	context.fill();
	
	context.fillStyle = "#000000";
	
	for(var i = 0; i < data.length; i++)
	{
		context.beginPath();
		context.moveTo((width + height) / 40, 0);
		context.lineTo((width + height) / 4 - 1, 0);
		context.stroke();
		
		context.rotate(rad(360/data.length/2));
		
		context.beginPath();
		context.font = "15px Consolas";
		context.fillText(data[i], 80, 5);
		
		context.rotate(rad(360/data.length/2));
	}
	
	direction  = 1;
	canvas.addEventListener("click", function(){spin();}, false);
}

function rad(deg)
{
	return (Math.PI / 180) * deg;
}

function spin(x)
{
	var selected = typeof x != "undefined" ? x : Math.floor(Math.random() * data.length);
	console.log(selected + ": " + data[selected]);
	var rotation = -((selected + 0.5) * 360 / data.length) + (360 * 10 * direction);
	console.log(rotation);
	canvas.setAttribute("style", "-webkit-transform: rotate(" + rotation + "deg)");
	
	direction -= 2 * direction;
}