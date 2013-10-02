"use strict";

var canvas = [], context = [];
var width, height;

var avaiableData;

var direction;

function init()
{
	data = simpleNamesArray;
	
	avaiableData = [];
	for(var i = 0; i < data.length; i++)
	{
		avaiableData.push(i);
	}
	
	canvas[1] = document.getElementById("wheel1");
	context[1] = canvas[1].getContext("2d");
	
	canvas[2] = document.getElementById("wheel2");
	context[2] = canvas[2].getContext("2d");
	
	height = width = 570;
	
	canvas[1].width = width; //window.innerWidth;
	canvas[1].height = height; //window.innerHeight;
	
	canvas[2].width = width; //window.innerWidth;
	canvas[2].height = height; //window.innerHeight;
	
	//preparing first wheel
	
		context[1].translate(width / 2, height / 2);
		
		context[1].beginPath();
		context[1].arc(0, 0, (width + height) / 4 - 1, rad(0), rad(360));
		context[1].fillStyle = "#afdecb";
		context[1].fill();
		context[1].beginPath();
		context[1].arc(0, 0, (width + height) / 40, rad(0), rad(360));
		context[1].fillStyle = "#ffffff";
		context[1].fill();
		
		context[1].fillStyle = "#000000";
		context[1].font = "18px Consolas";
	
	//preparing second wheel
	
		context[2].translate(width / 2, height / 2);
		
		context[2].beginPath();
		context[2].arc(0, 0, (width + height) / 4 - 1, rad(0), rad(360));
		context[2].fillStyle = "#afdecb";
		context[2].fill();
		context[2].beginPath();
		context[2].arc(0, 0, (width + height) / 40, rad(0), rad(360));
		context[2].fillStyle = "#ffffff";
		context[2].fill();
		
		context[2].fillStyle = "#000000";
		context[2].font = "18px Consolas";
	
	for(var i = 0; i < data.length; i++)
	{
		//drawing first wheel
		
			context[1].beginPath();
			context[1].moveTo((width + height) / 40, 0);
			context[1].lineTo((width + height) / 4 - 1, 0);
			context[1].stroke();
			
			context[1].rotate(rad(360/data.length/2));
			
			context[1].beginPath();
			var textWidth = context[1].measureText(data[i]).width;
			var textPosition = width / 4 - textWidth / 2 + 50;
			context[1].fillText(data[i], textPosition, 5);
			
			context[1].rotate(rad(360/data.length/2));
		
		//drawing second wheel
			
			context[2].beginPath();
			context[2].moveTo(-((width + height) / 40), 0);
			context[2].lineTo(-((width + height) / 4 - 1), 0);
			context[2].stroke();
			
			context[2].rotate(rad(360/data.length/2));
			
			context[2].beginPath();
			var textWidth = context[2].measureText(data[i]).width;
			var textPosition = -(width / 2) + width / 4 - textWidth / 2 - 50;
			context[2].fillText(data[i], textPosition, 5);
			
			context[2].rotate(rad(360/data.length/2));
	}
	
	direction = [];
	direction[1] = direction[2] = 1;
	
	document.getElementById("spinall").addEventListener("click", function(){spin(1);spin(2);}, false);
}

function rad(deg)
{
	return (Math.PI / 180) * deg;
}

function spin(w)
{
	var index = Math.floor(Math.random() * avaiableData.length);
	var selected = avaiableData[index];
	
	console.log(selected + ": " + data[selected]);
	var rotation = -((selected + 0.5) * 360 / data.length) + (360 * 10 * direction[w]);
	console.log(rotation);
	canvas[w].setAttribute("style", "-webkit-transform: rotate(" + rotation + "deg)");
	
	avaiableData.splice(index, 1);
	
	direction[w] -= 2 * direction[w];
}