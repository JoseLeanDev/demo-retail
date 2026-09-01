// Datos de DEMO / Fallback para desarrollo
// Centralizados aquí para evitar hardcodear en componentes

export const demoClientesConcentracion = [
  { id: 1, nombre: 'Clientes Frecuentes App', ingresos: 12800000 },
  { id: 2, nombre: 'Puntos de Venta Mayorista', ingresos: 8900000 },
  { id: 3, nombre: 'Empresas Corporativas (B2B)', ingresos: 5400000 },
  { id: 4, nombre: 'Sucursal Centro', ingresos: 3850000 },
  { id: 5, nombre: 'Sucursal Norte', ingresos: 1620000 },
  { id: 6, nombre: 'Sucursal Sur', ingresos: 1280000 },
  { id: 7, nombre: 'Sucursal Zona 10', ingresos: 620000 },
  { id: 8, nombre: 'Tienda Online', ingresos: 950000 },
  { id: 9, nombre: 'Programa de Lealtad', ingresos: 780000 },
  { id: 10, nombre: 'Otros canales', ingresos: 1200000 }
];

export const demoLibroDiario = [
  { asiento_id: 1, fecha: '2026-03-01', cuenta_codigo: '1101', cuenta_nombre: 'Caja', descripcion: 'Fondo inicial de caja', debe: 5000, haber: 0, documento: 'FI-001' },
  { asiento_id: 2, fecha: '2026-03-05', cuenta_codigo: '1103', cuenta_nombre: 'Banco Industrial', descripcion: 'Depósito de ventas', debe: 125000, haber: 0, documento: 'DEP-102' },
  { asiento_id: 3, fecha: '2026-03-05', cuenta_codigo: '4101', cuenta_nombre: 'Ventas', descripcion: 'Ventas del día', debe: 0, haber: 125000, documento: 'VTA-001' },
  { asiento_id: 4, fecha: '2026-03-10', cuenta_codigo: '1201', cuenta_nombre: 'Inventarios', descripcion: 'Compra de mercadería', debe: 45000, haber: 0, documento: 'COM-203' },
  { asiento_id: 4, fecha: '2026-03-10', cuenta_codigo: '2101', cuenta_nombre: 'Proveedores', descripcion: 'Compra a crédito', debe: 0, haber: 45000, documento: 'COM-203' },
  { asiento_id: 5, fecha: '2026-03-15', cuenta_codigo: '1104', cuenta_nombre: 'Cuentas por Cobrar', descripcion: 'Venta a crédito - Cliente XYZ', debe: 100000, haber: 0, documento: 'F001-0023' },
  { asiento_id: 5, fecha: '2026-03-15', cuenta_codigo: '4101', cuenta_nombre: 'Ventas', descripcion: 'Venta a crédito', debe: 0, haber: 100000, documento: 'F001-0023' },
  { asiento_id: 6, fecha: '2026-03-18', cuenta_codigo: '1103', cuenta_nombre: 'Banco Industrial', descripcion: 'Pago a Proveedor Alfa', debe: 0, haber: 30000, documento: 'CH-045' },
  { asiento_id: 6, fecha: '2026-03-18', cuenta_codigo: '2101', cuenta_nombre: 'Proveedores', descripcion: 'Pago a Proveedor Alfa', debe: 30000, haber: 0, documento: 'CH-045' },
  { asiento_id: 7, fecha: '2026-03-20', cuenta_codigo: '5103', cuenta_nombre: 'Alquiler', descripcion: 'Pago alquiler local comercial', debe: 15000, haber: 0, documento: 'REC-0320' },
  { asiento_id: 7, fecha: '2026-03-20', cuenta_codigo: '1103', cuenta_nombre: 'Banco Industrial', descripcion: 'Pago alquiler local comercial', debe: 0, haber: 15000, documento: 'REC-0320' },
  { asiento_id: 8, fecha: '2026-03-22', cuenta_codigo: '1103', cuenta_nombre: 'Banco Industrial', descripcion: 'Cobro a Cliente XYZ', debe: 50000, haber: 0, documento: 'DEP-215' },
  { asiento_id: 8, fecha: '2026-03-22', cuenta_codigo: '1104', cuenta_nombre: 'Cuentas por Cobrar', descripcion: 'Cobro parcial Cliente XYZ', debe: 0, haber: 50000, documento: 'DEP-215' },
  { asiento_id: 9, fecha: '2026-03-25', cuenta_codigo: '5102', cuenta_nombre: 'Servicios', descripcion: 'Electricidad y agua marzo', debe: 3584, haber: 0, documento: 'EEGSA-445' },
  { asiento_id: 9, fecha: '2026-03-25', cuenta_codigo: '1103', cuenta_nombre: 'Banco Industrial', descripcion: 'Electricidad y agua marzo', debe: 0, haber: 3584, documento: 'EEGSA-445' }
];

export const demoBancosConciliacion = [
  { banco: 'Banco Industrial', cuenta: 'Cuenta Corriente', diferencia: 0, dias: 1 },
  { banco: 'Banco G&T', cuenta: 'Cuenta de Ahorros', diferencia: 0, dias: 2 },
  { banco: 'BAC', cuenta: 'Cuenta Corriente USD', diferencia: 1250, dias: 5 },
];

export const demoCierreMensual = {
  mesActual: { mes: 'Marzo', ventas: 2850000, gastos: 2100000, utilidad: 750000 },
  mesAnterior: { mes: 'Febrero', ventas: 2650000, gastos: 2050000, utilidad: 600000 }
};

export const demoMesesCierre = [
  { id: 1, mes: 'Abril', año: 2025, estado: 'abierto', fechaCierre: null, progreso: 0 },
  { id: 2, mes: 'Marzo', año: 2025, estado: 'cerrado', fechaCierre: '2025-04-05', progreso: 100 },
  { id: 3, mes: 'Febrero', año: 2025, estado: 'cerrado', fechaCierre: '2025-03-03', progreso: 100 },
  { id: 4, mes: 'Enero', año: 2025, estado: 'cerrado', fechaCierre: '2025-02-04', progreso: 100 },
  { id: 5, mes: 'Diciembre', año: 2024, estado: 'cerrado', fechaCierre: '2025-01-03', progreso: 100 },
  { id: 6, mes: 'Noviembre', año: 2024, estado: 'cerrado', fechaCierre: '2024-12-02', progreso: 100 },
  { id: 7, mes: 'Octubre', año: 2024, estado: 'cerrado', fechaCierre: '2024-11-04', progreso: 100 },
  { id: 8, mes: 'Septiembre', año: 2024, estado: 'cerrado', fechaCierre: '2024-10-03', progreso: 100 },
  { id: 9, mes: 'Agosto', año: 2024, estado: 'cerrado', fechaCierre: '2024-09-02', progreso: 100 },
  { id: 10, mes: 'Julio', año: 2024, estado: 'cerrado', fechaCierre: '2024-08-02', progreso: 100 },
  { id: 11, mes: 'Junio', año: 2024, estado: 'cerrado', fechaCierre: '2024-07-03', progreso: 100 },
  { id: 12, mes: 'Mayo', año: 2024, estado: 'cerrado', fechaCierre: '2024-06-03', progreso: 100 },
];

export const demoAlertasCierre = [
  { id: 1, tipo: 'warning', mensaje: 'Ajuste de inventario requerido - Diferencia Q12,450', fecha: '2025-04-08' },
  { id: 2, tipo: 'error', mensaje: 'Conciliación bancaria pendiente - Marzo', fecha: '2025-04-05' },
  { id: 3, tipo: 'info', mensaje: 'Nuevos asientos requieren aprobación', count: 12 },
];

// ============================================
// DATOS DE COMPRAS INTELIGENTES
// ============================================

// Líneas de producto con historial de ventas (6 meses) - RETAIL
export const demoLineasProducto = [
  {
    id: 'ALIM-001',
    nombre: 'Camisetas',
    descripcion: 'Arroz, frijol, azúcar, aceite, leche, café, harina',
    stockActual: 12500,
    stockMinimo: 6000,
    costoUnitarioPromedio: 45,
    historialVentas: [9800, 10200, 9500, 11200, 10800, 12500],
    tendencia: 'up',
    margen: 22,
    proveedorPrincipal: 'Nike Centroamérica / Adidas LATAM Guatemala',
    tiempoEntregaDias: 5,
  },
  {
    id: 'BEBI-001',
    nombre: 'Zapatos',
    descripcion: 'Refrescos, jugos, cervezas, agua pura, energizantes',
    stockActual: 8900,
    stockMinimo: 5000,
    costoUnitarioPromedio: 28,
    historialVentas: [8200, 8500, 7800, 9200, 9800, 10500],
    tendencia: 'up',
    margen: 28,
    proveedorPrincipal: 'Levi Strauss Guatemala',
    tiempoEntregaDias: 3,
  },
  {
    id: 'LIMP-001',
    nombre: 'Jeans',
    descripcion: 'Detergente, cloro, suavizante, jabón en polvo, desinfectante',
    stockActual: 6500,
    stockMinimo: 3500,
    costoUnitarioPromedio: 38,
    historialVentas: [5200, 5400, 5100, 5800, 6200, 6800],
    tendencia: 'up',
    margen: 32,
    proveedorPrincipal: 'Zara Guatemala Centroamérica',
    tiempoEntregaDias: 7,
  },
  {
    id: 'CUID-001',
    nombre: 'Chamarras',
    descripcion: 'Shampoo, pasta dental, desodorante, jabón de baño, crema',
    stockActual: 7200,
    stockMinimo: 4000,
    costoUnitarioPromedio: 52,
    historialVentas: [5800, 6100, 5900, 6500, 6800, 7400],
    tendencia: 'up',
    margen: 35,
    proveedorPrincipal: 'P&G Guatemala',
    tiempoEntregaDias: 5,
  },
  {
    id: 'HOGA-001',
    nombre: 'Vestidos',
    descripcion: 'Papel higiénico, servilletas, aluminio, bolsas, velas',
    stockActual: 9800,
    stockMinimo: 5000,
    costoUnitarioPromedio: 35,
    historialVentas: [7200, 7600, 7100, 8200, 8500, 9100],
    tendencia: 'up',
    margen: 25,
    proveedorPrincipal: 'Tommy Hilfiger México',
    tiempoEntregaDias: 4,
  },
  {
    id: 'MASC-001',
    nombre: 'Pantalones',
    descripcion: 'Croquetas, arena, snacks, juguetes, accesorios',
    stockActual: 3200,
    stockMinimo: 1500,
    costoUnitarioPromedio: 125,
    historialVentas: [1800, 1950, 2100, 2200, 2500, 2800],
    tendencia: 'up',
    margen: 38,
    proveedorPrincipal: 'Adidas LATAM Purina Guatemala',
    tiempoEntregaDias: 6,
  },
];

// Productos individuales con estado de stock detallado - RETAIL
export const demoProductosStock = [
  // Camisetas
  { id: 1, nombre: 'Nike Air Force 1 (Saco)', linea: 'Camisetas', stock: 1850, stockMin: 800, stockMax: 2500, costoUnitario: 28, ventaPromedioMensual: 920, tendencia: 'up', proveedor: 'Nike Centroamérica Guatemala', diasEntrega: 5 },
  { id: 2, nombre: 'Adidas Ultraboost 1kg', linea: 'Camisetas', stock: 1200, stockMin: 600, stockMax: 1800, costoUnitario: 18, ventaPromedioMensual: 580, tendencia: 'stable', proveedor: 'Nike Centroamérica Guatemala', diasEntrega: 5 },
  { id: 3, nombre: 'Zara Slim Fit Jeans 2kg', linea: 'Camisetas', stock: 950, stockMin: 500, stockMax: 1500, costoUnitario: 22, ventaPromedioMensual: 420, tendencia: 'up', proveedor: 'Adidas LATAM Guatemala', diasEntrega: 5 },
  { id: 4, nombre: 'Levis 501 Original 1L (12 unds)', linea: 'Camisetas', stock: 680, stockMin: 400, stockMax: 1200, costoUnitario: 85, ventaPromedioMensual: 310, tendencia: 'up', proveedor: 'Zara Guatemala Centroamérica', diasEntrega: 5 },
  { id: 5, nombre: 'CK Boxer Brief 1L (24 unds)', linea: 'Camisetas', stock: 420, stockMin: 300, stockMax: 800, costoUnitario: 65, ventaPromedioMensual: 280, tendencia: 'stable', proveedor: 'Adidas LATAM Guatemala', diasEntrega: 3 },
  { id: 6, nombre: 'Puma RS-X Bold 100g', linea: 'Camisetas', stock: 580, stockMin: 350, stockMax: 900, costoUnitario: 45, ventaPromedioMensual: 240, tendencia: 'up', proveedor: 'Adidas LATAM Guatemala', diasEntrega: 5 },
  { id: 7, nombre: 'Tommy Flag Polo 1kg', linea: 'Camisetas', stock: 720, stockMin: 400, stockMax: 1100, costoUnitario: 15, ventaPromedioMensual: 380, tendencia: 'stable', proveedor: 'Nike Centroamérica Guatemala', diasEntrega: 5 },
  { id: 8, nombre: 'UA HeatGear Leggings Colgate 75ml', linea: 'Chamarras', stock: 850, stockMin: 400, stockMax: 1200, costoUnitario: 32, ventaPromedioMensual: 420, tendencia: 'up', proveedor: 'Calvin Klein CA', diasEntrega: 5 },
  // Zapatos
  { id: 9, nombre: 'Nike Dri-FIT Camiseta (8 unds)', linea: 'Zapatos', stock: 680, stockMin: 400, stockMax: 1000, costoUnitario: 45, ventaPromedioMensual: 380, tendencia: 'up', proveedor: 'Levi Strauss', diasEntrega: 3 },
  { id: 10, nombre: 'Adidas Originals Tee (8 unds)', linea: 'Zapatos', stock: 520, stockMin: 300, stockMax: 800, costoUnitario: 42, ventaPromedioMensual: 290, tendencia: 'stable', proveedor: 'Puma Sports Guatemala', diasEntrega: 3 },
  { id: 11, nombre: 'Zara Blazer 1.5L (6 unds)', linea: 'Zapatos', stock: 420, stockMin: 250, stockMax: 700, costoUnitario: 38, ventaPromedioMensual: 220, tendencia: 'up', proveedor: 'Levi Strauss', diasEntrega: 3 },
  { id: 12, nombre: 'HCerveza GalloM Basic Tee 350ml (24 unds)', linea: 'Zapatos', stock: 380, stockMin: 200, stockMax: 600, costoUnitario: 185, ventaPromedioMensual: 150, tendencia: 'stable', proveedor: 'Under Armour', diasEntrega: 4 },
  { id: 13, nombre: 'Guess Denim Skirt 1L (24 unds)', linea: 'Zapatos', stock: 1200, stockMin: 600, stockMax: 1800, costoUnitario: 12, ventaPromedioMensual: 680, tendencia: 'up', proveedor: 'Levi Strauss', diasEntrega: 3 },
  { id: 14, nombre: 'Red Bull 250ml (24 unds)', linea: 'Zapatos', stock: 180, stockMin: 120, stockMax: 400, costoUnitario: 95, ventaPromedioMensual: 95, tendencia: 'up', proveedor: 'Red Bull Guatemala', diasEntrega: 7 },
  { id: 15, nombre: 'Gatorade 500ml (24 unds)', linea: 'Zapatos', stock: 320, stockMin: 200, stockMax: 500, costoUnitario: 28, ventaPromedioMensual: 175, tendencia: 'stable', proveedor: 'Puma Sports Guatemala', diasEntrega: 3 },
  { id: 16, nombre: 'Jugo Néctar 200ml (24 unds)', linea: 'Zapatos', stock: 280, stockMin: 180, stockMax: 450, costoUnitario: 22, ventaPromedioMensual: 145, tendencia: 'up', proveedor: 'Puma Sports Guatemala', diasEntrega: 3 },
  // Jeans
  { id: 17, nombre: 'Detergente Líquido 3L', linea: 'Jeans', stock: 650, stockMin: 350, stockMax: 1000, costoUnitario: 58, ventaPromedioMensual: 280, tendencia: 'up', proveedor: 'Zara Guatemala Centroamérica', diasEntrega: 7 },
  { id: 18, nombre: 'Cloro 4L', linea: 'Jeans', stock: 820, stockMin: 400, stockMax: 1200, costoUnitario: 28, ventaPromedioMensual: 380, tendencia: 'stable', proveedor: 'Zara Guatemala Centroamérica', diasEntrega: 7 },
  { id: 19, nombre: 'Suavizante 3L', linea: 'Jeans', stock: 580, stockMin: 300, stockMax: 900, costoUnitario: 65, ventaPromedioMensual: 240, tendencia: 'up', proveedor: 'Calvin Klein CA', diasEntrega: 5 },
  { id: 20, nombre: 'Jabón en Polvo 2kg', linea: 'Jeans', stock: 720, stockMin: 400, stockMax: 1100, costoUnitario: 45, ventaPromedioMensual: 320, tendencia: 'stable', proveedor: 'P&G Guatemala', diasEntrega: 5 },
  { id: 21, nombre: 'Desinfectante Multiusos 1L', linea: 'Jeans', stock: 480, stockMin: 250, stockMax: 800, costoUnitario: 35, ventaPromedioMensual: 210, tendencia: 'up', proveedor: 'Zara Guatemala Centroamérica', diasEntrega: 7 },
  { id: 22, nombre: 'Lavalozas 500ml', linea: 'Jeans', stock: 620, stockMin: 350, stockMax: 950, costoUnitario: 28, ventaPromedioMensual: 290, tendencia: 'stable', proveedor: 'Zara Guatemala Centroamérica', diasEntrega: 7 },
  { id: 23, nombre: 'Esponja Multiusos (24 unds)', linea: 'Jeans', stock: 380, stockMin: 200, stockMax: 600, costoUnitario: 18, ventaPromedioMensual: 165, tendencia: 'stable', proveedor: 'Scotch-Brite CA', diasEntrega: 5 },
  { id: 24, nombre: 'Papel Toalla 3 rollos', linea: 'Jeans', stock: 450, stockMin: 250, stockMax: 700, costoUnitario: 38, ventaPromedioMensual: 195, tendencia: 'up', proveedor: 'Tommy Hilfiger México', diasEntrega: 4 },
  // Chamarras
  { id: 25, nombre: 'Shampoo Head & Shoulders 400ml', linea: 'Chamarras', stock: 520, stockMin: 280, stockMax: 800, costoUnitario: 72, ventaPromedioMensual: 240, tendencia: 'up', proveedor: 'P&G Guatemala', diasEntrega: 5 },
  { id: 26, nombre: 'Jabón de Baño 120g (6 unds)', linea: 'Chamarras', stock: 780, stockMin: 400, stockMax: 1200, costoUnitario: 45, ventaPromedioMensual: 380, tendencia: 'stable', proveedor: 'Zara Guatemala Centroamérica', diasEntrega: 7 },
  { id: 27, nombre: 'Desodorante Axe 150ml', linea: 'Chamarras', stock: 420, stockMin: 220, stockMax: 650, costoUnitario: 58, ventaPromedioMensual: 195, tendencia: 'up', proveedor: 'Zara Guatemala Centroamérica', diasEntrega: 7 },
  { id: 28, nombre: 'Crema Dental 90g', linea: 'Chamarras', stock: 680, stockMin: 350, stockMax: 1000, costoUnitario: 38, ventaPromedioMensual: 310, tendencia: 'stable', proveedor: 'Calvin Klein CA', diasEntrega: 5 },
  { id: 29, nombre: 'Acondicionador 400ml', linea: 'Chamarras', stock: 380, stockMin: 200, stockMax: 600, costoUnitario: 68, ventaPromedioMensual: 175, tendencia: 'up', proveedor: 'P&G Guatemala', diasEntrega: 5 },
  { id: 30, nombre: 'Jabón Líquido 250ml', linea: 'Chamarras', stock: 520, stockMin: 280, stockMax: 800, costoUnitario: 42, ventaPromedioMensual: 250, tendencia: 'stable', proveedor: 'Zara Guatemala Centroamérica', diasEntrega: 7 },
  { id: 31, nombre: 'Desodorante Dove 50ml', linea: 'Chamarras', stock: 450, stockMin: 250, stockMax: 700, costoUnitario: 52, ventaPromedioMensual: 210, tendencia: 'up', proveedor: 'Zara Guatemala Centroamérica', diasEntrega: 7 },
  { id: 32, nombre: 'Crema Hidratante 200ml', linea: 'Chamarras', stock: 320, stockMin: 180, stockMax: 500, costoUnitario: 85, ventaPromedioMensual: 145, tendencia: 'stable', proveedor: 'P&G Guatemala', diasEntrega: 5 },
  // Vestidos
  { id: 33, nombre: 'Papel Higiénico 12 rollos', linea: 'Vestidos', stock: 920, stockMin: 500, stockMax: 1500, costoUnitario: 65, ventaPromedioMensual: 420, tendencia: 'up', proveedor: 'Tommy Hilfiger México', diasEntrega: 4 },
  { id: 34, nombre: 'Servilletas 200 unds', linea: 'Vestidos', stock: 680, stockMin: 350, stockMax: 1000, costoUnitario: 32, ventaPromedioMensual: 310, tendencia: 'stable', proveedor: 'Tommy Hilfiger México', diasEntrega: 4 },
  { id: 35, nombre: 'Papel Aluminio 7.6m', linea: 'Vestidos', stock: 420, stockMin: 220, stockMax: 650, costoUnitario: 42, ventaPromedioMensual: 185, tendencia: 'stable', proveedor: 'Reynolds Wrap CA', diasEntrega: 5 },
  { id: 36, nombre: 'Bolsas Ziploc (50 unds)', linea: 'Vestidos', stock: 380, stockMin: 200, stockMax: 600, costoUnitario: 55, ventaPromedioMensual: 165, tendencia: 'up', proveedor: 'SC Johnson CA', diasEntrega: 5 },
  { id: 37, nombre: 'Velas Blanca (12 unds)', linea: 'Vestidos', stock: 520, stockMin: 250, stockMax: 800, costoUnitario: 28, ventaPromedioMensual: 220, tendencia: 'stable', proveedor: 'Genérico Local', diasEntrega: 3 },
  { id: 38, nombre: 'Fósforos (10 cajas)', linea: 'Vestidos', stock: 480, stockMin: 250, stockMax: 750, costoUnitario: 15, ventaPromedioMensual: 195, tendencia: 'down', proveedor: 'Genérico Local', diasEntrega: 3 },
  { id: 39, nombre: 'Cera para Piso 1L', linea: 'Vestidos', stock: 320, stockMin: 180, stockMax: 500, costoUnitario: 48, ventaPromedioMensual: 145, tendencia: 'stable', proveedor: 'SC Johnson CA', diasEntrega: 5 },
  { id: 40, nombre: 'Insecticida 400ml', linea: 'Vestidos', stock: 280, stockMin: 150, stockMax: 450, costoUnitario: 58, ventaPromedioMensual: 125, tendencia: 'up', proveedor: 'SC Johnson CA', diasEntrega: 5 },
  // Pantalones
  { id: 41, nombre: 'Croquetas Dog Chow 20kg', linea: 'Pantalones', stock: 180, stockMin: 80, stockMax: 300, costoUnitario: 285, ventaPromedioMensual: 75, tendencia: 'up', proveedor: 'Adidas LATAM Purina Guatemala', diasEntrega: 6 },
  { id: 42, nombre: 'Arena para Gato 10kg', linea: 'Pantalones', stock: 220, stockMin: 100, stockMax: 350, costoUnitario: 95, ventaPromedioMensual: 85, tendencia: 'up', proveedor: 'Adidas LATAM Purina Guatemala', diasEntrega: 6 },
  { id: 43, nombre: 'Snacks para Perro 500g', linea: 'Pantalones', stock: 320, stockMin: 150, stockMax: 500, costoUnitario: 65, ventaPromedioMensual: 145, tendencia: 'up', proveedor: 'Adidas LATAM Purina Guatemala', diasEntrega: 6 },
  { id: 44, nombre: 'Croquetas Cat Chow 15kg', linea: 'Pantalones', stock: 150, stockMin: 70, stockMax: 250, costoUnitario: 245, ventaPromedioMensual: 65, tendencia: 'stable', proveedor: 'Adidas LATAM Purina Guatemala', diasEntrega: 6 },
  { id: 45, nombre: 'Juguete Hueso de Goma', linea: 'Pantalones', stock: 180, stockMin: 80, stockMax: 300, costoUnitario: 45, ventaPromedioMensual: 75, tendencia: 'stable', proveedor: 'Genérico Importado', diasEntrega: 10 },
  { id: 46, nombre: 'Correa para Perro 2m', linea: 'Pantalones', stock: 120, stockMin: 60, stockMax: 200, costoUnitario: 85, ventaPromedioMensual: 45, tendencia: 'stable', proveedor: 'Genérico Importado', diasEntrega: 10 },
  { id: 47, nombre: 'Shampoo para Pantalones 500ml', linea: 'Pantalones', stock: 95, stockMin: 50, stockMax: 150, costoUnitario: 72, ventaPromedioMensual: 38, tendencia: 'up', proveedor: 'Hartz Guatemala', diasEntrega: 7 },
  { id: 48, nombre: 'Collar para Gato', linea: 'Pantalones', stock: 85, stockMin: 40, stockMax: 140, costoUnitario: 55, ventaPromedioMensual: 32, tendencia: 'stable', proveedor: 'Genérico Importado', diasEntrega: 10 },
];

// ============================================
// HISTORIAL DE VENTAS POR PRODUCTO (6 meses)
// ============================================

// Generador consistente: usa ventaPromedioMensual como base
function generarHistorial(promedio, tendencia) {
  const factor = tendencia === 'up' ? [0.85, 0.88, 0.92, 1.0, 1.08, 1.18] :
                 tendencia === 'down' ? [1.15, 1.08, 1.0, 0.95, 0.88, 0.82] :
                 [0.92, 1.05, 0.95, 1.02, 1.08, 0.98]
  return factor.map(f => Math.max(1, Math.round(promedio * f)))
}

export const demoHistorialVentasProducto = [
  // Eléctrico
  { id: 1, nombre: 'Cable THW 12 AWG (Rollo 100m)', linea: 'Eléctrico', precioVenta: 265, costoUnitario: 180, historial: generarHistorial(420, 'up'), margen: 32, proveedor: 'Elektra Guatemala' },
  { id: 2, nombre: 'Interruptor Breaker 2P 30A', linea: 'Eléctrico', precioVenta: 220, costoUnitario: 145, historial: generarHistorial(185, 'up'), margen: 35, proveedor: 'Elektra Guatemala' },
  { id: 3, nombre: 'Foco LED 9W (Caja 10 unds)', linea: 'Eléctrico', precioVenta: 135, costoUnitario: 95, historial: generarHistorial(140, 'up'), margen: 40, proveedor: 'Elektra Guatemala' },
  { id: 4, nombre: 'Caja de Breakers 8 espacios', linea: 'Eléctrico', precioVenta: 450, costoUnitario: 320, historial: generarHistorial(55, 'stable'), margen: 29, proveedor: 'Elektra Guatemala' },
  { id: 5, nombre: 'Cable THW 10 AWG (Rollo 100m)', linea: 'Eléctrico', precioVenta: 360, costoUnitario: 240, historial: generarHistorial(210, 'up'), margen: 33, proveedor: 'Elektra Guatemala' },
  { id: 6, nombre: 'Tomacorriente duplex blanco', linea: 'Eléctrico', precioVenta: 50, costoUnitario: 35, historial: generarHistorial(280, 'stable'), margen: 30, proveedor: 'Elektra Guatemala' },
  { id: 7, nombre: 'Breakers 1P 20A', linea: 'Eléctrico', precioVenta: 90, costoUnitario: 65, historial: generarHistorial(220, 'up'), margen: 28, proveedor: 'Elektra Guatemala' },
  { id: 8, nombre: 'Plafón LED 18W cuadrado', linea: 'Eléctrico', precioVenta: 175, costoUnitario: 125, historial: generarHistorial(90, 'up'), margen: 29, proveedor: 'Elektra Guatemala' },
  // Plomería
  { id: 9, nombre: 'Tubo PVC 1/2" (Caja 20 unds)', linea: 'Plomería', precioVenta: 120, costoUnitario: 85, historial: generarHistorial(260, 'up'), margen: 29, proveedor: 'Plomería Centroamericana' },
  { id: 10, nombre: 'Llave de Paso 1/2"', linea: 'Plomería', precioVenta: 105, costoUnitario: 75, historial: generarHistorial(165, 'stable'), margen: 29, proveedor: 'Plomería Centroamericana' },
  { id: 11, nombre: 'Codo PVC 1/2" (Caja 50 unds)', linea: 'Plomería', precioVenta: 65, costoUnitario: 45, historial: generarHistorial(180, 'up'), margen: 31, proveedor: 'Plomería Centroamericana' },
  { id: 12, nombre: 'Pegamento PVC 1/4 galón', linea: 'Plomería', precioVenta: 78, costoUnitario: 55, historial: generarHistorial(95, 'stable'), margen: 29, proveedor: 'Plomería Centroamericana' },
  { id: 13, nombre: 'Tubo PVC 3/4" (Caja 15 unds)', linea: 'Plomería', precioVenta: 155, costoUnitario: 110, historial: generarHistorial(145, 'up'), margen: 29, proveedor: 'Plomería Centroamericana' },
  { id: 14, nombre: 'Llave de chorro 1/2" cromada', linea: 'Plomería', precioVenta: 230, costoUnitario: 165, historial: generarHistorial(75, 'down'), margen: 28, proveedor: 'Plomería Centroamericana' },
  { id: 15, nombre: 'Cementarropa 1/2" (Caja 25 unds)', linea: 'Plomería', precioVenta: 50, costoUnitario: 35, historial: generarHistorial(85, 'stable'), margen: 30, proveedor: 'Plomería Centroamericana' },
  { id: 16, nombre: 'Sanitario blanco económico', linea: 'Plomería', precioVenta: 580, costoUnitario: 420, historial: generarHistorial(40, 'stable'), margen: 28, proveedor: 'Plomería Centroamericana' },
  // Construcción
  { id: 17, nombre: 'Cemento Portland 42.5kg', linea: 'Construcción', precioVenta: 105, costoUnitario: 85, historial: generarHistorial(185, 'stable'), margen: 19, proveedor: 'Cementos Progreso' },
  { id: 18, nombre: 'Lámina Galvanizada 3x8 pies', linea: 'Construcción', precioVenta: 480, costoUnitario: 380, historial: generarHistorial(65, 'up'), margen: 21, proveedor: 'Cementos Progreso' },
  { id: 19, nombre: 'Varilla corrugada 3/8" (und)', linea: 'Construcción', precioVenta: 35, costoUnitario: 28, historial: generarHistorial(420, 'stable'), margen: 20, proveedor: 'Cementos Progreso' },
  { id: 20, nombre: 'Arena fina (m3)', linea: 'Construcción', precioVenta: 150, costoUnitario: 120, historial: generarHistorial(40, 'down'), margen: 20, proveedor: 'Materiales El Volcán' },
  { id: 21, nombre: 'Grava 3/4" (m3)', linea: 'Construcción', precioVenta: 168, costoUnitario: 135, historial: generarHistorial(35, 'stable'), margen: 20, proveedor: 'Materiales El Volcán' },
  { id: 22, nombre: 'Block 10x20x40 (und)', linea: 'Construcción', precioVenta: 11, costoUnitario: 8.5, historial: generarHistorial(1800, 'up'), margen: 23, proveedor: 'Blockera La Unión' },
  { id: 23, nombre: 'Alambre recocido (kg)', linea: 'Construcción', precioVenta: 28, costoUnitario: 22, historial: generarHistorial(85, 'stable'), margen: 21, proveedor: 'Cementos Progreso' },
  { id: 24, nombre: 'Clavo 2" (Caja 25kg)', linea: 'Construcción', precioVenta: 120, costoUnitario: 95, historial: generarHistorial(70, 'down'), margen: 21, proveedor: 'Ferretería El Clavo' },
  // Pinturas
  { id: 25, nombre: 'Pintura Latex Blanca 1 Galón', linea: 'Pinturas', precioVenta: 220, costoUnitario: 165, historial: generarHistorial(220, 'up'), margen: 25, proveedor: 'Pinturas Sherwin Williams' },
  { id: 26, nombre: 'Pintura Latex Blanca 5 Galones', linea: 'Pinturas', precioVenta: 880, costoUnitario: 680, historial: generarHistorial(75, 'up'), margen: 23, proveedor: 'Pinturas Sherwin Williams' },
  { id: 27, nombre: 'Esmalte Brillante Rojo 1/4 galón', linea: 'Pinturas', precioVenta: 110, costoUnitario: 85, historial: generarHistorial(55, 'stable'), margen: 23, proveedor: 'Pinturas Sherwin Williams' },
  { id: 28, nombre: 'Brocha 3" profesional', linea: 'Pinturas', precioVenta: 58, costoUnitario: 45, historial: generarHistorial(140, 'stable'), margen: 22, proveedor: 'Pinturas Sherwin Williams' },
  { id: 29, nombre: 'Rodillo 9" felpa', linea: 'Pinturas', precioVenta: 82, costoUnitario: 65, historial: generarHistorial(90, 'up'), margen: 21, proveedor: 'Pinturas Sherwin Williams' },
  { id: 30, nombre: 'Thinner 1 galón', linea: 'Pinturas', precioVenta: 120, costoUnitario: 95, historial: generarHistorial(45, 'down'), margen: 21, proveedor: 'Pinturas Sherwin Williams' },
  { id: 31, nombre: 'Masilla plástica 1kg', linea: 'Pinturas', precioVenta: 45, costoUnitario: 35, historial: generarHistorial(85, 'stable'), margen: 22, proveedor: 'Pinturas Sherwin Williams' },
  { id: 32, nombre: 'Cinta masking 2" (rollo)', linea: 'Pinturas', precioVenta: 32, costoUnitario: 25, historial: generarHistorial(185, 'up'), margen: 22, proveedor: 'Pinturas Sherwin Williams' },
  // Herramientas
  { id: 33, nombre: 'Taladro percutor 1/2" 650W', linea: 'Herramientas', precioVenta: 1180, costoUnitario: 850, historial: generarHistorial(22, 'up'), margen: 28, proveedor: 'Black & Decker CA' },
  { id: 34, nombre: 'Sierra caladora 450W', linea: 'Herramientas', precioVenta: 980, costoUnitario: 720, historial: generarHistorial(12, 'stable'), margen: 27, proveedor: 'Black & Decker CA' },
  { id: 35, nombre: 'Martillo carpintero 16oz', linea: 'Herramientas', precioVenta: 128, costoUnitario: 95, historial: generarHistorial(45, 'stable'), margen: 26, proveedor: 'Black & Decker CA' },
  { id: 36, nombre: 'Cinta métrica 5m profesional', linea: 'Herramientas', precioVenta: 88, costoUnitario: 65, historial: generarHistorial(75, 'up'), margen: 26, proveedor: 'Black & Decker CA' },
  { id: 37, nombre: 'Nivel de burbuja 24"', linea: 'Herramientas', precioVenta: 248, costoUnitario: 185, historial: generarHistorial(20, 'stable'), margen: 25, proveedor: 'Black & Decker CA' },
  { id: 38, nombre: 'Juego destornilladores 6pzas', linea: 'Herramientas', precioVenta: 168, costoUnitario: 125, historial: generarHistorial(42, 'up'), margen: 26, proveedor: 'Black & Decker CA' },
  { id: 39, nombre: 'Amoladora angular 4-1/2" 820W', linea: 'Herramientas', precioVenta: 880, costoUnitario: 650, historial: generarHistorial(14, 'up'), margen: 26, proveedor: 'Black & Decker CA' },
  { id: 40, nombre: 'Guantes de cuero (par)', linea: 'Herramientas', precioVenta: 60, costoUnitario: 45, historial: generarHistorial(120, 'up'), margen: 25, proveedor: 'Black & Decker CA' },
  // Jardinería
  { id: 41, nombre: 'Manguera 1/2" 20m reforzada', linea: 'Jardinería', precioVenta: 220, costoUnitario: 165, historial: generarHistorial(75, 'up'), margen: 25, proveedor: 'Garden Center GT' },
  { id: 42, nombre: 'Aspersor oscillante plástico', linea: 'Jardinería', precioVenta: 165, costoUnitario: 125, historial: generarHistorial(45, 'up'), margen: 24, proveedor: 'Garden Center GT' },
  { id: 43, nombre: 'Maceta plástica 12" (und)', linea: 'Jardinería', precioVenta: 48, costoUnitario: 35, historial: generarHistorial(185, 'up'), margen: 27, proveedor: 'Garden Center GT' },
  { id: 44, nombre: 'Fertilizante NPK 1kg', linea: 'Jardinería', precioVenta: 72, costoUnitario: 55, historial: generarHistorial(135, 'up'), margen: 24, proveedor: 'Garden Center GT' },
  { id: 45, nombre: 'Pala de jardín mango corto', linea: 'Jardinería', precioVenta: 110, costoUnitario: 85, historial: generarHistorial(35, 'stable'), margen: 23, proveedor: 'Garden Center GT' },
  { id: 46, nombre: 'Tijeras de podar 8"', linea: 'Jardinería', precioVenta: 162, costoUnitario: 125, historial: generarHistorial(28, 'up'), margen: 23, proveedor: 'Garden Center GT' },
  { id: 47, nombre: 'Tierra abonada 10kg', linea: 'Jardinería', precioVenta: 58, costoUnitario: 45, historial: generarHistorial(65, 'up'), margen: 22, proveedor: 'Garden Center GT' },
  { id: 48, nombre: 'Rastrillo de jardín 14 dientes', linea: 'Jardinería', precioVenta: 118, costoUnitario: 95, historial: generarHistorial(22, 'stable'), margen: 20, proveedor: 'Garden Center GT' },
];

// Meses para labels de historial
export const demoMesesHistorial = ['Dic 2025', 'Ene 2026', 'Feb 2026', 'Mar 2026', 'Abr 2026', 'May 2026'];
export const demoMesesProyeccion = ['Jun 2026', 'Jul 2026', 'Ago 2026'];
