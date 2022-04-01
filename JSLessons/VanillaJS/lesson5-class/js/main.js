// const firstFunc = ()=>{

//     const info=()=>{
//         return "info";
//     }
//     console.log(info());

//     const infoOne=()=>{
//         return "infoOne";
//     }
//     console.log(infoOne());

//     return 'firstFunc';
// }

// const secoundFunc = ()=>{
//     return 'secoundFunc';
//     console.log(infoOne());

// }

// console.log(secoundFunc());
// console.log(firstFunc());

class Moto {
  constructor(name) {
    this.c = name;
  }
  go(b) {
    return "now Go " + b + this.c;
  }

  calculateAge(myTime, city,transport) {
    return `my ${transport} is ${new Date().getFullYear() - myTime}, made in ${city}`;
  }
}

class Car extends Moto {
  engine() {
    return "v5";
  }
}

const myMoto = new Moto(" Orxan");
const myCar = new Car();
console.log(new Date().getFullYear());

console.log(myMoto.go("moto"));
console.log(myMoto.calculateAge(1990, "Baku","moto"));
// console.log(myMoto);
console.log(myCar.engine());
console.log(myCar.calculateAge(2000, "Hamburg","car"));
