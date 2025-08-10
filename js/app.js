import { Ingreso } from './Ingreso.js';
import { Egreso } from './Egreso.js';

let ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000)
];

let egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];

const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
};

const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
};

const cargarCabecero = () => {
    const totIng = totalIngresos();
    const totEgr = totalEgresos();
    const presupuesto = totIng - totEgr;
    const porcentajeEgreso = totEgr / totIng;

    console.log("Presupuesto:", formatoMoneda(presupuesto));
    console.log("Porcentaje de Egreso:", formatoPorcentaje(porcentajeEgreso));
    console.log("Total Ingresos:", formatoMoneda(totIng));
    console.log("Total Egresos:", formatoMoneda(totEgr));
};

const formatoMoneda = (valor) => {
    return valor.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

const formatoPorcentaje = (valor) => {
    return (valor).toLocaleString("es-MX", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

cargarCabecero();