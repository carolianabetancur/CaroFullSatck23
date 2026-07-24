//carrito compras: productos(agregar, cambiarlo, eliminarlo, descuento)
//CRUD (CREATE, READ, UPDATE, DELETE)

//arrays

let carrito = [
  {
    id: 1,
    nombre: 'computador',
    precio: 1200000,
    categoria: 'Tecnologia',
  },
  {
    id: 2,
    nombre: 'Teclado',
    precio: 300000,
    categoria: 'Tecnologia',
  },
  {
    id: 3,
    nombre: 'libro',
    precio: 80000,
    categoria: 'Libros',
  },
];

//console.log(carrito)

let filtroActual = 'todos'; //Tecnología y libros

let productoNuevo = {
  id: 4,
  nombre: 'Mouse',
  precio: 100000,
  categoria: 'Tecnologia',
};
carrito.push(productoNuevo);
//console.log(carrito)

let carritoDescuento = carrito.map((p) => {
  p.precio = p.precio - p.precio * 0.1;
  return p;
});
//carritoDescuento

let filtroCarrito = carrito.filter((p) => {
  if (filtroActual === 'Libros') return p.categoria === 'Libros';
  if (filtroActual === 'Tecnologia') return p.categoria === 'Tecnologia';
  return true;
});

filtroTecnologia;
