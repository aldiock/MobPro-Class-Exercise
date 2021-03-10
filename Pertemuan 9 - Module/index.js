// MODULE

//1. MAINTAINABILITY
//2. PENGGUNAAN NAMA VARIABEL (DAPAT MEMBERIKAN VARIABLE ALIAS)
//3. REUSABLE CODE (DRY ATAU DON'T REPEAT YOURSELF)
// console.log("Javascript Module")

//BOLEH PAKE ALIAS NNTI DISINI, PAKE IMPORT AS
import {
  fullName as namaLengkap,
  person as orang,
  display as tampil,
} from "./person.js";

//EXPORT DEFAULT NDA PERLU PAKE KURUNG KURAWAL
// DNG SO ND PERLU PAKE AS, BLH LANGSUNG GNTI DPE ALIAS
import TextInput from "./TextInput/TextInput.js";
tampil(orang);

TextInput();
