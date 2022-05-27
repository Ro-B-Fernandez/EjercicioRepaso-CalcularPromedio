// 

let cantAlumnos: number = Number(prompt("Ingres el número de alumnos:"));
let edades: number[] = new Array(cantAlumnos);
let indice: number;

let crearAleatorio = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cargarAleatorio = (arreglo: number[], cantidad: number): number[] => {

  for (indice= 0; indice < cantidad; indice ++) {
    arreglo[indice] = crearAleatorio(3,7);
    console.log("Edades: " + arreglo[indice]);

  }
  return arreglo;
}

let calcularPromedio = (arreglo: number[], cantidad: number): number => {
    let suma: number = 0;
    let promedio: number;

    for(indice = 0; indice < cantidad; indice ++) {
      suma += arreglo[indice]
    }
    promedio = suma/cantidad;

    return promedio;
}

cargarAleatorio(edades, cantAlumnos);
console.log("Promedio: " + calcularPromedio(edades, cantAlumnos));

