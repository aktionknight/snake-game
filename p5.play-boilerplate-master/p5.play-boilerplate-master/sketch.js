
var snake;
var  rez = 20;
var  food;
var w;
var h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}


function draw() {
  scale(rez);
  background("yellow");
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
   
 background("red")

    fontColor = "red"
    fontSize = 40;
   text("END GAME",20,20);
    
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}


function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

