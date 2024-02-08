34// let a=1;//1 число
// let b=2;//2 число
// let i=0;//счетчик
// while(i<10){
//     let c = a+b;//3
//     console.log(a); 
//     a = b;// a->b = 2
//     b=c;// b>c = 3
    
//     i++
// }



// let sum=0;
// for (let i =100;i<300;i++){
    
//     if (i % 3 === 0) {
//         sum++;
//         console.log(i)
//         if (sum % 5 === 0) {
//         console.log (i)
//         }
//     }
// }
// let a =  promopt('Ввод числа');

// switch (a){
//     case '0':
//     alert('Телец');
//     break;
// }
let arg = prompt("Введите число?");
switch (arg) {
  case '1':
    alert( 'Телец' );
    break;

  case '2':
    alert( 'рак' );
    break;

  case 3:
    alert( 'Весы!' );
    break;
  default:
    alert(  '  ' );
}