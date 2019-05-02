
function findWaldo(arr, found) {
arr.forEach(function(waldo, index) {
  if (waldo === "Waldo") {
      found(index);   // execute callback
  }
  });
}

function actionWhenFound(indexNumber) {
 
  console.log("Found him at index " + indexNumber);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

