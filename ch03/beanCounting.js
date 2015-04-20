// Bean Counting
function countChar(str, char) {
  var count = 0;
  for (var i=0; i < str.length; i++) {
    if (str.charAt(i) == char)
      ++count;
  }

  return count;
}

countBs = function (str) {
 var char = "B";
 return countChar(str, char);
};
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
