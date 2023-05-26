function pola(N) {
  if (N % 2 === 0) {
    console.log("Harus bilangan ganjil");
    return;
  }

  function generateRow(N, row) {
    if (row === N) {
      return;
    }

    var baris = "";
    for (var j = 0; j < N; j++) {
      if (row === 0 || row === N - 1 || j === 0 || j === N - 1 || row === Math.floor(N / 2) || j === Math.floor(N / 2)) {
        baris += "X";
      } else {
        baris += "O";
      }
    }
    console.log(baris);

    generateRow(N, row + 1);
  }

  generateRow(N, 0);
}

// Contoh penggunaan fungsi buatPolaRekursif
var N = 5;
pola(N);

N = 3;
pola(N);

N = 7;
pola(N);

N = 2;
pola(N);
