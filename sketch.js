var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var p1,p2,p3,p4;
var runners
var form, player, game;
var allPlayers
var ip
var itrack

function preload(){
  ip = loadImage("images/running-men-sport-pixel-art-260nw-1526924297_burned.png")
  itrack = loadImage("images/road.png")
  
}


function setup(){
  canvas = createCanvas(displayWidth - 20,displayHeight - 100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
} 


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
