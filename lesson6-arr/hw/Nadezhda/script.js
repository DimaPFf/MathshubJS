//1
const task1 = document.getElementById("task1")
const answer1 = document.createElement("p")
task1.append(answer1)
const arr = ['empty', 121, 'zero', 144, null, 189, 'nothing']
let sum = 0;
// console.log(typeof (arr[0]))
for (let i = 0; i < arr.length; i++) {
    // console.log("элемент " + Number(arr[i]))
    // console.log("проверка на не NaN " + !isNaN(arr[i]))
    if (!isNaN(arr[i])) {
        sum = sum + Number(arr[i])
    }
    // console.log("сумма " + sum)
}
answer1.textContent = sum

//2

const abc = ['б', 'в', 'д', 'з', 'и']
const task2 = document.getElementById("task2")
const answer2 = document.createElement("p")
task2.append(answer2)
let letter = 'а'
let code = letter.charCodeAt(0)
let i = 0
while (letter != 'л') {
    // console.log("элемент массива ", abc[i])
    // console.log("буква по коду", String.fromCharCode(code))
    // console.log("индекс до сравнения ", i)
    // console.log("код до сравнения ", code)
    // console.log("************")
    if (letter === abc[i]) {
        i++
        code++
        // console.log("равны")
        // console.log("индекс после выполнения условия ", i)
        // console.log("код после выполнения условия ",code)
        // console.log("************")
    } else {
        if (abc[i] === undefined) {
            abc.push(letter)
        }
        else {
            abc.splice(i, 0, letter)
            code++
            i++
            // console.log("не равны")
            // console.log("индекс после НЕвыполнения условия ", i)
            // console.log("код после выполнения условия ", code)
            // console.log("************")
        }
    }
    letter = String.fromCharCode(code)
}
answer2.textContent = abc

//3
const task3 = document.getElementById("task3")
const answer3 = document.createElement("p")
task3.append(answer3)
const arr1 = [3, 5, 7]
const arr2 = [19, 23]
const arr3 = [11, 13, 17]

const arr4 = [...arr1, ...arr2, ...arr3]
answer3.textContent = arr4.sort(function (a, b) {
    return a - b;
})

 //4
 const task4 = document.getElementById("task4")
 const answer4_1 = document.createElement("p")
 const answer4_2 = document.createElement("p")
 task4.append(answer4_1) 
 task4.append(answer4_2)
const staff = ['dress', '9000p', 'shirt', '3000p', 'shoe', '5000p', 'hat', '1500p',]
const goods = staff.filter((item, i) =>  i%2===0)
const price = staff.filter((item, i) => i%2 != 0)
answer4_1.textContent = "товары: " + goods
answer4_2.textContent = "цены: " + price
const staffAsAnObject = goods.reduce(function (obj, value, index) {
    let property = price[index]
    obj[value]=property
    return obj
}, {}) 
console.log(staffAsAnObject)
for (const [key, value] of Object.entries(staffAsAnObject)) {
    const answer4_3 = document.createElement("p")
    task4.append(answer4_3)
    answer4_3.textContent = `${key}: ${value}`
}