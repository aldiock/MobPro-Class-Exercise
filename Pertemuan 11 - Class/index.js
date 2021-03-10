// //OOP di JavaScript

// //Object Literal
// const mobil1 = {
//   merk: "Toyota",
//   warna: "Putih",
//   nyalakanMobil: function () {
//     console.log(`Mobil dengan merek ${this.merk} sudah dinyalakan`);
//   },
// };

// const mobil2 = {
//   merk: "Honda",
//   warna: "Merah",
//   nyalakanMobil: function () {
//     console.log(`Mobil dengan merek ${this.merk} sudah dinyalakan`);
//   },
// };

// mobil1.nyalakanMobil();
// mobil2.nyalakanMobil();

//Object Class
//Definiskan method itu di dlm constructor(harus ada di class)
class Mobil {
  constructor(merk, warna) {
    this.merk = merk;
    this.warna = warna;
  }

  nyalakanMobil (){
    console.log(`Mobil dengan merek ${this.merk} sudah dinyalakan`);
  }
}

// //Buat object 
// const mobil1 = new Mobil("Toyota","Putih");
// const mobil2 = new Mobil("Honda","Merah");
// mobil1.nyalakanMobil();
// mobil2.nyalakanMobil();

//Inheritance (Mewariskan ke class yg lain)
//klo mo bkeng turunan pake key extends
//OVERRIDING : METHOD NYA DI TIMPA 
class Toyota extends Mobil{
  constructor(merk,warna,mesin){
    super(merk,warna); // pke key super mo passing dri parent class
    this.mesin = mesin;
  }

  matikanMesin(){
    console.log(`Mobil dengan merk ${this.merk} sudah dimatikan mesinnya`);
  }
}

const agya = new Toyota('Agya','Putih','1000cc');
agya.nyalakanMobil();
agya.matikanMesin();

