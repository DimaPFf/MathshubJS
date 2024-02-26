const users = [
    [{ id: 1, name: 'Anna', bd: '1991-01-01' }, 'user'],
    [{ id: 2, name: 'Bill', bd: '1990-02-08' }, 'user'],
    [{ id: 3, name: 'Clint', bd: '1988-10-19' }, 'user'],
    [{ id: 4, name: 'Den', bd: '1993-08-08' }, 'admin'],
    [{ id: 5, name: 'Eva', bd: '1990-03-30' }, 'admin'],
    [{ id: 6, name: 'Fill', bd: '1999-03-30' }, 'user'],
    [{ id: 7, name: 'Germiona', bd: '1995-02-23' }, 'admin'],
    [{ id: 8, name: 'Henry', bd: '1992-03-08' }, 'user'],
]

// 1 функция

const usersBD = users.map(([user]) => ({
    name: user.name, bdMonth: user.bd.slice(5, 7), bdDay: user.bd.slice(8, 10)
}))

// console.log(usersBD)

function getZodiac(arr) {
    let zodiac = 'Ошибка'
    let newArr = []
    // const newArr = []
    // let newEl = {}
    for (el of arr) {
        // console.log(el)
        // console.log(+el.bdMonth + typeof(+el.bdMonth))
        if ((+el.bdMonth === 3 && +el.bdDay >= 21) || (+el.bdMonth === 4 && +el.bdDay <= 20)) {
            zodiac = "Овен"
        }
        else if ((+el.bdMonth === 4 && +el.bdDay >= 21) || (+el.bdMonth === 5 && +el.bdDay <= 20)) {
            zodiac = "Телец"
        }
        else if ((+el.bdMonth === 5 && +el.bdDay >= 21) || (+el.bdMonth === 6 && +el.bdDay <= 21)) {
            zodiac = "Близнецы"
        }
        else if ((+el.bdMonth === 6 && +el.bdDay >= 22) || (+el.bdMonth === 7 && +el.bdDay <= 22)) {
            zodiac = "Рак"
        }
        else if ((+el.bdMonth === 7 && +el.bdDay >= 23) || (+el.bdMonth === 8 && +el.bdDay <= 23)) {
            zodiac = "Лев"
        }
        else if ((+el.bdMonth === 8 && +el.bdDay >= 24) || (+el.bdMonth === 9 && +el.bdDay <= 23)) {
            zodiac = "Дева"
        }
        else if ((+el.bdMonth === 9 && +el.bdDay >= 24) || (+el.bdMonth === 10 && +el.bdDay <= 23)) {
            zodiac = "Весы"
        }
        else if ((+el.bdMonth === 10 && +el.bdDay >= 24) || (+el.bdMonth === 11 && +el.bdDay <= 22)) {
            zodiac = "Скорпион"
        }
        else if ((+el.bdMonth === 11 && +el.bdDay >= 23) || (+el.bdMonth === 12 && +el.bdDay <= 21)) {
            zodiac = "Стрелец"
        }
        else if ((+el.bdMonth === 12 && +el.bdDay >= 22) || (+el.bdMonth === 1 && +el.bdDay <= 20)) {
            zodiac = "Козерог"
        }
        else if ((+el.bdMonth === 1 && +el.bdDay >= 21) || (+el.bdMonth === 2 && +el.bdDay <= 20)) {
            zodiac = "Водолей"
        }
        else if ((+el.bdMonth === 2 && +el.bdDay >= 21) || (+el.bdMonth === 3 && +el.bdDay <= 20)) {
            zodiac = "Рыбы"
        }
        // el.zodiac =  zodiac
        // console.log(el.zodiac)
        newArr.push([el.name, zodiac])
        // newEl = {name: el.name, zodiac: el.zodiac}
        // newArr.push(newEl)
    }
    return newArr
}

console.log("Первая задача:")
console.log(getZodiac(usersBD))
console.log("********")

// 2 функция

function howManyDaysPassed(date) {
    let now = new Date()
    let dateBD

    let yearNow = now.getFullYear()
    let monthNow = now.getMonth() + 1
    let dayNow = now.getDate()

    let monthBD = date.substring(5, 7)
    const dayBD = +date.substring(8, 10)

    if (monthNow > monthBD || (monthNow == monthBD && dayNow > dayBD)) {
        dateBD = yearNow + "," + monthBD + "," + dayBD
    } else dateBD = (yearNow - 1) + "," + monthBD + "," + dayBD

    const result = Math.ceil((now.getTime() - new Date(dateBD).getTime()) / (1000 * 3600 * 24))
    return result
}
console.log("Вторая задача:")
for (el of users) {
    console.log(el[0].bd)
    console.log(howManyDaysPassed(el[0].bd))
}
console.log("********")

// 3 функция

function sortKeys(collection){
    const sorted =collection.map(user => user[0].bd).sort((a, b) => new Date(a) - new Date(b))
    const newArr = sorted.map(bd =>users.find(user => user[0].bd === bd)[0].id)
        // console.log(sorted)
        // console.log(newArr)
        return newArr

}
console.log("Третья задача:")
console.log(sortKeys(users))
console.log("********")