// Buatlah program sederhana yang meminta pengguna untuk memasukkan nilai ujian, 
// dan berikan feedback berdasarkan rentang skor yang diberikan



// Meminta pengguna untuk memasukkan nilai ujian

 //kondisi yang diharapkan :
//>= 90 cetak Anda mendapatkan nilai A. Pekerjaan yang bagus!
//>= 80 Anda mendapatkan nilai B. Tidak buruk!
// >= 70 Anda mendapatkan nilai C. Perlu meningkatkan lagi!
// >= 60 Anda mendapatkan nilai D. Perlu lebih banyak belajar!
// selain dari itu pesan: Anda mendapatkan nilai E. Anda harus belajar lebih giat lagi!



// masukan score dengan nilai number
var score = 10
// Memberikan feedback berdasarkan rentang skor
if (score >= 90 ) {
  console.log("Anda mendapatkan nilai A. Pekerjaan yang bagus!")
  } 
else if (score >= 80 ) {
  console.log( "Anda mendapatkan nilai B. Tidak buruk!")
  }
else if (score >=70 ) {
  console.log( "70 Anda mendapatkan nilai C. Perlu meningkatkan lagi!")
  }
  else if (score >=60) {
  ("60 Anda mendapatkan nilai D. Perlu lebih banyak belajar!")
  }
    else { console.log ("Anda mendapatkan nilai E. Anda harus belajar lebih giat lagi!")
}