import Particle from '../Particleer/Particle'

export default function( sketch ) {
// Variables
    var inc = 0.1;
    var scl = 50,
        zoff = 0;
    var cols, rows, movement = 0;
    var particles = [];
    var flowfield;
    var img;
    var maxSpeed;
    var t, calcX = 0,
        calcY = 0,
        currX = 0,
        currY = 0,
        targetX = 0,
        targetY = 0;


    sketch.setup = function() {
      width = document.getElementById('visualizer').clientWidth;
      height = document.getElementById('visualizer').clientHeight;

      sketch.createCanvas(width, height);
      cols = sketch.floor(width / scl);
      rows = sketch.floor(height / scl);
      flowfield = new Array(cols);
      var numParticles = Math.floor((2500 / 1920) * width);
      for (var i = 0; i < numParticles; i++) {
          particles[i] = new Particle(sketch);
      }
      background(255);
    };
  
    sketch.draw = function() {
      sketch.noStroke() 
      sketch.fill(245, 10);
      sketch.rect(0, 0, width, height);
      sketch.noFill();
      var yoff = 0;
  
      for (var y = 0; y < rows; y++) {
          var xoff = 0;
          for (var x = 0; x < cols; x++) {
              var index = (x + y * cols);
              var angle = sketch.noise(xoff, yoff, zoff) * TWO_PI * 4;
              var v = p5.Vector.fromAngle(angle);
              v.setMag(1);
              flowfield[index] = v;
              xoff += inc;
  
          }
          yoff += inc;
          zoff += 0.001;
      }
  
      for (var i = 0; i < particles.length; i++) {
          particles[i].follow(flowfield);
          particles[i].update();
          particles[i].edges();
          particles[i].scatter();
          particles[i].show();
      }

    };



 
  };
  
