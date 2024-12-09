
let transparent = 220

function setup() {
  createCanvas(400, 600).parent("image-container");
  noStroke(); 
  drawBull(); 


}

function drawBull() {
  background(209, 253, 255);

   drawLand(600,200);
  
   translate(height/2, width/2);
  
  
  //----------------------------------
  
   //Horn layer 0
  push();
  //stroke(61, 59, 59)
  //strokeWeight(3)
  fill(237, 230, 230);
   ellipse(-199, -120, 18,28)
  pop();
  
  
  //Horn layer 1
  push();
  //stroke(61, 59, 59)
  //strokeWeight(3)
  fill(184, 180, 180);
   ellipse(-195, -108, 29,28)
  pop();
  
   //Horn layer 2
    push();
    fill(143, 140, 140);
  ellipse(-179, -95, 33,31)
    pop();  
  
   //Horn layer 3
    push();
   fill(97, 95, 95);
  ellipse(-160, -87, 39,32)
    pop();
  
  //-----------------------------
  
   //Horn layer 0
  push();
  //stroke(61, 59, 59)
  //strokeWeight(3)
  fill(237, 230, 230);
   ellipse(20, -111, 14,28)
  pop();
  
  
  //Horn layer 1
  push();
  //stroke(61, 59, 59)
  //strokeWeight(3)
  fill(184, 180, 180);
   ellipse(19, -96, 25,28)
  pop();
  
   //Horn layer 2
    push();
    fill(143, 140, 140);
  ellipse(0, -81, 39,31)
    pop();  
  
   //Horn layer 3
    push();
   fill(97, 95, 95);
  ellipse(-27, -73, 40,32)
    pop();
  
  //horns outline
  push();
  translate(height/70, width/90);
  rotate(QUARTER_PI/5)
  strokeWeight(5)
  stroke(61, 59, 59,transparent);
  noFill();
  arc(-155, -107,-137, 60,HALF_PI, 3.5)
  arc(-160, -90,-150, 90,HALF_PI, 3.5)
  arc(-86, -120,-150, 80,5.9, HALF_PI)
  arc(-70, -105,-150, 100,5.5, HALF_PI)
  pop();
  
  
  //---------------------------------
  
  
  //Arm right top
  push();
  rotate(HALF_PI/2);
  fill(105, 17, 17);
  rect(2,40,70,20);
  pop();
  
  
  //Arm right bottom
  push();
  fill(105, 17, 17);
  rect(2,80,20,70);
  pop();
  
  
   //Arm left top
  push();
  rotate(HALF_PI/-2)
  fill(103, 17, 17);
  rect(-213,-102,70,20);
  pop();
  
 //Arm left bottom
  push();
  fill(105, 17, 17);
  rect(-223,80,20,70);
  pop();
  
  
   //hand right
   push();
  fill(105, 17, 17);
  rect(-8,130,40,20);
  pop();
  
  //hand left
   push();
  fill(105, 17, 17);
  rect(-233,130,40,20);
  pop();
  
  //Fire hands
  push();
  fill(255, 191, 0);
  triangle(-233, 150, -193, 150, -212, 180);  
  triangle(-8, 150, 32, 150, 14, 180);
  pop();
  
  //---------------------------------------
  
   //Legs
  push();
  //strokeWeight(5);
  stroke(191, 92, 59);
  fill(247, 123, 82);
  ellipse(-130,220,50,230);
  ellipse(-70,220,50,230);
  ellipse(-70,320,50,40);
  ellipse(-130,320,50,40);
  pop();
  
  //legs right
   push();
  fill(105, 17, 17);
  rect(-90,170,50,30);
  pop();

  
  //legs left
   push();
  fill(105, 17, 17);
  rect(-160,170,50,30);
  pop();
  
  //--------------------------------------

  //Body shadow
   push();
  fill(209, 27, 67);
  ellipse(-100,90,190,230)
  pop();
  
  //Body
   push();
  fill(255, 64, 92);
  ellipse(-100,90,100,220)
  pop();
  
  //light
   push();
  fill(53, 160, 222);
  ellipse(-100,50,50,50);
  pop();
  
   //light 2
   push();
  fill(110, 202, 255);
  ellipse(-100,54,40,35);
  pop();
  
  
  //-----------------------------------------
  
  //Head shadow
  push();
  fill(150, 18, 40);
  ellipse(-100,-10,110,70);
  pop();
  
  //Head
  push();
  strokeWeight(0.2)
  stroke(40, 50, 56);
  fill(60, 74, 82);
  ellipse(-100,-70,120,100);
  ellipse(-100,-20,150,80);
  pop();
  
  //eyes right
   push();
  rotate(HALF_PI/2);
  fill(255);
  ellipse(-123,-4,30,20);
  pop();
  
   //eyes left
   push();
  rotate(HALF_PI/-2);
  fill(255);
  ellipse(-20,-145,30,20);
   pop();
  
  //pupils
   push();
   fill(0);
  ellipse(-112,-96,15,15);
  ellipse(-89,-96,15,15);
   pop();
  
   //mouth
  push();
  fill(247, 198, 239)
  ellipse(-100,-10,20,20)
  pop();
  push();
  fill(227, 166, 184)
  ellipse(-100,-10,10,10)
  pop();
  
  //nose
  push();
  fill(100, 114, 128);
  ellipse(-100,-30,50,30);
  pop();
  
  //pupils
   push();
   fill(34, 36, 38);
  ellipse(-111,-35,10,10);
  ellipse(-90,-35,10,10);
   pop();
  
  
 
}

  function drawLand (widthLand, heightLand)
{
  push();
  fill(95, 163, 75);
   ellipse(200,560,widthLand, heightLand);
  pop();
  
  
  push();
  fill(78, 133, 62);
   ellipse (200, 590, widthLand, heightLand);
  pop();
  
   push();
  fill(49, 84, 39);
   ellipse (200, 570, 200, 70);
  pop();
  
}


