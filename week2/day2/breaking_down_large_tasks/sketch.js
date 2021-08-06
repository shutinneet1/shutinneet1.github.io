function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
}

function draw() {
    let x = random(25, 100)
    ellipse(mouseX, mouseY, x, x)
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    let a = random(120, 180)
    fill(r, g, b, a)
    let offsetX = random(-25, 25)
    let offsetY = random(-25, 25)
    ellipse( mouseX + offsetX, mouseY + offsetY, x, x)
}



