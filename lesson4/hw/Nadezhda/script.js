function addItem(container, text) {
    const p = document.createElement('p')
    p.textContent = text
    p.onclick = () => {
        if (p.style.color === 'lime') p.style.color = 'black'
        else p.style.color = 'lime'
    }

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Удалить'
    deleteButton.onclick = () => {
        p.style.display = 'none'
    }
    p.append(deleteButton)
 
    container.append(p)
}

function toDo() {
    const toDoList = document.getElementById('toDoList')
    const input = document.getElementById('input')
    console.log(input)
    let addButton = document.getElementById('addButton')
    console.log(addButton)

    const tasksList = document.createElement('div')
    tasksList.className = 'toDoList__tasks'
    toDoList.append (tasksList)
    console.log('ниче не нажимали')

    addButton.addEventListener('click', addButton.onclick);

    addButton.onclick = () => {
        console.log('кнопка нажата')
        addItem(tasksList, input.value)
        input.value = ''
    }

}


toDo()
