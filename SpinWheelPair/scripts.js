var canvas1, context1;
var canvas2, context2;
var width, height;

var direction1, direction2;
var wheel1, wheel2;

function init()
{
	alert("a kerekek megpörgetéséhez klikkelj rájuk!");
	
	data = simpleNamesArray;
	
	canvas1 = document.getElementById("wheel1");
	context1 = canvas1.getContext("2d");
	
	canvas2 = document.getElementById("wheel2");
	context2 = canvas2.getContext("2d");
	
	height = width = 570;
	
	canvas1.width = width; //window.innerWidth;
	canvas1.height = height; //window.innerHeight;
	
	canvas2.width = width; //window.innerWidth;
	canvas2.height = height; //window.innerHeight;
	
	//preparing first wheel
	
		context1.translate(width / 2, height / 2);
		
		context1.beginPath();
		context1.arc(0, 0, (width + height) / 4 - 1, rad(0), rad(360));
		context1.fillStyle = "#afdecb";
		context1.fill();
		context1.beginPath();
		context1.arc(0, 0, (width + height) / 40, rad(0), rad(360));
		context1.fillStyle = "#ffffff";
		context1.fill();
		
		context1.fillStyle = "#000000";
		context1.font = "18px Consolas";
	
	//preparing second wheel
	
		context2.translate(width / 2, height / 2);
		
		context2.beginPath();
		context2.arc(0, 0, (width + height) / 4 - 1, rad(0), rad(360));
		context2.fillStyle = "#afdecb";
		context2.fill();
		context2.beginPath();
		context2.arc(0, 0, (width + height) / 40, rad(0), rad(360));
		context2.fillStyle = "#ffffff";
		context2.fill();
		
		context2.fillStyle = "#000000";
		context2.font = "18px Consolas";
	
	for(var i = 0; i < data.length; i++)
	{
		//drawing first wheel
		
			context1.beginPath();
			context1.moveTo((width + height) / 40, 0);
			context1.lineTo((width + height) / 4 - 1, 0);
			context1.stroke();
			
			context1.rotate(rad(360/data.length/2));
			
			context1.beginPath();
			var textWidth = context1.measureText(data[i]).width;
			var textPosition = width / 4 - textWidth / 2 + 50;
			context1.fillText(data[i], textPosition, 5);
			
			context1.rotate(rad(360/data.length/2));
		
		//drawing second wheel
			
			context2.beginPath();
			context2.moveTo(-((width + height) / 40), 0);
			context2.lineTo(-((width + height) / 4 - 1), 0);
			context2.stroke();
			
			context2.rotate(rad(360/data.length/2));
			
			context2.beginPath();
			var textWidth = context2.measureText(data[i]).width;
			var textPosition = -(width / 2) + width / 4 - textWidth / 2 - 50;
			context2.fillText(data[i], textPosition, 5);
			
			context2.rotate(rad(360/data.length/2));
	}
	
	wheel1 = wheel2 = -1;
	
	direction1 = direction2 = 1;
	
	canvas1.addEventListener("click", function(){spin1();}, false);
	canvas2.addEventListener("click", function(){spin2();}, false);
	
	document.getElementById("spinall").addEventListener("click", function(){spin1();spin2();}, false);
}

function rad(deg)
{
	return (Math.PI / 180) * deg;
}

function spin1(x)
{
	var selected;
	do
	{
		selected = typeof x != "undefined" ? x : Math.floor(Math.random() * data.length);
	}
	while(selected == wheel2)
	
	wheel1 = selected;
	console.log(selected + ": " + data[selected]);
	var rotation = -((selected + 0.5) * 360 / data.length) + (360 * 10 * direction1);
	console.log(rotation);
	canvas1.setAttribute("style", "-webkit-transform: rotate(" + rotation + "deg)");
	
	direction1 -= 2 * direction1;
}

function spin2(x)
{
	var selected;
	do
	{
		selected = typeof x != "undefined" ? x : Math.floor(Math.random() * data.length);
	}
	while(selected == wheel1)
	
	wheel2 = selected;
	console.log(selected + ": " + data[selected]);
	var rotation = -((selected + 0.5) * 360 / data.length) + (360 * 10 * direction2);
	console.log(rotation);
	canvas2.setAttribute("style", "-webkit-transform: rotate(" + rotation + "deg)");
	
	direction2 -= 2 * direction2;
}