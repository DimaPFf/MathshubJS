console.log('1)', -1 && 0 && 'false')
console.log('2)', +'0' || '0' || false)
console.log('3)', !!'false' || 0 + '' || 29)
console.log('4)', "1"**2 && 9 - '9' && null)
console.log('5)', undefined || null || +null || !undefined)


const num = prompt('Введите ваш возраст?');

if (num == 0) {
    message = `Введён некорректно!`
}  else if (num < 5) {
   message = `Вы слишком малы для пользования ПК!`
}  else if (num < 16) {
   message = `Вы слишком юны для пользования сайтом!`
}  else if (num >= 16 && num < 60) {
   message = `Добро пожаловать!`
}  else if (num >= 60 && num < 130) {
   message = `Почтительно!`
}  else {
   message = `Невозможно, либо пользователь призрак!`
}

alert(`${message}`)