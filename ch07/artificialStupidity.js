//Smart Plant Eater
function SmartPlantEater() {
  this.energy = 20;
}

//After referring to the hint tweaked reproduction energy & plant eating conditions
SmartPlantEater.prototype.act = function(context) {
  var space = context.find(" ");
  if (this.energy > 80 && space)
    return {type: "reproduce", direction: space};
  var plant = context.find("*");
  var plants = context.findAll("*");
  if (plants.length>2)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));
