console.log('1)', -1 && 0 && 'false');
console.log('2)', +'0' || '0' || false);
console.log('3)', !!'false' || 0 + '' || 29);
console.log('4)', "1"**2 && 9 - '9' && null);
console.log('5)', undefined || null || +null || !undefined);


const userAge = prompt('Введите ваш возраст');

if (isNaN(userAge)) {
    alert ('Некорректный ввод данных');
} else if (userAge < 5) {
    alert('Вам рано пользоваться компьютером');
} else if (userAge <= 16 && userAge >= 5) {
    alert ('Вам рано пользоваться сайтом');
} else if (userAge >= 60 && userAge <= 129) {
    alert ('Здравствуйте, господин');
} else if (userAge >= 130) {
    alert ('Привет, призрак');
} else {
    alert ('Привет');
}


