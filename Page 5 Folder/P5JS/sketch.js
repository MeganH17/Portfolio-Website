let firstillution = true 
let angleOffsets = [];
let sizes = 10

function setup() {
  createCanvas(600, 600).parent("image-container");
  angleMode(DEGREES);

  let numSquares = 12;
  for (let i = 0; i < numSquares; i++) {
    angleOffsets.push(random(0.50, 1.5)); // Assign a unique speed for each layer
  }
}

function draw() {
  background(189, 255, 248
);
  
  
  if (firstillution) {
  translate(width / 2, height / 2);

  let numSquares = 13;   // Number of squares
  let maxSize = 900;     // Size of the largest square

  for (let i = 0; i < numSquares; i++) {
    let size = maxSize - (i * (maxSize / numSquares));
    let rotation = frameCount * angleOffsets[i]; // Rotate each layer at a unique speed
     
    push();
    rotate(rotation);
    drawSquare(size);
    pop();
    
  }  
    
  }
  
  if (firstillution === false) {
  
  push();
  for(let x = 0; x <= width; x+=50)
  {
  for(let y = 0; y <=  height; y+=50)
  {
  fill(20,y, x);
  ellipse(x, y, random(50), random(50));
  pop();
    
  
  }    
  }
 
  }
  
   push();
      fill(255);
      textSize(20)
      text('PRESS TO CHANGE',-90, -60);
  pop();
}


function drawSquare(sizes) {
  strokeWeight(4);
  stroke(0);
  fill(random(255));
  rectMode(CENTER);
  rect(0, 0, sizes, sizes);
}


function mouseClicked() {
  
  firstillution =! firstillution
}


