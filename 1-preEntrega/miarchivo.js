// Función para adivinar un número
function adivinarNumero() {
    const miNumero = 7; // Número que hay que adivinar
    let numeroUsuario = parseInt(prompt("Estoy pensando en un número del 1 al 10. ¿Cuál crees que es?"));
  
    while (numeroUsuario != miNumero) {
      if (numeroUsuario > miNumero) {
        alert("Mi número es más bajo. Vuelve a intentarlo.");
      } else {
        alert("Mi número es más alto. Vuelve a intentarlo.");
      }
      
      numeroUsuario = prompt("Estoy pensando en un número del 1 al 10. ¿Cuál crees que es?");
    }
  
    alert("¡Correcto! ¡Adivinaste mi número!");
  }
  
  // Llamamos a la función para comenzar la adivinanza
  adivinarNumero();