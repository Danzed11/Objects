var words = ["ground", "control", "to", "major", "tom"];

function map(array, myFunc) {
  output = [];
  for (var i in array) {
    output.push(myFunc(array[i]));
  }
  return output;
}

  console.log(map(words, function(word) {
    return word.length;
  }));
  
  console.log(map(words, function(word) {
    return word.toUpperCase();
  }));
  
  console.log(map(words, function(word) {
    return word.split('').reverse().join('');
  }));