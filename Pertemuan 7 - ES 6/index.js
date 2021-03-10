// const person = {
//   //const tidak bisa diubah langsung tapi bisa pake push
//   firstName: "John",
//   lastName: "Doe",
//   age: 21,
// };

// person.address = "Bitung";
// console.log(person);

//kalo pke var biar nama variable sama, jadi tidak disarankan

// //STRING LITERAL
// let kalimat =
//   "Hallo, nama saya " +
//   person.firstName +
//   " " +
//   person.lastName +
//   " Umur saya " +
//   person.age +
//   " tahun";
// console.log(kalimat);

//Pake tanda backtik `
// let kalimat2 = `Hello nama saya ${person.firstName} ${person.lastName} . Umur saya ${person.age}`;
// console.log(kalimat2);

//ARROW FUNCTION

function sayHello1() {
  //ini pake function expression
}

const sayHello2 = function () {
  // ini pake function declaration
};

const sayHello3 = (param1, param2 = "Ini DEFAULT") => { //DEFAULT PARAMETER 
  //ini pake Arrow function dg adaleh implicit return value (cmn 1 baris saja)
  return `Hello ${param1} ${param2}`; //INI PARAMETER
};

console.log(sayHello3("Aldio", "Kaminang")); //INI ARGUMEN


//REST PARAMETER (TIDAK BOLEH ADA DI TENGAH)
// const display = (param1,param2,...rest) => { //REST ITU DIBUNGKUS JADI ARRAY
//     console.log(param1,param2,rest);
// };

// display(1,2,3,4,5,6);


//SPREAD OPERATOR UNTUK DUPLICATE ARRAY 
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [8,9];

// const combineArr = arr1.concat(arr2.concat(arr3)); //ini cara lama
const combineArr = [...arr1, ...arr2, ...arr3]
//const combineArr2 = combineArr // INI CMN AMBE DPE REFERENCE BUKANG DPE ISI
console.log(combineArr);

const obj1 = {a: 1, b:2};
const obj2 = {c: 3, d:4};

const combineObj = {...obj1,...obj2};
console.log(combineObj);


//CARA SEBELUM PAKE SPREAD OPERATOR
// const person = {
//   //const tidak bisa diubah langsung tapi bisa pake push
//   firstName: "John",
//   lastName: "Doe",
//   age: 21,
// };

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
};

person = {
    ...person,
    address: "Manado",
    job: "Teacher",
};

console.log(person);