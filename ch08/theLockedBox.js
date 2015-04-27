//The Locked Box
function withBoxUnlocked(body) {
  if (box.locked == false)
     var boxInitUnlocked = true;
  box.unlock();
  try {
   return body();
  } finally {
   if (!boxInitUnlocked)
   box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
