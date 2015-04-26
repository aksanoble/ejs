//Sequence Interface

function genSeq(arr) {
  for (var i =0; i < arr.length; i++) {
  	this[i] = arr[i];
  }
  return this;
}

genSeq.prototype.forEvery = function(func){
  var obj = this;
  var i = 1;
  for (var key in obj) {
    if(obj.hasOwnProperty(key)) {
     var val = obj[key];
     func(val,i);
      i++;
    }
  }
};

function logFive(seqObj) {
  seqObj.forEvery(function(x,i){if (i<6)console.log(x);});
}


function ArraySeq(arr) {
  return new genSeq(arr);
}

function RangeSeq(a, b) {
  var arr = [];
    for (var i = a; i<=b; i++ ){
      arr.push(i);
    }
  return new genSeq(arr);
}


logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
