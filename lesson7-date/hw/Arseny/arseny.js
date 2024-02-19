const users = [
  [{id: 1, name: 'Anna', bd: '1991-01-01'}, 'user'],
  [{id: 2, name: 'Bill', bd: '1990-02-08'}, 'user'],
  [{id: 3, name: 'Clint', bd: '1988-10-19'}, 'user'],
  [{id: 4, name: 'Den', bd: '1993-08-08'}, 'admin'],
  [{id: 5, name: 'Eva', bd: '1990-03-30'}, 'admin'],
  [{id: 6, name: 'Fill', bd: '1999-03-30'}, 'user'],
  [{id: 7, name: 'Germiona', bd: '1995-02-23'}, 'admin'],
  [{id: 8, name: 'Henry', bd: '1992-03-08'}, 'user'],
]

// console.log(users[0][0].name)   

let map1 = new Map();
const zodiak = [ 'Рыбы', 'Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец', 'Козерог', 'Водолей'];

const getZodiac = (arr) => {
  for (i of arr) {
    map1.set(i[0].name, zodiak[Math.floor(Math.random() * 12)]);
  }
}

getZodiac(users);
console.log(map1);

const howMantDaysPassed = (date) => {
  const today = new Date();
  const birthday = new Date(date); 
  const year = today.getFullYear();

  if (today.getMonth() === birthday.getMonth()) {
    if (today.getDay() < birthday.getDay()) {
      birthday.setFullYear(year - 1);
    } else {
      birthday.setFullYear(year);
    }
  }
  if (today.getMonth() < birthday.getMonth()) birthday.setFullYear(year - 1);
  if (today.getMonth() > birthday.getMonth()) birthday.setFullYear(year); 
  // console.log('birthday', birthday)  
  let days = Math.round((today - birthday)/86400000);  
  return console.log(`Pass ${days} days`);
}

howMantDaysPassed('1999-02-27');
howMantDaysPassed('1999-02-01');
howMantDaysPassed('1999-08-10');

let map3 = new Map()
const arr3 = [1,2,3,4]
map3.set('name', 'Dima')
map3.set(arr3, 'array')
map3.set(1, 'number 1')
map3.set('', 'empty')
map3.set(true, 'bool')

const getKeysArr = (map3) => {
  let res = [];
  for (i of map3.keys()){
    res.push(i);
  }  
  res.sort();
  console.log('res', res);
  return res;  
}

getKeysArr(map3);
