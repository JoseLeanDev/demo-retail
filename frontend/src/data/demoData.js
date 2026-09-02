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
  // ========== CALZADO ==========
  { id: 1, nombre: 'Nike Air Zoom Pegasus 40', linea: 'Calzado', precioVenta: 1295, costoUnitario: 750, historial: generarHistorial(145, 'up'), margen: 42, proveedor: 'Nike Centroamérica' },
  { id: 2, nombre: 'Nike Air Force 1 \'07', linea: 'Calzado', precioVenta: 1195, costoUnitario: 680, historial: generarHistorial(165, 'up'), margen: 43, proveedor: 'Nike Centroamérica' },
  { id: 3, nombre: 'Adidas Ultraboost Light', linea: 'Calzado', precioVenta: 1395, costoUnitario: 820, historial: generarHistorial(120, 'up'), margen: 41, proveedor: 'Adidas Guatemala' },
  { id: 4, nombre: 'Adidas Forum Low', linea: 'Calzado', precioVenta: 995, costoUnitario: 580, historial: generarHistorial(155, 'up'), margen: 42, proveedor: 'Adidas Guatemala' },
  { id: 5, nombre: 'Under Armour HOVR Phantom', linea: 'Calzado', precioVenta: 1095, costoUnitario: 620, historial: generarHistorial(95, 'up'), margen: 43, proveedor: 'Under Armour CA' },
  { id: 6, nombre: 'Puma RS-X', linea: 'Calzado', precioVenta: 895, costoUnitario: 510, historial: generarHistorial(110, 'stable'), margen: 43, proveedor: 'Puma Centroamérica' },
  { id: 7, nombre: 'New Balance 574', linea: 'Calzado', precioVenta: 995, costoUnitario: 590, historial: generarHistorial(85, 'up'), margen: 41, proveedor: 'New Balance GT' },
  { id: 8, nombre: 'Reebok Nano X3', linea: 'Calzado', precioVenta: 1095, costoUnitario: 640, historial: generarHistorial(75, 'stable'), margen: 42, proveedor: 'Reebok CA' },

  // ========== ROPA HOMBRE ==========
  { id: 9, nombre: 'Nike Dri-FIT T-Shirt', linea: 'Ropa Hombre', precioVenta: 295, costoUnitario: 165, historial: generarHistorial(220, 'up'), margen: 44, proveedor: 'Nike Centroamérica' },
  { id: 10, nombre: 'Nike Pro Shorts 6"', linea: 'Ropa Hombre', precioVenta: 345, costoUnitario: 195, historial: generarHistorial(185, 'up'), margen: 43, proveedor: 'Nike Centroamérica' },
  { id: 11, nombre: 'Adidas Own the Run Tee', linea: 'Ropa Hombre', precioVenta: 245, costoUnitario: 135, historial: generarHistorial(195, 'up'), margen: 45, proveedor: 'Adidas Guatemala' },
  { id: 12, nombre: 'Under Armour Tech 2.0 Polo', linea: 'Ropa Hombre', precioVenta: 375, costoUnitario: 210, historial: generarHistorial(140, 'stable'), margen: 44, proveedor: 'Under Armour CA' },
  { id: 13, nombre: 'Puma Essentials Hoodie', linea: 'Ropa Hombre', precioVenta: 495, costoUnitario: 285, historial: generarHistorial(105, 'up'), margen: 42, proveedor: 'Puma Centroamérica' },
  { id: 14, nombre: 'Nike Sportswear Club Fleece', linea: 'Ropa Hombre', precioVenta: 545, costoUnitario: 310, historial: generarHistorial(125, 'up'), margen: 43, proveedor: 'Nike Centroamérica' },
  { id: 15, nombre: 'Adidas Tiro Track Pants', linea: 'Ropa Hombre', precioVenta: 445, costoUnitario: 250, historial: generarHistorial(130, 'stable'), margen: 44, proveedor: 'Adidas Guatemala' },
  { id: 16, nombre: 'Reebok Training Compression Tee', linea: 'Ropa Hombre', precioVenta: 295, costoUnitario: 165, historial: generarHistorial(95, 'stable'), margen: 44, proveedor: 'Reebok CA' },

  // ========== ROPA MUJER ==========
  { id: 17, nombre: 'Nike Pro Leggings', linea: 'Ropa Mujer', precioVenta: 495, costoUnitario: 280, historial: generarHistorial(165, 'up'), margen: 43, proveedor: 'Nike Centroamérica' },
  { id: 18, nombre: 'Lululemon Align Leggings 25"', linea: 'Ropa Mujer', precioVenta: 895, costoUnitario: 520, historial: generarHistorial(85, 'up'), margen: 42, proveedor: 'Lululemon CA' },
  { id: 19, nombre: 'Adidas Yoga Essentials Tee', linea: 'Ropa Mujer', precioVenta: 265, costoUnitario: 145, historial: generarHistorial(155, 'up'), margen: 45, proveedor: 'Adidas Guatemala' },
  { id: 20, nombre: 'Champion Reverse Weave Hoodie', linea: 'Ropa Mujer', precioVenta: 545, costoUnitario: 310, historial: generarHistorial(90, 'stable'), margen: 43, proveedor: 'Champion CA' },
  { id: 21, nombre: 'Under Armour HeatGear Tank', linea: 'Ropa Mujer', precioVenta: 245, costoUnitario: 135, historial: generarHistorial(120, 'up'), margen: 45, proveedor: 'Under Armour CA' },
  { id: 22, nombre: 'Nike Yoga Luxe Crop Top', linea: 'Ropa Mujer', precioVenta: 395, costoUnitario: 220, historial: generarHistorial(110, 'up'), margen: 44, proveedor: 'Nike Centroamérica' },
  { id: 23, nombre: 'Adidas Terrex Multi Tee', linea: 'Ropa Mujer', precioVenta: 295, costoUnitario: 165, historial: generarHistorial(100, 'stable'), margen: 44, proveedor: 'Adidas Guatemala' },
  { id: 24, nombre: 'Puma Classics T7 Track Jacket', linea: 'Ropa Mujer', precioVenta: 595, costoUnitario: 340, historial: generarHistorial(75, 'up'), margen: 43, proveedor: 'Puma Centroamérica' },

  // ========== ACCESORIOS ==========
  { id: 25, nombre: 'Nike Heritage Backpack', linea: 'Accesorios', precioVenta: 495, costoUnitario: 280, historial: generarHistorial(130, 'up'), margen: 43, proveedor: 'Nike Centroamérica' },
  { id: 26, nombre: 'Adidas Santiago Lunch Bag', linea: 'Accesorios', precioVenta: 245, costoUnitario: 135, historial: generarHistorial(95, 'up'), margen: 45, proveedor: 'Adidas Guatemala' },
  { id: 27, nombre: 'Nike Everyday Cushioned Socks (3 pares)', linea: 'Accesorios', precioVenta: 195, costoUnitario: 105, historial: generarHistorial(240, 'up'), margen: 46, proveedor: 'Nike Centroamérica' },
  { id: 28, nombre: 'Under Armour Contender Backpack', linea: 'Accesorios', precioVenta: 425, costoUnitario: 240, historial: generarHistorial(85, 'stable'), margen: 44, proveedor: 'Under Armour CA' },
  { id: 29, nombre: 'Nike Pro Elbow Sleeve', linea: 'Accesorios', precioVenta: 185, costoUnitario: 95, historial: generarHistorial(155, 'up'), margen: 49, proveedor: 'Nike Centroamérica' },
  { id: 30, nombre: 'Adidas Baseball Cap', linea: 'Accesorios', precioVenta: 225, costoUnitario: 120, historial: generarHistorial(180, 'up'), margen: 47, proveedor: 'Adidas Guatemala' },
  { id: 31, nombre: 'Puma Phase Waist Bag', linea: 'Accesorios', precioVenta: 195, costoUnitario: 105, historial: generarHistorial(115, 'stable'), margen: 46, proveedor: 'Puma Centroamérica' },
  { id: 32, nombre: 'Nike Swoosh Headband', linea: 'Accesorios', precioVenta: 125, costoUnitario: 65, historial: generarHistorial(210, 'up'), margen: 48, proveedor: 'Nike Centroamérica' },

  // ========== EQUIPAMIENTO ==========
  { id: 33, nombre: 'Nike Dominate Basketball', linea: 'Equipamiento', precioVenta: 395, costoUnitario: 220, historial: generarHistorial(85, 'up'), margen: 44, proveedor: 'Nike Centroamérica' },
  { id: 34, nombre: 'Adidas Capitano Ball', linea: 'Equipamiento', precioVenta: 295, costoUnitario: 160, historial: generarHistorial(110, 'stable'), margen: 46, proveedor: 'Adidas Guatemala' },
  { id: 35, nombre: 'Nike Yoga Mat', linea: 'Equipamiento', precioVenta: 425, costoUnitario: 235, historial: generarHistorial(65, 'up'), margen: 45, proveedor: 'Nike Centroamérica' },
  { id: 36, nombre: 'Under Armour Resistance Bands', linea: 'Equipamiento', precioVenta: 185, costoUnitario: 95, historial: generarHistorial(145, 'up'), margen: 49, proveedor: 'Under Armour CA' },
  { id: 37, nombre: 'Nike Speed Rope', linea: 'Equipamiento', precioVenta: 245, costoUnitario: 130, historial: generarHistorial(120, 'up'), margen: 47, proveedor: 'Nike Centroamérica' },
  { id: 38, nombre: 'Adidas Foam Roller', linea: 'Equipamiento', precioVenta: 295, costoUnitario: 160, historial: generarHistorial(75, 'stable'), margen: 46, proveedor: 'Adidas Guatemala' },
  { id: 39, nombre: 'Puma Training Kettlebell 8kg', linea: 'Equipamiento', precioVenta: 345, costoUnitario: 195, historial: generarHistorial(55, 'up'), margen: 43, proveedor: 'Puma Centroamérica' },
  { id: 40, nombre: 'Nike Gym Sack', linea: 'Equipamiento', precioVenta: 175, costoUnitario: 90, historial: generarHistorial(165, 'up'), margen: 49, proveedor: 'Nike Centroamérica' },
];

// Meses para labels de historial
export const demoMesesHistorial = ['Dic 2025', 'Ene 2026', 'Feb 2026', 'Mar 2026', 'Abr 2026', 'May 2026'];
export const demoMesesProyeccion = ['Jun 2026', 'Jul 2026', 'Ago 2026'];
