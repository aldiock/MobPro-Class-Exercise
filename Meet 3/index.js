let hello = "Hello world!!!"
console.log(hello);

const birthYear = 1991;
let age = 31.5;
let isMarried = true;

console.log(birthYear);
console.log(age);
console.log(isMarried);

let namaDepan = "Aldio";
let namaBelakang = "Kaminang"

let namaLengkap = (namaDepan +" "+ namaBelakang);
console.log(namaLengkap);

console.log(10 == "10"); //Loose Equality
console.log(10 === "10"); // Strict Equality

const hasil = 10 % 2 === 0 && true ? "Bilangan Genap" : "Bilangan Ganjil"
console.log(hasil);

//Function Declaration
//Parameter
function ucapkanSalam(Salam){
    return Salam;
}
console.log(ucapkanSalam("Ini Function Declaration Parameter"));

//Function Expression
const ucapkanSalam2 = function (){
    console.log("Selamat siang ini dari function expression")
}
ucapkanSalam2();