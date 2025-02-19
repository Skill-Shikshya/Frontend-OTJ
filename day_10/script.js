let a = "I am a coder";

// console.log(Array.from(a));

// const elem = document.querySelectorAll(".text");

// console.log(elem);

const elemById = document.getElementById("para");
const innerelem = elemById.innerHTML;
console.log(innerelem);

// const newArr = Array.from(elem);
// newArr.forEach((data) => {
//   console.log(data);
//   data.style.cssText = "color:red; font-size:24px; background-color:green";
//   // data.style.color = "red";
// });
// console.log(newArr);

// elem.style.backgroundColor = "red";

// const myPromise = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   let i = 2;
//   if (i > 1) {
//     resolve("Operation completed successfully");
//   } else {
//     reject("Operation failed");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result); // Operation completed successfully
//     return anotherPromise();
//   })
//   .then((anotherResult) => {
//     console.log(anotherResult); // Another operation completed successfully
//   })
//   .catch((error) => {
//     console.error(error); // Handle errors
//   });
