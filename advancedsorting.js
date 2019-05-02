// var array = [10, 2, 5, 1, 9];
// console.log(array.sort(function(a, b){
//   return a-b;
  
// }));

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



students.sort(function(a, b) {
  return a.name > b.name;
  });

students.sort(function(a, b){
  if (a.name === b.name) {
    return a.age < b.age;
  };
})
  
console.log(students);





// var byName = students.sort(function(a, b){
//   var nameA = a.name;
//   var nameB = b.name;
//   return nameA - nameB; 
    




// var sort_by = function(field, reverse, primer){

//   var key = primer ? 
//       function(x) {return primer(x[field])} : 
//       function(x) {return x[field]};

//   reverse = !reverse ? 1 : -1;

//   return function (a, b) {
//       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
//     } 
// }
// console.log(students.sort(sort_by("name", false, function(a){return a.toUpperCase})));

