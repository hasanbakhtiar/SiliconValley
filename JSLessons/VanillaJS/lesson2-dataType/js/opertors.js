// OPERATORS
//1st Assignment  operators (Daxil etmə operatorları)

// = 
// +=
// -=
// *=
// /=
// %=
// **=

let assignment = 5;
assignment = 10;
console.log(assignment);

// 2nd Arithmetic  operators (Riyazi operatorlar)
// +
// -
// /
// *
// %
// **
// ++
// --

let arithmeticOne = 5;
let arithmeticTwo = 25;
arithmeticTwo--;
// console.log(arithmeticOne%arithmeticTwo);
console.log(arithmeticTwo);



// Comparison Operators(Qarşılaşdırma operatorları)
// ==   (qoşa bərabər)
// ===  (üçlü bərabər)
// !=   (nida tək bərabər)
// !==  (nida qoşa bərabər)
// <    (kiçikdir)
// <=   (kiçik bərabərdir)
// >    (böyükdür)
// >=   (böyük bərabərdir)


let comparisonOne = 5;
let comparisonTwo = 5;

// if (comparisonOne <= comparisonTwo) {
//     console.log(true);
// }else{
//     console.log(false);
// }



// Logical Operators (Məntiqi operatorlar)
// && (və) true && true = true # true && false = false # true && true && false = false # true && true && true = true 
// || (və ya) true || true = true # true || false = true # true || false || false = true # true || true || true = true 
// ! (deyil)  !(true) = false # !(false) = true




if (!false) {

    console.log(true);
}else{
    console.log(false);
}


// String Operators

let infoOne = "JavaScript ";
let infoTwo = "Hello ";
infoOne+=infoTwo

console.log(infoOne );

