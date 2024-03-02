//  ********
// Уровень 1.1
//  ********

const article1_1 = document.getElementById("article1_1")
const button1_1 = document.getElementsByClassName("level1_1")
const answer1_1_1 = document.createElement("p")
button1_1[0].after(answer1_1_1)
const answer1_1_2 = document.createElement("p")
button1_1[1].after(answer1_1_2)
const answer1_1_3 = document.createElement("p")
button1_1[2].after(answer1_1_3)
const answer1_1_4 = document.createElement("p")
button1_1[3].after(answer1_1_4)
const answer1_1_5 = document.createElement("p")
button1_1[4].after(answer1_1_5)
const answer1_1_6 = document.createElement("p")
button1_1[5].after(answer1_1_6)

// задача1
button1_1[0].onclick = function () {
    let number1 = document.getElementsByClassName("input1_1")[0].value
    if (+number1 < 0) {
        answer1_1_1.textContent = "Число отрицательное"
    } else {
        answer1_1_1.textContent = "Число неотрицательное"
    }
}
//  задача 2
button1_1[1].onclick = function () {
    let string2 = document.getElementsByClassName("input1_1")[1].value
    answer1_1_2.textContent = string2.length
}

//  задача 3

button1_1[2].onclick = function () {
    let string3 = document.getElementsByClassName("input1_1")[2].value
    answer1_1_3.textContent = string3.slice(-1)
}

//  задача 4
button1_1[3].onclick = function () {
    let number4 = document.getElementsByClassName("input1_1")[3].value
    if (+number4 % 2 === 0) {
        answer1_1_4.textContent = "Число четное"
    } else if (+number4 === NaN) {
        answer1_1_4.textContent = "Ввод некорректен"
    } else {
        answer1_1_4.textContent = "Число нечетное"
    }
}

//  задача 5
button1_1[4].onclick = function () {
    let string5_1 = document.getElementsByClassName("input1_1")[4].value
    let string5_2 = document.getElementsByClassName("input1_1")[5].value
    if (string5_1[0].toUpperCase() === string5_2[0].toUpperCase()) {
        answer1_1_5.textContent = "Первые буквы совпадают"
    } else answer1_1_5.textContent = "Первые буквы НЕ совпадают"
}


//  задача 6
button1_1[5].onclick = function () {
    let string6 = document.getElementsByClassName("input1_1")[6].value
    if (string6.slice(-1) === 'ь') {
        answer1_1_6.textContent = "Предпоследняя буква: " + string6.slice(-2, -1)
    } else answer1_1_6.textContent = "Последняя буква: " + string6.slice(-1)
}

//  ********
// Уровень 1.2
//  ********

const article1_2 = document.getElementById("article1_2")
const button1_2 = document.getElementsByClassName("level1_2")
const answer1_2_1 = document.createElement("p")
button1_2[0].after(answer1_2_1)
const answer1_2_2 = document.createElement("p")
button1_2[1].after(answer1_2_2)
const answer1_2_3 = document.createElement("p")
button1_2[2].after(answer1_2_3)
const answer1_2_4 = document.createElement("p")
button1_2[3].after(answer1_2_4)
const answer1_2_5 = document.createElement("p")
button1_2[4].after(answer1_2_5)

// задача 1
button1_2[0].onclick = function () {
    let number1 = document.getElementsByClassName("input1_2")[0].value
    if (number1.length < 2) {
        answer1_2_1.textContent = "Неверный ввод, требуется число, а не цифра"
    } else answer1_2_1.textContent = "Первая цифра: " + number1.slice(0, 1)
}

// задача 2
button1_2[1].onclick = function () {
    let number2 = document.getElementsByClassName("input1_2")[1].value
    if (number2.length < 2) {
        answer1_2_2.textContent = "Неверный ввод, требуется число, а не цифра"
    } else answer1_2_2.textContent = "Последняя цифра: " + number2.slice(-1)
}

//  задача 3
button1_2[2].onclick = function () {
    let number3 = document.getElementsByClassName("input1_2")[2].value
    if (number3.length < 2) {
        answer1_2_3.textContent = "Неверный ввод, требуется число, а не цифра"
    } else answer1_2_3.textContent = "Сумма первой и последней цифр: " + (Number(number3.slice(0, 1)) + Number(number3.slice(-1)))
}

// задача 4
button1_2[3].onclick = function () {
    let number4 = document.getElementsByClassName("input1_2")[3].value
    answer1_2_4.textContent = "Количество цифр: " + number4.length
}

// задача 5
button1_2[4].onclick = function () {
    let number5_1 = document.getElementsByClassName("input1_2")[4].value
    let number5_2 = document.getElementsByClassName("input1_2")[5].value
    if ((number5_1.length < 2) || (number5_2.length < 2)) {
        answer1_2_5.textContent = "Неверный ввод, требуется число, а не цифра"
    } else if (number5_1.slice(0, 1) === number5_2.slice(0, 1)) {
        answer1_2_5.textContent = "Первые цифры совпадают"
    } else answer1_2_5.textContent = "Первые цифры НЕ совпадают"

}

//  ********
// Уровень 1.3
//  ********

const article1_3 = document.getElementById("article1_3")
const button1_3 = document.getElementsByClassName("level1_3")
const answer1_3_1 = document.createElement("p")
button1_3[0].after(answer1_3_1)
const answer1_3_2 = document.createElement("p")
button1_3[1].after(answer1_3_2)

// задача 1
button1_3[0].onclick = function () {
    let string1 = document.getElementsByClassName("input1_3")[0].value
    if (string1.length > 1) {
        answer1_3_1.textContent = "Предпоследний символ: " + string1.slice(-2, -1)
    } else answer1_3_1.textContent = "В строке только 1 символ"
}

// задача 2
button1_3[1].onclick = function () {
    let number2_1 = document.getElementsByClassName("input1_3")[1].value
    let number2_2 = document.getElementsByClassName("input1_3")[2].value
    if (Number.isInteger(+number2_1) || Number.isInteger(+number2_2)) {
        if (Number(number2_1) % Number(number2_2) === 0) {
            answer1_3_2.textContent = "Первое число делится без остатка на второе"
        } else answer1_3_2.textContent = "Первое число НЕ делится без остатка на второе"
    } else answer1_3_2.textContent = "Ввод неверен, ожидаются целые числа"
}

//  ********
// Уровень 1.4
//  ********

const article1_4 = document.getElementById("article1_4")
const button1_4 = document.getElementsByClassName("level1_4")
const answer1_4_1 = document.createElement("p")
button1_4[0].after(answer1_4_1)
const answer1_4_2 = document.createElement("p")
button1_4[1].after(answer1_4_2)
const answer1_4_3 = document.createElement("p")
button1_4[2].after(answer1_4_3)
const answer1_4_4 = document.createElement("p")
button1_4[3].after(answer1_4_4)
const answer1_4_5 = document.createElement("p")
button1_4[4].after(answer1_4_5)

//  задача 1

button1_4[0].onclick = function () {
    const arr = []
    for (let i = 1; i <= 100; i++) {
        arr.push(' ' + i)
    }
    answer1_4_1.textContent = arr
}

//  задача 2

button1_4[1].onclick = function () {
    const arr = []
    for (let i = -100; i <= 0; i++) {
        arr.push(' ' + i)
    }
    answer1_4_2.textContent = arr
}

//  задача 3

button1_4[2].onclick = function () {
    const arr = []
    for (let i = 100; i >= 1; i--) {
        arr.push(' ' + i)
    }
    answer1_4_3.textContent = arr
}

//  задача 4

button1_4[3].onclick = function () {
    const arr = []
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            arr.push(' ' + i)
        }
    }
    answer1_4_4.textContent = arr
}

//  задача 5

button1_4[4].onclick = function () {
    const arr = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            arr.push(' ' + i)
        }
    }
    answer1_4_5.textContent = arr
}

//  ********
// Уровень 1.5
//  ********

const article1_5 = document.getElementById("article1_5")
const button1_5 = document.getElementsByClassName("level1_5")
const answer1_5_1 = document.createElement("p")
button1_5[0].after(answer1_5_1)
const answer1_5_2 = document.createElement("p")
button1_5[1].after(answer1_5_2)
const answer1_5_3 = document.createElement("p")
button1_5[2].after(answer1_5_3)
const answer1_5_4 = document.createElement("p")
button1_5[3].after(answer1_5_4)
const answer1_5_5 = document.createElement("p")
button1_5[4].after(answer1_5_5)

//  задача 1
button1_5[0].onclick = function () {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i
    }
    answer1_5_1.textContent = sum
}

// задача 2

button1_5[1].onclick = function () {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    answer1_5_2.textContent = sum
}

// задача 3

button1_5[2].onclick = function () {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            sum += i
        }
    }
    answer1_5_3.textContent = sum
}

// задача 4

button1_5[3].onclick = function () {
    let number4_1 = document.getElementsByClassName("input1_5")[0].value
    let number4_2 = document.getElementsByClassName("input1_5")[1].value
    answer1_5_4.textContent = Number(number4_1) % Number(number4_2)
}

//  задача 5

button1_5[4].onclick = function () {
    let string = document.getElementsByClassName("input1_5")[2].value
    answer1_5_5.textContent = string.split("").reverse().join("");
}

//  ********
// Уровень 1.6
//  ********

const article1_6 = document.getElementById("article1_6")
const button1_6 = document.getElementsByClassName("level1_6")
const array = document.createElement("p")
button1_6[1].after(array)
const answer1_6_1 = document.createElement("p")
button1_6[2].after(answer1_6_1)
const answer1_6_2 = document.createElement("p")
button1_6[3].after(answer1_6_2)
const answer1_6_3 = document.createElement("p")
button1_6[4].after(answer1_6_3)
const answer1_6_4 = document.createElement("p")
button1_6[5].after(answer1_6_4)

const arr = []
button1_6[0].onclick = function () {
    let input1_6 = document.getElementsByClassName("input1_6")[0]
    arr.push(input1_6.value)
    input1_6.value = ''
}

let buttonClicked = false;

button1_6[1].onclick = function () {
    array.textContent = arr
    buttonClicked = true;
}

//  задача 1

button1_6[2].onclick = function () {
    if (buttonClicked) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += Math.pow(arr[i], 2)
        }
        answer1_6_1.textContent = sum
    } else answer1_6_1.textContent = "сначала заполните массив"
}

//  задача 2

button1_6[3].onclick = function () {
    if (buttonClicked) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += Math.sqrt(arr[i])
        }
        answer1_6_2.textContent = sum
    } else answer1_6_2.textContent = "сначала заполните массив"
}

// задача 3 

button1_6[4].onclick = function () {
    if (buttonClicked) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            if (Number(arr[i] > 0)) {
                sum += Number(arr[i])
            }
        }
        answer1_6_3.textContent = sum
    } else answer1_6_3.textContent = "сначала заполните массив"
}

// задача 4

button1_6[5].onclick = function () {
    if (buttonClicked) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            if (Number(arr[i] > 0) && Number(arr[i] < 10)) {
                sum += Number(arr[i])
            }
        }
        answer1_6_4.textContent = sum
    } else answer1_6_4.textContent = "сначала заполните массив"
}

//  ********
// Уровень 1.7
//  ********

const article1_7 = document.getElementById("article1_7")
const button1_7 = document.getElementsByClassName("level1_7")
const answer1_7_1 = document.createElement("p")
button1_7[0].after(answer1_7_1)
const answer1_7_2 = document.createElement("p")
button1_7[1].after(answer1_7_2)
const answer1_7_3 = document.createElement("p")
button1_7[2].after(answer1_7_3)
const answer1_7_4 = document.createElement("p")
button1_7[3].after(answer1_7_4)

//  задача 1

const str1 = 'abcde'
button1_7[0].onclick = function () {
    answer1_7_1.textContent = str1.split('')
}

//  задача 2

const number1 = 12345
button1_7[1].onclick = function () {
    answer1_7_2.textContent = Array.from(number1.toString())
}

//  задача 3

button1_7[2].onclick = function () {
    const reverseString = String(number1).split('').reverse().join('')
    answer1_7_3.textContent = parseInt(reverseString)
}

//  задача 4

button1_7[3].onclick = function () {
    const arr = Array.from(number1.toString())
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i])
    }
    answer1_7_4.textContent = sum
}

//  ********
// Уровень 1.8
//  ********

const article1_8 = document.getElementById("article1_8")
const button1_8 = document.getElementsByClassName("level1_8")
const answer1_8_1 = document.createElement("p")
button1_8[0].after(answer1_8_1)
const answer1_8_2 = document.createElement("p")
button1_8[1].after(answer1_8_2)
const answer1_8_3 = document.createElement("p")
button1_8[2].after(answer1_8_3)

//  задача 1

button1_8[0].onclick = function () {
    const arr = []
    for (let i = 0; i <= 100; i++) {
        arr.push(' ' + i)
    }
    answer1_8_1.textContent = arr
}

//  задача 2

button1_8[1].onclick = function () {
    const arr = []
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            arr.push(' ' + i)
        }
    }
    answer1_8_2.textContent = arr
}

//  задача 3

button1_8[2].onclick = function () {
    const arr = [1.456, 2.125, 3.32, 4.1, 5.34]
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2.push(' ' + arr[i].toFixed(1))
    }
    answer1_8_3.textContent = arr2
}

//  ********
// Уровень 1.9
//  ********

const article1_9 = document.getElementById("article1_9")
const button1_9 = document.getElementsByClassName("level1_9")
const arr9_Str = ['http://code.mu/ru/javascript/tasker/stager/1/9/', 'index.html', '45', 'в строке есть html...', 'index2.html', 'в строке есть http://...', 'http://code.mu/ru/javascript/tasker/stager/1/8/'
]

const array9_1 = document.createElement("p")
button1_9[0].after(array9_1)
const answer1_9_1 = document.createElement("p")
array9_1.after(answer1_9_1)
const array9_2 = document.createElement("p")
button1_9[1].after(array9_2)
const answer1_9_2 = document.createElement("p")
array9_2.after(answer1_9_2)
const array9_3 = document.createElement("p")
button1_9[2].after(array9_3)
const answer1_9_3 = document.createElement("p")
array9_3.after(answer1_9_3)


//  задача 1

button1_9[0].onclick = function () {
    const arr9_1 = []
    arr9_Str.filter((el) => {
        if (el.startsWith("http://")) {
            arr9_1.push(' ' + el)

        }
        answer1_9_1.textContent = "ответ: " + arr9_1
        array9_1.textContent = 'исходный массив: ' + arr9_Str
    })
}

// задача 2 

button1_9[1].onclick = function () {
    const arr9_2 = []
    arr9_Str.filter((el) => {
        if (el.endsWith(".html")) {
            arr9_2.push(' ' + el)

        }
        answer1_9_2.textContent = "ответ: " + arr9_2
        array9_2.textContent = 'исходный массив: ' + arr9_Str
    })
}

button1_9[2].onclick = function () {
    const arr9_3 = []
    const arr9_Num = [5, -7, 78, 62, 1, -21, 1.45, -7.56]
    for (let i = 0; i < arr9_Num.length; i++) {
        arr9_3.push(' ' + (Number(arr9_Num[i])*1.1).toFixed(2))
    }
    answer1_9_3.textContent = "ответ: " + arr9_3
    array9_3.textContent = 'исходный массив: ' + arr9_Num
}

//  ********
// Уровень 1.10
//  ********

const article1_10 = document.getElementById("article1_10")
const button1_10 = document.getElementsByClassName("level1_10")
const answer1_10_1 = document.createElement("p")
button1_10[0].after(answer1_10_1)
// const answer1_10_2 = document.createElement("p")
// button1_10[1].after(answer1_10_2)
// const answer1_10_3 = document.createElement("p")
// button1_10[2].after(answer1_10_3)
// const answer1_10_4 = document.createElement("p")
// button1_10[3].after(answer1_10_4)



// задача 1

button1_10[0].onclick = function () {
    const arr = []
    for (let i=0; i<10; i++){
        arr[i] = Math.round( Math.random() * 100 ) 
    }
    answer1_10_1.textContent = arr
}

// задача 2

button1_10[1].onclick = function () {
let number = 12345
for (let i=String(number).length-1; i>=0;i--){
    console.log(String(number)[i])
}
}

//  задача 3

button1_10[2].onclick = function () {
    let arr = [1,2,3,4,5,6]
    const size = 2
    const arr2 = arr.reduce((arr2,el) => {
        if (arr2[arr2.length-1].length == size){
            arr2.push([])
        }
        arr2[arr2.length-1].push(el)
        console.log(arr2)
        console.log("***")
        return arr2

    }, [[]])
    console.log(arr2)
    }

    //  задача 4 

    button1_10[3].onclick = function () {
        const arr1 = [1,2,3]
        const arr2 = [4,5,6]
        // const arr3 = arr1.concat(arr2)

        console.log(arr1.concat(arr2))
    }