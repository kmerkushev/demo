const langToggle = document.querySelector(`.lang-toggle`);
const langList = document.querySelector(`#lang-list`);

const toggleLangMenu = () => {
    langList.classList.toggle(`opened`);
}

langToggle.addEventListener(`click`, toggleLangMenu);