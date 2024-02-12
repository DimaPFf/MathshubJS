//-------Задача #1
const arr = ['empty', 121, 'zero', 144, null, 189, 'nothing']

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        sum += arr[i]
    }
}

// console.log(sum)


//-------Задача #2
const abc = ['б', 'в', 'д', 'з', 'и']

abc.unshift('а')
abc.splice(3, 0, 'г')
abc.splice(5, 0,'е', 'ё', 'ж')
abc.splice(10, 0, 'й')
abc.push('к')

// console.log(abc)

//-----Задача №3
const arr1 = [3, 5, 7]
const arr2 = [19, 23]
const arr3 = [11, 13, 17]

const array = arr1.concat(arr2, arr3)
array.sort((a, b) => a - b);
array.reverse()

//------Задача №4
const staff = ['dress', '9000p', 'shirt', '3000p', 'shoe', '5000p', 'hat', '1500p']

const product = staff.filter(function (elem, index) {
    return index % 2 == 0;
})

const price = staff.filter(function (elem, index) {
    return index % 2 !== 0;
})

console.log(product)
console.log(price)

const productObject = product.reduce((acc, item, index) => {
    acc[item] = price[index];
    return acc;
}, {});

console.log(productObject)