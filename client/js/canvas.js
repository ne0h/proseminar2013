function zeichne_eg(id) {
  var canvas = document.getElementById(id);
  
  var ctx;
  var linkText="javascript:zeichne_og();";
  var linkX=90;
  var linkY=25;
  var linkHeight=20;
  var linkWidth;
  var inLink = false;
  
  draw(id);
}

function draw(id){
    canvas = document.getElementById(id);
    ctx=canvas.getContext("2d");

    eg(ctx, canvas);
    ctx.font='10px sans-serif';
    ctx.fillStyle = "#FFC";
    ctx.fillText(linkText,linkX,linkY);
    linkWidth=ctx.measureText(linkText).width;
 
    canvas.addEventListener("mousemove", on_mousemove, false);
    canvas.addEventListener("click", on_click, false);
 
}


function zeichne_og(id) {
var canvas = document.getElementById(id);

var ctx;
var linkText="javascript:zeichne_eg();";
var linkX=210;
var linkY=90;
var linkHeight=20;
var linkWidth;
var inLink = false;

draw_og(id);
}

function draw_og(id){
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

function og (ctx, canvas) {
	ctx=canvas.getContext("2d");
    rahmen_og(ctx);
	wc(ctx);
	rooms_og(ctx);
	doors_og(ctx);
	treppen_og(ctx);
	coloring_og(ctx);
	ctx.stroke();
	var i = 3000;
	ampel_og(ctx, i);
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



function rahmen_og(ctx) {
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
function treppen_og(ctx) {
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

function coloring_og(ctx) {
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

function ampel_og(ctx, i) {
	setInterval(function(){writeText_og(ctx, "EG", 220, 100)},i-3000);
	setInterval(function(){deleteText_og(ctx, 210, 78, 65, 25)},i - 3000 + 500);
	i = i + 3000;
} 
function writeText_og(ctx, text, x , y) {
	ctx.font="25px Verdana";
	ctx.strokeText(text,x,y);
}

function deleteText_og(ctx, x , y, br, ho) {
	var grd=ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(1,"#FFC");
	ctx.fillStyle=grd;
	ctx.fillRect(x,y,br,ho);
}

function rooms_og(ctx) {
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

function doors_og(ctx) {
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

