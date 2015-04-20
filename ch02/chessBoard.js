// Chess Board
var oddRow = " # # # #";
var evenRow = "# # # # ";
for (var i = 1; i <= 8; i++) {
 if (i%2 == 0)
   console.log(evenRow);
 else console.log(oddRow);
}

// For any size
var size = 8;
var space = " ";
var hash = "#";
var newLine = "\n";
var str="";

for (var i=1; i<size + 1; i++) {
  for (var j=1; j< size+1; j++) {
    if (((i+j) % 2) == 0)
      str += space;
   else str += hash;
  }
  str = str + newLine;
}

console.log(str);
