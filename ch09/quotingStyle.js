  //Quoting Style
//Alternate Solution using _ to replace inline /\w'\w/
var text = "'I'm the cook,' he said, 'it's my job.'";
underScoredText = text.replace(/(\w)(')(\w)/g, "$1_$3");
doubleQuotedText = underScoredText.replace(/'/g,'"');
console.log(removeUnderscore = doubleQuotedText.replace(/_/g,"'"));

//Before solution stuck at text.replace(/^'|(\W)(')|(')(\W)/g, replace());
var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(\W|^)'/g, '$1"'));
// → "I'm the cook," he said, "it's my job."
