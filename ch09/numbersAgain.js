//Numbers Again
//First attempt, buggy but clears tests
//var number = /^(([+-.]?\d+)|(\d+[.]\d*)|(\d+[eE]?[+-]?\d*[.]?\d*[eE][+-]?\d+))$/;
//After checking out the solution
var number =   /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;
// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12","1e.3e4"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});
