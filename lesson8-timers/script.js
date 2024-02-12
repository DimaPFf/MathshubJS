//Рекурсия

//pow(x, n)
// x ** n

//Итеративный метод

// function pow2(x, n) {
//     let result = 1 // 2 4
//     for (let i = 1; i <= n ; i++) {
//         result *= x // result = result * x
//     }
//
//     return result
// }
//
// console.log(pow(2,2))

// 2 ** 4 => 2 * 2 * 2 * 2

// Рекурсивный
// function pow(x, n) { // 2 4
//     if (n === 1) {
//         return x
//     }
//     return x * pow(x, n - 1 ) // 2 *  2 *  2 * 2
// }

// 10000


// console.log(pow(2,2))

// fibonachi

// 0 1 1 2 3 5 8
// n = f(n - 2) + f(n - 1)

// fib(4) => 2

// function fib(n) {
//     if (n === 1) {
//         return 1
//     }
//     if (n === 0) {
//         return 0
//     }
//     return fib(n - 2) + fib(n - 1)
// }
// console.log(fib(6))

// Замыкание

// let count = 0
// function makeCounter() {
//     let count = 0
//     return function (){ // внутрення область видимост
//         count++ // count = count + 1
//         console.log('innerCount', count)
//     }
// }
//
// const counter = makeCounter() //
//
// counter() // 1
// counter() // 1
// counter() // 1
//
// console.log('outCounter', count) //

// function multi(num) {
//     return (n) => n * num
// }
//
// const double = multi(2)
// const triple = multi(3)
//
// console.log(double(2))
// console.log(double(4))
// console.log(double(10))
// console.log(double(12))
//
// console.log(triple(1))
// console.log(triple(3))
// console.log(triple(6))

// function multi(a) {
//     return function multi(b) {
//         return (c) => a * b * c
//     }
// }

// function logger(f) {
//     let prev = 0
//     return (s, p) => {
//         console.log('prev', prev)
//         prev = f(s, p)
//         return prev
//     }
// }
//
//
// function sum(a, b) {
//     return a + b
// }
//
// const func = logger(sum)
// console.log(func(1,2))
// console.log(func(2,4))

// Global

// window  - браузера
// global - nodeJS

// window.alert('Hello')

// console.log(window)

// window.a = 10
// window.sayHello = function() {
//     console.log('Hello Window')
// }
// console.log(a)
// sayHello()
// console.log(window.innerHeight)

// Timer

// setTimeout()
// setInterval()
// const date = new Date()
// console.log('before', date.getSeconds())

// const id  = setTimeout(() => {
//     const d = new Date()
//     console.log('after', d.getSeconds())
// }, 2000)
//
// const date = new Date()
// console.log('before', date.getSeconds())
//
// clearTimeout(id)

// let counter = 0
// const id = setInterval(() => {
//     counter++
//     console.log(counter)
//
//     if(counter == 3) {
//         clearInterval(id)
//         console.log("interval end")
//     }
// }, 1000)

// setTimeout(() => {
//     console.log('timeOut')
// }, 0)
//
// console.log('Hello')




