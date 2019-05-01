// function countLetters(phrase) {
//     var object = {};

// var str = phrase.replace(/\s/g, "");
//    for (var i = 0; i < str.length; i++) {
//            var unique = str[i];
//            if (object[unique]) {
//                object[unique] ++;
//            } else {
//                object[unique] = 1;
//            }

//    }
//    return object;

// }

// console.log(countLetters("lighthouse in the house"));

var countLetters = function(input){
    var noSpace = input.split(" ").join("");
    var letterCounting = {};
    for (i = 0; i < noSpace.length; i++){
      letterCounting[noSpace[i]] = noSpace.split(noSpace[i]).length - 1;
    }
    // console.log(letterCounting);
   };
   
   
   
   countLetters('lighthouse in the house');