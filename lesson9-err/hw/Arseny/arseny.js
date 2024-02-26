const button = document.querySelector('.answer');
const input = document.querySelector('.input');
const div = document.querySelector('#root');

let answer = '';
let errorCount = 0;

// console.log(input.value);

const checkAnswer = () => {
  try {
    if (input.value === '20') {
      div.innerText = 'Вы правы!';
    } else {
      div.innerText = 'Вы ошиблись!';
      errorCount++;
      throw new Error(`пользователь ошибся ${errorCount} раз`);
    }
  } catch (error) {
    console.log(error);
  }
} 

button.addEventListener('click', checkAnswer);



