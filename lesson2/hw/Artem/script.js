
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

