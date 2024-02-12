
const createRomeNum = (a) => {
    if (a === 1) return 'I'
    else return 'I' + createRomeNum(a - 1)
    // return (a === 1) ? a : a + createRomeNum(a - 1)
}
console.log(createRomeNum(4)); // 'IIII'
console.log(createRomeNum(40));
console.log(createRomeNum(7));

