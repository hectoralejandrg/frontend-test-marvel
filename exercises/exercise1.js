const verifyNumbers = (start, end) => {
  let arrPrimo = [];
  for (let i = start; i <= end; i++) {
    if (isPrimo(i)) arrPrimo.push(i);
  }
  return arrPrimo;
};

const isPrimo = (number) => {
  if (number === 0 || number === 1) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

console.log(verifyNumbers(1, 100))