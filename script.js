const scene = { };

function setup() {
  createCanvas(innerWidth, innerHeight);

  scene.princess = loadImage('img/princess.jpeg');
  scene.counter = 0;
  scene.particleSystem = new ParticleSystem(-10, 0);
  
  colorMode(HSB);

  rectMode(CENTER);

  imageMode(CENTER);

  textAlign(CENTER);
  textFont('sans-serif');
  textSize(30);

  background(0);
}

function draw() {
  scene.counter ++;
  if(scene.counter > 360) { scene.counter = 0; }

  background(0);

  push();

  scene.particleSystem.insertParticle(scene.counter);
  scene.particleSystem.update();
  scene.particleSystem.display();

  pop();

  displayImage();
  displayText(scene.counter);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const displayImage = () => {
  push();
  translate(width / 2, height / 2);
  scale(0.5);
  strokeWeight(30);
  stroke(60, 100, 100);
  rect(-1, -1, scene.princess.width, scene.princess.height);
  image(scene.princess, 0, 0);
  pop();
}

const displayText = c => {
  push();
  translate(width / 2, 7 * height / 8);
  stroke(0, 0, 100);
  fill(c, 100, 90);
  text('Karlita mi princesa preciosa', 0, 0);
  text('TE AMO \u2764', 0, 30);
  pop();
}
