// Asyncronous JS : itu dapat menjalankan perintah yg lain secara bersamaan
//PENERAPAN ASYNCRONOUS ITU ADA 3 CARA : CALLBACK, PROMISE, ASYNC A WAIT

//INI MASIH SYNCRONOUS
// console.log("Satu");
// console.log("Dua");

//CALLBACK FUNGSI YG DIJALANKAN DI PARAMETER FUNGSI LAINNYA
// function greetings(fullName){
//   console.log(`Hi ${fullName}`);
// }

// function introduction(firstName,lastName,callback){
//   const fullName = `${firstName}${lastName}`;
//   callback(fullName);
// }

// introduction('John',' Doe',greetings);

//INI MO BKENG SYNC JADI ASYNC
// console.log("satu");
// setTimeout(() => {
//   console.log("dua");
// }, 2000);
// console.log("tiga");

//GUNAKAN CALLBACK AGAR MENYELESAIKAN MISALKAN FUNCTION 3 MEMBUTUHKAN HASIL DARI FUNCTION2
//SEDANGKAN FUNCTION 2 BELUM SELESAI DIJALANKAN
// function proses1(){
//   console.log('Proses 1 selesai dijalankan');
// }

// function proses2(callback){
//   setTimeout(()=>{
//     console.log('Proses 2 selesai dijalankan');
//     callback();
//   },2000);
// }

// function proses3(){
//   console.log("Proses 3 selesai dijalankan");
// }

//TIDAK NESTED CALLABACK
//INI DIJALANKAN SECARA SYNCRONOUS( SATU PER SATU)
// proses1();
// proses2(proses3); //penggunaan CALLBACK

//INI YANG DISEBUT CALLBACK HELL
// setTimeout(()=>{
//   console.log("Proses 1");
//   setTimeout(()=>{
//     console.log("Proses 2");
//     setTimeout(()=>{
//       console.log("Proses 3");
//     },2000);
//   },2000);
// },2000);

//UNTUK MENGATASI MASALAH DIATAS, BOLEH PAKE PROMISE
let condition = true;

//BISA BUAT PROMISE LANGSUNG BEGINI ATAU JADI FUNCTION
// let newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Error");
//   }
// });

//BISA JUGA PROMISE DENGAN FUNCTION
// function newPromise() {
//   return new Promise((resolve, reject) => {
//     if (condition) {
//       resolve("Berhasil");
//     } else {
//       reject("Error");
//     }
//   });
// }

//CARA PANGGE PROMISE PAKE .THEN() JDI ITU YANG DIA MO EKSEKUSI KETIKA BERHASIL DPE KONDISI
// newPromise()
//   .then((result) => {
//     //console.log(result);
//     return result; //ini for mengirim then ini ke then selanjutnya (CHAINING)
//   })
//   .then((result2) => {
//     console.log(`${result2} !!!`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function getIdStudent() {
//   return new Promise((resolve, reject) => {
//     resolve("12345");
//   });
// }

// function getNameById(id) {
//   return new Promise((resolve, reject) => {
//     if (id === "12345") {
//       resolve("John");
//     } else {
//       reject("Unknown ID Student");
//     }
//   });
// }

//CHAINING PROMISE
// getIdStudent()
//   .then((id) => {
//     return getNameById(id);
//   })
//   .then((name) => {
//     console.log(name);
//   });

//MODEL ASYNC AWAIT (BOLEH PAKE TRY AND CATCH LEH)
// const getNameByIdAsync = async () => {
//   const id = await getIdStudent(); //dia mo tggu proses sblmnya
//   const name = await getNameById(id);
//   console.log(name);
// };

// getNameByIdAsync();

//FETCH DENGAN PROMISE ITU MSIH MO CONVERT KE JSON MANUAL, KALO AXIOS DIA OTOMATIS

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => console.log(error));

