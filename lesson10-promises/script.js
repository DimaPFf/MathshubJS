// Колбэк

// function loadScript(src, cb) {
//     const headerTag = document.getElementsByTagName('header')
//     const script = document.createElement("script")
//     script.src = src
//
//     script.onload = () => {
//         cb(null, 'success')
//     }
//     script.onerror = () => {
//         cb( new Error("Script don't load"))
//     }
//
//     headerTag[0].append(script)
// }
//
// function callBack(err, data) {
//     if(err) {
//         alert(err)
//     } else {
//         alert(data)
//     }
// }
//
// loadScript('./script-3.js', callBack)

// function callBack1 ( val) {
//     console.log('finshed = ', val)
// }
//
// function callBack2 ( val) {
//     console.log('cb2 = ', val)
// }
//
// function run(cbs) {
//     let sum = 0
//     for (let i = 0; i < 10000; i++) {
//         sum = sum + i
//     }
//
//     cbs.forEach( cb => cb(sum))
//
// }
//
// run([callBack1,callBack2] )


//Promise - object

// pending
//
// fulfiled - success
// reject - error

// new Promise((resolve, reject) => {
//     resolve('success')
//
//     if(error) {
//         reject('Error')
//     }
// })

//
// Promise() fetch()
// setTimeout() setInterval()

// function sum(a, b) {
//     console.log(a + b)
// }
//
//
//
// function cb(val) {
//     const main = document.getElementsByTagName('main')
//
//     main[0].innerText = val
// }
// function promiseSum(a, b) {
//     return new Promise((res, rej) => {
//         // rej('Error')
//         res(a + b)
//     })
// }
//
// promiseSum(10, 10)
//     .then(
//         (data) => cb(data),  // success
//     )
//     .catch(
//         (msg) => console.log(msg)
//     ) // error)
//
// sum(2, 5)
//
// sum(5, 5)
//
// sum(10, 5)

// function promise1() {
//     return new Promise((res, rej) => {
//         res('success - 1')
//     })
// }
//
// function promise2() {
//     return new Promise((res, rej) => {
//         res('success - 2')
//     })
// }

// promise2().then((data2) => {
//     console.log(data2)
//     promise1().then((data1) => {
//         console.log(data1)
//         console.log('all promises done!')
//     })
// })

// promise2()
//     .then((data2) => {
//         console.log(data2)
//         return promise1()
//     })
//     .then(data1 => {
//         console.log(data1)
//         console.log('all promises done!')
//     })
//     .then(() => console.log('all promises done!'))



// fetch('https://jsonplaceholder.typicode.err')
//     .then( res => res.json())
//     .then(data => {
//         console.log(data)
//         return fetch('https://jsonplaceholder.typicode.com/users/1')
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch( err => {
//         console.log(err)
//         if( err ) {
//             throw('Not defined error')
//         }
//     })
//     .then( () => fetch('https://jsonplaceholder.typicode.com/users/2'))
//     .then( res => res.json())
//     .then( data => console.log(data))
//     // .catch( err => console.error(err))
//     .finally(() => {console.log('it is finally')})



// setTimeout(() => {
//     console.log('settimeout 1')}, 0) // -> macro 1
//
// console.log('1')
//
// const promise1 = Promise.resolve('promise 1')
//
// console.log('2')
//
// promise1.then((data) => {
//     console.log(data) // micro 1
//     setTimeout(() => console.log('settimeout 2')) // macro 2
// })
//
// console.log('3')


// async await


// async function getUsers () {
//     try {
//         const res1 = await fetch('https://jsonplaceholder.typicode.com/users/1')
//         const res2 = await fetch('https://jsonplaceholder.typicode.com/users/2')
//
//         const arr = [await res1.json(), await res2.json()]
//         console.log(arr)
//     } catch (e) {
//         console.log('e', e)
//     }
// }
//
//
//
// getUsers()














