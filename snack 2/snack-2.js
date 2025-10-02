// 🏆 Snack 2

function lanciaDado() {
  return new Promise((resolve, reject) => {
    console.log("Lancio il dado...");
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 6) + 1;
      if (Math.random() < 0.2) {
        reject("Il dado si è incastrato!");
      } else {
        resolve(numero);
      }
    }, 3000);
  });
}

lanciaDado()
  .then((numero) => console.log("Numero del dado:", numero))
  .catch((error) => console.error(error));

// 🎯 Bonus
function creaLanciaDado() {
  let ultimoLancio = null;
  return function () {
    return new Promise((resolve, reject) => {
      console.log("Lancio il dado...");
      setTimeout(() => {
        const numero = Math.floor(Math.random() * 6) + 1;
        if (numero === ultimoLancio) {
          console.log("Numero del dado:", numero);
          reject("Incredibile! Hai fatto lo stesso numero di prima!");
        }
        ultimoLancio = numero;
        if (Math.random() < 0.2) {
          ultimoLancio = null;
          reject("Il dado si è incastrato!");
        } else {
          resolve(numero);
        }
      }, 3000);
    });
  };
}

const lanciaDadoConMemoria = creaLanciaDado();

lanciaDadoConMemoria()
  .then((numero) => {
    console.log("Numero del dado:", numero);
    lanciaDadoConMemoria()
      .then((numero) => console.log("Numero del dado:", numero))
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));
