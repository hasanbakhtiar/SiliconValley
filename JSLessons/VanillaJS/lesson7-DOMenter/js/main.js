// DOM -> Document Object Module
// Simple selector
// document.getElementsByTagName('h1')[0].innerHTML = "Salam1";
// document.getElementById('test').innerHTML = "Salam2";
// document.getElementsByClassName('text')[0].innerHTML = "Salam3";
// document.getElementsByTagName('div')[0].attributes[0].value = "green";




// Query Selector
// document.querySelector('.new').innerHTML = "Salam5";
// document.querySelectorAll('.new')[0].innerHTML = "Salam5";

// for(let x = 0; x<=1; x++){
    // document.querySelectorAll('.new')[x].innerHTML = "Salam"
    // document.querySelectorAll('.new')[x].innerText = "<i>Salam</i>"

// }


// const text = document.querySelector('h1');
// const btn = document.querySelector('button');

// const changeWord=()=>{
//     text.innerHTML = "Changed";
// }

// btn.addEventListener('click',changeWord);


// const text = document.querySelector('h1');
// const btn = document.querySelector('button');

// const changeWord=()=>{
//     text.innerHTML = "Changed";
//     text.style.color = "red";
//     text.style.background = "green";
//     btn.style.backgroundColor = "yellow"
// }

// btn.addEventListener('click',changeWord);


const btn = document.querySelector('button');
const list = document.querySelector('ul');

const menu =()=>{
   if (list.style.transform === "translateX(-110px)") {
    list.style.transform = "translateX(0px)"
    list.style.transition = "1s"
    list.style.fontSize = "20px"
   }else{
    list.style.transform = "translateX(-110px)"
   }
}
btn.addEventListener('click', menu)
