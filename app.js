// Lógica para el desarrollo del Juego de amigo secreto
document.addEventListener("DOMContentLoaded", () => {
    const nombreInput = document.querySelector("#nombreInput");
    const adicionarBtn = document.querySelector("#adicionarBtn");
    const sortearBtn = document.querySelector("#sortearBtn");
    const listaNombres = document.querySelector("#listaNombres");
    const resultado = document.querySelector("#resultado");
    
    let nombres = [];
    
    function agregarAmigo() {
        const nombre = nombreInput.value.trim();
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
        nombres.push(nombre);
        actualizarLista();
        nombreInput.value = "";
    }
    
    adicionarBtn.addEventListener("click", agregarAmigo);
    
    sortearBtn.addEventListener("click", () => {
        if (nombres.length === 0) {
            alert("La lista está vacía. Agregue nombres antes de sortear.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        resultado.textContent = `El amigo secreto es: ${nombres[indiceAleatorio]}`;
    });
    
    function actualizarLista() {
        listaNombres.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaNombres.appendChild(li);
        });
    }
});