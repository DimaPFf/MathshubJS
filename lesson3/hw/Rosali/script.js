//---Задача №1

let fb1 = 1
let fb2 = 2

let num = 0

while(num < 20) {

    console.log(fb1);

    let fb = fb1 + fb2;
    fb1 = fb2;
    fb2 = fb;

    num++
}


//---Задача №2

let sum = 0
for (let i = 100; i < 300; i++) {
    if (i % 3 === 0) {
        sum++;
        if (sum % 5 === 0) {
        console.log (i)
        }
    }
}

//---Задача №3.1

function zodiac() {
    let name = prompt('Введите ваш знак')
    switch (name) {
        case 'Овен':
            alert('Не отказывайтесь от дружеских посиделок – общение обещает быть продуктивным и очень приятным для вас.')
            break;
    
        case 'Телец':
            alert('Сегодня смело беритесь за новое или незнакомое дело, даже если сомневаетесь в своих способностях.')
            break;
    
        case 'Дева':
            alert('Некоторые люди могут сильно вас огорчить или раскритиковать, но не слушайте их слова – вряд ли их критика связана не с завистью, а с вашими реальными промахами.')
            break;
    
        default:
            alert('Сегодня чудесный день!')
    }
}
    
zodiac()

//---Задача №3.2

let day = prompt('Введите день вашего рождения: ')
let month = prompt('Введите месяц вашего рождения: ')

function birthdayNumber () {
    
    alert(`Ваше родовое число -  ${+day + +month} `);
}

birthdayNumber();

//---Задача №3.3

function coffeeSugar () {

    let a = 'да';
    let b = 'нет'; 
    let coffee = true;
    
    do {
        const coffee = confirm('Добавить ли сахар в кофе?');
        if (coffee) {
            alert('Ложек сахара в кофе - 1')
        } else {
            alert('Приятного кофепития')
        }
       } while (coffee == b);
    }
     
    coffeeSugar ()