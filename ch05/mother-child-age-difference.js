//Mother-Child age difference
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var difference = [];
ancestry.forEach(function(person){
  if (person.mother in byName) {
    difference.push(person.born - byName[person.mother].born);
  }
});

console.log(average(difference));
// → 31.2
