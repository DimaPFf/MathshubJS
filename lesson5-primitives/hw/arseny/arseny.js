const createEl = (el) => document.createElement(el);
const root = document.getElementById('root');

/////border
const borderContainer = createEl('div');
borderContainer.className = 'container';

const inputBlock = createEl('div');
inputBlock.className = 'block';

const borderTitle = createEl('h2');
borderTitle.className = 'title';
borderTitle.textContent = "Create border";

const borderWidth = createEl('input');
borderWidth.className = 'border__input';
borderWidth.type = 'number';
borderWidth.placeholder = 'Enter width';

const borderHeight = createEl('input');
borderHeight.className = 'border__input';
borderHeight.type = 'number';
borderHeight.placeholder = 'Enter height';

const borderThickness = createEl('input');
borderThickness.className = 'border__input';
borderThickness.type = 'number';
borderThickness.placeholder = 'Enter thickness';

const borderColor = createEl('input');
borderColor.className = 'color__input';
borderColor.type = 'color';

const border = createEl('div');

const createButton = createEl('button');
createButton.textContent = 'Create border';
createButton.addEventListener('click', () => {
  border.style.width = `${borderWidth.value}px`;
  border.style.height = `${borderHeight.value}px`;
  border.style.border = `${borderThickness.value}px solid ${borderColor.value}`;
})

inputBlock.append(
  borderWidth,
  borderHeight,
  borderThickness,
  borderColor,
  createButton
);
borderContainer.append(
  borderTitle,
  inputBlock,
  border
);

////crystal ball
const ballContainer = createEl('div');
ballContainer.className = 'container';

const ballBlock = createEl('div');
ballBlock.className = 'block';

const ballTitle = createEl('h2');
ballTitle.className = 'title';
ballTitle.textContent = "Crystal ball";

const question = createEl('input');
question.className = 'ball__input';
question.placeholder = 'Enter your question';

const predictButton = createEl('button');
predictButton.textContent = 'Make prediction';
predictButton.addEventListener('click', () => {
  if (question.value != 'Enter your question') {
    let res = Math.random();
    if (res < 0.1) crystalBall.textContent = 'Да';
    else if (res < 0.2) crystalBall.textContent = 'Возможно';
    else if (res < 0.3) crystalBall.textContent = 'Вполне вероятно';
    else if (res < 0.4) crystalBall.textContent = 'Скорее да';
    else if (res < 0.5) crystalBall.textContent = 'В ближайшее время';
    else if (res < 0.6) crystalBall.textContent = 'Никогда';
    else if (res < 0.7) crystalBall.textContent = 'Скорее всего';
    else if (res < 0.8) crystalBall.textContent = 'Не в ближайшее время';
    else if (res < 0.9) crystalBall.textContent = 'Скорее нет';
    else crystalBall.textContent = 'Нет';
    question.value = '';
  }
})

const crystalBall = createEl('div');
crystalBall.className = 'ball';
crystalBall.textContent = '?';

ballBlock.append(question, predictButton);

ballContainer.append(
  ballTitle,
  ballBlock,
  crystalBall
);

/////letter repeat
const letterContainer = createEl('div');
letterContainer.className = 'container';

const letterBlock = createEl('div');
letterBlock.className = 'block';

const letterTitle = createEl('h2');
letterTitle.className = 'title';
letterTitle.textContent = "Check letter repetition";

const stringInput = createEl('input');
stringInput.className = 'letter__input';
stringInput.placeholder = 'Enter string';

const letterInput = createEl('input');
letterInput.placeholder = 'Enter letter';

const result = createEl('div');

const checkButton = createEl('button');
checkButton.textContent = 'Check';
checkButton.addEventListener('click', () => {
  let string = stringInput.value;
  let letter = letterInput.value;
  if (!letter || !string.includes(letter)) return result.textContent = 'letter not found';
  if (string && letter &&
    string.indexOf(letter) !== string.lastIndexOf(letter)) {
    result.textContent = 'repetition found';
    return false;
  } else {
    result.textContent = 'repetition not found';
    return true;
  }
})

letterBlock.append(
  stringInput,
  letterInput,
  checkButton
);

letterContainer.append(
  letterTitle,
  letterBlock,
  result
);

/////slice line 20
const lineContainer = createEl('div');
lineContainer.className = 'container';

const lineBlock = createEl('div');
lineBlock.className = 'block';

const lineTitle = createEl('h2');
lineTitle.className = 'title';
lineTitle.textContent = "Slice line";

const lineInput = createEl('input');
lineInput.className = 'letter__input';
lineInput.placeholder = 'Enter string';

const sliceButton = createEl('button');
sliceButton.textContent = 'Slice';
sliceButton.addEventListener('click', () => {
  let line = lineInput.value;
  let space = 0;
  let i = 0;
  while (i < line.length) {
    if (line[i] == ' ') {
      space++;
    }
    i++;
  }
  if (line.length > 20) {
    i = 20 + space;
    line = line.slice(0, i) + "...";
    lineInput.value = line;
    return line;
  }
});

lineBlock.append(lineInput, sliceButton)

lineContainer.append(lineTitle, lineBlock)


root.append(
  borderContainer,
  ballContainer,
  letterContainer,
  lineContainer
);
