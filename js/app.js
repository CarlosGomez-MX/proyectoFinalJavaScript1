// Datos de prueba
let egresos = {
    Renta: 900,
    Ropa: 400
};

let ingresos = {
    Quincena: 9000,
    Venta: 400
};

// Función totalIngresos
const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso in ingresos) {
        totalIngreso += ingresos[ingreso];
    }
    return totalIngreso;
};

// Función totalEgresos
const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso in egresos) {
        totalEgreso += egresos[egreso];
    }
    return totalEgreso;
};

// Función cargarCabecero
const cargarCabecero = () => {

    const totIng = totalIngresos();
    const totEgr = totalEgresos();
    const presupuesto = totIng - totEgr;
    const porcentajeEgreso = totEgr / totIng;


    console.log("Presupuesto:", formatoMoneda(presupuesto));
    console.log("Porcentaje de Egreso:", formatoPorcentaje(porcentajeEgreso));
};

// Función para formatear moneda
const formatoMoneda = (valor) => {
    return valor.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

// Función para formatear porcentaje con dos decimales
const formatoPorcentaje = (valor) => {
    return (valor).toLocaleString("es-MX", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

cargarCabecero();
