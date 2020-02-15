const DECAY = 0.0025;

class Particle {
  constructor(x = 0, y = 0, d = 10, c = 127) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, random(1, 2));
    this.d = d;
    this.color = c;
    this.alpha = 1;
    this.angle = 0;
    this.rotation = random(0.05, 0.3);
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.pos.add(this.vel);
    this.alpha -= DECAY;
    this.angle += this.rotation;
  }

  display() {
    push();

    translate(this.pos.x, this.pos.y);
    rotate(this.angle);

    noStroke();
    fill(this.color, 100, 100, this.alpha);
    rect(0, 0, this.d, this.d);

    pop();
  }
}

class ParticleSystem {
  constructor(x = 0, y = 0) {
    this.pos = createVector(x, y);
    this.particles = [];
  }

  insertParticle(c) {
    this.particles.push(new Particle(this.pos.x + random(0, width), this.pos.y, random(5, 30), c));
  }

  update() {
    this.particles = this.particles.filter(particle => {
      particle.update();
      return !particle.finished();
    });
  }

  display() {
    this.particles.forEach(particle => particle.display());
  }
}
