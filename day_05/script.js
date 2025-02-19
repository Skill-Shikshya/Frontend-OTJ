const findArray = [11, 2, 3, 4, 5, 6];

const newArr = [
  { name: "aakash", id: 2, age: 23 },
  { name: "aayush", id: 3, age: 32 },
];

// const found = findArray.find((num) => num == 5);
const singleObject = newArr.find((item) => item.age == 32);
// console.log(singleObject.id);
// console.log(found);

// console.log(findArray.indexOf());

// *************array ko some method **************

// const kunai = findArray.some((num) => num < 1);
// console.log(kunai);

// *************Array ko every method************

// const sabai = findArray.every((num) => num <= 6);
// console.log(sabai);

// ***************Array ko sort method *************

// const khajaArray = ["momo", "apple", "chana", "donut", "chiya", "jhol momo"];

// const sortGarekoArr = khajaArray.sort();

// console.log(sortGarekoArr);
// ***********checking typof array********
// console.log(typeof []);
// console.log(typeof {});
// alert(Array.isArray([]));
// alert(Array.isArray({}));

// console.log(x);
// const x = 10;
// const and let are in temporal dead zone

// fat arrow function

// create an arrow function which can say Hello `name`
const myfun = (name) => {
  // we can not use this keyword inside fat arrow function

  return `hello ${name}`;
};
console.log(myfun("Rohan"));
