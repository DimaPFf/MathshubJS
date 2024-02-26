
// Задача 1

//-----Рекурсия-------

const doRomeNumber  = [
    { value: 1000, result: 'M' },
    { value: 900, result: 'CM' },
    { value: 500, result: 'D' },
    { value: 400, resultl: 'CD' },
    { value: 100, result: 'C' },
    { value: 90, result: 'XC' },
    { value: 50, result: 'L' },
    { value: 40, result: 'XL' },
    { value: 10, result: 'X' },
    { value: 9, result: 'IX' },
    { value: 5, result: 'V' },
    { value: 4, result: 'IV' },
    { value: 1, result: 'I' }
];

const convertToRoman = (num) => {
    //если введенное число равно нуля, возвращаем пустую строку.
    if (num === 0) {
        return '';
    } else {
        for (let i = 0; i < doRomeNumber.length; i++) {
            if (num >= doRomeNumber[i].value) {
                //находится ближайщее к введенному числу число в массиве (которое меньше или равно)
                //возвращаем аналог в римском представлении и находим разницу между введенным
                //числом и найденным значением в массиве и добавляем римский аналог найденного числа.
                //продолжаем процесс пока не достигнем нуля.
                return doRomeNumber [i].result + convertToRoman(num - doRomeNumber[i].value);
            }
        }
    }
};

console.log(convertToRoman(47)); //XLVII

// ----Итеративный метод------

const romanNumerals = [
    { value: 1000, res: 'M' },
    { value: 900, res: 'CM' },
    { value: 500, res: 'D' },
    { value: 400, res: 'CD' },
    { value: 100, res: 'C' },
    { value: 90, res: 'XC' },
    { value: 50, res: 'L' },
    { value: 40, res: 'XL' },
    { value: 10, res: 'X' },
    { value: 9, res: 'IX' },
    { value: 5, res: 'V' },
    { value: 4, res: 'IV' },
    { value: 1, res: 'I' }
];

const createRomeNum = (num) => {
    let result = ''; //пустая строка, содержащая результат
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            //находится аналог числа к меньший и равный к введенному числу (ближайщий)
            //и записывается в result
            result += romanNumerals[i].res; 
            //введенное значение уменьшается на найденное в массиве число.
            num -= romanNumerals[i].value;
        }
    }
    return result;
};

console.log(createRomeNum(47));



// Задача 2

function logTimeArray() {
    const timeNow = new Date().toLocaleTimeString();
    if (!logTimeArray.array) {
        logTimeArray.array = [];
    }
    logTimeArray.array.push(timeNow);
    return logTimeArray.array;
}


// Проверка функции с помощью setInterval
const times = setInterval(() => {
    console.log(logTimeArray());
}, 1000); // Вывод массива каждую секунду

// Остановить вывод через 5 секунд
setTimeout(() => {
    clearInterval(times);
}, 5000);