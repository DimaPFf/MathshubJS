
//объявляется функция addTask()
const addTask = () => {
    const input = document.querySelector('.todo__text'); //переменная input получает ссылку на элемент с классом "todo__text".
    const inputText = input.value; //переменная inputText получает значение введенное в поле ввода.

    if (!inputText) return; //проверяется, что значение введено, иначе функция завершается.

    const listTask = document.querySelector('.todo__tacks'); //переменная listTask получает ссылку на элемент с классом "todo__tacks".

    const newTask = document.createElement("div"); //создается новый элемент div и присваивается переменной newTask.
    newTask.classList.add("inputText"); //добавляется класс "inputText" к созданному элементу.

    const taskText = document.createElement("div"); //создается новый элемент div и присваивается переменной taskText.
    taskText.classList.add("task-text"); // добавляется класс "task-text" к созданному элементу.
    taskText.innerHTML = inputText; //устанавливается HTML содержимое элемента taskText равным введенному тексту.

    //устанавливается обработчик события клика для taskText, который изменяет цвет фона элемента при каждом клике.
    taskText.onclick = () => {
        if (taskText.style.backgroundColor == '') {
            taskText.style.backgroundColor = 'lightgreen';
        } else {
            taskText.style.backgroundColor = '';
        }
    };

    const deleteBtn = document.createElement('button'); //создается новая кнопка и присваивается переменной deleteBtn.
    deleteBtn.innerHTML = "Удалить"; // текст кнопки задается как "Удалить".
    //устанавливается обработчик события клика для кнопки deleteBtn, который удаляет newTask из списка задач.
    deleteBtn.onclick = () => {
        listTask.removeChild(newTask);
    };

    newTask.appendChild(taskText); //добавляется дочерний элемент taskText к newTask.
    newTask.appendChild(deleteBtn); // добавляется дочерний элемент deleteBtn к newTask.
    listTask.appendChild(newTask); //добавляется newTask в список задач.

    input.value = ""; //значение поля ввода устанавливается как пустое.
}