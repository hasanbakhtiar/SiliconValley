// LOOPS - Donguler

// while
// shert
// netice
// hadise

/* while(shert){

    consol.log("Hello"); //netice
    i++; action
}*/

// let info = 1;
// while (info >= 10) {
//     console.log(info);
//     // document.write(info+"Salam<br>");
//     // info+=3;
//     info++;
// }

// do while
// netice
// hadise
// shert

// let a  = 1;
// do{
//     console.log(a);
//     a++;
// }while(a>10);

// for(deyisken;shert;hadise){
// netice
// }

// for(let a = 1; a<10;a++){

//     // let b = 5
//     // while( b< 15){
//     //     console.log("Hello");
//     //     b++;
//     // }
//     for(let b = 5; b<15; b++){
//         console.log("Hello1");
//     }

//     console.log(a);
// }

// ARRAY
// let info = ["Hello", 5,true,"table"];
// console.log(info);

// let info = [];
// info[0] = "Table";
// info[1] = "pen";
// info[2] = 'notebook';

// console.log(info);

// let info = ["table", "pen", "board"],
//   age = 24,
//   myInfo = ["Orkhan", "Zeynalli", age];
// info[0] = "notebook";
// info[3] = "new item";
// console.log(info);
// console.log(myInfo);

// let info = ["table", "pen", "board",'new item 1','new item 2'];

// for(let a = 0; a<info.length; a++){

//     console.log(info[a]);
// }
// let info = ["table", "pen", "board",'new item 1','new item 2','book1','book2'];
// for(let x in info){
//     console.log(info[x]);
// }

// let info = ["table", "pen", "board",['new item 1','new item 2'],[1,2,3,4,['snow','sunny',[true]],5] ];
// console.log(info[3][0]);
// console.log(info[4][4][2][0]);

// let myCar = {
//         brand:"BMW",
//         model: "X1",
//         salon:{
//             deri: 'red',
//             simple:'grey'
//         },
//         engine:['v5','v7']
// }
// console.log(myCar.brand);
// console.log(myCar.model);
// console.log(myCar.salon.deri);
// console.log(myCar.engine[0]);

// let a = [
//   {
//     brand: "BMW",
//     model: "X1",
//   },
//   { 
//       brand: "Mercedes", 
//       model: "S500" 
//   },
//   { 
//     brand: "Mercedes", 
//     model: "S600" 
// },
// { 
//     brand: "Mercedes", 
//     model: "S700" 
// },
// ];


// for(let b = 0; b < a.length ;b++){
//     console.log(a[b].model);
// }


// function name (params){
//     //action
// }


// function myFunc(){
//     return 5;
// }

// console.log(myFunc());


// function myFunc(){
//     console.log(15);
// }
// myFunc();


// ozu-ozunu chagiran funksiya
// (function myFunc(){
//     console.log(15);
// })();

// const myFunc = function(){
//     return "Hello";
// }

// console.log(myFunc());


// function myFunc(info=5,myInfo=10) {
//             return info + myInfo;
// }
// console.log(myFunc("Hello ", "JS"));

// ES6
// const myInfo = ()=>{
//     console.log("Hello Arrow Function");
    
// }
// ()=>{} //arrow function

// myInfo();

let infoObj = {
    name: "Orxan ",
    surname:"Zeynalli",
    age:function(dateOfFirst){
            if (dateOfFirst === 1999) {
                return new Date().getFullYear() - dateOfFirst;
            }else{
                console.log('false date');
            }
    }
}

console.log(infoObj.name + infoObj.surname);
console.log(infoObj.age(1999));
