
// agregar tarea
const tareaInput = document.getElementById("tarea");
const prioriInput = document.getElementById("prioridad");
const crearT = document.getElementById("crearT");
const tareas = document.getElementById("tareas");
const contTareas = document.getElementById("contTareas");

function rTareas() {
    tareas.innerHTML = '';

    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    
    tareasGuardadas.forEach((tarea, index) => {
        const { descripcion, prioridad } = tarea;

        const tareaN = document.createElement("h1");
        tareaN.innerHTML = descripcion;
        tareaN.className = "descripcion";

        const prioridadN = document.createElement("p");
        prioridadN.className = "txt";
        prioridadN.textContent = prioridad;

        const editarT = document.createElement("button");
        editarT.textContent = "Editar";
        editarT.className = "btnEditar";
        editarT.type = "button";
        editarT.addEventListener("click", () => editarTarea(tareaN, prioridadN, index));

        const eliminarT = document.createElement("button");
        eliminarT.textContent = "Eliminar";
        eliminarT.className = "btnEliminar";
        eliminarT.id = "btnEliminar";
        eliminarT.addEventListener("click", () => eliminarTarea(tareaN, prioridadN, editarT, eliminarT, index));

        const linea = document.createElement("div");
        linea.className = "linea";

        tareas.appendChild(tareaN);
        tareas.appendChild(prioridadN);
        tareas.appendChild(editarT);
        tareas.appendChild(eliminarT);
        tareas.appendChild(linea);
    });
}

// Agregar tarea
contTareas.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const descripcion = tareaInput.value.trim();
    const prioridad = prioriInput.value.trim();

    if (descripcion.length === 0) {
        alert("Ingrese una tarea");
        return;
    }

    // local
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    
    if (tareasGuardadas.some(tarea => tarea.descripcion === descripcion)) {
        alert('La tarea ya existe');
        return;
    }

    // Nueva tarea
    const nuevaTarea = { descripcion, prioridad };
    tareasGuardadas.push(nuevaTarea);
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

    rTareas();
    tareaInput.value = '';
    prioriInput.value = '';
});

// Editar tarea
function editarTarea(tareaN, prioridadN, index) {
    const nuevaDescripcion = prompt("Editar descripción:", tareaN.innerHTML);
    const nuevaPrioridad = prompt("Cambiar prioridad:", prioridadN.textContent);

    if (nuevaDescripcion !== null && nuevaPrioridad !== null) {
        tareaN.innerHTML = nuevaDescripcion;
        prioridadN.textContent = nuevaPrioridad;

        actualizarLocalStorage();
    }
}

// Eliminar tarea
function eliminarTarea(tareaN, prioridadN, editarT, eliminarT, index) {
    if (confirm("¿Seguro que quieres eliminar esta tarea?")) {
        tareaN.remove();
        prioridadN.remove();
        editarT.remove();
        eliminarT.remove();
        const linea = tareas.querySelector('.linea');
        if (linea) {
            linea.remove();
        }

        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
        tareasGuardadas.splice(index, 1);  // Elimina la tarea del array
        localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));

        actualizarLocalStorage();
    }
}

function actualizarLocalStorage() {
    const tareasGuardadas = Array.from(tareas.querySelectorAll('.descripcion')).map((tareaN, index) => {
        const prioridadN = tareaN.nextElementSibling;
        return {
            descripcion: tareaN.innerHTML,
            prioridad: prioridadN ? prioridadN.textContent : ''
        };
    });
    
    localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
}

// Cargar tareas
document.addEventListener('DOMContentLoaded', rTareas);



//---------agregar eventos-------------
const eventoInput = document.getElementById("evento");
const crearE = document.getElementById("crearE");
const eventos = document.getElementById("eventos");
const fechaInput = document.getElementById("fecha");
const contEventos = document.getElementById("contEventos");


function rEventos() {
    eventos.innerHTML = '';

    const eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];
    
    eventosGuardados.forEach(evento => {
        const { titulo, fecha } = evento;

        const eventoN = document.createElement("h1");
        eventoN.innerHTML = titulo;
        eventoN.className = "titulo";

        const fechaN = document.createElement("p");
        fechaN.className = "txt";
        fechaN.textContent = fecha;

        const editarE = document.createElement("button");
        editarE.textContent = "Editar";
        editarE.className = "btnEditar";
        editarE.type = "button";
        editarE.addEventListener("click", () => editarEvento(eventoN, fechaN));

        const eliminarE = document.createElement("button");
        eliminarE.textContent = "Eliminar";
        eliminarE.className = "btnEliminar";
        eliminarE.id = "btnEliminar";
        eliminarE.addEventListener("click", () => eliminarEvento(eventoN, fechaN, editarE, eliminarE));

        const linea = document.createElement("div");
        linea.className = "linea";

        
        eventos.appendChild(eventoN);
        eventos.appendChild(fechaN);
        eventos.appendChild(editarE);
        eventos.appendChild(eliminarE);
        eventos.appendChild(linea);
    });
}

// agregar evento
contEventos.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const titulo = eventoInput.value.trim();
    const fecha = fechaInput.value.trim();

    if (titulo.length === 0) {
        alert("Ingrese un evento");
        return;
    }

    // local
    const eventosGuardados = JSON.parse(localStorage.getItem('eventos')) || [];
    
    if (eventosGuardados.some(evento => evento.titulo === titulo)) {
        alert('El evento ya existe');
        return;
    }

    //nuevo evento
    const nuevoEvento = { titulo, fecha };
    eventosGuardados.push(nuevoEvento);
    localStorage.setItem('eventos', JSON.stringify(eventosGuardados));

    rEventos();
    eventoInput.value = '';
    fechaInput.value = '';
});

// editar
function editarEvento(eventoN, fechaN) {
    const nuevoTitulo = prompt("Editar título:", eventoN.innerHTML);
    const nuevaFecha = prompt("Cambiar fecha:", fechaN.textContent);

    if (nuevoTitulo !== null && nuevaFecha !== null) {
        eventoN.innerHTML = nuevoTitulo;
        fechaN.textContent = nuevaFecha;

        actualizarLocalStorage();
    }
}

// eliminar
function eliminarEvento(eventoN, fechaN, editarE, eliminarE) {
    if (confirm("¿Seguro que quieres eliminar este evento?")) {
        eventoN.remove();
        fechaN.remove();
        editarE.remove();
        eliminarE.remove();
        const linea = eventos.querySelector('.linea');
        if (linea) {
            linea.remove();
        }

        
        actualizarLocalStorage();
    }
}

function actualizarLocalStorage() {
    const eventosGuardados = Array.from(eventos.querySelectorAll('.titulo')).map(eventoN => {
        const fechaN = eventoN.nextElementSibling;
        return {
            titulo: eventoN.innerHTML,
            fecha: fechaN ? fechaN.textContent : ''
        };
    });
    
    localStorage.setItem('eventos', JSON.stringify(eventosGuardados));
}

// Cargar eventos
document.addEventListener('DOMContentLoaded', rEventos);


