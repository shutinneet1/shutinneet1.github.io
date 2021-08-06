//function setup() {
    //createCanvas(500, 500);
    //background(0, 0, 0);
    //noStroke();  
//} 
//function draw() {
    //ellipse(mouseX, mouseY, 25, 25);

    
//}
//function mouseClicked(){
    //let r = random(0, 255);
    //let g = random(0, 255);
    //let b = random(0, 255);
    //fill(r, g, b);
    //ellipse(mouseX, mouseY, 100, 100);

//}
//part 1

function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);
 }
  
 function draw() {
  
 }
  
 function mouseClicked() {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    fill(r, g, b);
    let x = random(25, 100);
    ellipse(mouseX, mouseY, x, x);
 }
//part 2
 function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
 }
      
 function draw() {
    line(250, 250, mouseX, mouseY);
 } 
     
 function mouseClicked() {
    line(250, 250, mouseX, mouseY);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    fill(r, g, b);

 }
     
    


 
 