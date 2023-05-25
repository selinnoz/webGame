var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var witchI= new Image();
var fairy = new Image();
var bg = new Image();             // resimleri yükledik

bg.src = "images/bg.png";
fairy.src = "images/fairy.gif";
witchI.src = "images/witch.gif";


var fX =150;
var fY =150;            //cadi ve perinin koordinatlari


var score = 0;   //skor tutan degisken

var constant = witchI.height;
var wind= -1;

var witch = [];

witch[0] = {
    x : cvs.width,          //cadilari arrayle tutariz
    y : 0
};


document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp") {
    fY -= 10;
  } else if (event.code === "ArrowDown") {
    fY += 10;
  } else if (event.code === "ArrowRight") {       //yön tuslari ile peri hareketi
    fX += 10;
  } else if (event.code === "ArrowLeft") {
    fX -= 10;
  }
});

setInterval(function() {   //skor gecen zamana gore tutulur
  score++;
}, 100);

//Canvasa cizim yapmak icin

function draw() {
    
    ctx.drawImage(bg, 0, 0);
    
    ctx.drawImage(fairy, fX, fY,128,128);   // periyi cizer
    fX += wind;                              //periye rüzgar etkisi
    

    for(var i = 0; i < witch.length; i++){
      ctx.drawImage(witchI, witch[i].x, witch[i].y);
      witch[i].x -= 2;

      if(witch[i].x==100){
        witch.push({
          x: cvs.width,
          y: Math.floor(Math.random()*500)-50
        });
      }

          // Game over kosulu -peri ve cadinin carpismasi
        
          if (fX + fairy.width >= witch[i].x+60 &&      // Peri sağ kenarı, cadı sol kenarına eşit veya büyükse
    fX <= witch[i].x-30 + witchI.width-60 &&     // Peri sol kenarı, cadı sağ kenarına eşit veya küçükse
    fY <= witch[i].y-30 + witchI.height-30 &&    // Peri üst kenarı, cadı alt kenarına eşit veya küçükse
    fY + fairy.height-30 >= witch[i].y+30) {     // Peri alt kenarı, cadı üst kenarına eşit veya büyükse

        // Oyun durduruluyor
        ctx.fillStyle = "#f00";
        ctx.font = "50px Verdana";
        ctx.fillText("Game Over!", cvs.width/2-120, cvs.height/2-25);
    
        // 2 saniye sonra oyun sayfası yeniden yükleniyor
        setTimeout(function() {
            location.reload();
        }, 2000);

      }

    
      }

    ctx.fillStyle = "#000";
    ctx.font = "25px Verdana";             // skoru ekrana yaz
    ctx.fillText("Score : "+score,10,cvs.height-20);
    
    requestAnimationFrame(draw);
  }
  
  draw();
