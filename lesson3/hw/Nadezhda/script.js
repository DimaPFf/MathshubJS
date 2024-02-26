console.log("Task1")
let n = 2
let ItemPrevious = 1
let Item = 2
console.log(ItemPrevious)
console.log(Item)

while (n < 20) {
    ItemNext = Item + ItemPrevious
    console.log(ItemNext)
    ItemPrevious = Item
    Item = ItemNext
    n++
}

console.log("Task2")
for (let i = 100; i <= 300; i = i + 5) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

console.log("Task3")
console.log("Function1")
function horoscope(zodiac) {
    switch (zodiac) {
        case "Овен":
            alert("Сегодня Овнам стоит активничать – пролеживать бока под запретом. Если ослушаетесь – звезды обязательно подкинут вам проблем. Но в то же время не нужно браться за что-то новое, ведь, скорее всего, все забуксует на первых же минутах. Лучше заниматься бытом или встречаться с друзьями. Гороскоп на сегодня для знака Овна советует позаботиться о здоровье – отслеживайте свои ощущения.");
            break;
        case "Телец":
            alert("Сегодня к Тельцам лицом повернутся Фортуна – успех будет абсолютно во всем. Так что ловите награды и наслаждайтесь этим удачным днем. Полезно сейчас прижаться к любимому человеку и провести это морозное время с дорогим – отношения станут крепче. Гороскоп на сегодня для знака Тельца советует держать себя в руках и не тратить слишком много денег – они еще понадобятся.");
            break;
        case "Близнецы":
            alert("Сегодня Близнецам нужно хлопотать по дому – наведите чистоту и порядок, чтобы не отвлекаться на домашние дела в разгар рабочей недели. Стоит подумать о деньгах – возможно, вы поймете, как их сохранить или даже преумножить. Гороскоп на сегодня для знака Близнецов советует вечер провести с родными – будет приятно, вы зарядитесь хорошим настроением на неделю вперед.")
            break;
        default:
            alert("Всё будет хорошо")
    }
}
let zodiac = prompt("Укажите Ваш знак зодиака")
horoscope(zodiac)

console.log("Function2")
function YourNumber(date) {
    let sum = 0
    date = +date
    while (date > 0) {
        n = date % 10
        console.log(n)
        date = (date - n) / 10
        console.log(date)
        sum = sum + n
        console.log(sum)
    }
    alert(sum)
}
let date = prompt("Введите дату и месяц рождения слитно без наков препинания")
YourNumber(date)

console.log("Function3")
function SugarInCoffee() {
    let n = 0
    let answer = prompt("Добавить сахар в кофе?")
    if (answer === "да") {
        do {
            n = n + 1
            alert ("ложек сахара в кофе - " + n)
            answer = prompt("Добавить сахар в кофе?")
        } while (answer === "да")
        alert ("Приятного кофепития")
}
else {
    alert ("Приятного кофепития")
}
}
SugarInCoffee ()