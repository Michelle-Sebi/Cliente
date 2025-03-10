import './style.css';

function cargarTareas() {
  let tareasPrevias = localStorage.getItem('tareas');
  
  
  if (!tareasPrevias) {
    return [];
  }

  try {
    
    let tareasArray = JSON.parse(tareasPrevias);

    if (Array.isArray(tareasArray)) {
      let listaTareas = document.getElementById('tareas');
      listaTareas.innerHTML = ''; 

      tareasArray.forEach(tarea => {
        let nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = tarea;
        listaTareas.appendChild(nuevaTarea);
      });

      return tareasArray;
    } else {
      
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

function guardarTareas(tareas) {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

function anadirTarea() {
  let entrada = document.getElementById('entrada');
  let tareaEscrita = entrada.value;

  let tareas = cargarTareas();
  tareas.push(tareaEscrita);

  let listaTareas = document.getElementById('tareas');
  let nuevaTarea = document.createElement('li');
  nuevaTarea.textContent = tareaEscrita;
  listaTareas.appendChild(nuevaTarea);

  guardarTareas(tareas);
  entrada.value = '';
}

cargarTareas();

let boton = document.getElementById('boton');
boton.addEventListener('click', anadirTarea);
