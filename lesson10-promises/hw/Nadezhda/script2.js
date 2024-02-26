//  ********
// Уровень 2.1
//  ********

const article2_1 = document.getElementById("article2_1")
const button2_1 = document.getElementsByClassName("level2_1")
const answer2_1_1 = document.createElement("p")
button2_1[0].after(answer2_1_1)
const answer2_1_2 = document.createElement("p")
button2_1[1].after(answer2_1_2)
const array = document.createElement("p")
button2_1[3].after(array)
const answer2_1_3 = document.createElement("p")
button2_1[4].after(answer2_1_3)
const answer2_1_4 = document.createElement("p")
button2_1[5].after(answer2_1_4)

// задача1

button2_1[0].onclick = function () {
    let string = document.getElementsByClassName("input2_1")[0].value
    answer2_1_1.textContent = string.indexOf('0')

}

//  задача 2

button2_1[1].onclick = function () {
    const arr = []
    for (let i = 10; i <= 1000; i++) {
        if (Number(String(i)[0]) + Number(String(i)[1]) === 5) {
            arr.push(' ' + i)
        }
    }
    answer2_1_2.textContent = arr
}

//  задача 3

let arr1_3 = []

button2_1[2].onclick = function () {
    arr1_3.push(document.getElementsByClassName("input2_1")[1].value)
    document.getElementsByClassName("input2_1")[1].value = ''
}

let buttonClicked = false;

button2_1[3].onclick = function () {
    array.textContent = arr1_3
    buttonClicked = true;
}

button2_1[4].onclick = function () {
    elToDelete = document.getElementsByClassName("input2_1")[2].value
    if (buttonClicked) {
        for (let i = 0; i < arr1_3.length; i++) {
            if (arr1_3[i] === elToDelete) {
                let deleted = delete arr1_3[i]
            }
            answer2_1_3.textContent = arr1_3
        }

    }
}

//  задача 4

button2_1[5].onclick = function () {
    const arr = [1, 2, 3, 4, 5, 6]
    let sum = 0
    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i]
    }
    answer2_1_4.textContent = sum
}

//  ********
// Уровень 2.2
//  ********

const article2_2 = document.getElementById("article2_2")
const button2_2 = document.getElementsByClassName("level2_2")
const array2 = document.createElement("p")
button2_2[1].after(array2)
const answer2_2_1 = document.createElement("p")
button2_2[2].after(answer2_2_1)
const answer2_2_2 = document.createElement("p")
button2_2[3].after(answer2_2_2)
const answer2_2_3 = document.createElement("p")
button2_2[4].after(answer2_2_3)
const answer2_2_4 = document.createElement("p")
button2_2[5].after(answer2_2_4)

// задача 1

let arr2_1 = []

button2_2[0].onclick = function () {
    arr2_1.push(document.getElementsByClassName("input2_2")[0].value)
    document.getElementsByClassName("input2_2")[0].value = ''
}

let buttonClicked2 = false;

button2_2[1].onclick = function () {
    array2.textContent = arr2_1
    buttonClicked2 = true;
}

button2_2[2].onclick = function () {
    let sum = 0;
    if (buttonClicked2) {
        for (let i = 0; i < arr2_1.length; i++) {
            if (arr2_1[i] < 0) {
                sum += 1
            }
        }
    }
    answer2_2_1.textContent = sum
}

// задача 2

button2_2[3].onclick = function () {
    if (buttonClicked2) {
        for (let i = 0; i < arr2_1.length; i++) {
            if (arr2_1[i] < 0) {
                delete arr2_1[i]
            }
        }
        answer2_2_2.textContent = arr2_1
    }
}

//  задача 3

button2_2[4].onclick = function () {
    let string = document.getElementsByClassName("input2_2")[1].value
    answer2_2_3.textContent = string.replace((string[string.length - 2]), '')
}

//  задача 4
button2_2[5].onclick = function () {
    let arr = [1, 2, 3, 4, 5, 6]
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < arr.length; i++){
        if(i<arr.length/2){
            sum1+=arr[i]
        } else sum2+=arr[i]
    }
    answer2_2_4.textContent = sum1/sum2
}
