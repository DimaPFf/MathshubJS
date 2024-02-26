
const mini_app = document.querySelector('.answer_app');

const input_answer = document.createElement('input');
input_answer.setAttribute('type', 'text');
input_answer.setAttribute('placeholder', 'Введите ответ');
input_answer.classList.add('inputText')

const answer_btn = document.createElement('button');
answer_btn.classList.add("answer_btn");
answer_btn.innerHTML = "Отправить";
answer_btn.onclick = () => checkAnswer(input_answer)

const result = document.createElement('p')

mini_app.appendChild(input_answer);
mini_app.appendChild(answer_btn);
mini_app.appendChild(result)


let errorCount = 0; //переменная, хранящая количество ошибок.
        
function checkAnswer() {
    const answer = input_answer.value;

    try {
        //parseInt - преобразует ответ в целое число.
        if (parseInt(answer) === 29) {
            result.innerText = 'Вы правы!';
         } else {
            errorCount++;
            result.innerText = 'Вы ошиблись!';
            throw new Error('Ошибка: пользователь ошибся ' + errorCount + ' раз');
        }
    } catch (err) {
        console.log(err.message);
    }
}
