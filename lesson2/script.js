const flag = '4' >= 4

// const name = prompt('введите имя')
//
//
// if (name === 'анна' ) {
//     alert('привет анна' );
// } else if(name === 'дима') {
//     alert('привет дима');
// } else if(name === 'денис') {
//     alert('привет анна');
// } else {
//     alert('привет')
// }


// const operator = prompt('введите математический операто + - * /')
// const numA = prompt('введите a')
// const numB = prompt('введите b')
//
// if (operator === '+' ) {
//     alert(`сумма чисел a и b = ${numA + numB}`);
// } else if(operator === '-') {
//     alert(`разность чисел a и b = ${numA - numB}`);
// } else if(operator === '*') {
//     alert(`произведение чисел a и b = ${numA * numB}`);
// } else if(operator === '/') {
//     alert(`деление чисел a и b = ${numA / numB}`);
// } else {
//     alert('такого оператора нет!')
// }

// ||
// console.log('' || false || 0 || '') // => ''
//
// console.log('>>>', '' || false || 1 || '') // => 1
//
// console.log('>>>', '0' || false || 1 || '') // => '0'
//
// // false 0 '' null undefined Nan
//
// // [] {}
//
// console.log('>>>', '' || {} || false || NaN) // =>

// &&

// console.log('>>>', {} && {} && 1 && NaN) // => NaN
//
// console.log('>>>', {} && {} && 1 && 'NaN') // => 'NaN'

// console.log('>>>', 'test' && "" && 0 && null) // => ''

// ??

// console.log('>>>', {} ?? null ?? undefined ?? 1 ) // => {}
//
// console.log('>>>', null ?? undefined ?? { n: '' }.n ?? 1 ) // => ""

// console.log('>>>', 23 || '' && 4) // => 23
//
// console.log('>>>', (23 || '') && 4) // => 23 && 4

// тернарник

// выражение ? истина : ложь


// const num = prompt('введите число')
//
// console.log('typeof', typeof num) //
//
// // const val = num % 2 === 0 ?  'четное' : 'нечетное'
//
// const val = num === 10 ?  num ** 2 : num * 2
//
// console.log('>>>', val) //

const pass1 = document.getElementById('pass1')
const pass2 = document.getElementById('pass2')
const btn = document.getElementById('btn')

// btn.addEventListener('click', () => {
//     console.log('pass1.value', pass1.value)
//     console.log('pass2.value', pass2.value)
//
//     // if (pass1.value ===  pass2.value) {
//     //     console.log('пароль проверку прошел ' );
//     // } else {
//     //     console.log('пароль не верный')
//     // }
//
//     console.log(pass1.value ===  pass2.value ?  'прошел' : 'не верный')
//
// })

let temp = ''

if (pass1.value ===  pass2.value) {
    temp = 'пароль проверку прошел '
} else {
    temp = 'пароль не верный '
}

const temp2 = pass1.value ===  pass2.value ?  'прошел' : 'не верный'