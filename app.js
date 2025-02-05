// Lógica para el desarrollo del Juego de amigo secreto
document.addEventListener("DOMContentLoaded", () => {
    const nombreInput = document.querySelector("#amigo");
    const adicionarBtn = document.querySelector(".button-add");
    const sortearBtn = document.querySelector(".button-draw");
    const listaAmigos = document.querySelector("#listaAmigos");
    const resultado = document.querySelector("#resultado");
    
    let amigos = [];
    
    function agregarAmigo() {
        const nombre = nombreInput.value.trim();
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
        if (amigos.includes(nombre)) {
            alert("Este nombre ya fue agregado.");
            return;
        }
        amigos.push(nombre);
        actualizarLista();
        nombreInput.value = "";
        actualizarBotonSortear();
    }
    
    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }
    
    function actualizarBotonSortear() {
        sortearBtn.disabled = amigos.length === 0;
    }
    
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("La lista está vacía. Agregue nombres antes de sortear.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<strong>El amigo secreto es:</strong> ${amigos[indiceAleatorio]}`;
    }
    
    adicionarBtn.addEventListener("click", agregarAmigo);
    sortearBtn.addEventListener("click", sortearAmigo);
    nombreInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });
    
    actualizarBotonSortear();
});
