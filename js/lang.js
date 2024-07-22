let language = window.navigator.language;
let languageFistTwo = language.substr(0,2); // To only keep the first 2 characters.
let currentLocation = document.getElementsByTagName('html')[0].getAttribute('lang');
const indicator = document.querySelector(`.lang-indicator`);

switch (languageFistTwo) { 
    case "ru":
    window.location.href = 'index_ru.html';
    document.querySelector(`.lang-indicator`).textContent = "Ru";
    break;

    case "es":
    window.location.href = 'index_es.html';
    document.querySelector(`.lang-indicator`).textContent = "Es";
    break;

    case "en":
    window.location.href = 'index_en.html';
    document.querySelector(`.lang-indicator`).textContent = "En";
    break;
}

