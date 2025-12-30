// Gift.
// Color codes: (222,194,207), (213,179,181), (188,143,143)

let petals_group1 = [];
let petals_group2 = [];
let petals_group3 = [];
let petals_group4 = [];
let petals_group5 = [];
let petals_group6 = [];
let petals_group7 = [];
let petals_group8 = [];

let stick;

const petalConfigs = [
  [0.35, 0.205, 0.05, 0.05, [222, 194, 207, 255]],
  [0.37, 0.19, 0.04, 0.05, [213, 179, 181, 200]],
  [0.39, 0.185, 0.049, 0.07, [188, 143, 143, 230]],
  [0.4, 0.2, 0.045, 0.05, [213, 179, 181, 200]],
  [0.38, 0.22, 0.09, 0.08, [213, 179, 181, 255]],
];

let animation_started = false;

function preload() {
  soundFormats("mp3", "ogg");
  font = loadFont("font/AmsterdamHandwriting.ttf");
  img = loadImage("images/sun.png");
  heart = loadImage("images/heart.png");
  song = loadSound("song/song.mp3");
}

function createPetalGroup(groupArray) {
  const petals = petalConfigs.map(
    (cfg) =>
      new Petal(
        width * cfg[0],
        height * cfg[1],
        width * cfg[2],
        height * cfg[3],
        cfg[4]
      )
  );

  groupArray.push(petals[4], petals[0], petals[1], petals[2], petals[3]);
}

function setup() {
  frameRate(60);
  rectMode(CENTER);
  angleMode(DEGREES);
  pixelDensity(1);
  createCanvas(720, 1280);

  // Create petals
  createPetalGroup(petals_group1);
  createPetalGroup(petals_group2);
  createPetalGroup(petals_group3);
  createPetalGroup(petals_group4);
  createPetalGroup(petals_group5);
  createPetalGroup(petals_group6);
  createPetalGroup(petals_group7);
  createPetalGroup(petals_group8);

  // The stick.
  stick = new Stick(
    width * 0.375,
    height * 0.5,
    width * 0.05,
    height * 0.5,
    [40, 40, 40, 255]
  );

  heart.resize(400, 400);
}

function draw() {
  translate(-width * 0.11, height * 0.04);

  if (petals_group6[0].iteration < 700 && petals_group6[0].iteration > -300) {
    background(40, 40, 40, 255);
    stick.display();
  } else if (
    petals_group6[0].iteration < -300 &&
    petals_group6[0].iteration > -400
  ) {
    background(255, 255, 0, 5);
  } else if (
    petals_group6[0].iteration < -400 &&
    petals_group6[0].iteration > -1000
  ) {
    background(180, 180, 0, 100);
  } else if (
    petals_group6[0].iteration < -1000 &&
    petals_group6[0].iteration > -2050
  ) {
    background(230, 230, 230, 100);
  } else if (petals_group6[0].iteration < -2051) {
    background(230, 230, 230, 5);
  } else {
    background(162, 85, 87, 5);
    stick.display();
  }

  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  //////////// PHASE ONE //////////////////////////////
  ////////////////////////////////////////////////////////////
  //////////////////////////////
  ////////////////////////////////////////////////////////////

  // Display each petal in group 1.
  for (let i = 0; i < petals_group1.length; i++) {
    push();
    translate(width * -0.2, height * 0.12);
    rotate(-25);
    petals_group1[i].display();
    pop();
  }

  // Display each petal in group 2.
  for (let i = 0; i < petals_group2.length; i++) {
    push();
    scale(-1, 1);
    translate(-width * 0.75, 0);
    rotate(0);
    petals_group2[i].display();
    pop();
  }

  // Display each petal in group 3.
  for (let i = 0; i < petals_group3.length; i++) {
    push();
    translate(width * 0.25, height * -0.06);
    rotate(25);
    petals_group3[i].display();
    pop();
  }

  // Display each petal in group 4.
  for (let i = 0; i < petals_group4.length; i++) {
    push();
    translate(width * 0.85, height * 0.04);
    rotate(90);
    petals_group4[i].display();
    pop();
  }

  // Display each petal in group 5.
  for (let i = 0; i < petals_group5.length; i++) {
    push();
    translate(width * 1, height * 0.33);
    rotate(140);
    petals_group5[i].display();
    pop();
  }

  // Display each petal in group 6.
  for (let i = 0; i < petals_group6.length; i++) {
    push();
    scale(-1, 1);
    translate(width * 0.1, height * 0.04);
    rotate(90);
    petals_group6[i].display();
    pop();
  }

  // Display each petal in group 7.
  for (let i = 0; i < petals_group7.length; i++) {
    push();
    scale(-1, 1);
    translate(width * 0.25, height * 0.33);
    rotate(140);
    petals_group7[i].display();
    pop();
  }

  // Display each petal in group 8.
  for (let i = 0; i < petals_group1.length; i++) {
    push();
    scale(-1, -1);
    translate(-width * 0.755, -height * 0.54);
    rotate(0);
    petals_group8[i].display();
    pop();
  }

  if (animation_started == true) {
    for (let i = 0; i < petals_group1.length; i++) {
      petals_group1[i].leave(1, i);
      petals_group1[i].w += 0.9;
      petals_group1[i].h += 0.3;
    }
    if (petals_group1[0].iteration < 990) {
      for (let i = 0; i < petals_group2.length; i++) {
        petals_group2[i].leave(1, i);
        petals_group2[i].w += 0.9;
        petals_group2[i].h += 0.3;
      }
    }
    if (petals_group2[0].iteration < 990) {
      for (let i = 0; i < petals_group3.length; i++) {
        petals_group3[i].leave(1, i);
        petals_group3[i].w += 0.9;
        petals_group3[i].h += 0.3;
      }
    }
    if (petals_group3[0].iteration < 990) {
      for (let i = 0; i < petals_group4.length; i++) {
        petals_group4[i].leave(1, i);
        petals_group4[i].w += 0.9;
        petals_group4[i].h += 0.3;
      }
    }
    if (petals_group4[0].iteration < 990) {
      for (let i = 0; i < petals_group5.length; i++) {
        petals_group5[i].leave(1, i);
        petals_group5[i].w += 0.9;
        petals_group5[i].h += 0.3;
      }

      stick.w += 3;
      stick.h += 3;
    }

    if (petals_group5[0].iteration < 990) {
      for (let i = 0; i < petals_group8.length; i++) {
        petals_group8[i].leave(1, i);
        petals_group8[i].w += 0.9;
        petals_group8[i].h += 0.3;
      }
    }
    if (petals_group8[0].iteration < 990) {
      for (let i = 0; i < petals_group7.length; i++) {
        petals_group7[i].leave(1, i);
        petals_group7[i].w += 0.9;
        petals_group7[i].h += 0.3;
      }
    }
    if (petals_group7[0].iteration < 990) {
      for (let i = 0; i < petals_group6.length; i++) {
        petals_group6[i].leave(1, i);
        petals_group6[i].w += 0.9;
        petals_group6[i].h += 0.3;
      }
    }

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //////////// PHASE TWO //////////////////////////////
    ////////////////////////////////////////////////////////////
    //////////////////////////////
    ////////////////////////////////////////////////////////////

    if (petals_group6[0].iteration < 700 && petals_group6[0].iteration > 300) {
      push();
      noStroke();
      fill(255, 255, 255, map(petals_group6[0].iteration, 700, 300, 0, 255));
      textSize(width * 0.05);
      textFont(font);
      text(
        "Love, describing what I\nfeel for you is very hard.",
        width * 0.16,
        height * 0.25
      );
      pop();
    }

    if (petals_group6[0].iteration < 300 && petals_group6[0].iteration > -100) {
      push();
      textAlign(CENTER);
      noStroke();
      fill(255, 255, 255, map(petals_group6[0].iteration, 300, -100, 0, 255));
      textSize(width * 0.05);
      textFont(font);
      text("It is like an explosion\nof\n", width * 0.39, height * 0.25);
      pop();
    }

    if (
      petals_group6[0].iteration > -500 &&
      petals_group6[0].iteration < -101
    ) {
      push();
      textAlign(CENTER);
      noStroke();
      fill(255, 255, 255, map(petals_group6[0].iteration, -100, -300, 255, 0));
      textSize(width * 0.05);
      textFont(font);
      text("It is like an explosion\nof\n", width * 0.39, height * 0.25);
      pop();

      push();
      noStroke();
      fill(255, 255, 0, map(petals_group6[0].iteration, -100, -500, 0, 255));
      textSize(width * 0.1);
      textFont(font);
      text("Happiness", width * 0.17, height * 0.35);
      pop();
    }

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //////////// PHASE THREE //////////////////////////////
    ////////////////////////////////////////////////////////////
    //////////////////////////////
    ////////////////////////////////////////////////////////////

    if (
      petals_group6[0].iteration > -1000 &&
      petals_group6[0].iteration < -500
    ) {
      push();
      textAlign(CENTER);
      noStroke();
      fill(255, 255, 255, map(petals_group6[0].iteration, -500, -800, 0, 255));
      textSize(width * 0.06);
      textFont(font);
      text("This is how I feel", width * 0.37, height * 0.15);
      pop();

      push();
      textAlign(CENTER);
      noStroke();
      fill(255, 255, 255, map(petals_group6[0].iteration, -500, -800, 0, 255));
      textSize(width * 0.08);
      textFont(font);
      text("alive,\nloved,\ncared,\nappreciated.", width * 0.38, height * 0.27);
      pop();
    }

    if (
      petals_group6[0].iteration > -1500 &&
      petals_group6[0].iteration < -1000
    ) {
      push();
      textAlign(CENTER);
      noStroke();
      fill(0, 0, 0, map(petals_group6[0].iteration, -1000, -1500, 255, 0));
      textSize(width * 0.05);
      textFont(font);
      text("And also, in\npeace.\n", width * 0.39, height * 0.25);
      pop();
    }

    if (
      petals_group6[0].iteration > -2000 &&
      petals_group6[0].iteration < -1500
    ) {
      push();
      textAlign(CENTER);
      noStroke();
      fill(0, 0, 0, map(petals_group6[0].iteration, -1500, -2000, 0, 255));
      textSize(width * 0.05);
      textFont(font);
      text(
        "For the most wonderful\nwoman, for my love\n and my dearest sun.",
        width * 0.37,
        height * 0.22
      );
      pop();

      push();
      tint(255, map(petals_group6[0].iteration, -1500, -2000, 0, 255));
      image(img, width * 0.24, height * 0.32);
      pop();
    }

    if (petals_group6[0].iteration < -2050) {
      push();
      noStroke();
      fill(255, 146, 223, 220);
      circle(
        width * 1.2 + map(petals_group6[0].iteration, -2050, -3000, -0, -4000),
        height * 0.25,
        width * 0.5
      );
      pop();

      push();
      noStroke();
      fill(75, 150, 255, 220);
      circle(
        width * -0.3 + map(petals_group6[0].iteration, -2050, -3000, 0, 4000),
        height * 0.5,
        width * 0.5
      );
      pop();

      push();
      noStroke();
      fill(253, 230, 93, 220);
      circle(
        width * -0.3 + map(petals_group6[0].iteration, -2050, -3000, 0, 4000),
        height * 0.0,
        width * 0.5
      );
      pop();
    }

    if (petals_group6[0].iteration < -2300) {
      push();
      tint(255, map(petals_group6[0].iteration, -2300, -4300, 0, 30));
      image(heart, width * 0.1, height * 0.13);
      pop();

      push();
      textAlign(CENTER);
      textStyle(BOLD);
      fill(0, 0, 0, map(petals_group6[0].iteration, -2300, -4300, 0, 255));
      textSize(width * 0.06);
      textFont(font);
      text("Happy", width * 0.38, height * 0.22);
      pop();

      push();
      textAlign(CENTER);
      textStyle(BOLD);
      fill(255, 255, 0, map(petals_group6[0].iteration, -2300, -4300, 0, 255));
      textSize(width * 0.075);
      textFont(font);
      text("20th Birthday", width * 0.39, height * 0.3);
      pop();

      push();
      textAlign(CENTER);
      textStyle(BOLD);
      fill(0, 0, 0, map(petals_group6[0].iteration, -2300, -4300, 0, 255));
      textSize(width * 0.06);
      textFont(font);
      text("MY LOVE!!!", width * 0.42, height * 0.37);
      pop();
    }
  }
}

function touchStarted() {
  if (getAudioContext().state !== "running") {
    userStartAudio();
  }

  if (!animation_started) {
    animation_started = true;
    song.loop(); // loop is safer than play on iOS
  }
}
