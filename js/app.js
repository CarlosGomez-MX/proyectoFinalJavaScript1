// Datos de prueba
let egresos = {
  Renta: 900,
  Ropa: 400
};

let ingresos = {
  Quincena: 9000,
  Venta: 400
};

// Función totalIngresos con las características indicadas
const totalIngresos = () => {
  let totalIngreso = 0;
  // Iterar sobre el objeto ingresos
  for (let ingreso in ingresos) {
    totalIngreso += ingresos[ingreso]; // Sumar los valores de ingresos
  }
  return totalIngreso;
};

// Función totalEgresos con las características indicadas
const totalEgresos = () => {
  let totalEgreso = 0;
  // Iterar sobre el objeto egresos
  for (let egreso in egresos) {
    totalEgreso += egresos[egreso]; // Sumar los valores de egresos
  }
  return totalEgreso;
};

// Función cargarCabecero con las características indicadas
const cargarCabecero = () => {
  // Calcular presupuesto y porcentaje de egreso
  const totIng = totalIngresos();
  const totEgr = totalEgresos();
  const presupuesto = totIng - totEgr;
  const porcentajeEgreso = totEgr / totIng;

  // Mostrar resultados en consola con formato
  console.log("Presupuesto:", formatoMoneda(presupuesto));
  console.log("Porcentaje de Egreso:", formatoPorcentaje(porcentajeEgreso));
};

// Función para formatear a moneda con dos decimales y el símbolo MXN
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

// Ejecutar la función cargarCabecero
cargarCabecero();
