const doNiceRomeNumber = (number) => {
  if (number.length >= 10) return 'X' + doNiceRomeNumber(number.slice(10));
  if (number.length >= 9) return 'IX' + doNiceRomeNumber(number.slice(9));
  if (number.length >= 5) return 'V' + doNiceRomeNumber(number.slice(5));
  if (number.length >= 4) return 'IV' + doNiceRomeNumber(number.slice(4));
  return number;
}

console.log('num', doNiceRomeNumber('IIIIIIIII'));
console.log('num', doNiceRomeNumber('IIIIIII'));
console.log('num', doNiceRomeNumber('IIIIIIIIIIIIIIII'));

const dates = [];

const setCallDate = () => {
  const now = new Date();
  dates.push(now.toUTCString());
}

setInterval(() => {
  setCallDate();
  console.log('dates', dates)
}, 2000);

