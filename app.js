// Lógica para el desarrollo del Juego de amigo secreto
document.addEventListener("DOMContentLoaded", () => {
    const nombreInput = document.querySelector("#amigo");
    const adicionarBtn = document.querySelector(".button-add");
    const sortearBtn = document.querySelector(".button-draw");
    const listaNombres = document.querySelector("#listaAmigos");
    const resultado = document.querySelector("#resultado");

    let amigos = [];

    function agregarAmigo() {
        const nombre = nombreInput.value.trim();
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
        if (amigos.includes(nombre)) {
            alert("El nombre ya está en la lista.");
            return;
        }
        amigos.push(nombre);
        actualizarLista();
        nombreInput.value = "";
        nombreInput.focus();
    }

    adicionarBtn.addEventListener("click", agregarAmigo);

    nombreInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita el comportamiento por defecto del formulario
            agregarAmigo();
        }
    });

    sortearBtn.addEventListener("click", () => {
        if (amigos.length === 0) {
            alert("La lista está vacía. Agregue nombres antes de sortear.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.textContent = `El amigo secreto es: ${amigos[indiceAleatorio]}`;
    });

    function actualizarLista() {
        listaNombres.innerHTML = "";
        amigos.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaNombres.appendChild(li);
        });

        sortearBtn.disabled = amigos.length === 0;
    }
});
