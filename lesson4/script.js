// const obj = {}

// // key: value

// const obj2 = { 
//    name: 'Obj2',
//    type: 'Obj'
// }

// console.log(obj2)

// alert(`name ${obj2.name}`)
// alert(`type ${obj2.type}`)

// const user = {}

// user.name = 'Igor'
// user.age = 13

// // console.log(user)

// user.age = 18


// console.log(user)

// console.log(user['name'])

// user['like film'] = 'Star wars'

// console.log(user["like film"])


// const isAdmin = true

// user.isAdmin = isAdmin

// console.log(user.isAdmin)

// const key = 'hobbis'

// user[key] = null

// console.log(user)

// console.log(user[key])


// const user2 = { name: 'Dima', age: 15 }

// if ('isAdmin' in user2) {
//    console.log('User is admin')
// } else {
//    console.log('User is not admin')
// }


// console.log(user2.film)

// for(let key in user2) {
//    console.log(key)
// }

// const city = {
//    '21': 'Cheboksary',
//    '777': 'Moscow',
//    '1': 'Kazan',
//    '3': 'St.Peterburg'
// }

// for(let key in city) {
//    console.log(city[key], key)
// }


// const test = {
//    name: 'test',
//    value: '',
//    date: '29012024'
// }

// test['1'] = '1'

// for(let key in test) {
//    console.log(test[key], key)
// }

// Копирование

// const a = { name: 'a', type: 'Object'} 

// const b = a

// b.name = 'b'

// console.log('a = ', a.name) // 'b'
// console.log('b = ', b.name) // 'b'

// console.log(a === b)

// const c = {}
// const d = {}

// console.log(c === d) 

// const copyA = {}

// for (let key in a){
//    copyA[key] = a[key]
// }
// console.log('a != copyA', a === copyA) 
// console.log('copyA', copyA)



//Object.assign(target, ...obj)

// const user = {name: 'Dima', age: '35'}

// const cloneUser = Object.assign({}, user)


// console.log('user != cloneUser', user === cloneUser) 
// console.log('cloneUser', cloneUser)


// const permissions = {
//    isAdmin: true,
//    canEdit: true,
// }

// const cloneSuperUser = Object.assign({}, user, permissions)

// console.log('cloneSuperUser', cloneSuperUser)


// const user = {
//    name: 'Dima',
//    address: { // link
//       st: 'Lomonosov',
//       house: '12'
//    }
// }

// const  cloneUser = Object.assign({}, user)
// user.address.house = '99'

// // console.log(cloneUser) // 12 | 99

// delete user.address

// console.log(user)



//this


// const user = {
//    name: 'Dima',
//    sayName() {
//       console.log('name is Dima')
//    }
// }




// const user2 = {
//    name: 'Petya'
// }

// user.myName = getName

// user2.myName = getName

// user.myName()
// user2.myName()


// const getName = function() {
//    console.log(this.here)
// }

// const test = {name: 'Test' }

// test.getName = getName

// test.getName()

// getName() // undefined




// new 

// const user1 = { name: '1'}
// const user2 = { name: '2'}
// ...

// function User(name) { // this = {}
//    this.name = name
//    this.isAdmin = false
// } // return this

// for (let index = 0; index < 3; index++) {
//    const user = new User(index)
//    if(index === 0) {
//       user.isAdmin = true
//    }

//    console.log(user)
// }

// function Car(model, power = '150', maxSpeed) {
//    this.model = model
//    this.power = power
//    this.maxSpeed = maxSpeed ?? '200'

//    if (maxSpeed > 300) {
//       this.isSportCar = true
//    }

//    this.getModel = function() {
//       console.log('model', this.model)
//    }

//    this.getFullSpec = function() {
//       console.log('Car', `${this.model}, ${this.maxSpeed}, ${this.power}`)
//    }
// }

// const audi = new Car('A3', '250', '350')
// const lada = new Car('vesta')


// audi.getFullSpec()
// lada.getFullSpec()

// .?

// ??

const user = {}

console.log(user.address?.house?.value ?? 'default house number 1')