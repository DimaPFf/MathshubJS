
  
function printForm(e){
     
    // получаем значение поля key
    const keyBox = document.search.key;
    const val = keyBox.value;
    // получаем элемент Doc
    const printBlock = document.getElementById("printBlock");
    // создаем новый параграф
    const pElement = document.createElement("p");
    // устанавливаем у него текст
    pElement.textContent = val;
    // добавляем параграф в printBlock
    printBlock.appendChild(pElement);


  }
 
const printButton = document.search.print;
printButton.addEventListener("click", printForm);