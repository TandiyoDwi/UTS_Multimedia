let cloudX = 0; 
let carX = 0; 

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(135, 206, 250); 
  
  drawSun();
  drawMountains();
  drawRoad();
  drawBirds();
  drawTrees();
  drawCar(carX, height - 130);
  
  drawCloud(cloudX, 80); 
  cloudX += 0.5;
  if (cloudX > width + 50) {
    cloudX = -50; 
  }

  drawStaticCloud(600, 100); 

 
  carX += 2;
  if (carX > width + 50) {
    carX = -100; 
  }
}

function drawSun() {
  for (let r = 50; r > 0; r -= 5) {
    fill(255, 204, 0, 255 - r * 5);
    ellipse(360, 400, r * 2, r * 2);
  }
}

function drawMountains() {
  fill(80, 130, 100);
  triangle(100, 500, 250, 300, 400, 500);
  triangle(300, 500, 450, 350, 600, 500);
}

function drawBirds() {
  fill(0);
  let birdPositions = [
    [120, 100], [140, 110], [160, 90], [180, 105],
    [200, 80], [220, 100], [240, 85], [260, 90],
    [280, 110], [300, 95], [320, 100], [340, 110],
    [360, 90], [380, 105], [400, 80], [420, 100]
  ];
  for (let pos of birdPositions) {
    drawBird(pos[0], pos[1]);
  }
}

function drawBird(x, y) {
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(x, y, 20, 15, PI, TWO_PI);
  arc(x + 20, y, 20, 15, PI, TWO_PI);
}

function drawRoad() {
  fill(50);
  rect(0, height - 100, width, 100);
  fill(255);
  for (let i = 0; i < width; i += 60) {
    rect(i, height - 60, 40, 10);
  }
}

function drawTrees() {
  for (let i = 100; i < width; i += 150) {
    drawTree(i, height - 120);
  }
}

function drawTree(x, y) {
  fill(139, 69, 19);
  rect(x - 10, y, 20, 40); 
  fill(34, 139, 34);
  ellipse(x, y - 20, 60, 60); 
  ellipse(x - 20, y, 60, 60); 
  ellipse(x + 20, y, 60, 60); 
}

function drawCloud(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 60, 40);
  ellipse(x + 30, y, 50, 30);
  ellipse(x - 30, y, 50, 30);
}

function drawStaticCloud(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 60, 40);
  ellipse(x + 30, y, 50, 30);
  ellipse(x - 30, y, 50, 30);
}

function drawCar(x, y) {
  fill(255, 0, 0);
  rect(x, y, 100, 40); 
  rect(x + 20, y - 30, 60, 30); 

  fill(135, 206, 250);
  rect(x + 25, y - 25, 25, 20); 
  rect(x + 50, y - 25, 25, 20); 

  fill(0);
  ellipse(x + 20, y + 30, 30, 30); 
  ellipse(x + 80, y + 30, 30, 30); 
  fill(100);
  ellipse(x + 20, y + 30, 10, 10); 
  ellipse(x + 80, y + 30, 10, 10); 
}
