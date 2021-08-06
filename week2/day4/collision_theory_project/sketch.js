let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let togepiImage;
let mushroomImage;

let score = 0;

function preload() {
    togepiImage = loadImage("images/togepi.png");
    
    
    mushroomImage = loadImage("images/mushroom.png");
}


function setup() {
    createCanvas(500, 500);
    noStroke();
    image(togepiImage);
    image(mushroomImage);
    imageMode(CENTER);
    
}

function draw() {
    background(0);
    image(togepiImage, myXPos, myYPos, 50, 50);
    image(mushroomImage, enemyXPos, enemyYPos, 50, 50);
    text("score:" +  score, 140, 480);
 
   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }
 
   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }
 
   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }
 
   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }
 
   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;
 
   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;
 
   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
 
   }
 
   else {
       enemyXPos = random(0, 500);
       enemyYPos = random(0, 500);
       score += 1;
       
    }
}

