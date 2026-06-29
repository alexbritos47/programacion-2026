const agregar = document.getElementById("agregar");
const contenedor = document.getElementById("contenedor");
const contador = document.getElementById("contador");
const error = document.getElementById("error");
const filtro = document.getElementById("filtro");

let total = 0;

agregar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const tipo = document.getElementById("tipo").value;
    const estado = document.getElementById("estado").value;
    const calificacion = document.getElementById("calificacion").value;
    const imagen = document.getElementById("imagen").value;

    if (nombre === "" || descripcion === "") {
        error.textContent = "Complete los campos obligatorios";
        return;
    }

    error.textContent = "";

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.dataset.tipo = tipo;

    tarjeta.innerHTML = `
        <h3>${nombre}</h3>
        <img src="${imagen}" alt="">
        <p>${descripcion}</p>
        <p>Tipo: ${tipo}</p>
        <p class="estado">Estado: ${estado}</p>
        <p>Calificación: ${calificacion}</p>
        <button class="eliminar">Eliminar</button>
        <button class="cambiar">Cambiar Estado</button>
    `;

    contenedor.appendChild(tarjeta);

    total++;
    contador.textContent = total;

    tarjeta.querySelector(".eliminar").addEventListener("click", () => {
        tarjeta.remove();
        total--;
        contador.textContent = total;
    });

    tarjeta.querySelector(".cambiar").addEventListener("click", () => {
        tarjeta.querySelector(".estado").textContent =
            "Estado: Terminado";
    });
});

filtro.addEventListener("change", () => {
    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(tarjeta => {
        if (
            filtro.value === "todos" ||
            tarjeta.dataset.tipo === filtro.value
        ) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
});

