//Array di JS boleh pake kurung siku [ ] atau menggunakan kata kunci New

//Index dari array itu selalu dimulai dari 0
//Arra dalam JS boleh memiliki type data yg berbeda

//Array Literals atau tanda siku [ ]
// let numbers = [1,2,3,4,5];
// console.log(numbers);

// let john = ['John','Doe',33,true];
// console.log(john);

//Mengakses index dari Array
// let numbers = new Array(1,2,3,4,5);
// let john = new Array("John","Doe",33,true);
// // console.log(numbers);
// // console.log(john[2]);

// //Array memiliki method length, jadi otomatis hitung panjang dari suatu Array
// console.log(numbers[numbers.length - 1]);
// console.log(john[john.length - 1]);

//Mengubah Array dalam satu Index

// namaArray [nomorIndex] = nilaiBaru;
// Contoh : let namaBuah ["Mangga", "Apel", "Jeruk"];
// namaBuah[1] = "Semangka";

//object
let users = [
  {
    fullName: "Aldio Kaminang",
    age: 21,
    isMarried: false,
    GPA: "3.96",
  },
  {
    fullName: "Anjelita Kaminang",
    age: 18,
    isMarried: false,
    GPA: "3.15",
  },
];

console.log("Nama " + users[0].fullName + " GPA : " + users[0].GPA);

