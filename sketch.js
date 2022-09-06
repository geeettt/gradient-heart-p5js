//  canvas for p5.js sketch

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    colorMode(RGB);
    noSmooth(); 


  }
  function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
  }


// draw function with heart 
// function draw() {
//     background(0);
//     translate(width / 2, height / 2);
//     rotate(-45);
//     let h = map(sin(frameCount * 2), -1, 1, 0, 255);
//     fill(h, 255, 255);
//     heart(0, 0, 200);
//   }
// draw function for gradient color 
function draw() {
    background(255,192,203);
    translate(width / 2, height / 2);
    rotate(-45);
    let h = map(sin(frameCount * 2), -1, 1, 0, 255);
    fill(h, 255, 255);
    heart(0, 0, 200);
  }