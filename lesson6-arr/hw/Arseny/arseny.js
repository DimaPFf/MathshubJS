const arr = ['empty', 121, 'zero', 144, null, 189, 'nothing'];

let res1 = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    res1 += arr[i];
  }
}

console.log('res1', res1);

const abc = ['б', 'в', 'д', 'з', 'и'];

abc.unshift('а');
abc.splice(3, 0, 'г');
abc.splice(5, 0, 'е', 'ё', 'ж');
abc.push('й', 'к');

console.log('abc', abc);

const arr1 = [3, 5, 7];
const arr2 = [19, 23];
const arr3 = [11, 13, 17];

const res2 = [...arr1, ...arr2, ...arr3];

console.log('res2', res2.sort((a, b) => b - a));

const staff = ['dress', '9000p', 'shirt', '3000p', 'shoe', '5000p', 'hat', '1500p', ]

const goods = staff.filter((i, ind) => ind % 2 == 0);
const prices = staff.filter((i, ind) => ind % 2);

console.log(goods);
console.log(prices);

const res3 = goods.reduce((acc, i, ind) => {
  acc[i] = prices[ind];
  return acc;
}, {});

console.log('res3', res3);
