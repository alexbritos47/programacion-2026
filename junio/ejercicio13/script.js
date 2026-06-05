const boton = document.querySelector('.boton');
const chiste = document.querySelector('.chiste');

boton.addEventListener('click', () => {
    chiste.textContent = "Cargando...";

    fetch('https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=nsfw,sexist', {
        headers: { Accept: 'application/json' }
    })
    .then(response => response.json())
    .then(data => {

        if (data.type === "single") {
            chiste.textContent = data.joke;
        } 
        else if (data.type === "twopart") {
            chiste.textContent = `${data.setup} - ${data.delivery}`;
        } 
        else {
            chiste.textContent = "No se pudo obtener el chiste";
        }

    })
    .catch(() => {
        chiste.textContent = 'Error al cargar el chiste';
    });
});