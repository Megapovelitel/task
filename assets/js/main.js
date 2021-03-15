import utils from "./utils.js";

const btnOpen = document.querySelector(".button-container__button_open");
const btnClose = document.querySelector(".button-container__button_close");

btnOpen.addEventListener("click", utils.openSideNav);
btnClose.addEventListener("click", utils.closeSideNav);
