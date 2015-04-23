//Historical Life Expectancy
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

centuries = {};
for (var i = 16; i<=21; i++) {
centuries[i] = [];
}

ancestry.forEach(function(person){
  var cent = Math.ceil(person.died / 100);
  var aged = person.died - person.born;
  centuries[cent].push(aged);
});
for (var i = 16; i<=21; i++) {
centuries[i] = (Math.round((average(centuries[i])) * 10)) / 10;
}
console.log(centuries);
