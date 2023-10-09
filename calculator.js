// Obtenemos referencias a los elementos relevantes del HTML
const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('.button');


// Función para calcular y mostrar el resultado

function calcularResultado() {
  try {
    const expresion = resultInput.value;
    // Manejar el operador %
    const expresionConPorcentaje = expresion.replace(/%/g, '/100');
    
    // Evaluar la expresión
    const resultado = eval(expresionConPorcentaje);
    
    resultInput.value = resultado;
  } catch (error) {
    resultInput.value = 'Error';
  }
}

// Función para manejar la entrada
function manejarEntrada(valor) {
  const entradaActual = resultInput.value;

  if (valor === '=') {
    calcularResultado();
  } else if (valor === 'C') {
    resultInput.value = '';
  } else if (valor === '(' || valor === ')') {
    resultInput.value += valor;
  } else if (valor === '%') {
    resultInput.vaslue += '/100';
  } else if (valor === 'X') {
    resultInput.value += '*';
  } else if (valor === '+/-') {
    resultInput.value = -1 * parseFloat(entradaActual);
  } else {
    resultInput.value += valor;
  }
}

// Agregamos event listeners para cada botón
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    manejarEntrada(buttonValue);
  });
});

// Agregamos un event listener para el teclado
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'Enter') {
    calcularResultado();
  } else if (key === 'Escape') {
    resultInput.value = '';
  } else if (!isNaN(key) || key === '.' || key === '-' || key === '+') {
    manejarEntrada(key);
  } else if (key === '*') {
    manejarEntrada('X'); // Para representar la multiplicación con una 'X'
  } else if (key === '/') {
    manejarEntrada('/');
  }
});
