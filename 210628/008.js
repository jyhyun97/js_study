var x = 5;//number
var y = 'five';//string
var isTrue = true; //bool
var empty = null; //null
var nothing //undefined
var sym = Symbol('me');

var item = {
    price: 5000,
    count: 10
}; //object
var fruits = ['ap', 'bnn', 'kw'];
var addFruit = function(fruit){
    fruits.push(fruit);
}//함수
addFruit('watermelon');
console.log(fruits);