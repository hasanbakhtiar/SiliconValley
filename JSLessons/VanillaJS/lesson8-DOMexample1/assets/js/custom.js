const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("menu");

const hiddenMenu = () => {
 menu.classList.toggle('hidden-menu');
};

menuBtn.addEventListener("click", hiddenMenu);

// const hiddenMenu = () => {
//     if (menu.className == "visible-menu") {
//       menu.className = "hidden-menu";
//     } else {
//       menu.className = "visible-menu";
//     }
//   };
// const hiddenMenu = () => {
//     if (menu.attributes[0].value == "visible-menu") {
//       menu.attributes[0].value = "hidden-menu";
//     } else {
//       menu.attributes[0].value = "visible-menu";
//     }
//   };

// const disableBtn = document.querySelector(".disable-btn");
// const visibleMenu=()=>{
//     menu.style.transform="translateX(0px)";
// }
// const hiddenMenu=()=>{
//     menu.style.transform="translateX(400px)";
// }

// menuBtn.addEventListener('click',visibleMenu);
// disableBtn.addEventListener('click',hiddenMenu);

// const menuBar = () => {
//   if (menu.style.transform == "translateX(400px)") {
//     menu.style.transform = "translateX(0px)";
//   } else {
//     menu.style.transform = "translateX(400px)";
//   }
// };
// menuBtn.addEventListener("click", menuBar);
