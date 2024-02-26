const article = document.getElementById("brainteaser")
const button = document.getElementById("button")
let n = 0


button.onclick = function () {
    const input = document.getElementById("answer").value
try {
    if (+input != 6457) {
        alert ("Вы ошиблись")
        n += 1
        throw new Error("Пользователь ошибся " + n + " раз(a)")
    } else {
        alert(`Вы правы`)
    }
}
catch (e) {
    console.log('name', e.name)
    console.log('message', e.message)
    console.log('stack', e.stack)
}
console.log('*****')
}

//6457 правильный ответ