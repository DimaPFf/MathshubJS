console.log('1)', -1 && 0 && 'false')
console.log('2)', +'0' || '0' || false)
console.log('3)', !!'false' || 0 + '' || 29)
console.log('4)', "1"**2 && 9 - '9' && null)
console.log('5)', undefined || null || +null || !undefined)



const a = prompt ("Угадай мой возвраст");

if (a<5){
    alert('Слишком мало лет')
}
else if (a>=5 && a<16 ){
    alert('слишком юн ')
}
else if( a>60 && a>=130){
    alert('почтительно')
}
else if (a>130){
    alert('труп')
}
else {
    alert('Привет')
}

