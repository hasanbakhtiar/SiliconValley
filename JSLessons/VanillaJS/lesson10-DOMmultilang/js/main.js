const text = document.querySelectorAll('li');
const btn = document.querySelector('button');
let az = ["Ana Sehife","Haqqimizda","Mehsullar","Meqale","Elaqe"];
let en = ["Home","About","Product","Blog","Contact"];

const data = ()=>{
if (btn.innerHTML == "az") {
    for(let j=0;j<az.length;j++){

        text[j].innerHTML = az[j];
    }
    localStorage.setItem('test',az);
    btn.innerHTML = "en";
    localStorage.setItem('btn',"en");

}else{
    for(let j=0;j<en.length;j++){

        text[j].innerHTML = en[j];
    }
    localStorage.setItem('test',en);
    btn.innerHTML = "az";
    localStorage.setItem('btn',"az");
    

}
}

for(let j=0;j<az.length;j++){

    text[j].innerHTML = localStorage.getItem('test').split(",")[j];
}
btn.addEventListener('click',data)
btn.innerHTML = localStorage.getItem('btn')