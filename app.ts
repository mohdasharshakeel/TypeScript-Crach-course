console.log('Hello, World!');
var a = 5;
console.log(a); 

let arr :number[] = [1, 2, 3];
console.log(arr);

//! tuples

let arr1 : [number, string] = [1, 'hello'];
console.log(arr1);


//! enums 

enum charecters {
    ONE_PIECE = 'Luffy',
    NARUTO = 'Naruto',  
    BLEACH = 'Ichigo',

}
console.log(charecters.ONE_PIECE);
console.log(charecters.NARUTO);
console.log(charecters.BLEACH);

let b ;

let c : number = 10; 

let d :unknown;
d = 20;
d = 'hello';

d.toString(); // This will cause an error if uncommented, as `unknown` type does not have a defined method. 