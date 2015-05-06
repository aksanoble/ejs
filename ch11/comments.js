//Comments in Egg
function skipSpace(string) {
  return string.replace(/#.*|\s+/g,"");
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()".replace(/#.*|\s+/g,"")));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}
