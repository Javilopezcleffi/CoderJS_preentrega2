let nombre = prompt("Cómo es tu nombre?")
console.log(nombre)



function presupuesto (largo, ancho) {

  //ingresar medidas

  while (isNaN(largo)) {
    largo = prompt("Por favor, ingrese el largo en centímetros:");
  }

  while (isNaN(ancho)) {
    ancho = prompt("Ingrese el ancho en centímetros:");
  }

  // variantes de molduras

  const molduras = [
    { nombre: "chica", precio: 190, codigo: "30", id: 1 },
    { nombre: "mediana", precio: 230, codigo: "30G", id: 2 },
    { nombre: "caja", precio: 230, codigo: "230", id: 3 },
    { nombre: "grande", precio: 440, codigo: "270", id: 4 }
  ];

  //elegir moldura

  const elegirMoldura = parseInt(prompt(`selecciona una moldura entre el 1 y el ${molduras.length}:`));

  let molduraElegida = 0;

  if (elegirMoldura >= 0 && elegirMoldura < molduras.length) {
    const molduraElegida = molduras[elegirMoldura];
    console.log(`Moldura: ${molduraElegida.codigo}`);
  } else {
    console.log("Elección inválida");
  }




  const costoVidrio = ancho * largo / 6.4
  const perimetro = 2 * ancho + 2 * largo
  const costoOtros = 100
  let costoMoldura;
  const precioMoldura = (molduraElegida.precio);


  if (perimetro < 244) {
    costoMoldura = precioMoldura
  } else if (perimetro >= 244 && perimetro <= 488) {
    costoMoldura = (2 * precioMoldura);
  } else
    costoMoldura = 3 * precioMoldura;

  let costoEstimado = costoVidrio + costoMoldura + costoOtros
  let precioFinal = parseInt(2 * costoEstimado)

  let precioRedondeado = Math.ceil(precioFinal / 50) * 50;

  console.log(molduraElegida.precio);
  console.log("medidas: " + largo + "x" + ancho + " cm.");
  console.log("costo del vidrio: " + " " + parseInt(costoVidrio));
  console.log("perimetro: " + perimetro)
  console.log("costo de moldura: " + costoMoldura)
  console.log("precio final: " + precioRedondeado)

  alert(`El precio para tu marco de ${largo} x ${ancho} es de ${precioRedondeado} pesos`)

}

presupuesto()

let repetir = prompt("¿Desea presupuestar otro marco? (si/no)");

if (repetir.toLowerCase() === "si") {
  presupuesto();
} else {
  alert("¡Hasta luego!");
}
