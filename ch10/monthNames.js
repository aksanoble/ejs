//Month Names
(function(exports){
  var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August",
             "September", "October", "November", "December"];

  exports.name = function(number) {return months[number];};
  exports.number = function(name) {return months.indexOf(name);};

})(this.month = {});

console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10
