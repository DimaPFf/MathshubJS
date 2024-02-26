
//Задача №1

const section_frame = document.querySelector('#ex1')

const input_width = document.createElement('input')
input_width.setAttribute('type', 'number')
input_width.setAttribute('placeholder', 'Введите ширину')

const input_height = document.createElement('input')
input_height.setAttribute('type', 'number')
input_height.setAttribute('placeholder', 'Введите высоту')

const input_solid = document.createElement('input')
input_solid.setAttribute('type', 'number')
input_solid.setAttribute('placeholder', 'Введите толщину рамки')

const input_color = document.createElement('input')
input_color.setAttribute('type', 'color')
input_color.setAttribute('placeholder', 'Цвет рамки')

const btn = document.createElement('button')
btn.classList.add("btn");
btn.innerHTML = "Показать";

const new_frame = document.querySelector('.new_frame')
const frame = document.createElement('div')

btn.onclick = () => {
    frame.style.width = input_width.value + 'px'
    frame.style.height = input_height.value + 'px'
    frame.style.border =  input_solid.value + 'px solid' + input_color.value
}

section_frame.appendChild(input_width);
section_frame.appendChild(input_height);
section_frame.appendChild(input_solid);
section_frame.appendChild(input_color);
section_frame.appendChild(btn);
new_frame.appendChild(frame);

//Задача №2

const section_oracle = document.querySelector('#ex2');

const input_question = document.createElement('input');
input_question.setAttribute('type', 'text');
input_question.setAttribute('placeholder', 'Введите вопрос');

const oracle_btn = document.createElement('button');
oracle_btn.classList.add("oracle_btn");
oracle_btn.innerHTML = "Показать";

oracle_btn.onclick = () => {
    if (input_question.value != 'Введите вопрос') {
        let answer = Math.random()
        if (answer < 0.1) oracleBall.textContent = 'Да'
        else if (answer < 0.2) oracleBall.textContent = 'Возможно'
        else if (answer < 0.3) oracleBall.textContent = 'Вполне вероятно'
        else if (answer < 0.4) oracleBall.textContent = 'Скорее да'
        else if (answer < 0.5) oracleBall.textContent = 'В ближайшее время'
        else if (answer < 0.6) oracleBall.textContent = 'Никогда'
        else if (answer < 0.7) oracleBall.textContent = 'Скорее всего'
        else if (answer < 0.8) oracleBall.textContent = 'Не в ближайшее время'
        else if (answer < 0.9) oracleBall.textContent = 'Скорее нет'
        else oracleBall.textContent = 'Нет'
        input_question.placeholder = 'Введите вопрос'
    }
}

const new_oracle = document.querySelector('.new_oracle');
const oracleBall = document.createElement('div')
oracleBall.classList.add("oracle_ball");
oracleBall.textContent = 'Волшебный шар заряжается'


section_oracle.appendChild(input_question);
section_oracle.appendChild(oracle_btn);
new_oracle.appendChild(oracleBall);

//Задача №3

const section_dublicate = document.querySelector('#ex3');

const input_word = document.createElement('input');
input_word.classList.add("input_dublicate");
input_word.placeholder = 'Введите слово';

const input_letter = document.createElement('input');
input_letter.placeholder = 'Введите букву';

const btn_dublicate = document.createElement('button');
btn_dublicate.classList.add("btn_dublicate");
btn_dublicate.innerHTML = "Показать";
btn_dublicate.onclick = () => findDublicate(input_word.value, input_letter.value)

const result = document.createElement('p')
result.textContent = 'Начните ввод'

section_dublicate.appendChild(input_word);
section_dublicate.appendChild(input_letter);
section_dublicate.appendChild(btn_dublicate);
section_dublicate.appendChild(result);

function findDublicate (word, letter) {

    if (!word.includes(letter)) {
        return result.textContent = "Буквы в слове нет";
    }

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            result.textContent = 'Обнаружено повторение'
            return true;
        } else {
            result.textContent = 'Повтор не обнаружен'
            return false;
        }
    }
}



// Задача №4


const string = document.querySelector('#ex4');

const input_string = document.createElement('input');
input_string.placeholder = 'Введите строку';

const string_btn = document.createElement('button');
string_btn.innerHTML = "Укоротить";
string_btn.onclick = () => cutString(input_string.value);

string.append(input_string, string_btn)

function cutString (string) {
    if (string.length > 20) {
        string = string.slice(0, 20) + '...';
        input_string.value = string
        return string;
    } else {
        return string;
    }
}