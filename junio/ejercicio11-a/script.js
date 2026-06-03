
let formurio = document.querySelector(".formulario");

if (formurio) {
  let contenidoAbajo = document.createElement("div");
  contenidoAbajo.className = "texto-abajo";
  formurio.insertAdjacentElement("afterend", contenidoAbajo);

 
  let barraEstado = document.createElement("div");
  barraEstado.className = "barra-estado";
  let pendientesSpan = document.createElement("span");
  pendientesSpan.className = "contador-pendientes";
  let completadasSpan = document.createElement("span");
  completadasSpan.className = "contador-completadas";
  barraEstado.appendChild(pendientesSpan);
  barraEstado.appendChild(document.createTextNode(" | "));
  barraEstado.appendChild(completadasSpan);
  formurio.insertAdjacentElement("beforebegin", barraEstado);

  function actualizarContadores() {
    const totalCompletadas = contenidoAbajo.querySelectorAll(".fila-item.completado").length;
    const totalPendientes = contenidoAbajo.querySelectorAll(".fila-item:not(.completado)").length;
    pendientesSpan.textContent = `Por hacer: ${totalPendientes}`;
    completadasSpan.textContent = `Completadas: ${totalCompletadas}`;
  }

  let entrada = formurio.querySelector("input[type='text'], textarea, input:not([type])");

  formurio.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!entrada) return;
    let texto = entrada.value.trim();
    if (!texto) {
      alert("Por favor ingresa texto");
      return;
    }

    let linea = document.createElement("p");
    linea.className = "item-lista";
    linea.textContent = texto;

    
    let cont = document.createElement("div");
    cont.className = "fila-item";

    let boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = "Completar";
    boton.className = "boton-completar";
    boton.addEventListener("click", function () {
      

      cont.classList.toggle("completado");
      if (cont.classList.contains("completado")) {
        boton.textContent = "Completado";
        boton.disabled = true;
      }
      actualizarContadores();
    });

   
    let botonEliminar = document.createElement("button");
    botonEliminar.type = "button";
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "boton-eliminar";
    botonEliminar.addEventListener("click", function () {
      cont.remove();
    });

    cont.appendChild(linea);
    cont.appendChild(boton);
    cont.appendChild(botonEliminar);
    contenidoAbajo.appendChild(cont);
    entrada.value = "";
  });
}

