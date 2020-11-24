var sprite1;
var position;
var database;

var a = 3;
var b = 0;

function setup() {
  createCanvas(400, 400);

  database = firebase.database();
  sprite1 = createSprite(200, 200, 20, 20);

  var car = database.ref("Ball/Position/");
  car.on("value", readingDatabase, showError);
}

function draw() {
  background(220);

  if (keyDown(UP_ARROW)){
    writingInDatabase(0, -3);
  }
  if (keyDown(LEFT_ARROW)){
    writingInDatabase(-3, 0);
  }
  if (keyDown(RIGHT_ARROW)){
    writingInDatabase(3, 0);
  }
  if (keyDown(DOWN_ARROW)){
    writingInDatabase(a, b);
  }
  
  drawSprites();
}

function writingInDatabase(x, y){
  database.ref('Ball/Position').set({
    'X': position.x + x,
    'Y': position.y + y,
  });
}

function readingDatabase(Data){
  position = Data.val();
  // console.log(position);
  sprite1.x = position.x;
  sprite1.y = position.y;

}

function showError(){
  console.log("Error");
}