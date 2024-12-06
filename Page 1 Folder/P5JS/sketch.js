function setup() {
 
  createCanvas(400, 400).parent("image-container");
  colorMode (RGB);
  noStroke();
  describe(
  'Horizontal stripes fading between light purple at the top and light blue at the bottom. The top strips is labeled Color A, and the bottom stripe is labeled Colored B.');

  // Top color
  // Hue: 100°, Saturation: 90%, Brightness: 100%
  let colorA = color(200, 204, 255);
  
  // Bottom color
  // Hue: 250°, Saturation: 80%, Brightness: 20%
  let colorB = color(102, 153, 255);
  
  // Number of stripes 
  let stripeCount = 40 ;
  
  // Divide height of canvas by number of stripes
  let stripeHeight = height /  stripeCount; 
  
  // Start at top of canvas, 
  // repeat until at at the bottom 
  // move down by stripeHeight each time,
  // Rotate background a little 
   
    rotate(HALF_PI/300)
  for (let y = 0; y < height; y += stripeHeight) {
    // Convert y position to number between 
    // 0 (top of convas) and 1 so (bottom of canvas)
    let fadeAmount= y / height; 
 // Interpolate color
    let betweenColor = lerpColor(colorA, colorB, fadeAmount);

    // Draw stripe
    fill(betweenColor);
    rect(0, y, width, stripeHeight); 
    blendMode(BLEND)
    angleMode(DEGREES);
   
  }

  // Draw text labels
  let margin = 5;
  let boxWidth = 60;
  let cornerRadius = 5;
  textAlign(CENTER, CENTER);
  fill(255);
  rect(margin, margin, boxWidth, stripeHeight - margin * 2, cornerRadius);
  fill(0);
  text('Color A', margin, margin, boxWidth, stripeHeight - margin *2);
  fill(255);
  rect(
    5,
    height - stripeHeight + margin,
    boxWidth,
    stripeHeight - margin * 2,
    cornerRadius
  );
  fill(0);
  text(
    'Color B',
    5,
    height - stripeHeight + margin,
    60,
    stripeHeight - margin * 2);
  

//Big Circle Yin and Yang
  push()
  stroke(22)
  strokeWeight(3)
  fill(0);
  ellipse(200,100,50,50)
  fill(255)
  arc(200, 100, 50, 50, 110, 270);
  fill(0);
  stroke(0);
  strokeWeight(3)
  //Black
  ellipse(197,110,25,25)
  fill(255);
  //White  
  noStroke();
  ellipse(200,89,25,25);
  fill(0);
  ellipse(200,88,12,12);
  fill(255);
  ellipse(200,114,12,12); 
  pop()

  //Black Beads 1
  push() 
  translate(2,1,3)
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(237,115,30,30)
  
  //Black Beads 2
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(160,113,30,30)
  
  
  //Black Beads 3
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(135,130,30,30)
  
  //Black Beads 4
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(124,161,30,30)
  
   //Black Beads 5
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(124,193,30,30)
  
  
   //Black Beads 6
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(124,193,30,30)
  
  
   //Black Beads 7
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(130,225,30,30)
  
  //Black Beads 8
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(140,256,30,30)
  
  //Black Beads 9
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(160,280,30,30)
  
   //Black Beads 10
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(190,290,30,30)
  
     //Black Beads 11
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(190,290,30,30)
  
  //Black Beads 12
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(222,290,30,30)
  
   //Black Beads 13
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(250,280,30,30)
  
   //Black Beads 14
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(270,255,30,30)
  
  //Black Beads 15
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(280,224,30,30)
  
  //Black Beads 16
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(283,193,30,30)
  
  //Black Beads 17
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(280,161,30,30)
  
  //Black Beads 18
  stroke(0)
  strokeWeight(3)
  fill(0);
  ellipse(265,132,30,30)
  pop()
}