// task 1
let yPos = 250;
 
function setup() {
   createCanvas(500, 500);
   background(0);
}
 
function draw() {
   background(0, 20);
 
   fill(0, 255, 0);
   ellipse(250, yPos, 50, 50);
 
   yPos += 5;
   if (yPos > 525) {
       yPos = -25;
   }
}
//task 2
let color = 'green';
let r = 0;
let g = 255;
let b = 0;
function mouseClicked() {
    if (color == 'green') {
        let newr = random(0, 255);
        let newg = random(0, 255);
        let newb = random(0, 255);
        fill(newr, newg, newb);
        noStroke();
    } 
    else {
        fill(newr, newg, newb);
    }

 xPos = 250;
 yPos = 0;
}

