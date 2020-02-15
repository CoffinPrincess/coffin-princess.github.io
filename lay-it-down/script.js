const princess = { };

function setup() {
  createCanvas(innerWidth, innerHeight);

  princess.img = loadImage('img/princess.jpeg');
  
  colorMode(HSB);

  imageMode(CENTER);

  textAlign(CENTER);
  textFont('sans-serif');
  textSize(30);

  background(0);
}

function draw() {
  displayImage();
}

const displayImage = () => {
  push();
  translate(width / 2, height / 2);
  scale(0.2);
  image(princess.img, 0, 0);
  pop();
}
