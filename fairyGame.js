var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var witch= new Image();
var fairy = new Image();
var bg = new Image();             // loading images

bg.src = "images/bg.png";
fairy.src = "images/fairy.gif";
witch.src = "images/witch.gif";


var fX =150;
var fY =150;            //cadi ve perinin koordinatlari
var wX =250;
var wY =250;

var wind= -1;

var witch = [];

witch[0] = {
    x : cvs.width,
    y : 0
};


document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp") {
    fY -= 10;
  } else if (event.code === "ArrowDown") {
    fY += 10;
  } else if (event.code === "ArrowRight") {
    fX += 10;
  } else if (event.code === "ArrowLeft") {
    fX -= 10;
  }
});



function draw() {
    
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(witch, wX, wY128,128);
    ctx.drawImage(fairy, fX, fY,128,128);
    fX += wind;
    wX += wind

    for(var i = 0; i < pipe.length; i++){
      
    }


    requestAnimationFrame(draw);
  }
  
  draw();
  
  
  