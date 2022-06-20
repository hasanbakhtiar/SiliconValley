// console.log('Hello');
// const myData =(success, reject)=>{
//     const resData = true;
//     if (resData) {
//         success('Melumat Geldi');
//     }else{
//         reject("Meluamt Gelmedi");
//     }
// }
// const comeData = new Promise(myData);

const { default: axios } = require("axios");

// comeData.then((res)=>console.log("Data:",res))
// .catch(err=> console.log("Data:",err))




// PROMISE`i cagirmaq Start

// const axios = require('axios');
// function comeCounrty() {
//     console.log(axios.get("https://restcountries.com/v3.1/all/"));
// }
// comeCounrty();

// PROMISE`i cagirmaq END


async function comeCounrty() {
    const contryList = await axios.get('https://restcountries.com/v3.1/all');
    console.log(contryList);
}
comeCounrty();