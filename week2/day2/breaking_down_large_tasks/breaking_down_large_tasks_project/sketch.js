let firstR = 255;
let firstG = 0;
let firstB = 0;

let secondR = 0;
let secondG = 255;
let secondB = 0;

let thirdR = 0;
let thirdG = 0;
let thirdB = 0;


function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
}

function draw() {
   background(0, 0, 0);
   rect(mouseX, 50, 100, 100);
   rect(mouseX, 200, 100, 100);
   rect(mouseX, 350, 100, 100);
}

function mouseClicked() {
    firstB = random(0, 255);
    firstG = random(0, 255);
    firstB = random(0, 255);
    
    secondR = random(0, 255);
    secondG = random(0, 255);
    secondB = random(0, 225);
    
    thirdR = random(0, 255);
    thirdG = random(0, 255);
    thirdB = random(0, 255);
}


