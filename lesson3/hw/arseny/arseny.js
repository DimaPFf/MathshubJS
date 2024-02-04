let num = 3;
let fib1 = 1;
let fib2 = 2;
let fib;
console.log('fib1', fib1);
console.log('fib2',fib2);

while (num <= 20) {
  fib = fib1 + fib2;
  fib1 = fib2;
  fib2 = fib;
  console.log(`fib${num}`,fib2);
  num++;
}

let j = 1;

for (let i = 100; i < 200; i++ ) {
  if (i % 3 === 0 ) {    
    if (j === 1 || j % 5 === 0) {
      console.log('for', i);      
    }
    j++;
  }
}

const getPrediction = (sign) => {
  let res;
  switch (sign) {
    case 'Овен':
      res = console.log('Вас ждет удача')
      break;
    case 'Телец':
      res = console.log('Вас ждет успех')
      break;
    case 'Близнецы':
      res = console.log('у вас будут проблемы')
      break;
    case 'Рак':
      res = console.log('Вас ждет удача')
      break;
    case 'Лев':
      res = console.log('Вас ждет удача')
      break;
    case 'Дева':
      res = console.log('Вас ждет удача')
      break;
    case 'Весы':
      res = console.log('Вас ждет удача')
      break;
    case 'Скорпион':
      res = console.log('Вас ждет удача')
      break;
    case 'Стрелец':
      res = console.log('Вас ждет удача')
      break;
    case 'Козерог':
      res = console.log('Вас ждет удача')
      break;
    case 'Водолей':
      res = console.log('Вас ждет удача')
      break;
    case 'Рыбы':
      res = console.log('Вас ждет удача')
      break;
  
    default:
      res = console.log('Нет такого знака зодиака')
      break;
  }
  return res;
}

getPrediction('Телец');


const getNum = (day, month) => {
  res = day + month;
  console.log('родовое число', res)
  return res;
}

getNum(12, 8);

const addSugar = () => {
  let res = confirm('Добавить сахар?');
  let i = 0;
  if (res) {
    do {
      console.log(`ложек сахара в кофе - ${++i}`)
      res = confirm('Добавить сахар?')
    } while (res) 
  }
  if (!res) {
    console.log('приятного кофепития');
  }
}

addSugar();


