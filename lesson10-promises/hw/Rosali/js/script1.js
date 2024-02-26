// ----Уровень 1.1------

//----Задача №1 (Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.)

let num = 33;

if (num > 0) {
    console.log('Число положительное');
} else {
    console.log('Число отрицательное');
}


//----Задача №2 (Выведите в консоль длину этой строки.)

let string = 'В JavaScript любые текстовые данные являются строками.'
console.log(string.length); //54

//----Задача №3 (Выведите в консоль последний символ строки.)

let str = 'JavaScript'
console.log(str[str.length-1]); //t

//----Задача №4 (Проверьте, четное оно или нет.)

let number = 7;

if (number % 2 == 0) {
    console.log('Число чётное');
} else {
    console.log('Число нечётное');
}

//----Задача №5 (Проверьте, что первые буквы этих слов совпадают.)

let word1 = 'JavaScript';
let word2 = 'HTML';

if (word1[0] == word2[0]) {
    console.log('Совпадение найдено!');
} else {
    console.log('Совпадение не найдено!');
}

//----Задача №6 (Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.)

let word = 'Дождь'

let lastLetter = word[word.length-1];

if (lastLetter == 'ь') {
    console.log(word.at(-2));
}

//----Уровень 1.2------

//----Задача №1 (Выведите в консоль первую цифру этого числа.)

let num1 = 12345;
let firstStr1 = String(num1)[0];
let firstNum1 = Number(firstStr1);

console.log(firstNum1);

//----Задача №2 (Выведите в консоль последнюю цифру этого числа.)

let num2 = 12345;
let firstStr2 = String(num1).slice(-1);
let firstNum2 = Number(firstStr2);

console.log(firstNum2);

//----Задача №3 (Выведите в консоль сумму первой и последней цифры этого числа.)

let num3 = 12345;

let numFirst = Number(String(num3)[0]);
let numLast = Number(String(num3).slice(-1));

let sum = numFirst + numLast;
console.log(sum)

//----Задача №4 (Выведите количество цифр в этом числе.)

let num4 = 12345;
let str4 = String(num4);

console.log(str4.length);

//----Задача №5 (Проверьте, что первые цифры этих чисел совпадают.)

let num5 = 235;
let num6 = 325;

let str5 = String(num5);
let str6 = String(num6);

if (str5[0] == str6[0]) {
    console.log('Совпадение найдено!');
} else {
    console.log('Совпадение не найдено!');
}

//----Уровень 1.3------

//----Задача №1 (Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.)

let str7 = 'Script'

if (str7.length > 1) {
    console.log(str7.at(-2));
}

//----Задача №2 (Проверьте, что первое число без остатка делится на второе.)

let num7 = 55;
let num8 = 11;

function result() {
    if(num7 % num8 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log (result());

//----Уровень 1.4------

//----Задача №1 (Выведите в консоль все целые числа от 1 до 100.)

let i = 1;
while (i <= 100) {
  console.log(i)
  i++
};

//----Задача №2 (Выведите в консоль все целые числа от -100 до 0.)

for (i=-100; i<=0; i++) {
    console.log(i)
}

//----Задача №3 (Выведите в консоль все целые числа от 100 до 1.)

for (i=100; i>=1; i--) {
    console.log(i)
}

//----Задача №4 (Выведите в консоль все четные числа из промежутка от 1 до 100.)

for (i=1; i<=100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//----Задача №5 (Выведите в консоль все числа кратные трем в промежутке от 1 до 100.)

for (i=1; i<=100; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

//----Уровень 1.5-----

//----Задача №1 (Найдите сумму всех целых чисел от 1 до 100.)

function sumNum () {
    let sum = 0;
    for (i=1; i<=100; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumNum());

//----Задача №2 (Найдите сумму всех целых четных чисел в промежутке от 1 до 100.)

function sumNum2 () {
    let sum1 = 0;
    for (i=1; i<=100; i += 2) {
        sum1 += i;
    }
    return sum1;
}

console.log(sumNum2());

//----Задача №3 (Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.)

let sum2 = 0;
for (i=1; i<=100; i++) {
    if (i % 3 === 0) {
        sum2 += i;
    }
}

console.log(sum2)

//----Задача №4 (Найдите остаток от деления первого числа на второе.)

let num9 = 45;
let num10 = 7;
let res = num9 % num10;

function numB() {
    if(res != 0) {
        return res;
    }
    return false;
}

console.log(numB())

//----Задача №5 (Переберите и выведите в консоль по очереди все символы с конца строки.)

let str8 = 'Javascript';

let symbols = str8.split('')
symbols = symbols.reverse()
symbols = symbols.join(', ')
console.log(symbols)
