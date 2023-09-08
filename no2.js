function checkTypeNumber(givenNumber) {
  if (typeof givenNumber === "undefined") {
    return "Error: Bro where is the Parameter?";
  }

  if (typeof givenNumber !== "number") {
    return "Input harus berupa angka";
  }

  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
