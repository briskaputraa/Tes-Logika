function cariBilanganCacahTerkecil(data) {
  // Mengurutkan data secara ascending
  data.sort((a, b) => a - b);

  // Mendapatkan angka paling kecil yang diinput
  const angkaTerkecil = data[0];

  // Inisialisasi bilangan cacah terkecil
  let bilanganCacahTerkecil = angkaTerkecil;

  // Mencari bilangan cacah terkecil yang tidak ada dari data
  for (let bilangan of data) {
    if (bilangan === bilanganCacahTerkecil) {
      bilanganCacahTerkecil++;
    }
  }

  return bilanganCacahTerkecil;
}

// Contoh penggunaan
const contoh1 = [5, 2, 8, 4, 3, 10];
const contoh2 = [2, 3, 4, 6];
const contoh3 = [8, 6, 7, 12];

console.log(cariBilanganCacahTerkecil(contoh1)); // Output: 6
console.log(cariBilanganCacahTerkecil(contoh2)); // Output: 5
console.log(cariBilanganCacahTerkecil(contoh3)); // Output: 9
