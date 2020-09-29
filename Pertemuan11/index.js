// Arrow Function latihan sendiri

//CONTOH 1
const func1 = function(a,b){
    return a + b;
};
console.log(func1(3,3));

//CONTOH 2
const kalidua1 = numbers.map(number => 2 * number);
console.log(kalidua1); [2,4,6,8,10]

//CONTOH 3
const numbers = [1, 2, 3, 4, 5];
const kalidua2 = numbers.map(function(number){
    return 2 * number;
});
console.log(kalidua2);

//CONTOH 4
const func3 = (a,b) => a + b;
console.log(func3(3,3));