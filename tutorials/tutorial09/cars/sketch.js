const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 0,
    y: 400,
    width: 150,
    speed: 3,
    color: 'hotpink'
};

const c2 = {
    x: 1000,
    y: 200,
    width: 150,
    speed: -3,
    color: 'green'
};


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    if (c1.x > canvasWidth) {
        c1.x = 0;
    }

    if (c2.x < 0) {
        c2.x = canvasWidth;
    }

    c1.x += c1.speed;
    c2.x += c2.speed;
   

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x + 10, c2.y + 10, c2.width + 10, c2.color);
    
    // draw the grid (optional -- feel free to remove this line):
   
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
