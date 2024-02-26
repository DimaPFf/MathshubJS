// //----Уровень 3.1------

// //----Задача №1 (Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.)

let num11 = 12345;

function numb (num11) {
    let strNum = num11.toString();
    for (let i = 0; i < strNum.length - 1; i++) {
        if (parseInt(strNum[i]) > parseInt(strNum[i + 1])) {
            return false;
        }
    }
    return true;
}

console.log(numb(num11))

// //----Задача №2 (Удалите из массива все пустые строки.)

const arr3 = [1, '', 2, 3, '', 5];
const arr4 = arr3.filter(el => el !== '');
console.log(arr4)

//-----Задача №4 (Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.)

let arr5 = [1, 2, 3];
let arr6 = [1, 2, 3, 4, 5];

// arr6.pop();
// arr6.pop();

arr6.length = arr6.length - 2;

console.log(arr5);
console.log(arr6);