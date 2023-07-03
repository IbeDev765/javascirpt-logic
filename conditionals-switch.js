// Buatlah program sederhana yang meminta pengguna untuk memasukkan nama bulan 
// dalam bentuk angka (1-12), dan tampilkan nama bulan yang sesuai.


// Meminta pengguna untuk memasukkan angka bulan
var monthNumber = 1;



var monthName = ["jan","feb","mar","apr","mei","agus","sep","okt","nov","des"];
var month;

// Mengkonversi angka bulan menjadi nama bulan
// buat switch case dengan kentuan semisal jika variabel monthNumber 
// bernilai sama dengan 1 maka isi 1,monthName sama dengan = JANUARI 

switch (monthNumber) {
    
      case 1 :
        month =monthName[1];
        break; 
      case 2 :
        month=monthName[2];
        break; 
      case 3 :
        month = monthName[3];
        break;
      case 4 :
        month=monthName[4];
        break;
        case 5 :
          month= monthName[5];
          break;
        case 6 :
          month =monthName[6];
          break;
        case 7 :
          month = monthName[7];
          break;
        case 8 :
          month= monthName[8];
          break;
        case 9 :
          month =monthName[9];
          break;
        case 10 :
          month= monthName[10];
          break;
        case 11 :
          month =monthName[11];
          break;
        case 12 :
          month =monthName[12];
          break;
         default:
          month =monthName[0]; 
          break;
  }


console.log( month= monthName);
