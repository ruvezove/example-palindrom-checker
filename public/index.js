//elements
const checkbox = document.querySelector('#autocheck');
const button = document.querySelector('button');
const word = document.querySelector('#word');
const status_ = document.querySelector('#status');

//variables
let autoupdate = false;
let texts = [
    '"Это палиндром"', 
    '"Это не палиндром"', 
    '"Пустой текст"'
];

//functions
const palindrom = text => {
    text = text.toLowerCase();

    if (text.length < 1 || text.split('').reverse().join('') !== text) {
        status_.innerHTML = texts[text.length > 0 ? 1 : 2];
        status_.setAttribute('class', 'bad');
    } else {
        status_.innerHTML = texts[0];
        status_.setAttribute('class', 'good');
    };
};

//start
(() => {
    checkbox.addEventListener('change', () => {
        autoupdate = checkbox.checked;

        if (checkbox.checked) {
            button.setAttribute('disabled', '');
        } else {
            if (!button.hasAttribute('disabled')) return;
            button.removeAttribute('disabled');
        };
    });

    word.addEventListener('keyup', ev => autoupdate && palindrom(ev.target.value));

    button.addEventListener('mousedown', () => palindrom(word.value));
})();
