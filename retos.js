// RETO 1 

let litrosProducidos = +prompt("Cuantos litros de leche ha producido");

const litrosAGalon = 1/3.785

let precioGalon = +prompt("Cual es el precio del galón de leche?")

function calcularGanancia (litros){
    let galones = litros*litrosAGalon;

    let ganancia = galones*precioGalon;

    return ganancia;

}

let ganancia = calcularGanancia(litrosProducidos);

alert(`Su ganancia es de ${ganancia}`);


// RETO 2

let tipoDeHamburguesa = ["Sencillas", "Dobles", "triples"];
let precioSencilla = 20;
let precioDoble = 25;
let precioTriple = 28;
const cargoTarjeta = 0.05;

let eleccionTipoDeHamburguesa = +prompt(`Qué tipo de hamburguesa desea: 
                                    1. Sencillas 
                                    2. Dobles 
                                    3. Triples`);

let eleccionCantidad = +prompt("Cuántas desea?")

let eleccionMedioDePago = +prompt(`Cómo desea pagar?
                                    1. Efectivo
                                    2. Tarjeta`)

function cuenta (tipo, medioDePago, cantidad){
    switch(tipo){
        case 1:
            if(medioDePago == 1){
                let total = precioSencilla*cantidad;
                return total;
            }else{
                let total = (precioSencilla*cantidad)*(1 - cargoTarjeta);
                return total;
            }
        case 2:
            if(medioDePago == 1){
                let total = precioDoble*cantidad;
                return total;
            }else{
                let total = (precioDoble*cantidad)*(1 - cargoTarjeta);
                return total;
            }
        case 3:
            if(medioDePago == 1){
                let total = precioTriple*cantidad;
                return total;
            }else{
                let total = (precioTriple*cantidad)*(1 - cargoTarjeta);
                return total;
            }
    }
}

let total = cuenta(eleccionTipoDeHamburguesa, eleccionMedioDePago, eleccionCantidad);

console.log(total);

// RETO 3

let numCita = +prompt(`Qué número de consulta le toca?`);

const precioCita1 = 200;
const precioCita2 = 150;
const precioCita3 = 100;
const precioCitaRest = 50;

function precioCita (cita){
    if(cita <= 3){
        let precioCita = precioCita1;
        return precioCita;
    }else{
        if(cita <= 5){
            let precioCita = precioCita2;
            return precioCita;
        }else{
            if(cita <= 8){
                let precioCita = precioCita3;
                return precioCita;
            }else{
                let precioCita = precioCitaRest;
                return precioCita;
            }
        }
    }
}

let precio = precioCita(numCita);
console.log(`El precio de su cita es $${precio}`);

function costoTratamiento (cita){
    if(cita <= 3){
        let costoTratamiento = cita*precioCita1;
        return costoTratamiento;
    }else{
        if(cita <= 5){
            let costoTratamiento = 3*precioCita1 + (cita-3)*precioCita2;
            return costoTratamiento;
        }else{
            if(cita <= 8){
                let costoTratamiento = 3*precioCita1 + 2*precioCita2 + (cita-5)*precioCita3;
                return costoTratamiento;
            }else{
                let costoTratamiento = 3*precioCita1 + 2*precioCita2 + 3*precioCita3 + (cita-8)*precioCitaRest;
                return costoTratamiento;
            }
        }
    }
}

let tratamiento = costoTratamiento(numCita);
console.log(`El costo de su tratamiento es $${tratamiento}`);
