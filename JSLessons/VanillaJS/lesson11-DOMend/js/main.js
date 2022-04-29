const input = document.querySelector('input');
const btn = document.querySelector('button');
const todo = document.querySelector('.todo');


btn.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.innerText = input.value;
    todo.appendChild(li);
    input.value = "";
})


btn.accessKey = "a";













// const myP = document.createElement('p');
// const text = document.createTextNode("Hello everyone")
// myP.appendChild(text);


// const div = document.querySelector('div');
// div.appendChild(myP)






















// document.querySelector("p").innerHTML =
//   document.querySelector("h1").firstChild.nodeValue;
//   document.querySelector("h1").nodeName;
//   document.querySelector("h1").childNodes[1].firstChild.nodeValue;
//   document.querySelector("h1").childNodes[1].firstChild.nodeType;
//   document.querySelector("h1").attributes[0].nodeType;

// for (let index = 0; index < 2; index++) {
//     document.querySelectorAll("p")[index].innerHTML =document.querySelector("h1").childNodes[index].firstChild.nodeValue;
// }
























// document.querySelector('button').addEventListener('click',()=>{
//     document.querySelector('p').innerHTML = "Salam"
// })

// document.querySelector('button').accessKey = "a";

// // document.querySelector('input').addEventListener('keypress',()=>{
// //     document.querySelector('input').style.height = '100px';
// // })
// document.querySelector('input').addEventListener('keyup',()=>{
//     document.querySelector('input').style.height = '30px';
//     document.querySelector('input').style.background = 'white';
//     document.querySelector('input').style.color = 'red';

//     document.querySelector('input').style.textTransform = 'lowercase';

// })

// document.querySelector('input').addEventListener('keydown',()=>{
//     document.querySelector('input').style.height = '50px';
//     document.querySelector('input').style.background = 'red';
//     document.querySelector('input').style.color = 'white';
//     document.querySelector('input').style.background = 'red';
//     document.querySelector('input').style.textTransform = 'uppercase';

// })
