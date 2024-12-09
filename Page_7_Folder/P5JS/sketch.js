// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);

//   circle(50, 50, 25);
// }


// let enemyX;
// let enemyY;  
// let bulletX;
// let bulletY;
let canClick;
let delayTimer; 
let screen = 0; // menu screen
let bullets = [];
let enemies = [];
let score = 0;
let bg, fl, mainCharacter, enemyImg, bc;
let mainCharacterWidth = 200;
let mainCharacterHeight =300;
let enemyWidth = 90;
let enemyHeight = 90;
// let buttonX, buttonY, buttonW, buttonH;
// let buttonX1, buttonY1, buttonW1, buttonH1;

let maxEnemies = 20; // Initial maximum number of enemies
let defeatedEnemies = 0; // Track defeated enemies
let timer = 0; // Timer to spawn additional enemies every 10 seconds
let enemySpeed = 3; // Starting speed of enemies

let menuButtonX = 300 -5;
let menuButtonY = 650;
let menuButtonWidth = 200;
let menuButtonHeight = 75;

let playButtonX = 300 -5;
let playButtonY = 700;
let playButtonWidth = 230;
let playButtonHeight = 150;

let song;
let song2;

function preload() {
  c1 = loadImage("P5JS/1.png");
  c2 = loadImage("P5JS/2.png");
  c3 = loadImage("P5JS/3.png");
  c4 = loadImage("P5JS/4.png");
  c5 = loadImage("P5JS/5.png");
  bc = loadImage("P5JS/portfolio.png");
  sb = loadImage("P5JS/portfolio (1).png");
  fl = loadImage("P5JS/background.jpg");
  ws = loadImage("P5JS/9.png");
  ls = loadImage("P5JS/8.png");
  mainCharacter = loadImage("P5JS/kucing.PNG");
  enemyImg = loadImage("P5JS/anjing.png");
  
  
  song = loadSound('P5JS/excuse-me-cat-150613.mp3');
  song2 = loadSound('P5JS/action-epic-cinematic-victory-7195.mp3');
}



function setup() { 
  createCanvas(600, 900).parent("image-container");
  
  imageMode(CENTER);
  rectMode(CENTER);

  // Spawn initial enemy
  enemies.push({
    x: random(0, width),
    y: random(-800, 0),
  });
}

function draw() {
  background(220);
  if (screen === 0) {
    menuScreen();
  } else if (screen === 1) {
    comic1Screen();
  } else if (screen === 2) {
    comic2Screen();
  } else if (screen === 3) {
    comic3Screen();
  } else if (screen === 4) {
    comic4Screen();
  } else if (screen === 5) {
    gameScreen();
  } else if (screen === 6) {
    gameOverScreen();
  } else if (screen === 7) {
    winScreen();
  }
}

function menuScreen() {
  // background(c1);
  image(c1, width/2, height/2, width, height); // background

   Button(menuButtonX, menuButtonY, menuButtonWidth, menuButtonHeight,0);
  //rect(menuButtonX, menuButtonY, menuButtonWidth, menuButtonHeight);
 
  
  if (song2.isPlaying())
    song2.stop();
  else if (!song.isPlaying())
    song.play();
}

function comic1Screen() {
  //background(c2);
  image(c2, width/2, height/2, width, height); 
  if (!song.isPlaying())
    song.play();
}

function comic2Screen() {
   image(c3, width/2, height/2, width, height); 
  //background(c3);
  if (!song.isPlaying())
    song.play();
}

function comic3Screen() {
  //background(c4);
   image(c4, width/2, height/2, width, height); 
  if (!song.isPlaying())
    song.play();
}

function comic4Screen() {
   image(c5, width/2, height/2, width, height); 
  Button(playButtonX, playButtonY, playButtonWidth, playButtonHeight,0)
  //rect(playButtonX, playButtonY, playButtonWidth, playButtonHeight);
  // background(c5);
  //image(sb, buttonX1, buttonY1, buttonW1, buttonH1);
  if (song.isPlaying())
    song.stop();
  else if (!song2.isPlaying())
    song2.play();
}

function mouseClicked() {
  if (screen === 5) {
    let bullet = {
      x: mouseX, // Start bullet at the mainCharacter's x position
      y: 800// Start bullet at the top edge of the main character
    };
    bullets.push(bullet);
  }
}

function gameScreen() {
  image(fl, width / 2, height / 2, width, height);

  if (song.isPlaying()) {
    song.stop();
  } else if (!song2.isPlaying()) {
    song2.play();
  }

  // Update timer, enemy count, and speed every 10 seconds
  if (frameCount % 60 === 0) {
    timer++;
    if (timer % 3 === 0) { // every 3 seconds
      maxEnemies++;
      enemySpeed += 0.5; // Increase speed slightly every 10 seconds
      enemies.push({
        x: random(0, width - enemyWidth),
        y: random(-800, 0),
      });
    }
  }

  // Player's main character position
  let mainCharacterX = mouseX;
  let mainCharacterY = 800;

  // Display the main character image
  if (mouseX > width) {
    image(mainCharacter, width, mainCharacterY, mainCharacterWidth, mainCharacterHeight);
  } else {
    image(mainCharacter, mainCharacterX, mainCharacterY, mainCharacterWidth, mainCharacterHeight);
  }

  // Update and display bullets
  for (let bullet of bullets) {
    bullet.y -= 9;
    circle(bullet.x, bullet.y, 10);
  }

  // Update and display enemies, and check for player collision
  for (let i = enemies.length - 1; i >= 0; i--) {
    let enemy = enemies[i];
    enemy.y += enemySpeed;
    image(enemyImg, enemy.x, enemy.y, enemyWidth, enemyHeight);
    //rect(enemy.x,enemy.y,enemyWidth, enemyHeight)

    if (
      enemy.x < mainCharacterX &&
      enemy.x + enemyWidth > mainCharacterX &&
      enemy.y < mainCharacterY &&
      enemy.y + enemyHeight > mainCharacterY
    ) {
      screen = 6; // Game Over
      return;
    }
  }

  // Check for bullet-enemy collisions
  for (let i = enemies.length - 1; i >= 0; i--) {
    let enemy = enemies[i];
    for (let j = bullets.length - 1; j >= 0; j--) {
      let bullet = bullets[j];
      if (
        bullet.x > enemy.x &&
        bullet.x < enemy.x + enemyWidth &&
        bullet.y > enemy.y &&
        bullet.y < enemy.y + enemyHeight
      ) {
        enemies.splice(i, 1);
        bullets.splice(j, 1);

        defeatedEnemies++;
        score++;

        if (score >=50) { // Win condition
          screen = 7;
          return;
        } else if (enemies.length < maxEnemies) {
          enemies.push({
            x: random(0, width - enemyWidth),
            y: random(-800, 0),
          });
        }
        break;
      }
    }
  }

  // Display score
  fill("black");
  textSize(30);
  textAlign(CENTER);
  text(`Score: ${score}`, width / 2, 30);
}

function gameOverScreen() {
  image(ls, width/2, height/2, width, height); 
  if (!delayTimer) {
    canClick = false; // Disable clicking initially
    delay(() => {
      canClick = true; // Enable clicking after 1 seconds
    }, 25);
  }

}

function winScreen() {
  image(ws, width/2, height/2, width, height); 
  if (!delayTimer) {
    canClick = false; // Disable clicking initially
    delay(() => {
      canClick = true; // Enable clicking after 1 seconds
    }, 25);
  }
}

function delay(callback, time) {
  delayTimer = setTimeout(() => {
    callback();
    delayTimer = null; // Reset delay timer
  }, time);
}

function Button (x, y, w, h, transparency) {
  push();
    noStroke();
    fill(0, 0, 0, transparency);
    rect(x, y, w, h);
  pop();
}


function mousePressed() {
  if (screen === 0) {
    if (
      mouseX > menuButtonX - menuButtonWidth/2 &&
      mouseX < menuButtonX + menuButtonWidth/2 &&
      mouseY > menuButtonY - menuButtonHeight/2 &&
      mouseY < menuButtonY + menuButtonHeight/2) {
      screen = 1;
    }
  } else if (screen >= 1 && screen < 4) {
    screen++;
  } else if (screen === 4) {
    if (mouseX > playButtonX - playButtonWidth/2 &&
      mouseX < playButtonX + playButtonWidth/2 &&
      mouseY > playButtonY - playButtonHeight/2 &&
      mouseY < playButtonY + playButtonHeight/2) {
      screen = 5;
    }
  } else if ((screen === 6 || screen === 7) && canClick) {
    resetGame();
  }
}



function resetGame() {
  screen = 0;
  score = 0;
  bullets = [];
  enemies = [];
  defeatedEnemies = 0;
  maxEnemies = 10;
  enemySpeed = 3;
  timer = 0;
  enemies.push({
    x: random(0, width - enemyWidth),
    y: random(-800, 0),
  });
  loop();
}
