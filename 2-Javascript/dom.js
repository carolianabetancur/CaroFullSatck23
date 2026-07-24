//Document Object Model - DOM

//Consultar por id
const titulo = document.getElementById('titulo');
console.log(titulo);

//Consultar por nombre de la etiqueta, Aquí trae una colección de datos donde muestra todos los h1 para este caso
const titulo_elemento = document.getElementsByTagName('h1');
console.log(titulo_elemento);

//Consultar por query, los query selector son los selectores correpondiente a CSS entocnes una clase de css .title o
// #title o [h1.title] y trae todos los elementos con ese selector
const title_query = document.querySelector('title');
const title_query_parrafo = document.querySelector('#parrafo');
console.log(title_query, title_query_parrafo);

//Consultar por clase; También es posible consultar por clases y va a traer todos los elementos que contengan esa clase
const title_class = document.getElementsByClassName('parrafo');
console.log(title_class);

//Modificar el DOM
titulo.innerHTML = 'Titulo modificado desde JS';
titulo.innerHTML = '<h2>Título modificado desde JS con html</h2>';
titulo.style.color = 'red';
// Si sólo se quiere cambiar el contenido, podemos usar textContent
titulo.textContent = 'Título modificado de nuevo desde JS';
title_query_parrafo.style.color = 'blue';

//Agregar un elemento html a una clases desde JS
const parrafo = document.querySelector('#mi_parrafo');
// const parrafo = document.querySelector('.mi_parrafo');
console.log('mi parrafo', parrafo);
parrafo.classList.add('parrafo');

//Crear nuevos elementos
const nuevo_parrafo = document.createElement('p');
nuevo_parrafo.textContent = 'Esto es un nuevo párrafo';
//Dónde se va a agregar ese nuevo elemento
document.body.appendChild(nuevo_parrafo);

//Eliminar elementos
// titulo.remove();

//EVENTOS - ACCIONES POR MEDIO DEL HARDWARE COMO CLICK CON EL MOUSE, ACTIVAR CÁMARA, UNA TECLA, ETC
const clickButton = document.getElementById('clickH3');
clickButton.addEventListener('click', () => {
  console.log('hiciste click en mi');
  if (title_class.length > 0) title_class[0].remove();
  titulo_elemento[0].style.color = 'blue';
});
