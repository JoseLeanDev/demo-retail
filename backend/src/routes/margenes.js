const express = require('express');
const router = express.Router();

// ========== DATOS DEMO RETAIL PARA MÁRGENES ==========
const demoProductos = [
  { id: 1, sku: 'ALM-001', nombre: 'Arroz 5lb', categoria: 'Alimentos', precio_actual: 28.50, costo_actual: 23.37, margen_pct_actual: 18.0, margen_pct_historico: 22.5, delta_puntos: -4.5, unidades_12m: 9500, semaforo: 'rojo', quetzales_perdidos: 42750, precio_sugerido: 32.00 },
  { id: 2, sku: 'ALM-002', nombre: 'Aceite Vegetal 1L', categoria: 'Alimentos', precio_actual: 22.00, costo_actual: 18.70, margen_pct_actual: 15.0, margen_pct_historico: 18.0, delta_puntos: -3.0, unidades_12m: 6600, semaforo: 'rojo', quetzales_perdidos: 21780, precio_sugerido: 25.50 },
  { id: 3, sku: 'BEV-001', nombre: 'Coca-Cola 2L', categoria: 'Bebidas', precio_actual: 18.50, costo_actual: 12.58, margen_pct_actual: 32.0, margen_pct_historico: 28.0, delta_puntos: 4.0, unidades_12m: 5600, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 18.50 },
  { id: 4, sku: 'BEV-002', nombre: 'Jugo Naranja 1L', categoria: 'Bebidas', precio_actual: 16.00, costo_actual: 11.20, margen_pct_actual: 30.0, margen_pct_historico: 32.0, delta_puntos: -2.0, unidades_12m: 3200, semaforo: 'ambar', quetzales_perdidos: 6400, precio_sugerido: 17.00 },
  { id: 5, sku: 'LIM-001', nombre: 'Jabón en Barra', categoria: 'Limpieza', precio_actual: 12.00, costo_actual: 8.64, margen_pct_actual: 28.0, margen_pct_historico: 25.0, delta_puntos: 3.0, unidades_12m: 5400, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 12.00 },
  { id: 6, sku: 'LIM-002', nombre: 'Detergente Líquido', categoria: 'Limpieza', precio_actual: 35.00, costo_actual: 24.50, margen_pct_actual: 30.0, margen_pct_historico: 28.0, delta_puntos: 2.0, unidades_12m: 2800, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 35.00 },
  { id: 7, sku: 'CP-001', nombre: 'Shampoo 400ml', categoria: 'Cuidado Personal', precio_actual: 42.00, costo_actual: 23.10, margen_pct_actual: 45.0, margen_pct_historico: 40.0, delta_puntos: 5.0, unidades_12m: 1850, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 42.00 },
  { id: 8, sku: 'CP-002', nombre: 'Pasta Dental', categoria: 'Cuidado Personal', precio_actual: 18.00, costo_actual: 10.80, margen_pct_actual: 40.0, margen_pct_historico: 38.0, delta_puntos: 2.0, unidades_12m: 2400, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 18.00 },
  { id: 9, sku: 'HOG-001', nombre: 'Foco LED 9W', categoria: 'Hogar', precio_actual: 25.00, costo_actual: 15.50, margen_pct_actual: 38.0, margen_pct_historico: 42.0, delta_puntos: -4.0, unidades_12m: 1200, semaforo: 'ambar', quetzales_perdidos: 5400, precio_sugerido: 27.00 },
  { id: 10, sku: 'HOG-002', nombre: 'Extensión Eléctrica', categoria: 'Hogar', precio_actual: 45.00, costo_actual: 29.25, margen_pct_actual: 35.0, margen_pct_historico: 35.0, delta_puntos: 0, unidades_12m: 850, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 45.00 },
  { id: 11, sku: 'MAS-001', nombre: 'Croquetas Perro 2kg', categoria: 'Mascotas', precio_actual: 85.00, costo_actual: 57.80, margen_pct_actual: 32.0, margen_pct_historico: 30.0, delta_puntos: 2.0, unidades_12m: 680, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 85.00 },
  { id: 12, sku: 'MAS-002', nombre: 'Arena Gato 4kg', categoria: 'Mascotas', precio_actual: 38.00, costo_actual: 28.12, margen_pct_actual: 26.0, margen_pct_historico: 28.0, delta_puntos: -2.0, unidades_12m: 520, semaforo: 'ambar', quetzales_perdidos: 1040, precio_sugerido: 40.00 },
  { id: 13, sku: 'ALM-003', nombre: 'Frijol Negro 1kg', categoria: 'Alimentos', precio_actual: 18.00, costo_actual: 13.50, margen_pct_actual: 25.0, margen_pct_historico: 28.0, delta_puntos: -3.0, unidades_12m: 4200, semaforo: 'ambar', quetzales_perdidos: 5670, precio_sugerido: 20.00 },
  { id: 14, sku: 'BEV-003', nombre: 'Agua Purificada 1L', categoria: 'Bebidas', precio_actual: 8.50, costo_actual: 5.95, margen_pct_actual: 30.0, margen_pct_historico: 32.0, delta_puntos: -2.0, unidades_12m: 7800, semaforo: 'ambar', quetzales_perdidos: 1950, precio_sugerido: 9.00 },
  { id: 15, sku: 'CP-003', nombre: 'Desodorante Roll-on', categoria: 'Cuidado Personal', precio_actual: 28.00, costo_actual: 16.80, margen_pct_actual: 40.0, margen_pct_historico: 38.0, delta_puntos: 2.0, unidades_12m: 2100, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 28.00 },
];

const demoVendedores = [
  { id: 1, nombre: 'Sucursal Centro', ventas_12m: 3850000, margen_pct_actual: 28.5, margen_pct_historico: 27.0, delta_puntos: 1.5, quetzales_perdidos: 0, semaforo: 'verde', unidades_vendidas: 5200, num_ventas: 15200 },
  { id: 2, nombre: 'Sucursal Norte', ventas_12m: 1620000, margen_pct_actual: 26.2, margen_pct_historico: 27.5, delta_puntos: -1.3, quetzales_perdidos: 21060, semaforo: 'ambar', unidades_vendidas: 2100, num_ventas: 6800 },
  { id: 3, nombre: 'Sucursal Sur', ventas_12m: 1280000, margen_pct_actual: 24.8, margen_pct_historico: 26.0, delta_puntos: -1.2, quetzales_perdidos: 15360, semaforo: 'ambar', unidades_vendidas: 1850, num_ventas: 5400 },
  { id: 4, nombre: 'Sucursal Zona 10', ventas_12m: 620000, margen_pct_actual: 32.1, margen_pct_historico: 30.0, delta_puntos: 2.1, quetzales_perdidos: 0, semaforo: 'verde', unidades_vendidas: 680, num_ventas: 2600 },
];

const demoClientes = [
  { id: 'c1', nombre: 'Mayorista Centroamericano', ventas_12m: 1850000, margen_pct_actual: 22.0, margen_pct_historico: 24.0, delta_puntos: -2.0, quetzales_perdidos: 37000, semaforo: 'ambar', unidades_compradas: 8500, num_compras: 145, primera_compra: '2024-01-15', ultima_compra: '2025-07-28' },
  { id: 'c2', nombre: 'Tienda La Bendición', ventas_12m: 920000, margen_pct_actual: 28.0, margen_pct_historico: 27.0, delta_puntos: 1.0, quetzales_perdidos: 0, semaforo: 'verde', unidades_compradas: 4200, num_compras: 320, primera_compra: '2024-03-10', ultima_compra: '2025-07-30' },
  { id: 'c3', nombre: 'Supermercado El Ahorro', ventas_12m: 750000, margen_pct_actual: 18.5, margen_pct_historico: 20.0, delta_puntos: -1.5, quetzales_perdidos: 11250, semaforo: 'rojo', unidades_compradas: 3100, num_compras: 95, primera_compra: '2024-02-20', ultima_compra: '2025-07-25' },
  { id: 'c4', nombre: 'Abarrotería San José', ventas_12m: 580000, margen_pct_actual: 30.0, margen_pct_historico: 28.0, delta_puntos: 2.0, quetzales_perdidos: 0, semaforo: 'verde', unidades_compradas: 2800, num_compras: 210, primera_compra: '2024-05-01', ultima_compra: '2025-07-29' },
  { id: 'c5', nombre: 'Restaurante Buen Sabor', ventas_12m: 420000, margen_pct_actual: 25.0, margen_pct_historico: 26.0, delta_puntos: -1.0, quetzales_perdidos: 4200, semaforo: 'ambar', unidades_compradas: 1850, num_compras: 180, primera_compra: '2024-06-15', ultima_compra: '2025-07-27' },
  { id: 'c6', nombre: 'Café Central', ventas_12m: 285000, margen_pct_actual: 35.0, margen_pct_historico: 32.0, delta_puntos: 3.0, quetzales_perdidos: 0, semaforo: 'verde', unidades_compradas: 1200, num_compras: 95, primera_compra: '2024-08-01', ultima_compra: '2025-07-30' },
  { id: 'c7', nombre: 'Hotel Real', ventas_12m: 195000, margen_pct_actual: 20.0, margen_pct_historico: 22.0, delta_puntos: -2.0, quetzales_perdidos: 3900, semaforo: 'rojo', unidades_compradas: 850, num_compras: 42, primera_compra: '2024-09-10', ultima_compra: '2025-07-20' },
  { id: 'c8', nombre: 'Panadería San Antonio', ventas_12m: 148000, margen_pct_actual: 27.0, margen_pct_historico: 27.0, delta_puntos: 0, quetzales_perdidos: 0, semaforo: 'verde', unidades_compradas: 950, num_compras: 155, primera_compra: '2024-10-05', ultima_compra: '2025-07-29' },
];

const demoLineas = [
  { id: 'Alimentos', nombre: 'Alimentos', ventas_12m: 2850000, margen_pct_actual: 20.2, margen_pct_historico: 22.0, delta_puntos: -1.8, quetzales_perdidos: 51300, semaforo: 'ambar', unidades_12m: 20300, num_skus: 3, num_ventas: 20300 },
  { id: 'Bebidas', nombre: 'Bebidas', ventas_12m: 1620000, margen_pct_actual: 30.8, margen_pct_historico: 29.0, delta_puntos: 1.8, quetzales_perdidos: 0, semaforo: 'verde', unidades_12m: 16600, num_skus: 3, num_ventas: 16600 },
  { id: 'Limpieza', nombre: 'Limpieza', ventas_12m: 980000, margen_pct_actual: 29.0, margen_pct_historico: 27.5, delta_puntos: 1.5, quetzales_perdidos: 0, semaforo: 'verde', unidades_12m: 8200, num_skus: 2, num_ventas: 8200 },
  { id: 'Cuidado Personal', nombre: 'Cuidado Personal', ventas_12m: 720000, margen_pct_actual: 42.0, margen_pct_historico: 39.0, delta_puntos: 3.0, quetzales_perdidos: 0, semaforo: 'verde', unidades_12m: 6350, num_skus: 3, num_ventas: 6350 },
  { id: 'Hogar', nombre: 'Hogar', ventas_12m: 580000, margen_pct_actual: 36.5, margen_pct_historico: 38.0, delta_puntos: -1.5, quetzales_perdidos: 5400, semaforo: 'ambar', unidades_12m: 2050, num_skus: 2, num_ventas: 2050 },
  { id: 'Mascotas', nombre: 'Mascotas', ventas_12m: 245000, margen_pct_actual: 29.2, margen_pct_historico: 29.0, delta_puntos: 0.2, quetzales_perdidos: 1040, semaforo: 'ambar', unidades_12m: 1200, num_skus: 2, num_ventas: 1200 },
];

/**
 * GET /api/margenes
 * Demo retail - devuelve datos demo siempre
 */
router.get('/', async (req, res) => {
  try {
    const productos = demoProductos;
    const vendedores = demoVendedores;
    const clientes = demoClientes;
    const lineas = demoLineas;

    const totalMargenPerdido = productos.reduce((sum, p) => sum + (parseFloat(p.quetzales_perdidos) || 0), 0);
    const totalVentas = vendedores.reduce((sum, v) => sum + (parseFloat(v.ventas_12m) || 0), 0);
    const totalMargen = vendedores.reduce((sum, v) => sum + ((parseFloat(v.ventas_12m) || 0) * (parseFloat(v.margen_pct_actual) || 0) / 100), 0);

    res.json({
      status: 'success',
      timestamp: new Date().toISOString(),
      data: {
        resumen: {
          total_productos: productos.length,
          total_margen_perdido_12m: totalMargenPerdido,
          total_ventas_q: totalVentas,
          total_margen_bruto_q: totalMargen,
          margen_global_pct: totalVentas > 0 ? Math.round((totalMargen / totalVentas) * 100 * 100) / 100 : 0,
          productos_rojo: productos.filter(p => p.semaforo === 'rojo').length,
          productos_ambar: productos.filter(p => p.semaforo === 'ambar').length,
          productos_verde: productos.filter(p => p.semaforo === 'verde').length,
        },
        productos,
        vendedores,
        clientes,
        lineas,
      }
    });
  } catch (error) {
    console.error('[GET /api/margenes] Error:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

/**
 * GET /api/margenes/producto/:id/detalle
 */
router.get('/producto/:id/detalle', async (req, res) => {
  try {
    const productoId = parseInt(req.params.id);
    const productoDemo = demoProductos.find(p => p.id === productoId);
    
    if (!productoDemo) {
      return res.status(404).json({ status: 'error', message: 'Producto no encontrado' });
    }

    const historial = [];
    const basePrecio = productoDemo.precio_actual;
    const baseCosto = productoDemo.costo_actual;
    for (let i = 11; i >= 0; i--) {
      const fecha = new Date();
      fecha.setMonth(fecha.getMonth() - i);
      const variacionPrecio = (Math.random() - 0.5) * 0.1;
      const variacionCosto = (Math.random() - 0.5) * 0.08;
      const precio = basePrecio * (1 + variacionPrecio);
      const costo = baseCosto * (1 + variacionCosto);
      const margenPct = ((precio - costo) / precio * 100);
      historial.push({
        fecha: fecha.toISOString().split('T')[0],
        precio_promedio_realizado: Math.round(precio * 100) / 100,
        costo_unitario: Math.round(costo * 100) / 100,
        unidades_vendidas: Math.floor(500 + Math.random() * 800),
        margen_pct: Math.round(margenPct * 100) / 100
      });
    }

    res.json({
      status: 'success',
      data: {
        producto: { ...productoDemo, margen_promedio: productoDemo.margen_pct_actual },
        historial
      }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// ============================================
// MARGEN POR VENDEDOR / SUCURSAL
// ============================================
router.get('/vendedores', async (req, res) => {
  res.json({ status: 'success', data: demoVendedores });
});

// ============================================
// MARGEN POR CLIENTE
// ============================================
router.get('/clientes', async (req, res) => {
  res.json({ status: 'success', data: demoClientes });
});

// ============================================
// MARGEN POR LÍNEA / CATEGORÍA
// ============================================
router.get('/lineas', async (req, res) => {
  res.json({ status: 'success', data: demoLineas });
});

// Debug endpoint to verify deployment
router.get('/debug', async (req, res) => {
  res.json({ status: 'ok', version: 'demo-v2', timestamp: new Date().toISOString() });
});

module.exports = router;
