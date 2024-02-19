// задача 1

console.log('задача 1')
const createRomeNum = (a) => {
    if (a === 1) return 'I'
    else if(a===0) return ''
    else return 'I' + createRomeNum(a - 1)
    // return (a === 1) ? a : a + createRomeNum(a - 1)
}

const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

function optiRomeNum(number) {
    let romeNumOpti = ''
    let romeNum = number.length
    console.log(romeNum)
    decimal.map((item, index) => {
        while (item <= romeNum) {
            romeNumOpti += roman[index];
            romeNum = romeNum - item
        }
    })
    return romeNumOpti
}

// function optiRomeNum2(number) {
//     let romeNumOpti = ''
//     decimal.map((item, index) => {
//         while (item <= number.length) {
//             romeNumOpti += roman[index];
//             number = number.slice(0, -1 * item)
//         }
//     })

//     return romeNumOpti
// }

function optiRomeNum2(number) {
    return recursiveOptiRomeNum(number, '', 0);
}
function recursiveOptiRomeNum(number, romeNumOpti, index) {
    if (number.length === 0) {
        return romeNumOpti;
    }
    
    if (number.length >= decimal[index]) {
        romeNumOpti += roman[index];
        number = number.slice(0, -1 *  decimal[index])
          } else {
        index++;
    }
    
    return recursiveOptiRomeNum(number, romeNumOpti, index);
}


const task1Article = document.getElementById("task1")
const button11 = document.getElementById("button1")
const answer1 = document.createElement("p")
task1Article.append(answer1)
button1.onclick = function () {
    let input = document.getElementById("input").value
    answer1.innerHTML = optiRomeNum2(createRomeNum(input))
}
console.log('************')

// задача 2

console.log('задача 2')
const task2Article = document.getElementById("task2")
const button2 = document.getElementById("button2")
const answer2 = document.createElement("p")
task2Article.append(answer2)
const calls = []


function callTime() {
    let currentDate = new Date();
    calls.push(currentDate.getHours() + ' часов', currentDate.getMinutes() + ' минут(ы)', currentDate.getSeconds() + ' секунд')
    const answer2 = document.createElement("p")
    task2Article.append(answer2)
    answer2.innerHTML = calls
    // return calls
}


button2.onclick = function () {
    console.log("кнопка нажата")
    callTime()
    let timer1 = setTimeout(callTime, 1000)
    let timer2 = setTimeout(callTime, 3000)
    let timer3 = setTimeout(callTime, 5000)
    console.log('************')
}

