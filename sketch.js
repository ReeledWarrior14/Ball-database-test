var database;

var name;
var foodAmount;
var turn;

var pet;
var button;
var gamestate = 0;
var petCount;

var game;

function setup() {
  createCanvas(400, 400);
  background(255);

  database = firebase.database();

  game = new GAME();
  game.getState();
  game.start();
}

function draw(){
  //hi
}