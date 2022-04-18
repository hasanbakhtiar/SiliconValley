const nav = document.querySelector("nav");
const modeBtn = document.querySelector("#mode");

const changeMode = () => {
  if (nav.className == "navbar navbar-expand-lg navbar-light bg-light") {
    let lightClassName = "navbar navbar-expand-lg navbar-dark bg-dark";
    nav.className = lightClassName;
    localStorage.setItem("mode", lightClassName);
    // modeBtn.innerHTML = "☀️";
    modeBtn.className = "btn btn-outline-success ms-5";
    document.querySelector("body").style.backgroundColor = "#757575";
    document.querySelector("body").className = "darkBody";
    localStorage.setItem("bodymode", "darkBody");
  } else {
    let darkClassName = "navbar navbar-expand-lg navbar-light bg-light";
    nav.className = darkClassName;
    localStorage.setItem("mode", darkClassName);
    // modeBtn.innerHTML = "🌙";
    modeBtn.className = "btn btn-success ms-5";
    document.querySelector("body").className = "lightBody";
    localStorage.setItem("bodymode", "lightBody");
  }
};

modeBtn.addEventListener("click", changeMode);
nav.className = localStorage.getItem("mode");
document.querySelector("body").className = localStorage.getItem("bodymode");

// multiLang

const langBtn = document.querySelector("#lang");
const langItems = document.querySelectorAll(".nav-link");

const azLang = ["Ana Səhifə", "Haqqımızda", "Məhullar", "Əlaqə"];
const enLang = ["Home", "About", "Product", "Contact"];

const azmultiLang = () => {
  for (let x = 0; x <= azLang.length; x++) {
      langItems[x].innerHTML = azLang[x];
  }
}

const enmultiLang = () => {
    for (let x = 0; x <= enLang.length; x++) {
        langItems[x].innerHTML = enLang[x];
    }
  }



// localStorage.setItem("name","Orxan");
// localStorage.setItem("surname","Zeynalli");
// localStorage.clear();
// localStorage.removeItem('name')
// document.querySelector('#text').innerHTML = localStorage.getItem('name');
// document.querySelector('#text1').innerHTML = localStorage.getItem('surname');
