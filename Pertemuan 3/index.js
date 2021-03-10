console.log("Hello World!");
console.log("Welcome to WebDev Class");

let namaDepan = "Aldio";
let namaBelakang = "Kaminang";

console.log(namaDepan, namaBelakang);

//nmblh deklarasikan nama variable yg sama ato double
//let dpe nilai blh gnti2 dg npp klo dpe value blm didefinisikan
//const itu cmn 1x pake deklarasi dg nilai nd bisa dirubah
//const nama variable bisa ditulis dngn huruf kapital
//x += x + y
// ternary oprator itu simple if/else dlm 1 baris ( ? :)
//bukan function itu type datanya primitive
//parameter & argument itu beda
//parameter itu nilai yg ada di dlm function declaration
//argument itu ketika parameter tersebut kita beri value lalu kita panggil
//function hoisting jadi bebas kapanpun dipanggil itu bisa sekalipun blm di deklarasi
//Local scope itu di dlm satu function
//Block scope itu di dlm satu blok sprti if dengan block tnda kurung ()

//tipe data di JS ada 5 :
// 1. String
// 2. Number
// 3. Boolean
// 4. Undifined
// 5. Null

// let apakahSudahMakan = true;
// let alamat;

// //STRING
// let a = "Web";
// let b = "Back-End Development";

// //Assignment Operator
// let bilangan = 2;
// bilangan += 2;

// console.log(apakahSudahMakan);
// console.log(alamat);
// console.log(bilangan);
// console.log("Hallo, saya sedang belajar " + a + " " + b);

// //RELATIONAL OPERATORS
// const hasil = 10 != 10;
// console.log(hasil);

// const hasil2 =  10 % 2 === 0 ? "Genap" : "Ganjil";
// console.log(hasil2)

//function declaration
function ucapkanSalam() {
  console.log("Sore, ini menggunakan function declaration");
}

ucapkanSalam();

//function expression

const ucapkanSalam2 = function () {
  console.log("Sore, ini menggunakan function expressions");
};
ucapkanSalam2();

function Aldio(){
  console.log("Hallo ini Aldio");
}

Aldio();

//Array dalam JS boleh pke kurung siku atau kata kunci new 