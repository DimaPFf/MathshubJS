// try {
//
// } catch(e) {
//
// }

// const json = '{"name": "Json"}'

//ReferenceError
//SyntaxError
//Error


// try {
//     let data = JSON.parse(json)
//     console.log('Это успех', data )
// } catch(err) {
//     console.log('name', err.name)
//     console.log('message', err.message)
//     console.log('stack', err.stack)
// }


// const name = prompt('Назовите ваше имя?')
// try {
//     if (typeof +name === 'number') {
//         throw new Error('Имя недолжно соодержать цифры') // return
//     } else {
//         console.log(`Добро пожаловать ${name}`)
//     }
// } catch(e) {
//     console.log('name', e.name)
//     console.log('message', e.message)
//     console.log('stack', e.stack)
// }
//
// console.log('какой-то другой код')

// try{
//
// } catch {
//
// }
// throw new Error, new ReferenceError, new SyntaxError
// err { name, message, stack }

// const nums = [1,2,3,4]
//
// try {
//     for (const num of nums) {
//         if(typeof num === 'string') {
//             throw new Error(`В массиве не все элементы числа ${num}`)
//         }
//     }
// } catch (e) {
//     console.log(e)
// } finally {
//     console.log('Обработка ошибки закончена')
// }

// window.onerror = function (message, url, line, col, error ) {
//     console.log(`message=${message}, url=${url}, line=${line}, col=${col}, error=${error}`)
// }

// AJAX url - api -> JSON(data)
const usersContainer = document.getElementById('usersContainer')

function parseError(error) {
    console.log('error', error)
}
function renderPosts( posts ) {
    if(posts.length === 0) {
        const div = document.createElement('div')
        div.innerText = 'Posts empty'
        usersContainer.append(div)
    } else {
        posts.forEach(post => {
            const div = document.createElement('div')
            div.innerHTML = `<h1>${post.title}</h1><div>${post.body}</div> </br>`
            usersContainer.append(div)
        })
    }
}
function fetchUserPosts(id) {
    fetch(`https://jsonplaceholder.typicode.co/posts?userId=${id}`)
        .then(res => res.json())// JSON.parse => error
        .then(renderPosts)
        .catch(parseError)
}

fetchUserPosts(999)

function parseDate(data) {
    data.forEach( el => {
        const tagP = document.createElement('p')
        tagP.innerText = el.name + " " + el.email
        usersContainer.append(tagP)
    })
}

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => res.json())// JSON.parse => error
//     .then(parseDate)
//     .catch(parseError)
//     .finally(() => {
//         console.log('Запрос от работал')
//     })

// function renderPhoto(photos) {
//     console.log('photos', photos)
//     photos.forEach( el => {
//         // const img = document.createElement('img')
//         // img.src = el.url
//         // usersContainer.append(img)
//     })
// }
//
// fetch(`https://jsonplaceholder.typicode.com/photos`)
//     .then(res => res.json())// JSON.parse => error
//     .then(renderPhoto)
//     .catch(parseError)









