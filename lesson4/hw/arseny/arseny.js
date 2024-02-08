const createEl = (el) => document.createElement(el);
const root = document.getElementById('root');

const addTask = (container, text) => {
    const p = createEl('p');
    const span = createEl('span');
    p.className = 'todo__item';
    span.textContent = text;
    span.className = 'span';

    p.onclick = () => {
        if (span.style.backgroundColor === 'lightgreen') span.style.backgroundColor = 'rgb(192, 60, 60)';
        else span.style.backgroundColor = 'lightgreen';
    }

    const delButton = createEl('button');
    delButton.textContent = 'delete';
    delButton.className = 'button';
    delButton.onclick = () => {
        p.remove();
    }
    p.append(span, delButton);

    container.append(p);
}

const createTODO = () => {

    const title = createEl('h1');
    title.textContent = 'TODO list';
    title.className = 'title';

    const addingBlock = createEl('div');
    addingBlock.className = 'todo__adding';

    const input = createEl('input');
    input.className = 'input';
    const addButton = createEl('button');
    addButton.textContent = 'add';
    addButton.className = 'button';
    addingBlock.append(input, addButton);

    const tasksList = createEl('div');
    tasksList.className = 'todo__tasks';

    root.append(title, addingBlock, tasksList);

    addButton.onclick = () => {
        if (input.value !== '') addTask(tasksList, input.value);
        input.value = '';
    }
}
createTODO();