//Destrukturisasi

//Array (Caranya ambil sebagian item, deklarasi & assignment terpisah, default value, rest operator)
const arrPerson = ["John", "Doe", 33, true];
// const firstName = arrPerson[0]; //ini cara lama
// const lastName = arrPerson[1];
// const age = arrPerson[2];
// const isMarried = arrPerson[3];

//klo ta lebeh da destruktur trg blh pke default value spya dpe value nd undifined
//const [firstName, , age,isMarried, address = "Manado"] = arrPerson; // INI CARA DESTRUKTUR (CMN DIA MO LIA DPE URUTAN ARRAY)

// console.log(firstName, age, isMarried,address);

// let [firstName, lastName, ...rest] = arrPerson;
// console.log(firstName,lastName);
// console.log(rest); //ini disimpan di array yg baru ato dpe sisa yg nd tapake

//Object (Caranya ambil sebagian item, deklarasi & assignment terpisah, default value, rest operator)

//let firstName, lastName;
const objPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 33,
  isMarried: true,
  address: "Minut",
};

// const {firstName, lastName, age: umur, isMarried} = objPerson; //klo di object destruktur nd perlu urutan sama dg array, alias bebas saja asal variable sama

// console.log(firstName, lastName, umur, isMarried);

// let {firstName, lastName, ...rest} = objPerson;
// console.log(firstName, lastName, rest); //klo pake rest dia buat object yg baru

const display = ({firstName,lastName}) => //megirim object ke dalam suatu fungsi
  `Hallo nama saya ${firstName} ${lastName}`;
console.log(display(objPerson));
