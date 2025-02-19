// console.log("Hello world");
// let neharikasStudents = {
//   name: "Abhishek Shah",
//   faculty: "BIM",
//   age: "23",
//   rollNumber: "1",
//   "Abhishek ko Address": "Biratnagar",
//   motivation: function () {
//     return console.log("my age is", this.age);
//   },
// };

// neharikasStudents.motivation();
// console.log(neharikasStudents.name);
// console.log(neharikasStudents["Abhishek ko Address"]);

// // add property isPlayer

// neharikasStudents.isPlayer = false;
// neharikasStudents.age = 32;
// neharikasStudents.isMarried = true;
// neharikasStudents.name = "pranir";
// delete neharikasStudents.faculty;
// neharikasStudents.rollNumber = 10;
// console.log(neharikasStudents);

// ****************Array**************************//

let PrasadiArray = ["buniya", "bhujiya", "banana", "milk"];
// let nayaPrasadi = PrasadiArray.push("Suntala");
// let nayaPrasadi = PrasadiArray.unshift("sunatala");
// console.log(PrasadiArray[2]);
// const newArr = PrasadiArray.slice(0, 3);
// console.log(newArr);

let salaryArray = [12000, 15000, 20000];
let age = 23;
let mixedArray = [12000, "Kathmandu", ["buniya", "bhujiya", "banana"]];
let ArkomixedArray = [12000, "Kathmandu", ...PrasadiArray];
let ArkoNayamixedArray = salaryArray.concat(mixedArray);
console.log(mixedArray);
// console.log(ArkomixedArray);
// console.log(ArkoNayamixedArray);
// **************find*******************
// const findArray = [
//   { id: 1, name: "john" },
//   { id: 2, name: "don" },
//   { id: 3, name: "oggy" },
// ];

// let name = findArray.find((item) => item.id == 1);
// console.log(name);
