// Gift.
// Color codes: (222,194,207), (213,179,181), (188,143,143)

class Petal {
  constructor(x, y, w, h, petalcolor) {
    this.position = createVector(x, y);
    this.w = w;
    this.h = h;
    this.color = petalcolor;
    this.iteration = 1000;
  }

  display() {
    // Variation one.
    push();
    noStroke();
    fill(this.color[0], this.color[1], this.color[2], this.color[3]);
    ellipse(this.position.x, this.position.y, this.w, this.h);
    pop();
  }

  leave(mode, velocity) {
    if (mode == 1) {
      this.position.y -= 2 + velocity;
      this.iteration -= 1;
    } else if (mode == 2) {
      this.position.y += 2 + velocity;
      this.iteration -= 1;
    }
  }
}
