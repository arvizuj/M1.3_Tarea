
const cadenas = ["console.log('abc')", "8 - 1", "console.log('xyz')", "s = rojo", "console.log('jkl')", "k = 10"];
const procesos = [];
let tablaBody = document.createElement("tbody");

/**
 * Acción al presionar el botón de Aceptar en el navegador.
 */
function botónIniciar() {
    N = document.getElementsByName("cantidad")[0].value;
    crearProcesos(N);
}

/**
 * Crea aleatoriamente la cantidad de líneas de código que tendrá cada proceso.
 * Crea una lista de objetos y a cada elemento le asigna nombre de proceso y crea una 
 * lista vacía de código que se le asignará.
 * La cantidad de procesos es recibida como argumento.
 * @param {*} cantidad 
 */
function crearProcesos(cantidad) {
    for(let i = 0; i < cantidad; i++) {
        let numSubprocesos = Math.floor(Math.random() * 6) + 1;
        procesos.push(new Object);
        procesos[i].nombre = "Proceso " + (i+1);
        procesos[i].código = [];
        guardarLíneas(numSubprocesos, procesos[i]);   
    }
    iniciar();
}

/**
 * Guarda en el proceso del argumento las líneas de código que le corresponden.
 * Las líneas de código se asignan aleatoriamente.
 * @param {*} num cantidad de líneas de código
 * @param {*} proceso 
 */
function guardarLíneas(num, proceso) {
    for(let k = 0; k < num; k++) {
        proceso.código[k] = cadenas[Math.floor(Math.random() * 6)];  
    }
}

/**
 * Inicia la simulación.
 * Crea un arreglo para guardar los nombres de los procesos terminados.
 * Agrega una fila a la tabla que muestra los procesos.
 */
function iniciar() {
    let finish = [];
    while(finish.length < procesos.length) {    
        procesos.forEach(element => {
            if(element.código.length < 1) {
                agregarFila(element.nombre, "Terminado");
                if(!finish.includes(element.nombre)) {
                    finish.push(element.nombre);
                }
            } else {
                agregarFila(element.nombre, element.código.shift());
            }
        });
    }
    finish.splice(0);
    procesos.splice(0);
}

/**
 * Agrega una fila en la tabla que se muestra en el navegador.
 * @param {*} nombreProceso El nombre que va a mostrar en la tabla.
 * @param {*} contenido La línea de código que se está ejecutando o si el proceso temrinó.
 */
function agregarFila(nombreProceso, contenido) {
    document.getElementsByTagName("table")[0].appendChild(tablaBody);
    let row = document.createElement("tr");
    let celda = document.createElement("td");
    let texto = document.createTextNode(nombreProceso);
    celda.appendChild(texto);
    row.appendChild(celda);
    celda = document.createElement("td");
    texto = document.createTextNode(contenido);
    celda.appendChild(texto);
    row.appendChild(celda);
    tablaBody.appendChild(row);
}
