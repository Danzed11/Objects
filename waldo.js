
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(indexNumber) {
 
  console.log("Found him at index " + indexNumber);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

