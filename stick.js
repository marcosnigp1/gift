class Stick {
  constructor(x, y, w, h, petalcolor) {
    this.position = createVector(x, y);
    this.w = w;
    this.h = h;
    this.color = petalcolor;
  }

  display() {
    // Variation one.
    push();
    noStroke();
    fill(this.color[0], this.color[1], this.color[2], this.color[3]);
    rect(this.position.x, this.position.y, this.w, this.h, 30);
    pop();
  }
}
