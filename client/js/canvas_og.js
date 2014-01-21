function zeichne_og(id) {
var canvas = document.getElementById(id);

var ctx;
var linkText="eg.html";
var linkX=210;
var linkY=90;
var linkHeight=20;
var linkWidth;
var inLink = false;

draw(id);
}

function draw(id){
    canvas = document.getElementById(id);
    ctx=canvas.getContext("2d");

    og(ctx, canvas);
    ctx.font='10px sans-serif';
    ctx.fillStyle = "#FFC";
    ctx.fillText(linkText,linkX,linkY);
    linkWidth=ctx.measureText(linkText).width;
 
    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);
 
}

function on_mousemove (ev) {
  var x, y;
 
  if (ev.layerX || ev.layerX) { 
    x = ev.layerX;
    y = ev.layerY;
  }
  x-=canvas.offsetLeft;
  y-=canvas.offsetTop;
 
  if(x>=linkX && x <= (linkX + linkWidth) &&
     y<=linkY && y>= (linkY-linkHeight)){
      document.body.style.cursor = "pointer";
      inLink=true;
  }
  else{
      document.body.style.cursor = "";
      inLink=false;
  }
}
 
function on_click(e) {
  if (inLink)  {
    window.location = linkText;
  }
}

function og (ctx, canvas) {
	ctx=canvas.getContext("2d");
    rahmen(ctx);
	wc(ctx);
	rooms(ctx);
	doors(ctx);
	treppen(ctx);
	coloring(ctx);
	ctx.stroke();
	var i = 3000;
	ampel(ctx, i);
}

function rahmen(ctx) {
ctx.moveTo(0,0);
	ctx.lineTo(150,0);
	ctx.lineTo(150,120);
	ctx.lineTo(140,120);
	ctx.lineTo(140,10);
	
	ctx.moveTo(340,0);
	ctx.lineTo(330,0);
	ctx.lineTo(330,120);
	ctx.lineTo(340,120);
	ctx.lineTo(340,10);

	ctx.moveTo(340,0);
	ctx.lineTo(650,0);
	ctx.lineTo(650,600);
	ctx.lineTo(0,600);
	ctx.lineTo(0,0);
	ctx.moveTo(10,10);
	ctx.lineTo(140,10);
	ctx.moveTo(340,10);
	ctx.lineTo(640,10);
	ctx.lineTo(640,590);
	ctx.lineTo(10,590);
	ctx.lineTo(10,10);
}
function treppen(ctx) {
ctx.moveTo(160,0);
	ctx.lineTo(320,0);
	ctx.lineTo(320,15);
	ctx.lineTo(160,15);
	ctx.lineTo(160,0);

	ctx.moveTo(160,20);
	ctx.lineTo(320,20);
	ctx.lineTo(320,40);
	ctx.lineTo(160,40);
	ctx.lineTo(160,20);
	
	ctx.moveTo(160,45);
	ctx.lineTo(320,45);
	ctx.lineTo(320,70);
	ctx.lineTo(160,70);
	ctx.lineTo(160,45);
	
	ctx.moveTo(160,75);
	ctx.lineTo(320,75);
	ctx.lineTo(320,105);
	ctx.lineTo(160,105);
	ctx.lineTo(160,75);

}

function coloring(ctx) {
var grd=ctx.createRadialGradient(150,90,5,230,70,100);
	grd.addColorStop(1,"gray");
	ctx.fillStyle=grd;
	ctx.fillRect(10,10,630,580);
	ctx.fillRect(150,0,10,10);
	ctx.fillRect(320,0,10,10);
	
	var grd=ctx.createRadialGradient(200,90,5,230,70,100);
	//grd.addColorStop(0,"#ffffff");
	grd.addColorStop(1,"#FFC");
	ctx.fillStyle=grd;
	ctx.fillRect(160,0,160,15);
	ctx.fillRect(160,20,160,20);
	ctx.fillRect(160,45,160,25);
	ctx.fillRect(160,75,160,30);

	var grd=ctx.createRadialGradient(200,90,5,230,70,100);
	grd.addColorStop(1,"#ffffff");
	ctx.fillStyle=grd;
	ctx.fillRect(140,0,10,120);
	ctx.fillRect(330,0,10,120);

	
	var grd=ctx.createRadialGradient(150,90,5,230,70,100);
	grd.addColorStop(1,"black");
	ctx.fillStyle=grd;
	ctx.fillRect(0,0,10,600);
	ctx.fillRect(0,0,140,10);
	ctx.fillRect(0,590,650,10);
	ctx.fillRect(640,590,10, -590);
	ctx.fillRect(640,0,-300, 10);

	var grd=ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(1,"#009682");
	ctx.fillStyle=grd;
	ctx.fillRect(20,360,210,220);
	ctx.fillRect(240,360,190,220);
	ctx.fillRect(440,360,190,220);
	ctx.fillRect(420,20,100,80);
	ctx.fillRect(530,20,100,80);
	
	var grd=ctx.createRadialGradient(150,90,5,110,60,100);
	grd.addColorStop(1,"#D9E62B");
	ctx.fillStyle=grd;
	ctx.fillRect(10,580,630,10);
	ctx.fillRect(10,580,10,-220);
	ctx.fillRect(10,360,100,-10);
	ctx.fillRect(170,360,135,-10);
	ctx.fillRect(370,360,135,-10);
	ctx.fillRect(575,360,65,-10);
	ctx.fillRect(630,360,10,220);
	ctx.fillRect(430,360,10,220);
	ctx.fillRect(230,360,10,220);
	ctx.fillRect(640,10,-230,10);
	ctx.fillRect(410,10,10,100);
	ctx.fillRect(520,10,10,100);
	ctx.fillRect(630,10,10,100);
	ctx.fillRect(630,100,-50,10);
	ctx.fillRect(540,100,-30,10);
	ctx.fillRect(470,100,-50,10);
}
function wc(ctx) {
	ctx.moveTo(640, 10);
	ctx.lineTo(640, 110);
	ctx.lineTo(580, 110);
	ctx.lineTo(580, 100);
	ctx.lineTo(630, 100);
	ctx.lineTo(630, 20);
	ctx.lineTo(530, 20);
	ctx.lineTo(530, 100);
	ctx.lineTo(540, 100);
	ctx.lineTo(540, 110);
	ctx.lineTo(510, 110);
	ctx.lineTo(510, 100);
	ctx.lineTo(520, 100);
	ctx.lineTo(520, 100);
	ctx.lineTo(520, 20);
	ctx.lineTo(420, 20);
	ctx.lineTo(420, 100);
	ctx.lineTo(470, 100);
	ctx.lineTo(470, 110);
	ctx.lineTo(410, 110);
	ctx.lineTo(410, 10);
}

function ampel(ctx, i) {
	setInterval(function(){writeText(ctx, "EG", 220, 100)},i-3000);
	setInterval(function(){deleteText(ctx, 210, 78, 65, 25)},i - 3000 + 500);
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

function rooms(ctx) {
ctx.moveTo(640, 590);
	ctx.lineTo(640, 350);
	ctx.lineTo(575, 350);
	ctx.lineTo(575, 360);
	ctx.lineTo(630, 360);
	ctx.lineTo(630, 580);
	ctx.lineTo(440, 580);
	ctx.lineTo(440, 360);
	ctx.lineTo(505, 360);
	ctx.lineTo(505, 350);
	ctx.lineTo(370, 350);
	ctx.lineTo(370, 360);
	ctx.lineTo(430, 360);
	ctx.lineTo(430, 580);
	ctx.lineTo(240, 580);
	ctx.lineTo(240, 360);
	ctx.lineTo(305, 360);
	ctx.lineTo(305, 350);
	ctx.lineTo(170, 350);
	ctx.lineTo(170, 360);
	ctx.lineTo(230, 360);
	ctx.lineTo(230, 580);
	ctx.lineTo(20, 580);
	ctx.lineTo(20, 360);
	ctx.lineTo(110, 360);
	ctx.lineTo(110, 350);
	ctx.lineTo(10, 350);
}

function doors(ctx) {
// Tür 1 
	ctx.moveTo(470,103);
	ctx.lineTo(508,103);
	ctx.lineTo(508,107);
	ctx.lineTo(470,107);

	// Tür 2 
	ctx.moveTo(580,103);
	ctx.lineTo(542,103);
	ctx.lineTo(542,107);
	ctx.lineTo(580,107);	

	// Tür 3 
	ctx.moveTo(575,353);
	ctx.lineTo(507,353);
	ctx.lineTo(507,357);
	ctx.lineTo(575,357);	
	
	
	// Tür 4 
	ctx.moveTo(370,353);
	ctx.lineTo(307,353);
	ctx.lineTo(307,357);
	ctx.lineTo(370,357);	
	
	
	// Tür 5 
	ctx.moveTo(170,353);
	ctx.lineTo(112,353);
	ctx.lineTo(112,357);
	ctx.lineTo(170,357);	
	
}
