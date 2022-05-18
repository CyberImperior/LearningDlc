const arr = ['a', 'b', 'c']; // порядок важен, тоже объект только ключ это индекс

arr[10] = '3456'

console.log(arr[10])
console.log(arr)


const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    abc: {
        defArr: [{}, {}],
        def: {}
    }
};
arrObj[1] = [];

console.log(arr[1])
console.log(arrObj[1])
// console.log(arrObj.0) - нельзя использовать цифру после точки, также килирилцу и любой другой язык кроме латиницы

arrObj.blyat = 'jopa'; // создаст добавит свойство к объекту

console.log(arrObj.blyat);
console.log(arrObj['blyat']); // Квадратные скобки более безопасны из-за цифр


const obj = {
    Anna: 500,
    'Alice': 800
} // порядок не важен, ключ это всегда строка!!!



