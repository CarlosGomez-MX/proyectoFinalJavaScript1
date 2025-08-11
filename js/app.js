import { Ingreso } from './Ingreso.js';
import { Egreso } from './Egreso.js';

let ingresos = [
    new Ingreso('Salario', 2100),
    new Ingreso('Venta auto', 1500)
];

let egresos = [
    new Egreso('Renta', 900),
    new Egreso('Ropa', 400)
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

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totIng);
    document.getElementById('egresos').innerHTML = formatoMoneda(totEgr);
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

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
    return `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn" data-id="${ingreso.id}">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
};

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
    return `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalEgresos())}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn" data-id="${egreso.id}">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
};

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

const agregarDato = () => {
    const forma = document.getElementById('forma');
    const tipo = forma.tipo.value;
    const descripcion = forma.descripcion.value;
    const valor = parseFloat(forma.valor.value);

    if (descripcion !== '' && !isNaN(valor) && valor > 0) {
        if (tipo === 'ingreso') {
            ingresos.push(new Ingreso(descripcion, valor));
            cargarCabecero();
            cargarIngresos();
        } else if (tipo === 'egreso') {
            egresos.push(new Egreso(descripcion, valor));
            cargarCabecero();
            cargarEgresos();
        }
    }
}

cargarApp();

document.querySelector('.agregar_btn').addEventListener('click', agregarDato);

document.getElementById('lista-ingresos').addEventListener('click', (event) => {
    const target = event.target;
    const deleteButton = target.closest('.elemento_eliminar--btn');
    if (deleteButton) {
        const id = parseInt(deleteButton.dataset.id);
        eliminarIngreso(id);
    }
});

document.getElementById('lista-egresos').addEventListener('click', (event) => {
    const target = event.target;
    const deleteButton = target.closest('.elemento_eliminar--btn');
    if (deleteButton) {
        const id = parseInt(deleteButton.dataset.id);
        eliminarEgreso(id);
    }
});