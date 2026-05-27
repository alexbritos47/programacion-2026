
let cambiar = document.querySelector(".cambiar");

let titulo = document.querySelector(".titulo");

cambiar.addEventListener("click", function() {
    titulo.textContent = "¡Has cambiado el título!";
});





let cambiarparrafo = document.querySelector(".cambiar2");

let parrafo = document.querySelector(".parrafo");

cambiarparrafo.addEventListener("click", function() {
    parrafo.textContent = "¡Has cambiado el párrafo!";
}); 




let cambiarimagen = document.querySelector(".cambiar3");

let imagen = document.querySelector(".kn1trsite");

cambiarimagen.addEventListener("click", function() {
    imagen.src = "img/keylorfeliz.jpg";
});






let alerta = document.querySelector(".cambiar4");

alerta.addEventListener("click", function() {
    alert("¡Gracias por enviar el formulario!");
}
);


let cambiodecolor = document.querySelector(".cambiar5");

let fondo = document.body;
if (cambiodecolor) {
    cambiodecolor.addEventListener("click", function() {
        const cambiado = fondo.classList.toggle("fondo-cambiado");
        fondo.style.backgroundColor = cambiado ? "lightblue" : "";
    });
}

let eliminarboton = document.querySelector(".cambiar6");

let boton = document.querySelector(".cambiar6");    
eliminarboton.addEventListener("click", function() {
    boton.remove();
});

let modooscuro = document.querySelector(".cambiar7");

if (modooscuro) {
    modooscuro.addEventListener("click", function() {
        document.body.classList.toggle("modo-oscuro");

        fondo.style.backgroundColor = document.body.classList.contains("modo-oscuro") ? "black" : "";
    });
}


let cambiaremoji = document.querySelector(".cambiar8");

cambiaremoji.addEventListener("click", function() {
    const emoji = document.createElement("div");
    emoji.textContent = "😎";
    emoji.style.fontSize = "50px";
    emoji.style.padding = "20px";
    document.body.appendChild(emoji);
});





