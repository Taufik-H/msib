// START

// INITIALIZE name AS Prompt("Masukan Nama :")
// INITIALIZE age AS Prompt("Masukan age :")

// IF name IS NOT EMPTY AND age IS NOT EMPTY THEN
//     IF age <= 17 THEN
//         INITIALIZE pesan AS Prompt("Juice Rp.50000. Bayar : ")

//         IF pesan > 50000 THEN
//             DISPLAY `uang kamu ${pesan}. harga Juice Rp50.000. kembalian Rp. ${pesan - 50000}`
//         ELSE IF pesan == 50000 THEN
//             DISPLAY `uang kamu ${pesan} tidak ada kembalian.`
//         ELSE
//             DISPLAY "Uang anda kurang!"
//         END IF
//     ELSE
//         INITIALIZE pesan AS Prompt("Anggur Rp.300000. Bayar : ")

//         IF pesan > 300000 THEN
//             DISPLAY `uang kamu ${pesan}. harga Anggur Rp300.000. kembalian Rp. ${pesan - 300000}`
//         ELSE IF pesan == 300000 THEN
//             DISPLAY `uang kamu ${pesan} tidak ada kembalian.`
//         ELSE
//             DISPLAY "Uang anda kurang!"
//         END IF
//     END IF
// ELSE
//     DISPLAY "Anda tidak boleh masuk"
// END IF

// END

// code implementasi

let name = prompt("Masukan Nama :");
let age = prompt("Masukan age : ");

if (name && age) {
  if (age <= 17) {
    let pesan = prompt("Juice Rp.50000. Bayar : ");
    if (pesan > 50000) {
      alert(
        `uang kamu ${pesan}. harga Juice Rp50.000. kembalian Rp. ${
          pesan - 50000
        }`
      );
    } else if (pesan == 50000) {
      alert(`uang kamu ${pesan} tidak ada kembalian.`);
    } else {
      alert("Uang anda kurang!");
    }
  } else {
    // pesan anggur
    let pesan = prompt("Anggur Rp.300000. Bayar : ");
    if (pesan > 300000) {
      alert(
        `uang kamu ${pesan}. harga Anggur Rp300.000. kembalian Rp. ${
          pesan - 300000
        }`
      );
    } else if (pesan == 300000) {
      alert(`uang kamu ${pesan} tidak ada kembalian.`);
    } else {
      alert("Uang anda kurang!");
    }
  }
} else {
  alert("Anda tidak boleh masuk");
}
