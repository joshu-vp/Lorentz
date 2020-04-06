let x = 0.01;
let y = 0;
let z = 0;

let a = 10;
let b = 28;
let c = 8.0 / 3.0;

let points = new Array();

var s = 10.0;
var r = 0;
var so = 0;
var ro = 0;



function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(HSB);
    var options = {
    preventDefault: true
  };

  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  hammer.get('pinch').set({ enable: true });
  hammer.get('rotate').set({ enable: true });  
  hammer.on("pinch", scaleRect);
  hammer.on("rotate", rotateRect);
}

function draw() {
  background(0);

  let dt = 0.01;
  let dx = (a * (y - x)) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.push(new p5.Vector(x, y, z));

  translate(0, 0, -80);
//  let camX = map(mouseX, 0, width, - 2 * width, 2 * width);
//  let camY = map(mouseY, 0, height, - 2 * width, 2 * width);
//  camera(camX, camY, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
    rotate(r + ro);
    scale(s + so);
  noFill();
  let hu = 0;
strokeWeight(1)
  beginShape();    
  for (let v of points) {
    stroke(0, 255, 255);
    vertex(v.x, v.y, v.z);
    hu += 0.1;
    if (hu > 255) {
      hu = 0;
    }
  }
  endShape();
}
function rotateRect(event) {
  console.log(event);
    if (event.isFirst){
        ro = 0
    }
  ro = radians(event.rotation);
}


function scaleRect(event) {
  console.log(event);
    if (event.isFirst){
        so = 0
    }
  so = event.scale;
}

//function touchMoved() {
//  //ellipse(mouseX, mouseY, 5, 5);
//  // prevent default
//  return false;
//}