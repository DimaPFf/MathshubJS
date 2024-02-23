
const users = [
    [{id: 1, name: 'Anna', bd: '1991-01-01'}, 'user'],
    [{id: 2, name: 'Bill', bd: '1990-02-08'}, 'user'],
    [{id: 3, name: 'Clint', bd: '1988-10-19'}, 'user'],
    [{id: 4, name: 'Den', bd: '1993-08-08'}, 'admin'],
    [{id: 5, name: 'Eva', bd: '1990-03-30'}, 'admin'],
    [{id: 6, name: 'Fill', bd: '1999-03-30'}, 'user'],
    [{id: 7, name: 'Germiona', bd: '1995-02-23'}, 'admin'],
    [{id: 8, name: 'Henry', bd: '1992-03-08'}, 'user'],
]

// Задача 1

function getZodiac(arr) {
    const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

    const result = arr.map((user) => { //создание нового массива
        //Извлечение имени пользователя из вложенного массива.
        const name = user[0].name;
        //случайным образом выбирается знак зодиака из массива zodiacSigns.
        const zodiac = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
        return [name, zodiac]; //Возврат массива, содержащего имя пользователя и его знак зодиака.
    });

    return result;
}

// console.log(getZodiac(users));


// Задача 2

function howManyDaysPassed(birthDate) {
    //текущий день
    const today = new Date(); 
    //дата последнего дня рождения (текущий год).
    //today.getFullYear() - текущий год
    //new Date(birthDate).getMonth() - месяц из даты рождения
    //new Date(birthDate).getDate() - день из даты рождения
    const lastBirthday = new Date(today.getFullYear(), new Date(birthDate).getMonth(), new Date(birthDate).getDate());

    const day = today.getDate(); //текущий день
    const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const month = monthNames[today.getMonth()]; //текущий месяц
    
    if (today < lastBirthday) {
        //берется предыдущий год, если день рождения в текущем году еще не прошёл.
        //setFullYear - принимает заданный год (lastBirthday.getFullYear() - 1).
        lastBirthday.setFullYear(lastBirthday.getFullYear() - 1);
    }
    
    //Вычисляем разницу во времени между текущей датой и последним днем рождения в миллисекундах
    const diffTime = Math.abs(today - lastBirthday);
    //Вычисляем количество прошедших дней `diffDays` как целое число делением разницы времени на количество миллисекунд в одном дне.
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return `Прошло ${diffDays} дней (выполнено ${day}го ${month})`;
}

// console.log(howManyDaysPassed('1999-08-10'))


// Задача 3

function sortByBirthYear(users) {
    // Извлекаем год рождения из каждого элемента и создаем новый массив
    const sortedKeys = users.map(item => {
        //parseInt - преобразует извлеченный год в целое число.
        const birthYear = parseInt(item[0].bd.split('-')[0]);

        return { key: item, birthYear: birthYear };
    });

    // Сортируем элементы по убыванию года рождения
    sortedKeys.sort((a, b) => b.birthYear - a.birthYear);

    // Возвращаем отсортированные элементы
    return sortedKeys.map(item => item.key);
}

const sortedUsers = sortByBirthYear(users);
// console.log(sortedUsers)