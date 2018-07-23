import p5 from 'p5'
export default function Particle(sketch, width, height, cols, color) {
    this.pos = sketch.createVector(sketch.random(width), sketch.random((height - 100)));
    this.vel = sketch.createVector(0, 0);
    this.acc = sketch.createVector(0, 0);
    this.maxspeed = 10.5;
    this.prevPos = this.pos.copy();
    this.color = color;

    this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.follow = function (vectors) {
        var x = Math.floor(this.pos.x / 50);
        var y = Math.floor(this.pos.y / 50);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }
    this.scatter = function (vectors) {
        this.pos.x += sketch.random(-0.9, 0.9);
        this.pos.y += sketch.random(-0.9, 0.9);
    }

    this.applyForce = function (force) {
        this.acc.add(force);
    }
    this.show = function () {
        sketch.stroke(color);
        sketch.strokeWeight(0.5);
        sketch.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }
    this.updatePrev = function () {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }
    this.edges = function () {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }
}