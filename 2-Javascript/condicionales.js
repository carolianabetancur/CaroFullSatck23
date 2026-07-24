const edad = 15;

if (edad >= 18) {
  console.log('Es mayor de edad');
} else {
  console.log('Es menor de edad');
}

const precioNaranja = 12;
const descuento = 0.2;

// if (precioNaranja > 10) {
//   const precioFinal = precioNaranja - precioNaranja * descuento;
//   console.log(`El precio final es: ${precioFinal}`);
// } else {
//   if (precioNaranja >= 5) {
//     const precioFinal = precioNaranja - precioNaranja * 0.1;
//     console.log(`El precio final es: ${precioFinal}`);
//   } else {
//     console.log(`El precio final es: ${precioNaranja}`);
//   }
// }

if (precioNaranja > 10) {
  const precioFinal = precioNaranja - precioNaranja * descuento;
  console.log(`El precio final es: ${precioFinal}`);
} else if (precioNaranja >= 5) {
  const precioFinal = precioNaranja - precioNaranja * 0.1;
  console.log(`El precio final es: ${precioFinal}`);
} else {
  console.log(`El precio final es: ${precioNaranja}`);
}

//Switch

const diaSemana = 'Sabado';

switch (diaSemana) {
  case 'lunes':
    console.log('Hoy es lunes');
    break;
  case 'martes':
    console.log('Hoy es martes');
    break;
  case 'miercoles':
    console.log('Hoy es miercoles');
    break;
  case 'jueves':
    console.log('Hoy es jueves');
    break;
  case 'viernes':
    console.log('Hoy es viernes');
    break;
  default:
    console.log('Es fin de semana');
}

//Ternadrio

const pensionado = false;
const esPensionado = pensionado ? 'Si es pensionado' : 'No es pensionado';
console.log(esPensionado);
