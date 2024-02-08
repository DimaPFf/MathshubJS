// // Map
//
// let map = new Map()
// const arr3 = [1,2,3,4]
// map.set('name', 'Dima')
// map.set(arr3, 'array')
// map.set(1, 'number 1')
// map.set('', 'empty')
// map.set(true, 'bool')
//
// // console.log(map)
// // console.log('true',map.get(true))
// // console.log([], map.get(arr3))
//
// // const arr = [] // link1
// // const arr1 = arr
// //
// // console.log(arr === arr1)
//
// // console.log(map.has(''))
//
// map.set({}, 'object') //
//
// // console.log(map.has({})) //
// map.delete(true)
// // console.log(map)
// // console.log(map.size)
//
// // set get has delete size
//
// map.set(false, 'false').set('test', 'test') // ... ...
// console.log(map)
//
// // keys values entries
//
// // console.log('keys', map.keys())
// // console.log('values', map.values())
// // console.log('entries', map.entries())
//
// // for (const entries of map.entries()) {
// //     console.log(entries)
// // }
//
// // Object.toString() // '[object Object]'
// // [1,2,3,4].toString() // '1,2,3,4'
// //
// // [].toString() // ''
//
// // console.log(Object.fromEntries(map.entries()))
//
//
//
// // Set
//
// const set = new Set() //
//
// //add
// set.add(1)
// set.add(1)
// set.add(1)
// set.add(1)
// set.add(12)
// set.add(3)
// set.add(4)
//
// // console.log(set)
//
// set.delete(12)
//
// console.log(set)
//
// console.log(set.has(12))
// console.log(set.has(1))
//
// console.log(set.size)
// // set.clear()
// console.log(set)
//
// for (const value of set) {
//     console.log(value)
// }
//
// set.forEach((value) => {
//     console.log(value)
// })
//
// const arr = [11,12,2,3,4] // [1,12,11,2,3,4]
// function uniq(arr) {
//     const set = new Set(arr)
//     const result = []
//     set.forEach((value) => {
//         result.push(value)
//     })
//
//     return result
// }
//
// console.log(uniq(arr))
//
// const str = 'aaabbabccece' // [['a', 4], ['b', 3], ['c', 3], ['c', 3]]
//
// function letterCount(str) {
//     const map = new Map()
//
//     for (let i = 0; i < str.length; i++) {
//
//         if(map.has(str[i])) {
//
//             const count = map.get(str[i])
//             map.set(str[i], count + 1)
//
//         } else {
//             map.set(str[i], 1)
//         }
//     }
//
//     return map.entries()
// }
//
// console.log(letterCount(str))


// Date

let date = new Date()

// console.log(date)
// console.log("date.getDate", date.getDate())
// console.log("date.getHours", date.getHours())
// console.log("date.getMinutes", date.getMinutes())
// console.log("date.getTime", date.getTime())
// console.log("date.getSeconds", date.getSeconds())
// console.log("date.getMonth", date.getMonth())

// date.setDate(31) // 29
//
// console.log(date.getDate())
// console.log("date.getMonth", date.getMonth())

//year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number
// const ourDate = new Date(2025, 11, 24, 10, 30, 59)
//
// console.log(ourDate.toISOString())
// console.log(ourDate.toUTCString())
//
// ourDate.setFullYear(2026)
//
// console.log(ourDate)


// JSON

const dateOfBirthday = new Date(1999, 12,31)

let user = {
    name: 'Dima',
    date: dateOfBirthday,
    sayHello: function () {
        return console.log(`Hello ${this.name}`)
    },
    address: {
        street: 'Lomonosov street',
        house: 24
    }
}

const json = JSON.stringify(user)
//
// json.address = 'Lomonosov street'
//
// console.log(json)
//
// const objUser = JSON.parse(json)
//
// objUser.address = 'Lomonosov street'
//
// console.log(objUser)

user.sayHello()

const userClone = JSON.parse(JSON.stringify(user))

console.log('user', user)

console.log('userClone', userClone)

console.log(user.address === userClone.address)





















