let age = prompt('Какой ваш возраст?');

if (age <= 0 || typeof(+age) !== 'number') {
  alert('Введен некорректный возраст');
} else if (age < 5) {
  alert('слишком мал для пользования ПК');
} else if (age >= 5 && age < 16) {
  alert('слишком юн для пользования сайтом');
} else if (age > 60 && age <= 130) {
  alert('почтительно');
} else if (age > 130) {
  alert('невозможно, либо пользователь призрак');
} else {
  alert('Добро пожаловать');
}