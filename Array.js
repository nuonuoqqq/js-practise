//for循环
const array = [1, 2, 3];
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
};
//forr of
const map = new Map([["mame", "john"], ["age", 30]]);
for (const [key, value] of map){ 
    console.log(key, value);
};
//forEach
const numbers = [1, 2, 3, 4, 5];

const value = numbers.forEach((item, index ,arr) => {
    console.log(item, index, arr);

})
//some