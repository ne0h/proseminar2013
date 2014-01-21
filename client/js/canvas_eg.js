function zeichne_eg() {
  var canvas = document.getElementById("eg");
  
  var ctx;
  var linkText="og.html";
  var linkX=90;
  var linkY=25;
  var linkHeight=20;
  var linkWidth;
  var inLink = false;
  
  draw();
}

function draw(){
    canvas = document.getElementById("eg");
    ctx=canvas.getContext("2d");

    eg(ctx, canvas);
    ctx.font='10px sans-serif';
    ctx.fillStyle = "#FFC";
    ctx.fillText(linkText,linkX,linkY);
    linkWidth=ctx.measureText(linkText).width;
 
    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);
 
}

function eg (ctx, canvas) {

	ctx=canvas.getContext("2d");
    
	rahmen(ctx);
	room1(ctx);
	automats(ctx);
	treppen(ctx);
	room2(ctx);
	stangen(ctx);
	coloring(ctx);
	ctx.stroke();
	var i = 3000;
	ampel(ctx, i);
	
}

function rahmen(ctx) {
ctx.moveTo(0,0);
	ctx.lineTo(650,0);
	ctx.lineTo(650,600);
	ctx.lineTo(160,600);
	ctx.moveTo(20,600);
	ctx.lineTo(0,600);
	ctx.lineTo(0,0);

	ctx.moveTo(160,593);
	ctx.lineTo(91,593);
	ctx.lineTo(91,597);
	ctx.lineTo(160,597);


	ctx.moveTo(20,593);
	ctx.lineTo(89,593);
	ctx.lineTo(89,597);
	ctx.lineTo(20,597);


	ctx.moveTo(10,10);
	ctx.lineTo(640,10);
	ctx.lineTo(640,590);
	ctx.lineTo(160,590);
	ctx.lineTo(160,600);
	ctx.moveTo(160,590);
	ctx.moveTo(20,590);
	ctx.lineTo(20,600);
	ctx.moveTo(20,590);
	ctx.lineTo(10,590);
	ctx.lineTo(10,10);
}
function room1(ctx) {
ctx.moveTo(280,10);
	ctx.lineTo(280,220);
	ctx.lineTo(420,220);
	ctx.moveTo(500,220);
	ctx.lineTo(640,220);
	ctx.moveTo(630,210);
	ctx.lineTo(500,210);
	ctx.lineTo(500,220);
	ctx.moveTo(420,220);
	ctx.lineTo(420,210);
	ctx.lineTo(290,210);
	ctx.lineTo(290,20);
	ctx.lineTo(630,20);
	ctx.lineTo(630,210);

	ctx.moveTo(500,213);
	ctx.lineTo(422,213);
	ctx.lineTo(422,217);
	ctx.lineTo(500,217);
	ctx.moveTo(430,217);
	ctx.lineTo(430,225);
	ctx.lineTo(445,225);
	ctx.lineTo(445,221);
	ctx.lineTo(434,221);
	ctx.lineTo(434,217);
}
function automats(ctx) {
// Automat 2
	ctx.moveTo(280,80);
	ctx.lineTo(250,80);
	ctx.lineTo(250,125);
	ctx.lineTo(280,125);
	ctx.lineTo(280,128);
	ctx.lineTo(247,128);
	ctx.lineTo(247,77);
	ctx.lineTo(280,77);

	// Automat 1
	ctx.moveTo(280,70);
	ctx.lineTo(250,70);
	ctx.lineTo(250,25);
	ctx.lineTo(280,25);
	ctx.lineTo(280,22);
	ctx.lineTo(247,22);
	ctx.lineTo(247,73);
	ctx.lineTo(280,73);
}
function treppen(ctx) {
ctx.moveTo(40,10);
	ctx.lineTo(200,10);
	ctx.lineTo(200,50);
	ctx.lineTo(40,50);
	ctx.lineTo(40,10);

	ctx.moveTo(40,55);
	ctx.lineTo(200,55);
	ctx.lineTo(200,85);
	ctx.lineTo(40,85);
	ctx.lineTo(40,55);

	ctx.moveTo(40,90);
	ctx.lineTo(200,90);
	ctx.lineTo(200,110);
	ctx.lineTo(40,110);
	ctx.lineTo(40,90);

	ctx.moveTo(40,115);
	ctx.lineTo(200,115);
	ctx.lineTo(200,130);
	ctx.lineTo(40,130);
	ctx.lineTo(40,115);


	ctx.moveTo(40,135);
	ctx.lineTo(200,135);
	ctx.lineTo(200,145);
	ctx.lineTo(40,145);
	ctx.lineTo(40,135);
}

function room2(ctx) {
ctx.moveTo(505,360);
	ctx.lineTo(640,360);
	ctx.lineTo(640,590);
	ctx.lineTo(280,590);
	ctx.lineTo(280,360);
	ctx.lineTo(420,360);
	ctx.lineTo(420,370);
	ctx.lineTo(290,370);
	ctx.lineTo(290,580);
	ctx.lineTo(630,580);
	ctx.lineTo(630,370);
	ctx.lineTo(505,370);
	ctx.lineTo(505,360);
	ctx.moveTo(505,363);
	ctx.lineTo(422,363);
	ctx.lineTo(422,367);
	ctx.lineTo(505,367);
	ctx.moveTo(430,363);
	ctx.lineTo(430,355);
	ctx.lineTo(445,355);
	ctx.lineTo(445,359);
	ctx.lineTo(434,359);
	ctx.lineTo(434,363);
}
function stangen(ctx) {
ctx.moveTo(212,150);
	ctx.lineTo(220,150);
	ctx.lineTo(220,10);
	ctx.lineTo(212,10);
	ctx.lineTo(212,150);

	ctx.moveTo(22,150);
	ctx.lineTo(30,150);
	ctx.lineTo(30,10);
	ctx.lineTo(22,10);
	ctx.lineTo(22,150);
}
function coloring(ctx) {
var grd=ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(1,"black");
	ctx.fillStyle=grd;
	ctx.fillRect(0,0,650,10);
	ctx.fillRect(0,0,10,600);
	ctx.fillRect(640,0,10,600);
	ctx.fillRect(0,590,20,600);
	ctx.fillRect(160,590,650,600);
	var grd=ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(1,"gray");
	ctx.fillStyle=grd;
	ctx.fillRect(10,10,630,580);
	ctx.fillRect(20,590,140,3);
	ctx.fillRect(20,598,140,3);
	

	var grd=ctx.createRadialGradient(150,90,5,110,60,100);
	grd.addColorStop(1,"#FFC");
	ctx.fillStyle=grd;
	ctx.fillRect(40,10,160,40);
	ctx.fillRect(40,55,160,30);
	ctx.fillRect(40,90,160,20);
	ctx.fillRect(40,115,160,15);
	ctx.fillRect(40,135,160,10);


	var grd=ctx.createRadialGradient(150,90,5,110,60,100);
	grd.addColorStop(1,"#D9E62B");
	ctx.fillStyle=grd;
	ctx.fillRect(280,10,360,10);
	ctx.fillRect(280,10,10,210);
	ctx.fillRect(280,210,140,10);
	ctx.fillRect(500,210,140,10);
	ctx.fillRect(630,210,10,-190);
	ctx.fillRect(280,580,360,10);
	ctx.fillRect(280,580,10,-220);
	ctx.fillRect(630,580,10,-220);
	ctx.fillRect(630,360,-125,10);
	ctx.fillRect(280,360,140,10);
	
	var grd=ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(1,"white");
	ctx.fillStyle=grd;
	ctx.fillRect(22,10,8,140);
	ctx.fillRect(212,10,8,140);


	var grd=ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(1,"#009682");
	ctx.fillStyle=grd;
	ctx.fillRect(290,20,340,190);
	ctx.fillRect(290,370,340,210);

	var grd=ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(1,"#211772");
	ctx.fillStyle=grd;
	ctx.fillRect(250,24,30,45);
	ctx.fillRect(250,80,30,45);		
	
}
function ampel(ctx, i) {
	setInterval(function(){writeText(ctx, "1.OG", 90, 38)},i-3000);
	setInterval(function(){deleteText(ctx, 90, 16, 65, 28)},i - 3000 + 500);
	i = i + 3000;
} 
function writeText(ctx, text, x , y) {
	ctx.font="25px Verdana";
	ctx.strokeText(text,x,y);
}

function deleteText(ctx, x , y, br, ho) {
	var grd=ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(1,"#FFC");
	ctx.fillStyle=grd;
	ctx.fillRect(x,y,br,ho);
}

