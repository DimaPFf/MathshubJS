// let i = 10

// while(true) {
//     if (i % 2 === 0) {
//         i = i - 1
//         continue;
//     }

//     if (i === -9) {
//         break;
//     }
//     console.log("i = " , i)
//     i = i - 1
// }

// console.log("i = " , i)

// continue break

// --i i--  i++ ++i

// let i = 10

// console.log('i--', i--) // i {i - 1}
// console.log(i); //9

// console.log('--i', --i); // i = i - 10
// console.log('i', i); //

// console.log(--9)
// console.log(9--)

// console.log(i++); // 10 // 11
// console.log(++i); // 11

// let i = 0

// do {
//     console.log(i)
// } while (i < 0)

// let sumOddNum = 0

// let sumNotOddNum = 0

// for(let i = 1; i <= 10; i++) {
//     if(i % 2 === 0) {
//         sumOddNum = sumOddNum + i
//         continue
//     }

//     sumNotOddNum = sumNotOddNum + i

    
// }
// // 2 4 6 8 10 = 30
// // 1 3 5 7 9 = 25
// console.log(`sumOddNum = ${sumOddNum}, sumNotOddNum = ${sumNotOddNum}`);


// const num = prompt('Введите число от 1 до 100')

// if( isNaN(+num) ) {
//     alert('not is number')
// } else {
//     for(let i = 1; i <= +num; i++) {
//             if(i % 2 === 0) {
//                 console.log(i);
//             }
//     } 
// }


// switch case

// const name = 'Anna'

// switch (name) {
//     case 'Anna':
//     case 'Denis':
//         console.log(`Hi ${name}`);

//     case 'Timur':
//     case 'Artur':
//         console.log(`Hello ${name}`);

//     default:
//         console.log('Welcome');
//         break;
// }


// function

// function sayHello() {
//     alert('Hello world')
// }

// const func = function() {
//     console.log('func')
// }

// // func()

// const arrowFunc = () => {
//     console.log('arrow func');
// }

// arrowFunc()

// const isOdd = (num) => {
//     return num % 2 === 0
// }

// let num = 0

// do {
//     num = prompt('введите число 1 - 100')
// } while (!isOdd(num));

// const x = prompt('x')
// // const y = prompt('y')

// const pow = (x = 2, y = 2) => x ** y
// alert(pow())

for (let i = 0; i < 20; i = i + 4) {
    console.log(i);
    
}