function getAngkaTerbesarKedua(personName) {
  personName.sort(function (a, b) {
    return b - a;
  });

  return personName[1];
}

const array = [10, 11, 31, 5, 1, 9, 3, 20];
const nilaiKeduaTerbesar = getAngkaTerbesarKedua(array);
console.log("Nilai terbesar kedua :", nilaiKeduaTerbesar);
