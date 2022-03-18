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
// console.log(assignment);

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
// console.log(arithmeticTwo);

// Comparison Operators(Qarşılaşdırma operatorları)
// ==   (qoşa bərabər)
// ===  (üçlü bərabər)
// !=   (nida tək bərabər)
// !==  (nida qoşa bərabər)
// <    (kiçikdir)
// <=   (kiçik bərabərdir)
// >    (böyükdür)
// >=   (böyük bərabərdir)

// let comparisonOne = 5;
// let comparisonTwo = 5;

// if (comparisonOne <= comparisonTwo) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// Logical Operators (Məntiqi operatorlar)
// && (və) true && true = true # true && false = false # true && true && false = false # true && true && true = true
// || (və ya) true || true = true # true || false = true # true || false || false = true # true || true || true = true
// ! (deyil)  !(true) = false # !(false) = true

// if (!false) {

//     console.log(true);
// }else{
//     console.log(false);
// }

// String Operators

// let infoOne = "JavaScript ";
// let infoTwo = "Hello ";
// infoOne+=infoTwo

// console.log(infoOne );

// --------------------------------------------------------------------------------------------------
// Other (Special) Operators (Xüsusi operatorlar) Start

// ,            (vergül)(kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// const a = 5, b = 10;
// console.log(a+b);
// \            (tərs slash)(Qaçındırma operatorudur)
// const a = "Orxan\"s books";
// const a = "Orxan's books";
// console.log(a);

// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)

// const info = true;
// console.log(typeof(info));

// ?:           (sual üst-üstə qoşa nöqtə)((şərt) ? ifadə1 : ifadə2)(ternary)
// 5>10 ? console.log(true): console.log(false);
// (5 >= 10) ? document.write("Hi") : document.write("Bye");
// şərt            ? true                 : false

// void         (dəyişkənin dəyərini undefined etmək üçündür)
// const a = 5;
// console.log(void(a));
// delete       (objectin dəyərini silmək üçündür)

// const myObj = {
//     name: "Jhon",
//     surname: "Brayn"
// }
// delete myObj.name;
// console.log(myObj.name);
// console.log(myObj.surname);

// new          (yeni dəyər yaratməq üçündür)
// this         (mövcud dəyəri işarələmək üçündür)
class info {
    constructor(name){
        this.name = name;

    }
    say(){
        return this.name;
    }
}
const ab  = new info("Jhon");
// console.log(a.say());

console.log(ab instanceof info);

// in           (dəyişkənin(object) daxilində dəyərin olub olmamasını yoxlamaq üçündür)

// const a = { name: "Jhon", surname:"Brayn" };

// console.log("name" in a);


// instanceof   (dəyişkənin(objectin xüsusiyyətinin) içində xüsusiyyət olub olmamasını yoxlamaq üçündür)

// Other (Special) Operators (Xüsusi operatorlar) End
// --------------------------------------------------------------------------------------------------
