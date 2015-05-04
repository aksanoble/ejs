// Electronic Life jotted in one file
var grid = require('grid');
var worl = require('world');
var simpleEcosytem = require('simpleEcosystem');
var Vector = grid.vector;
var Grid = grid.grid;
var directions = grid.directions;
var directionNames = grid.directionNames;
var World = worl.world;
var View = worl.view;
var Wall = simpleEcosytem.wall;
var BouncingCritter = simpleEcosytem.bouncingCritter;


var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var world = new World(plan, {"#": Wall,
                             "o": BouncingCritter});
function turning() {
  world.turn();
  console.log(world.toString());
}

//Run this to see sudo animation via the console
setInterval(turning, 500);
