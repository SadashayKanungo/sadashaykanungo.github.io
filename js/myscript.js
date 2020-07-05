/* #edae49 #d4334f #031d44 */


window.onload= function() {

  Particles.init({
    selector: '.background',
    color: "#d4334f",
    connectParticles: true,
    maxParticles: 120,
    speed: 0.4,
    responsive: [{
  	breakpoint: 800,
    	options: {
    	maxParticles: 80,
    }
  }]
  });

  shift("intropic");

  setTimeout(function() {document.getElementById("load").style.opacity = "0";}, 1000);
  setTimeout(function() {document.getElementById("load").style.display = "none";}, 2500);
};


function shift(m)
{
  var toshow = document.getElementById(m);
  var bms=['intropic','intro','projects','education','skills'];
  for(i=0;i<bms.length;i++)
  {
   var tohide = document.getElementById(bms[i]);
   if(tohide.style.display == "block")	{ 
	tohide.style.display = "none";
    }
  }
  toshow.style.display = "block";

  if(window.matchMedia("(orientation:portrait)").matches)
  {hidemenu();}	
}

function hidemenu(){
	var menu = document.getElementById("menudata");
	menu.style.animation = "slideup 0.75s ease";
	setTimeout(function() {
		menu.style.animation = "slidedown 0.75s ease";
		menu.style.display = "none";}, 700);
}

function slidemenu() {
	var menu = document.getElementById("menudata");
	if(menu.style.display == "none")
	{menu.style.display = "block"}
	else
	{hidemenu();}
}







