const tgToggle = document.querySelector(`#socials-telegram-toggle`);
const tgList = document.querySelector(`#socials-telegram-list`);

const toggleLinks = () => {
    tgList.classList.toggle(`opened`);
}

tgToggle.addEventListener(`click`, toggleLinks);