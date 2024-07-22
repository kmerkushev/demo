const wolves = document.querySelectorAll(`.wolf`);

const counter = document.querySelector(`.counter`);

const wolfHandler = (e) => {
    e.target.classList.add(`collected`);
    counter.textContent = +counter.textContent + 1;
}

for (let index = 0; index < wolves.length; index++) {
    const wolf = wolves[index];
    wolf.addEventListener(`click`, wolfHandler);
}