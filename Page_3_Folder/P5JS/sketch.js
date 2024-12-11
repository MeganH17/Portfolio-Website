let rectW = 50;
let rectH = 50;
let posX = 300;
let posY = 550;
let squareButton = false;
let r = 0;
let x = 3;
let paceX = 3;

function setup() {
  createCanvas(600, 600).parent("image-container");
  angleMode(DEGREES);
  noStroke();
  rectMode (CENTER)
  frameRate(20);
  
} 

function draw() {
  background (random(225),random(225),random(225));
  
  // Squares Button: 
  if (squareButton==false){    
    fill(255);
  } else if (squareButton==true){    
    fill(255,0,0);    
  }
  rect(posX, posY, rectW, rectH, 10);
 
   //expanding colorful circle
   push(); 
  translate(width/2, height/2);
  fill(random(0,225),random(0,225),random(0,225));
  ellipse(0, 0, x, x);
  
  x = x + paceX;
  
  if (x > width - 3 || x < 3){
    paceX = -paceX;
  }
  pop();
  
  
  //text
  strokeWeight(0.5);
  // First line txt.
  textAlign(CENTER, TOP);
  textFont("Monserrat",30);
  text('A CLOCK THAT WONT STOP!', 300, 80);

  // Second line txt.
  textAlign(CENTER, CENTER);
  text('HERE IT IS!', 300, 60);
  
    // Second line txt.
  textAlign(BOTTOM, CENTER);
  text('Click Here!', 300, 500);
  
  
  
  
  //clock settings
  let h = hour ();
  let m = minute ();
  let s = second();
  
  translate(width/2, height/2);
  rotate(-90);
  //second
  fill(1255, 255, 0,100)
  arc(0,0,300,300,0,s*6);
  
  //minute
  fill (0, 255, 0,200)
  arc(0,0,250,250,0,m*6);
  
  //hour
  fill (255, 128, 0,300)
  arc (0,0,200,200,0,h*15);
  

  //Circling Rect
  push();
  rotate(r);
  r=r + QUARTER_PI * 90;
  
  if(m<10000){
   r=r+1;
  } else if (m>=10000){
   
  r=r-1;
  }
  fill (255, 0, 0,400)
  rect (0,0,10,100);
  pop();
 }


function mousePressed(){
  
  //Square Button
  if (mouseX > posX - rectW  && mouseY > posY - rectH && mouseX < posX + rectW && mouseY < posY + rectH ) {    
    squareButton = !squareButton;
    x=1;
    console.log(x);
      
  }
  console.log("mouse has been pressed")
}