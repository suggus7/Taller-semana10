const agregar = document.getElementById('agregar');
const guardar = document.getElementById('guardar');
const nombres = document.getElementById('nombres');
const mostrarListado = document.getElementById('mostrarListado');
const filterInput = document.getElementById('filterInput');
const filterButton = document.getElementById('filterButton');
const sortButton = document.getElementById('sortButton');

let estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || ["Ana", "Bruni"];
let sortOrder = 'asc';

function mostrarEstudiantes() {
    mostrarListado.innerHTML = '';
    estudiantes.forEach((estudiante, index) => {
        const div = document.createElement('div');
        div.className = 'student-item';
        div.textContent = estudiante;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteItem';
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            estudiantes.splice(index, 1);
            mostrarEstudiantes();
        });

        div.appendChild(deleteButton);
        mostrarListado.appendChild(div);
    });
}

agregar.addEventListener('click', () => {
    const nombre = nombres.value.trim();
    if (nombre) {
        estudiantes.push(nombre);
        nombres.value = '';
        mostrarEstudiantes();
    }
});

guardar.addEventListener('click', () => {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    alert('Lista guardada en localStorage');
});

filterButton.addEventListener('click', () => {
    const filterValue = filterInput.value.toLowerCase();
    const filteredEstudiantes = estudiantes.filter(estudiante => estudiante.toLowerCase().includes(filterValue));
    mostrarListado.innerHTML = '';
    filteredEstudiantes.forEach((estudiante, index) => {
        const div = document.createElement('div');
        div.className = 'student-item';
        div.textContent = estudiante;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteItem';
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            estudiantes.splice(index, 1);
            mostrarEstudiantes();
        });

        div.appendChild(deleteButton);
        mostrarListado.appendChild(div);
    });
});

sortButton.addEventListener('click', () => {
    if (sortOrder === 'asc') {
        estudiantes.sort((a, b) => a.localeCompare(b));
        sortOrder = 'desc';
    } else {
        estudiantes.sort((a, b) => b.localeCompare(a));
        sortOrder = 'asc';
    }
    mostrarEstudiantes();
});

document.addEventListener('DOMContentLoaded', () => {
    const datosGuardados = localStorage.getItem('estudiantes');
    if (datosGuardados) {
        estudiantes = JSON.parse(datosGuardados);
        mostrarEstudiantes();
    }
});

// Ejemplos adicionales de manipulación de la lista
console.log(estudiantes);

// Agregar un elemento al final del arreglo
estudiantes.push("Camila");
console.log(estudiantes);

estudiantes.push("Antonella");
console.log(estudiantes);

// Ordenar el arreglo
estudiantes.sort();
console.log(estudiantes);

// Filtrar elementos que contienen la letra 'n'
let estConN = estudiantes.filter((elemento) => elemento.includes("n"));
console.log(estConN);

// Eliminar el último elemento del arreglo filtrado
let borrado = estConN.pop();
console.log(estConN);
console.log(borrado);

// Guardar en localStorage
localStorage.setItem("listado", JSON.stringify(estudiantes));
console.log(localStorage.getItem("listado"));

let traidoLocal = JSON.parse(localStorage.getItem("listado"));
console.log("Luego de hacer JSON.parse: ");
console.log(traidoLocal);
