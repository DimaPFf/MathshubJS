//task1
const task1Article = document.getElementById("task1")
const task1Width = document.getElementById("task1Width")
const task1Height = document.getElementById("task1Height")
const task1BorderWidth = document.getElementById("task1BorderWidth")
const task1BorderColor = document.getElementById("task1BorderColor")
const task1Button = document.getElementById("task1Button")
const task1div = document.createElement("div")
task1Article.append(task1div)

task1Button.onclick = () => {
    task1div.style.marginTop = 10 + "px"
    task1div.style.width = task1Width.value + "px"
    task1div.style.height = task1Height.value + "px"
    task1div.style.border = task1BorderWidth.value + "px solid" + task1BorderColor.value

}

// task2

const crystalBall = document.getElementById("crystalBall")
crystalBall.textContent = "Ожидаю Ваш вопрос"
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
crystalBall.onclick = () => {
    let option = randomInteger(1, 10)
    switch (option) {
        case 1:
            crystalBall.textContent = "Всё будет хорошо";
            break;
        case 2:
            crystalBall.textContent = "Спросите позже";
            break;
        case 3:
            crystalBall.textContent = "Будущее туманно";
            break;
        case 4:
            crystalBall.textContent = "Определенно да";
            break;
        case 5:
            crystalBall.textContent = "Скорее нет";
            break;
        case 6:
            crystalBall.textContent = "Шансы велики";
            break;
        case 7:
            crystalBall.textContent = "Нет шансов";
            break;
        case 8:
            crystalBall.textContent = "50/50";
            break;
        case 9:
            crystalBall.textContent = "Исключено";
            break;
        case 10:
            crystalBall.textContent = "Все получится!";
            break;
    }
}

// task3

const task3Article = document.getElementById("task3")
const task3Word = document.getElementById("word")
const task3Letter = document.getElementById("letter")
const task3Button = document.getElementById("task3Button")
const answer = document.createElement("p")
task3Article.append(answer)

task3Button.onclick = () => {
    let word = task3Word.value.toLowerCase()
    let letter = task3Letter.value.toLowerCase()
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) count = count + 1;
    }
    switch (count) {
        case 0:
            answer.textContent = "Такой буквы нет в заданном слове";
            break;
        case 1:
            answer.textContent = "Повторов нет"
            break;
        default:
            answer.textContent = "Повторы есть";
            break;
    }
}

// task4

const task4Article = document.getElementById("task4")
const task4string = document.getElementById("string")
const task4Button = document.getElementById("task4Button")
const cut = document.createElement("p")
task4Article.append(cut)

task4Button.onclick = () => {
    console.log ("Кнопка нажата")
    const string = task4string.value
    cut.textContent = string.slice(0,19) + "..."
}