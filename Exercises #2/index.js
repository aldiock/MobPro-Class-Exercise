//NAMA : KAMINANG, ALDIO CHRISTO
//EXERCISE 2 - MOBILE PROGRAMMING

//NOMOR 1 EXERCISE
function mandi() {
  console.log("Mandi");
}

function sarapan(callback) {
  setTimeout(() => {
    console.log("Sarapan tertunda 3 detik");
    callback();
  }, 3000);
}

function berangkatSekolah() {
  console.log("Berangkat sekolah");
}

mandi();
sarapan(berangkatSekolah); // INI SO PAKE CALLBACK SPYA DPE URUTAN KE SEKOLAH BENAR

//NOMOR 2 EXERCISE
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000); //INI MO TGGU 2 DETIK BRU MNCUL
  });
}

const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};
messages();


//NOMOR 3 EXERCISES
function ambilDataUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => { //INI SO JDI CALLBACK FUNCTION YANG BERISI DATA END-POINT API
      console.log(users);
    })
    .catch((error) => console.log(error));
}
ambilDataUser();
