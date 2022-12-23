// string
let a = "What is your Name?";
let b = "Harsh";
let c = a + b;
let age = 21;
// console.log("What is your Name?" + " " + b + "." + " He is " + age + " years old.");
// console.log(`${a} ${b}. He is ${age} years old.`);

let arr1 = [1, 7, 3, 10, 15];
// console.log(arr1[2]);
//arr1[2] = 4;
// console.log(arr1[2]);

// let arr2 = [2, ...arr1];
// console.log(arr2);

let sorting = arr1.sort((a, b) => a - b);
console.log(sorting);

// const arr3 = arr1.map((val, i, arr) => {
// 	console.log("val", val);
// 	console.log("index", i);
// 	return val * 2;
// });

// console.log("arr3", arr3)
// console.log("arr1", arr1)
