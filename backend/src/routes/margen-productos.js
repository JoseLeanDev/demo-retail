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
