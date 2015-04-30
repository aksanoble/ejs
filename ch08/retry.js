//Retry
function MultiplicatorUnitFailure(message) {
  this.message = "Arrgh!";
  this.stack = (new Error()).stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    try {
     return primitiveMultiply(a,b);
    } catch(e) {
      if (e instanceof MultiplicatorUnitFailure)
       return reliableMultiply(a,b);
      else throw e;
    }
}

console.log(reliableMultiply(8, 8));
// → 64
