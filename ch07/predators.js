//Pchredators. First Attempt. Not stable ecosystem
function SmartPlantEater() {
  this.energy = 20;
}

SmartPlantEater.prototype.act = function(context) {
  var space = context.find(" ");
  if (this.energy > 40 && space)
    return {type: "reproduce", direction: space};
  var plant = context.find("*");
  var plants = context.findAll("*");
  if (plants.length>2)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};
function Tiger() {
  this.energy = 200;
}
Tiger.prototype.act = function(context) {
  var space = context.find(" ");
  if (this.energy > 300 && space)
    return {type: "reproduce", direction: space};
  var plantEater = context.find("O");
  var plantEaters = context.findAll("O");
  if (plantEater)
    return {type: "eat", direction: plantEater};
  if (space)
    return {type: "move", direction: space};
};

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));
