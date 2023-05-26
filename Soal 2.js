function mencariDanMengganti(teks) {
  const kataDicari = ['sang gajah', 'serigala', 'harimau'];
  const kataGanti = ['sang gajah -', 'serigala -', 'harimau'];

  let teksOutput = teks;

  for (let i = 0; i < kataDicari.length; i++) {
    const regex = new RegExp(kataDicari[i], 'gi');
    teksOutput = teksOutput.replace(regex, kataGanti[i]);
  }

  return teksOutput;
}

// Contoh pemanggilan fungsi
const teksInput = "Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.";
const teksOutput = mencariDanMengganti(teksInput);
console.log(teksOutput);
