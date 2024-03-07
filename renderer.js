// archivo navegador

addEventListener('DOMContentLoaded', () => {

    const $ = (selector) => document.querySelector(selector);

    $('#button').addEventListener('click', () => {
        window.tutorial.btn('hola');
    })

})