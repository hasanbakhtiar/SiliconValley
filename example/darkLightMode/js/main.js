// const header = document.querySelector("header");
// let link = document.querySelectorAll("a");
// const modeBtn = document.querySelector("#mode");
// let allBtn = document.querySelectorAll("button");

// const modeOne = () => {
//   if (header.className == "header-light") {
//     let darkHeader = "header-dark";
//     let darkLink = "text-dark";
//     let darkBtn = "btn-dark";
//     localStorage.setItem('mode-header',darkHeader);
//     localStorage.setItem('mode-link',darkLink);
//     localStorage.setItem('mode-btn',darkBtn);
//     header.className = darkHeader;
//     let x = 0;
//     while (x<5) {
//         link[x].className = darkLink;
//         x++;
//     }
//     let e = 0;
//     while(e<5){
//         allBtn[e].className = darkBtn;
//         e++;
//     }

//   }else{
//     let lightHeader = "header-light";
//     let lightLink = "text-light";
//     let lightBtn = "btn-light";
//     localStorage.setItem('mode-header',lightHeader);
//     localStorage.setItem('mode-link',lightLink);
//     localStorage.setItem('mode-btn',lightBtn);
//     header.className = lightHeader;
//     let x = 0;
//     while (x<5) {
//         link[x].className = lightLink;
//         x++;
//     }
//     let e = 0;
//     while(e<5){
//         allBtn[e].className = lightBtn;
//         e++;
//     }
//   }
// };

// modeBtn.addEventListener("click", modeOne);
// header.className = localStorage.getItem('mode-header');
// let x = 0;
// while (x<5) {
//     link[x].className = localStorage.getItem('mode-link');
//     x++;
// }

// let e = 0;
// while(e<5){
//     allBtn[e].className = localStorage.getItem('mode-btn');;
//     e++;
// }

let multiLangLink = document.querySelectorAll("a");
let langBtn = document.querySelector("#lang");

let az = ["Ana Sehife", "Haqqimizda", "Mehsullar", "Meqale", "Elaqe"];
let en = ["Home", "About", "Product", "Blog", "Contact"];

const multiLang = () => {
  if (langBtn.innerHTML == "az") {
    for (let a = 0; a <= az.length; a++) {

      multiLangLink[a].innerHTML = az[a];
      localStorage.setItem('lang',az)
    }
  } else {
    for (let b = 0; b <= en.length; b++) {
      multiLangLink[b].innerHTML = en[b];
    }
  }
};
for (let a = 0; a <= az.length; a++) {

    multiLangLink[a].innerHTML = localStorage.getItem('lang').split(',')[a];
    
  }
langBtn.addEventListener("click", multiLang);
