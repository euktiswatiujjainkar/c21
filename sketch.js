var sun,
    mercury,
    venus,
    mars,
    earth,
    jupiter,
    saturn,
    uranus,
    neptune;
var sunImg, mercuryImg, venusImg, earthImg, marsImg, jupeterImg, saturnImg, uranusImg, neptuneImg;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;



function setup() {
    createCanvas(800, 800);
    sun = createSprite(0, 0);
    sun.scale = 0.2;
    sun.setCollider("circle", -85, -60, 140);
    

    mercury = createSprite(70, 50);
    mercury.scale = 0.1;
    mercury.setCollider("circle", 0, 0, 300);
    

    venus = createSprite(210, 60);
    venus.scale = 0.15;

    earth = createSprite(150, -18);
    earth.scale = 0.22;

    mars = createSprite(30, 220);
     mars.scale = 0.2;

    jupiter = createSprite(-180, 210);
    jupiter.scale = 0.3;

    saturn = createSprite(340, -30);
    saturn.scale = 0.3;

    uranus = createSprite(220, 350);
    uranus.scale = 0.2;

    neptune = createSprite(-340, -320);
    neptune.scale = 0.1;

}

function draw() {
    background(0);


    angleMode(DEGREES);
    translate(width / 2, height / 2);
    rotate(angle);

    if (sun.collide(mercury)) {
        mercury.destroy();
    }

    if (sun.collide(earth)) {
        earth.destroy();
    }

    if (sun.collide(venus)) {
        venus.destroy();
    }

    if (sun.collide(mars)) {
        mars.destroy();
    }
    if (sun.collide(uranus)) {
        uranus.destroy();
    }

    if (sun.collide(jupiter)) {
        jupiter.destroy();
    }

    if (sun.collide(neptune)) {
        neptune.destroy();
        mars.destroy();
        earth.destroy();
        jupiter.destroy();
        mercury.destroy();
        uranus.destroy();
        venus.destroy();
    }

    if (sun.collide(saturn)) {
        saturn.destroy();
    }

    angle = angle + anglespeed;
    if (frameCount % 1 === 0) {
        sun.scale = sun.scale + 0.01;
    }
    drawSprites();
}