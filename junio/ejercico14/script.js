const API_KEY = "TU_API_KEY";

let gatoActual;
let likes = 0;
let dislikes = 0;

async function traerGato() {
    const respuesta = await fetch("https://api.thecatapi.com/v1/images/search");
    const datos = await respuesta.json();
    console.log(datos);

    gatoActual = datos[0];

    document.getElementById("catImage").src = gatoActual.url;
    document.getElementById("idGato").textContent = gatoActual.id;
}

async function votar(valor) {
    if (!gatoActual) return;

    await fetch("https://api.thecatapi.com/v1/votes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY
        },
        body: JSON.stringify({
            image_id: gatoActual.id,
            value: valor
        })
    });

    if (valor === 1) {
        likes++;
        document.getElementById("likes").textContent = likes;
    } else {
        dislikes++;
        document.getElementById("dislikes").textContent = dislikes;
    }

    traerGato();
}

document.getElementById("cargar").addEventListener("click", traerGato);
document.getElementById("like").addEventListener("click", () => votar(1));
document.getElementById("dislike").addEventListener("click", () => votar(0));

traerGato();