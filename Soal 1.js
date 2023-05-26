function kelipatan(N) {
  let output = [];

  for (let i = 1; output.length < N; i++) {
    if (i % 3 === 0 && i % 7 === 0) {       // Memeriksa apakah bilangan i kelipatan 3 dan 7
      output.push('Z');                     // Jika ya, menambahkan huruf 'Z' ke dalam output
    } else if (i % 3 === 0 || i % 7 === 0) { // Memeriksa apakah bilangan i kelipatan 3 atau 7
      output.push(i);                        // Jika ya, menambahkan bilangan i ke dalam output
    }
  }

  console.log(output.join(', '));           // Menampilkan output dalam bentuk string dipisahkan oleh koma
}

// Contoh pemanggilan fungsi
kelipatan(13);
