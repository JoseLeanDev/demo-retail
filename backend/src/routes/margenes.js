const express = require('express');
const router = express.Router();

// ========== DATOS DEMO RETAIL DE ROPA — MULTI MARCA / MULTI TIENDA / MULTI PAÍS ==========

const demoProductos = [
  // === NIKE ===
  { id: 1, sku: 'NKE-001', nombre: 'Nike Air Force 1 Blanco', categoria: 'Zapatos', marca: 'Nike', precio_actual: 189.00, costo_actual: 94.50, margen_pct_actual: 50.0, margen_pct_historico: 55.0, delta_puntos: -5.0, unidades_12m: 3200, semaforo: 'rojo', quetzales_perdidos: 33600, precio_sugerido: 210.00 },
  { id: 2, sku: 'NKE-002', nombre: 'Nike Dri-FIT Camiseta', categoria: 'Camisetas', marca: 'Nike', precio_actual: 45.00, costo_actual: 18.00, margen_pct_actual: 60.0, margen_pct_historico: 58.0, delta_puntos: 2.0, unidades_12m: 8500, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 45.00 },
  { id: 3, sku: 'NKE-003', nombre: 'Nike Sportswear Short', categoria: 'Shorts', marca: 'Nike', precio_actual: 55.00, costo_actual: 22.00, margen_pct_actual: 60.0, margen_pct_historico: 62.0, delta_puntos: -2.0, unidades_12m: 4200, semaforo: 'ambar', quetzales_perdidos: 4620, precio_sugerido: 58.00 },
  // === ADIDAS ===
  { id: 4, sku: 'ADS-001', nombre: 'Adidas Ultraboost 22', categoria: 'Zapatos', marca: 'Adidas', precio_actual: 210.00, costo_actual: 126.00, margen_pct_actual: 40.0, margen_pct_historico: 45.0, delta_puntos: -5.0, unidades_12m: 1850, semaforo: 'rojo', quetzales_perdidos: 19425, precio_sugerido: 230.00 },
  { id: 5, sku: 'ADS-002', nombre: 'Adidas Originals Camiseta', categoria: 'Camisetas', marca: 'Adidas', precio_actual: 42.00, costo_actual: 16.80, margen_pct_actual: 60.0, margen_pct_historico: 58.0, delta_puntos: 2.0, unidades_12m: 7200, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 42.00 },
  { id: 6, sku: 'ADS-003', nombre: 'Adidas Tiro 21 Pants', categoria: 'Pantalones', marca: 'Adidas', precio_actual: 65.00, costo_actual: 26.00, margen_pct_actual: 60.0, margen_pct_historico: 60.0, delta_puntos: 0, unidades_12m: 3100, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 65.00 },
  // === ZARA ===
  { id: 7, sku: 'ZRA-001', nombre: 'Zara Slim Fit Jeans', categoria: 'Jeans', marca: 'Zara', precio_actual: 85.00, costo_actual: 34.00, margen_pct_actual: 60.0, margen_pct_historico: 58.0, delta_puntos: 2.0, unidades_12m: 5600, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 85.00 },
  { id: 8, sku: 'ZRA-002', nombre: 'Zara Blazer Estructurado', categoria: 'Chamarras', marca: 'Zara', precio_actual: 120.00, costo_actual: 48.00, margen_pct_actual: 60.0, margen_pct_historico: 62.0, delta_puntos: -2.0, unidades_12m: 1850, semaforo: 'ambar', quetzales_perdidos: 4440, precio_sugerido: 126.00 },
  { id: 9, sku: 'ZRA-003', nombre: 'Zara Vestido Midi Floral', categoria: 'Vestidos', marca: 'Zara', precio_actual: 75.00, costo_actual: 30.00, margen_pct_actual: 60.0, margen_pct_historico: 60.0, delta_puntos: 0, unidades_12m: 4200, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 75.00 },
  // === LEVI'S ===
  { id: 10, sku: 'LVS-001', nombre: "Levi's 501 Original Fit", categoria: 'Jeans', marca: "Levi's", precio_actual: 95.00, costo_actual: 47.50, margen_pct_actual: 50.0, margen_pct_historico: 55.0, delta_puntos: -5.0, unidades_12m: 2800, semaforo: 'rojo', quetzales_perdidos: 14000, precio_sugerido: 106.00 },
  { id: 11, sku: 'LVS-002', nombre: "Levi's Trucker Jacket", categoria: 'Chamarras', marca: "Levi's", precio_actual: 110.00, costo_actual: 44.00, margen_pct_actual: 60.0, margen_pct_historico: 58.0, delta_puntos: 2.0, unidades_12m: 1600, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 110.00 },
  // === CALVIN KLEIN ===
  { id: 12, sku: 'CK-001', nombre: 'CK Boxer Brief 3-Pack', categoria: 'Ropa Interior', marca: 'Calvin Klein', precio_actual: 55.00, costo_actual: 22.00, margen_pct_actual: 60.0, margen_pct_historico: 62.0, delta_puntos: -2.0, unidades_12m: 5200, semaforo: 'ambar', quetzales_perdidos: 5720, precio_sugerido: 58.00 },
  { id: 13, sku: 'CK-002', nombre: 'CK Sudadera Logo', categoria: 'Sudaderas', marca: 'Calvin Klein', precio_actual: 78.00, costo_actual: 31.20, margen_pct_actual: 60.0, margen_pct_historico: 60.0, delta_puntos: 0, unidades_12m: 2400, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 78.00 },
  // === PUMA ===
  { id: 14, sku: 'PMA-001', nombre: 'Puma RS-X Bold', categoria: 'Zapatos', marca: 'Puma', precio_actual: 140.00, costo_actual: 70.00, margen_pct_actual: 50.0, margen_pct_historico: 52.0, delta_puntos: -2.0, unidades_12m: 1850, semaforo: 'ambar', quetzales_perdidos: 5180, precio_sugerido: 146.00 },
  { id: 15, sku: 'PMA-002', nombre: 'Puma ESS Logo Tee', categoria: 'Camisetas', marca: 'Puma', precio_actual: 35.00, costo_actual: 14.00, margen_pct_actual: 60.0, margen_pct_historico: 58.0, delta_puntos: 2.0, unidades_12m: 6200, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 35.00 },
  // === TOMMY HILFIGER ===
  { id: 16, sku: 'TH-001', nombre: 'Tommy Flag Polo', categoria: 'Camisetas', marca: 'Tommy Hilfiger', precio_actual: 68.00, costo_actual: 27.20, margen_pct_actual: 60.0, margen_pct_historico: 60.0, delta_puntos: 0, unidades_12m: 3400, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 68.00 },
  { id: 17, sku: 'TH-002', nombre: 'Tommy Chino Pants', categoria: 'Pantalones', marca: 'Tommy Hilfiger', precio_actual: 95.00, costo_actual: 38.00, margen_pct_actual: 60.0, margen_pct_historico: 58.0, delta_puntos: 2.0, unidades_12m: 2100, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 95.00 },
  // === UNDER ARMOUR ===
  { id: 18, sku: 'UA-001', nombre: 'UA HeatGear Leggings', categoria: 'Pantalones', marca: 'Under Armour', precio_actual: 58.00, costo_actual: 23.20, margen_pct_actual: 60.0, margen_pct_historico: 62.0, delta_puntos: -2.0, unidades_12m: 2800, semaforo: 'ambar', quetzales_perdidos: 3248, precio_sugerido: 61.00 },
  { id: 19, sku: 'UA-002', nombre: 'UA Project Rock Hoodie', categoria: 'Sudaderas', marca: 'Under Armour', precio_actual: 72.00, costo_actual: 28.80, margen_pct_actual: 60.0, margen_pct_historico: 60.0, delta_puntos: 0, unidades_12m: 1450, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 72.00 },
  // === H&M ===
  { id: 20, sku: 'HM-001', nombre: 'H&M Basic Tee 3-Pack', categoria: 'Camisetas', marca: 'H&M', precio_actual: 28.00, costo_actual: 11.20, margen_pct_actual: 60.0, margen_pct_historico: 58.0, delta_puntos: 2.0, unidades_12m: 9500, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 28.00 },
  { id: 21, sku: 'HM-002', nombre: 'H&M Denim Jacket', categoria: 'Chamarras', marca: 'H&M', precio_actual: 55.00, costo_actual: 22.00, margen_pct_actual: 60.0, margen_pct_historico: 60.0, delta_puntos: 0, unidades_12m: 2100, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 55.00 },
  // === GUESS ===
  { id: 22, sku: 'GSS-001', nombre: 'Guess Denim Mini Skirt', categoria: 'Vestidos', marca: 'Guess', precio_actual: 65.00, costo_actual: 26.00, margen_pct_actual: 60.0, margen_pct_historico: 58.0, delta_puntos: 2.0, unidades_12m: 1800, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 65.00 },
  { id: 23, sku: 'GSS-002', nombre: 'Guess Triangle Bikini', categoria: 'Vestidos', marca: 'Guess', precio_actual: 78.00, costo_actual: 31.20, margen_pct_actual: 60.0, margen_pct_historico: 60.0, delta_puntos: 0, unidades_12m: 1200, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 78.00 },
  // === COLUMBIA ===
  { id: 24, sku: 'CLM-001', nombre: 'Columbia Watertight II', categoria: 'Chamarras', marca: 'Columbia', precio_actual: 85.00, costo_actual: 42.50, margen_pct_actual: 50.0, margen_pct_historico: 55.0, delta_puntos: -5.0, unidades_12m: 1450, semaforo: 'rojo', quetzales_perdidos: 7312, precio_sugerido: 94.00 },
  { id: 25, sku: 'CLM-002', nombre: 'Columbia Silver Ridge Shirt', categoria: 'Camisetas', marca: 'Columbia', precio_actual: 48.00, costo_actual: 19.20, margen_pct_actual: 60.0, margen_pct_historico: 60.0, delta_puntos: 0, unidades_12m: 2100, semaforo: 'verde', quetzales_perdidos: 0, precio_sugerido: 48.00 },
];

const demoVendedores = [
  { id: 1, nombre: 'Zara Zona 10 — Guatemala', pais: 'Guatemala', ventas_12m: 4850000, margen_pct_actual: 58.5, margen_pct_historico: 57.0, delta_puntos: 1.5, quetzales_perdidos: 0, semaforo: 'verde', unidades_vendidas: 18200, num_ventas: 45200 },
  { id: 2, nombre: 'Nike Store Multiplaza — Panamá', pais: 'Panamá', ventas_12m: 3200000, margen_pct_actual: 52.2, margen_pct_historico: 55.0, delta_puntos: -2.8, quetzales_perdidos: 89600, semaforo: 'ambar', unidades_vendidas: 12400, num_ventas: 31200 },
  { id: 3, nombre: 'Adidas Originals — San Salvador', pais: 'El Salvador', ventas_12m: 2650000, margen_pct_actual: 54.8, margen_pct_historico: 56.0, delta_puntos: -1.2, quetzales_perdidos: 31800, semaforo: 'ambar', unidades_vendidas: 10800, num_ventas: 28400 },
  { id: 4, nombre: 'Levi\'s City Mall — Costa Rica', pais: 'Costa Rica', ventas_12m: 1980000, margen_pct_actual: 56.1, margen_pct_historico: 54.0, delta_puntos: 2.1, quetzales_perdidos: 0, semaforo: 'verde', unidades_vendidas: 8200, num_ventas: 22600 },
  { id: 5, nombre: 'H&M Altaplaza — Panamá', pais: 'Panamá', ventas_12m: 1750000, margen_pct_actual: 59.0, margen_pct_historico: 58.0, delta_puntos: 1.0, quetzales_perdidos: 0, semaforo: 'verde', unidades_vendidas: 9500, num_ventas: 25800 },
  { id: 6, nombre: 'CK Miraflores — Guatemala', pais: 'Guatemala', ventas_12m: 1420000, margen_pct_actual: 55.5, margen_pct_historico: 57.0, delta_puntos: -1.5, quetzales_perdidos: 21300, semaforo: 'ambar', unidades_vendidas: 5600, num_ventas: 18200 },
  { id: 7, nombre: 'Puma Mall Las Americas — Honduras', pais: 'Honduras', ventas_12m: 980000, margen_pct_actual: 53.8, margen_pct_historico: 55.0, delta_puntos: -1.2, quetzales_perdidos: 11760, semaforo: 'ambar', unidades_vendidas: 4200, num_ventas: 13800 },
  { id: 8, nombre: 'Tommy Hilfiger Antigua — Guatemala', pais: 'Guatemala', ventas_12m: 850000, margen_pct_actual: 60.2, margen_pct_historico: 58.0, delta_puntos: 2.2, quetzales_perdidos: 0, semaforo: 'verde', unidades_vendidas: 3400, num_ventas: 11200 },
];

const demoClientes = [
  { id: 'c1', nombre: 'Maria Fernanda Lopez', ventas_12m: 28500, margen_pct_actual: 58.0, margen_pct_historico: 56.0, delta_puntos: 2.0, quetzales_perdidos: 0, semaforo: 'verde', unidades_compradas: 42, num_compras: 18, primera_compra: '2024-01-15', ultima_compra: '2025-07-28' },
  { id: 'c2', nombre: 'Carlos Eduardo Ramirez', ventas_12m: 18200, margen_pct_actual: 55.0, margen_pct_historico: 57.0, delta_puntos: -2.0, quetzales_perdidos: 364, semaforo: 'ambar', unidades_compradas: 28, num_compras: 14, primera_compra: '2024-03-10', ultima_compra: '2025-07-30' },
  { id: 'c3', nombre: 'Andrea Michelle Castillo', ventas_12m: 15600, margen_pct_actual: 60.0, margen_pct_historico: 58.0, delta_puntos: 2.0, quetzales_perdidos: 0, semaforo: 'verde', unidades_compradas: 24, num_compras: 12, primera_compra: '2024-02-20', ultima_compra: '2025-07-25' },
  { id: 'c4', nombre: 'Jose Daniel Morales', ventas_12m: 12400, margen_pct_actual: 52.0, margen_pct_historico: 55.0, delta_puntos: -3.0, quetzales_perdidos: 372, semaforo: 'rojo', unidades_compradas: 18, num_compras: 9, primera_compra: '2024-05-01', ultima_compra: '2025-07-29' },
  { id: 'c5', nombre: 'Sofia Alejandra Torres', ventas_12m: 9800, margen_pct_actual: 58.0, margen_pct_historico: 58.0, delta_puntos: 0, quetzales_perdidos: 0, semaforo: 'verde', unidades_compradas: 16, num_compras: 11, primera_compra: '2024-06-15', ultima_compra: '2025-07-27' },
  { id: 'c6', nombre: 'Luis Fernando Aguilar', ventas_12m: 8200, margen_pct_actual: 55.0, margen_pct_historico: 56.0, delta_puntos: -1.0, quetzales_perdidos: 82, semaforo: 'ambar', unidades_compradas: 14, num_compras: 8, primera_compra: '2024-08-01', ultima_compra: '2025-07-30' },
  { id: 'c7', nombre: 'Valentina Nicole Herrera', ventas_12m: 6500, margen_pct_actual: 62.0, margen_pct_historico: 60.0, delta_puntos: 2.0, quetzales_perdidos: 0, semaforo: 'verde', unidades_compradas: 10, num_compras: 6, primera_compra: '2024-09-10', ultima_compra: '2025-07-20' },
  { id: 'c8', nombre: 'Diego Alejandro Ruiz', ventas_12m: 4800, margen_pct_actual: 54.0, margen_pct_historico: 55.0, delta_puntos: -1.0, quetzales_perdidos: 48, semaforo: 'ambar', unidades_compradas: 8, num_compras: 5, primera_compra: '2024-10-05', ultima_compra: '2025-07-29' },
];

const demoLineas = [
  { id: 'Zapatos', nombre: 'Zapatos', ventas_12m: 4200000, margen_pct_actual: 48.5, margen_pct_historico: 52.0, delta_puntos: -3.5, quetzales_perdidos: 147000, semaforo: 'rojo', unidades_12m: 10200, num_skus: 5, num_ventas: 10200 },
  { id: 'Camisetas', nombre: 'Camisetas', ventas_12m: 3850000, margen_pct_actual: 59.2, margen_pct_historico: 58.0, delta_puntos: 1.2, quetzales_perdidos: 0, semaforo: 'verde', unidades_12m: 38200, num_skus: 6, num_ventas: 38200 },
  { id: 'Jeans', nombre: 'Jeans', ventas_12m: 2680000, margen_pct_actual: 56.8, margen_pct_historico: 57.0, delta_puntos: -0.2, quetzales_perdidos: 5360, semaforo: 'ambar', unidades_12m: 11600, num_skus: 2, num_ventas: 11600 },
  { id: 'Chamarras', nombre: 'Chamarras', ventas_12m: 1950000, margen_pct_actual: 58.5, margen_pct_historico: 57.0, delta_puntos: 1.5, quetzales_perdidos: 0, semaforo: 'verde', unidades_12m: 7400, num_skus: 4, num_ventas: 7400 },
  { id: 'Vestidos', nombre: 'Vestidos', ventas_12m: 1420000, margen_pct_actual: 60.0, margen_pct_historico: 60.0, delta_puntos: 0, quetzales_perdidos: 0, semaforo: 'verde', unidades_12m: 8200, num_skus: 3, num_ventas: 8200 },
  { id: 'Shorts', nombre: 'Shorts', ventas_12m: 980000, margen_pct_actual: 60.0, margen_pct_historico: 58.0, delta_puntos: 2.0, quetzales_perdidos: 0, semaforo: 'verde', unidades_12m: 4200, num_skus: 1, num_ventas: 4200 },
  { id: 'Sudaderas', nombre: 'Sudaderas', ventas_12m: 850000, margen_pct_actual: 60.0, margen_pct_historico: 60.0, delta_puntos: 0, quetzales_perdidos: 0, semaforo: 'verde', unidades_12m: 4900, num_skus: 2, num_ventas: 4900 },
  { id: 'Pantalones', nombre: 'Pantalones', ventas_12m: 720000, margen_pct_actual: 60.0, margen_pct_historico: 59.0, delta_puntos: 1.0, quetzales_perdidos: 0, semaforo: 'verde', unidades_12m: 5300, num_skus: 3, num_ventas: 5300 },
  { id: 'Ropa Interior', nombre: 'Ropa Interior', ventas_12m: 580000, margen_pct_actual: 60.0, margen_pct_historico: 62.0, delta_puntos: -2.0, quetzales_perdidos: 11600, semaforo: 'ambar', unidades_12m: 5200, num_skus: 1, num_ventas: 5200 },
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

// Debug endpoint to verify deployment - v3
router.get('/debug', async (req, res) => {
  res.json({ status: 'ok', version: 'demo-v3', timestamp: new Date().toISOString() });
});

module.exports = router;
