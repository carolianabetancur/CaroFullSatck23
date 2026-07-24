let tareas = [];
//Dónde quiero renderizar
let todolist = document.getElementById('todo-list');
let filterAll = document.getElementById('filter-all');
let filterActive = document.getElementById('filter-active');
let filterCompleted = document.getElementById('filter-completed');
let filterActual = 'all';
console.log(todolist);
tareas.push({
  id: 1,
  nombre: 'Hacer aseo',
  estado: false,
});
tareas.push({
  id: 2,
  nombre: 'Programar',
  estado: true,
});

filterAll.addEventListener('click', () => {
  filterActual = 'all';
  renderizarTareas();
});
filterActive.addEventListener('click', () => {
  filterActual = 'active';
  renderizarTareas();
});

filterCompleted.addEventListener('click', () => {
  filterActual = 'completed';
  renderizarTareas();
});

function renderizarTareas() {
  //qué quiero renderizar?
  todolist.innerHTML = '';
  const tareasFiltro = tareas.filter((t) => {
    if (filterActual === 'active') return !t.estado;
    if (filterActual === 'completed') return t.estado;
    return t;
  });

  tareasFiltro.forEach((tarea) => {
    todolist.innerHTML += `
    <div class='todo-radio-input'>
      <li class="todo-item">
        <input type="checkbox" ${tarea.estado ? 'checked' : ''} onChange="checkItem(${tarea.id}, event.target.checked)"/>
        <spam>${tarea.nombre}</spam>
          
        </li>
       <button class='todo-radio-input-btn' type="button" onClick="deleteItem(${tarea.id})">x</button>
    </div>
    <div class="divider"></div>
    `;
  });
  updateAllItems();
}

const input = document.getElementById('input');
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    tareas.push({
      id: tareas.length + 1,
      nombre: event.target.value,
      estado: false,
    });
    event.target.value = '';
    renderizarTareas();
  }
});

function updateAllItems() {
  const countItems = document.getElementById('items-left');
  countItems.innerHTML = `${tareas.length} left items`;
}

function checkItem(id, checked) {
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (tarea) {
    tarea.estado = checked;
    renderizarTareas();
  }
}

function deleteItem(id) {
  tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
  if (tareaIndex !== -1) {
    tareas.splice(tareaIndex, 1);
    renderizarTareas();
  }
}

const clearComplete = document.getElementById('clear');
clearComplete.addEventListener('click', () => {
  tareas = tareas.filter((tarea) => tarea.estado === false);
  renderizarTareas();
});

renderizarTareas();
updateAllItems();
