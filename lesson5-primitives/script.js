// const obj = {
//     a: 'test',
//     fun() {
//         return this.a
//     }
// }
// console.log('hello'.toUpperCase())
//
// console.log('HELLO'.toLowerCase())
//
// console.log('obj', obj.fun())

// const num = Number('123')
// const num2 = +'123'
//
// console.log(typeof num)
// console.log(typeof num2)


// const str = String(123)
// const str2 = 123 + ''
//
// console.log(typeof str)
// console.log(typeof str2)

// const zero = new Number(0) // Object

// const zero2 = Number(0)
//
// // false 0 '' null undefined nan
// // true { }
//
// if (zero2) {
//     console.log('истина', typeof zero)
// } else {
//     console.log('ложь')
// }

// const bool = Boolean('')
// const bool2 = Boolean('123')
//
// const bool3 = !!'123'

// console.log('bool, bool2', bool, bool2)
// console.log(bool3)

// Number

// const num = 1000
// const bigNum = 1_000_000_000
// const n = 1e9 //
// const n2 = 1e-6 //
//
// console.log(n2)

//0x123
// console.log(0xFF) // 255
// console.log(0x11) // 17
// console.log(0b111)
// console.log(0b11111)
// console.log(0o12) // 10


// const num = 255
// // console.log(num.toString(16)) //ff
// // console.log(num.toString(8)) //377
// // console.log(num.toString(2)) //11111111
//
// if (num.toString(16) == num) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// console.log(0.1 + 0.2 === 0.3) //
// console.log(((0.1 * 10) + (0.2 * 10)) / 10 === 0.3 )

// 0.30000000000000004

// 1/10 = 0.1
// 2/10 = 0.2

// 1/3 = 0.333333(4)

//IEEE-754


// console.log(+(0.1 + 0.2).toFixed(1) === 0.3)
//
// console.log(0.03.toFixed(1))
//
// console.log(Math.floor(1.7)) // 1
//
// console.log(Math.ceil(1.7)) // 2
// console.log(Math.ceil(1.3)) // 2
// console.log(Math.round(1.7)) // 2
// console.log(Math.round(1.3)) // 1
//
// console.log(Math.random()) // 0..1
//
// console.log(Math.PI)
// console.log(Math.min(1,2,4,5,6)) // 1
// console.log(Math.max(1,2,4,5,6)) // 6
//


// String

let str = 'some text' // 0 1 2 ...
const st2 = `some text2`
const str3 = "text 3"
const strUpper = str.toUpperCase()
const lowerCase = strUpper.toLowerCase()

// // console.log(str[2] + str[3] + str[3] + str[5]) // meet
//
// str[1] = 'a'
//
// console.log(str) //
//
// console.log(str.length) // 9
//
// console.log(str[2] + str[3] + str[3] + str[str.length-1]) // meet

const newStr = str.slice(1, -2)

// console.log(newStr)


// console.log(str.indexOf('me')) // 2
// console.log(str.indexOf('xxx')) // -1
const hello = 'Hello Dmitry, how are you?' // utf-16
// console.log(hello.indexOf('D')) //
//
//
// console.log(hello.toLowerCase().includes('hell')) //

//
// console.log(hello.codePointAt(0)) //
// console.log(String.fromCodePoint(72))


// console.log(" some text   ".trim() === "some text")
// console.log("some text".split(' ').join(''))
// console.log("some text".replace('some', 'another'))





