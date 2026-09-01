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

function generateHistorial(basePrecio, baseCosto) {
  const historial = [];
  for (let i = 23; i >= 0; i--) {
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
  return historial;
}

/**
 * GET /api/margen-productos
 * Demo retail - devuelve datos demo
 */
router.get('/', async (req, res) => {
  try {
    const productos = [...demoProductos].sort((a, b) => {
      const semaforoOrder = { rojo: 1, ambar: 2, verde: 3 };
      if (semaforoOrder[a.semaforo] !== semaforoOrder[b.semaforo]) {
        return semaforoOrder[a.semaforo] - semaforoOrder[b.semaforo];
      }
      return Math.abs(b.delta_puntos) - Math.abs(a.delta_puntos);
    });
    
    const totalMargenPerdido = productos.reduce((sum, p) => sum + (parseFloat(p.quetzales_perdidos) || 0), 0);
    const productosRojo = productos.filter(p => p.semaforo === 'rojo').length;
    const productosAmbar = productos.filter(p => p.semaforo === 'ambar').length;
    const productosVerde = productos.filter(p => p.semaforo === 'verde').length;
    
    res.json({
      status: 'success',
      timestamp: new Date().toISOString(),
      data: {
        resumen: {
          total_productos: productos.length,
          total_margen_perdido_12m: totalMargenPerdido,
          productos_rojo: productosRojo,
          productos_ambar: productosAmbar,
          productos_verde: productosVerde
        },
        productos
      }
    });
  } catch (error) {
    console.error('[GET /api/margen-productos] Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error al obtener análisis de margen por producto',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * GET /api/margen-productos/:id/detalle
 */
router.get('/:id/detalle', async (req, res) => {
  try {
    const productoId = parseInt(req.params.id);
    const producto = demoProductos.find(p => p.id === productoId);
    
    if (!producto) {
      return res.status(404).json({ status: 'error', message: 'Producto no encontrado' });
    }
    
    const historial = generateHistorial(producto.precio_actual, producto.costo_actual);
    const margenObjetivo = producto.margen_pct_historico;
    const costoActual = producto.costo_actual;
    const precioSugerido = costoActual > 0 && margenObjetivo > 0 
      ? costoActual / (1 - (margenObjetivo / 100))
      : 0;
    
    res.json({
      status: 'success',
      data: {
        producto: { ...producto, margen_promedio: producto.margen_pct_actual },
        historial,
        precio_sugerido: Math.round(precioSugerido * 100) / 100,
        margen_objetivo: Math.round(margenObjetivo * 100) / 100
      }
    });
  } catch (error) {
    console.error('[GET /api/margen-productos/:id/detalle] Error:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

/**
 * GET /api/margen-productos/alertas
 */
router.get('/alertas', async (req, res) => {
  try {
    const alertas = demoProductos
      .filter(p => p.delta_puntos < -3)
      .map(p => ({
        producto_id: p.id,
        sku: p.sku,
        nombre: p.nombre,
        margen_actual: p.margen_pct_actual,
        margen_anterior: p.margen_pct_historico,
        delta_puntos: p.delta_puntos
      }));
    
    res.json({
      status: 'success',
      data: {
        total_alertas: alertas.length,
        alertas
      }
    });
  } catch (error) {
    console.error('[GET /api/margen-productos/alertas] Error:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

module.exports = router;
