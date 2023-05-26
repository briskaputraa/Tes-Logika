function cekKataSandi(kataSandi) {
  // a. Kata sandi minimal 8 karakter
  if (kataSandi.length < 8) {
    return "Kata sandi harus memiliki minimal 8 karakter";
  }

  // b. Kata sandi maksimal 32 karakter
  if (kataSandi.length > 32) {
    return "Kata sandi harus memiliki maksimal 32 karakter";
  }

  // c. Karakter awal tidak boleh angka
  if (/^\d/.test(kataSandi)) {
    return "Karakter awal kata sandi tidak boleh angka";
  }

  // d. Harus memiliki angka
  if (!/\d/.test(kataSandi)) {
    return "Kata sandi harus memiliki minimal satu angka";
  }

  // e. Harus memiliki huruf kapital dan huruf kecil
  if (!/[A-Z]/.test(kataSandi) || !/[a-z]/.test(kataSandi)) {
    return "Kata sandi harus memiliki huruf kapital dan huruf kecil";
  }

  // Kata sandi valid
  return "Kata sandi valid";
}

// Contoh penggunaan
console.log(cekKataSandi("5andiwara")); // Output: Karakter awal kata sandi tidak boleh angka
console.log(cekKataSandi("sandiwar4")); // Output: Kata sandi harus memiliki huruf kapital dan huruf kecil
console.log(cekKataSandi("Sandiwar4")); // Output: Kata sandi valid
