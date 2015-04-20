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
 return countChar(str, "B");
};
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
