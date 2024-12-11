let y=50;
let x=50;
let check=false;

function setup() {
  createCanvas(400, 400).parent("image-container");
  strokeJoin(ROUND); 
  noStroke()

}

function draw() {
 background(204, 230, 255);
  
 
      
  //text
  text('Play Around', 135,50)
  text('Click and Drag!', 120,370)
  textSize(20)
  textFont('Courier New', 20)
  fill('palegreen')

  translate (width/2, height/2)
  
  //Face base
  push() 
  fill(10, 41, 10)
  ellipse(15, 1, mouseX + 15, mouseY)
  ellipse(mouseX/2.5 , -mouseY/3, mouseX/3, mouseY/3);
  
  pop()

  //Shadow
  push()
  fill(133, 224, 133)
  ellipse (5,1, mouseX + 15, mouseY)

  // eye area
  ellipse(mouseX/3 + 5, -mouseY/3, mouseX/3, mouseY/3);
  // think of the xy coordinate system
  ellipse(-mouseX/3 + 5, -mouseY/3, mouseX/3, mouseY/3);
  
  //Blush
  fill(255, 179, 209)
    ellipse(mouseX/-3.2, mouseY/10/-200,mouseX/5, mouseY/4);
  ellipse(mouseX/3 + 10, mouseY/-400,mouseX/5, mouseY/4);
     
   //eye Right
  fill(0); 
  ellipse(mouseX/3 + 5, -mouseY/3, mouseX/5, mouseY/5);
  
  //eye2 Left
  fill(0);
  ellipse(-mouseX/3 + 5, -mouseY/3, mouseX/5, mouseY/5);
  
  //light Right
  fill(255);
  ellipse(mouseX/3 + 18, -mouseY/3, mouseX/10, mouseY/10);
  
  //light Left
  fill(255);
  ellipse(-mouseX/3 + 18, -mouseY/3, mouseX/10, mouseY/10);
   pop()
  
   //nose
    fill(0);
  ellipse(-mouseX/288, -mouseY/6, mouseX/30, mouseY/30);
  
   
   //nose
  fill(0);
  ellipse(mouseX/90+30, -mouseY/6, mouseX/30, mouseY/30);
  
  //mouth
  push()  
  fill(133, 224, 133);
  stroke(50)
  strokeWeight(10);
  arc(10, 20, mouseX/7, mouseY/3,0, PI);
  pop()
   
  
  
  
}  

function mouseDragged(){

  fill(255, 255, 230);
  ellipse(mouseX,mouseY,(200)); 
  fill (random(0,255),random(0,255),random(0,255))
 
 
}

function mousePressed() {
  stroke(255, 255, 51);
  strokeWeight(0.1);
  line(mouseX,mouseY,80,400)
  

}
