//gunakan export spya ini bisa dipake di file .js yg laeng
const fullName = "John Doe";

//yang bisa diexport object,string, number etc

//OBJECT
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 31,
};

//FUNGSI
const display = ({ firstName, lastName }) => {
  console.log(`Hello ${firstName}${lastName}`);
};

export { fullName, person, display };

//EXPORT AS DAN IMPORT AS
//KETIKA NAMA VARIBLE TSB PANJANG, JADI BISA PAKE ALIAS SPYA PENDEK


//KITA PAKAI EXPORT DEFAULT
//DAN HANYA BISA 1 FILE SAJA JADI ITU SPESIAL
//BIASANYA EXPORT FUNGSI