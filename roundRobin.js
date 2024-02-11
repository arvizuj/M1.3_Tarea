
const cadenas = ["console.log('abc')", "8 - 1", "console.log('xyz')", "s = rojo", "console.log('jkl')", "k = 10"];
const procesos = [];

function guardarLíneas(num, list) {
    for(let k = 0; k < num; k++) {
        list.código[k] = cadenas[Math.floor(Math.random() * 6)];  
    }
}

function crearProcesos(cantidad) {
    for(let i = 0; i < cantidad; i++) {
        let numSubprocesos = Math.floor(Math.random() * 6) + 1;
        procesos.push(new Object);
        procesos[i].nombre = "Proceso " + (i+1);
        procesos[i].código = [];
        guardarLíneas(numSubprocesos, procesos[i]);   
    }
}

function iniciar() {
    let finish = [];
    while(finish.length < procesos.length) {    
        procesos.forEach(element => {
            console.log(element.nombre);
            if(element.código.length < 1) {
                console.log("Terminado.");
                if(!finish.includes(element.nombre)) {
                    finish.push(element.nombre);
                }
            } else {
                console.log("Línea de código:" + element.código.shift());
            }
        });
    }
}

const N = process.argv[2];

crearProcesos(N);
iniciar();