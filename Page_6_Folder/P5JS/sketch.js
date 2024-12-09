
let img;
let yawn = [450,150,350,250,395,50,353]
let tall = [100,400,200,299,155,500,197]
let Days = ['Monday', 'Tuesday','Wednesday','Thursday','Friday', 'Saturday','Sunday']
let numbers = ['20','8', '16', '11', '18', '3', '16' ]
let letter_x_positioning;



function setup() {
  createCanvas(600, 600).parent("image-container");

 //upload image woman yawning
 img = loadImage('P5JS/woman-yawning.jpg')
}

function draw() {
  background(212, 228, 255);
  //image settings
  image(img,-300,-100);
  
  //square background
  push();  
  translate (width/2,height/2);
  noStroke();
  fill(28, 13, 8,120);
  rect(-250,-250,500, 500,30);
  pop();
  
  //how many times I yawn numbers
  push()
  textStyle(BOLDITALIC)
  textSize (30)
  fill (255);
  text(numbers[0], 75 , 100); 
  text(numbers[1], 155 , 400); 
  text(numbers[2], 210 , 200); 
  text(numbers[3], 280 , 298); 
  text(numbers[4], 350 , 150); 
  text(numbers[5],434 , 498); 
  text(numbers[6],490 , 193); 
  pop()
  
  //title text 
  push();
  rotate (HALF_PI);
  textSize(20);
  text ('How Many Times I Yawn In A Week (October 9th-15th) ',48,-558)
  pop();
  
  //graph height
  for (i=0; i <yawn.length; i++){
    push();
    rect(75 +i*70,tall[i],30,yawn[i],30);
    pop();
    
    push();
    noStroke();
    fill (59, 25, 13)
    rect(75 +i*70,tall[i],30,random(25,yawn[i]),30);
    
    pop();
    
    
    
  }
 daysBreakdown();
  }

// fuction for days array
function daysBreakdown(){
  letter_x_positioning = 0;
  
  //make the days to spaced next to each other
  for (let i = 0; i < Days.length; i++) {
    let theWord = Days[i];
    //console.log(theWord);
  
  //Display sentence on canvas
    textStyle(BOLDITALIC)
    textSize (13)
    fill (0);
    //for each text to have the same distance
    text(Days[i], (letter_x_positioning * 75)+49 , 570);
    
     letter_x_positioning++;   
}
}

