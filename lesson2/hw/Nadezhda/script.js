console.log('1)', -1 && 0 && 'false')
console.log('2)', +'0' || '0' || false)
console.log('3)', !!'false' || 0 + '' || 29)
console.log('4)', "1"**2 && 9 - '9' && null)
console.log('5)', undefined || null || +null || !undefined)

const age = prompt ("Укажите Ваш возраст", 25)

if (isNaN(age)) {
    alert ("Проверьте правильность ввода")
} else if (age <= 5) {
    alert ("Заберите гаджет у маленького ребенка")
} else if ( age <= 16) {
    alert ("Этот сайт предназначен для взрослых людей старше 16 лет")
} else if ( age > 60 && age <= 130 ) {
    alert ("Рады видеть Вас на нашем сайте!")
} else if ( age > 130) {
    alert ("Проверьте правильность ввода, если Вы не вампир или призрак")
} else {
    alert ("Привет!")
}



