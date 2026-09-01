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

// Helper para verificar si una tabla existe
async function tableExists(db, tableName) {
  try {
    const result = await db.getAsync(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = ?
      ) as exists
    `, [tableName]);
    return result && result.exists;
  } catch {
    return false;
  }
}

// Helper para verificar si una view existe
async function viewExists(db, viewName) {
  try {
    const result = await db.getAsync(`
      SELECT EXISTS (
        SELECT FROM information_schema.views 
        WHERE table_schema = 'public' AND table_name = ?
      ) as exists
    `, [viewName]);
    return result && result.exists;
  } catch {
    return false;
  }
}

/**
 * GET /api/margenes
 * Obtiene el análisis completo de márgenes: producto, vendedor, cliente, línea
 */
router.get('/', async (req, res) => {
  try {
    const db = req.app.get('db');
    const empresaId = req.query.empresa_id || 1;

    // Verificar si las views existen - si no, usar datos demo
    const hasProductosView = await viewExists(db, 'vw_margen_productos');
    const hasVendedorView = await viewExists(db, 'vw_margen_vendedor');
    const hasClienteView = await viewExists(db, 'vw_margen_cliente');
    const hasLineaView = await viewExists(db, 'vw_margen_linea');

    let productos, vendedores, clientes, lineas;

    if (hasProductosView) {
      productos = await db.allAsync(`
        SELECT 
          id, sku, nombre, categoria,
          ROUND(precio_actual::numeric, 2) as precio_actual,
          ROUND(costo_actual::numeric, 2) as costo_actual,
          ROUND(margen_pct_actual::numeric, 2) as margen_pct_actual,
          ROUND(margen_pct_historico::numeric, 2) as margen_pct_historico,
          ROUND(delta_puntos::numeric, 2) as delta_puntos,
          unidades_12m, semaforo,
          ROUND(quetzales_perdidos::numeric, 2) as quetzales_perdidos,
          ROUND(precio_sugerido::numeric, 2) as precio_sugerido
        FROM vw_margen_productos
        WHERE id IN (SELECT id FROM productos WHERE empresa_id = ? AND activo = TRUE)
        ORDER BY ABS(delta_puntos) DESC
      `, [empresaId]);
    } else {
      productos = demoProductos;
    }

    if (hasVendedorView) {
      vendedores = await db.allAsync(`
        SELECT * FROM vw_margen_vendedor
        WHERE total_ventas_q IS NOT NULL
        ORDER BY total_ventas_q DESC
      `);
    } else {
      vendedores = demoVendedores;
    }

    if (hasClienteView) {
      clientes = await db.allAsync(`
        SELECT * FROM vw_margen_cliente
        ORDER BY total_comprado_q DESC
        LIMIT 50
      `);
    } else {
      clientes = demoClientes;
    }

    if (hasLineaView) {
      lineas = await db.allAsync(`
        SELECT * FROM vw_margen_linea
        ORDER BY total_ventas_q DESC
      `);
    } else {
      lineas = demoLineas;
    }

    // 5. Totales
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
    const db = req.app.get('db');
    const productoId = parseInt(req.params.id);

    // Buscar en datos demo primero
    const productoDemo = demoProductos.find(p => p.id === productoId);
    if (productoDemo) {
      // Generar historial demo para el producto
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

      return res.json({
        status: 'success',
        data: {
          producto: { ...productoDemo, margen_promedio: productoDemo.margen_pct_actual },
          historial
        }
      });
    }

    // Fallback a BD si existe
    const producto = await db.getAsync(`
      SELECT p.*, 
        ROUND(AVG((ph.precio_promedio_realizado - ph.costo_unitario) / NULLIF(ph.precio_promedio_realizado, 0) * 100)::numeric, 2) as margen_promedio
      FROM productos p
      LEFT JOIN productos_historial ph ON p.id = ph.producto_id
      WHERE p.id = ?
      GROUP BY p.id
    `, [productoId]);

    if (!producto) return res.status(404).json({ status: 'error', message: 'Producto no encontrado' });

    const historial = await db.allAsync(`
      SELECT fecha, precio_promedio_realizado, costo_unitario, unidades_vendidas,
        ROUND(((precio_promedio_realizado - costo_unitario) / NULLIF(precio_promedio_realizado, 0) * 100)::numeric, 2) as margen_pct
      FROM productos_historial
      WHERE producto_id = ?
      ORDER BY fecha ASC
    `, [productoId]);

    res.json({ status: 'success', data: { producto, historial } });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// ============================================
// MARGEN POR VENDEDOR / SUCURSAL
// ============================================
router.get('/vendedores', async (req, res) => {
  try {
    const db = req.app.get('db');
    const hasTable = await tableExists(db, 'vendedores');

    if (!hasTable) {
      return res.json({ status: 'success', data: demoVendedores });
    }

    const result = await db.allAsync(`
      SELECT 
        v.id,
        v.nombre,
        COALESCE(SUM(vd.total_venta), 0) as ventas_12m,
        COALESCE(SUM(vd.margen_q), 0) as margen_bruto_q,
        ROUND((COALESCE(SUM(vd.margen_q), 0) / NULLIF(SUM(vd.total_venta), 0) * 100)::numeric, 2) as margen_pct_actual,
        COUNT(DISTINCT vd.id) as num_ventas,
        SUM(vd.cantidad) as unidades_vendidas
      FROM vendedores v
      LEFT JOIN ventas_detalle vd ON v.id = vd.vendedor_id
      WHERE v.activo = TRUE
      GROUP BY v.id, v.nombre
      ORDER BY ventas_12m DESC
    `);
    
    const mapped = result.map(v => ({
      id: v.id,
      nombre: v.nombre,
      ventas_12m: parseFloat(v.ventas_12m) || 0,
      margen_pct_actual: parseFloat(v.margen_pct_actual) || 0,
      margen_pct_historico: 0,
      delta_puntos: 0,
      quetzales_perdidos: 0,
      semaforo: (parseFloat(v.margen_pct_actual) || 0) < 25 ? 'rojo' : (parseFloat(v.margen_pct_actual) || 0) < 35 ? 'ambar' : 'verde',
      unidades_vendidas: parseInt(v.unidades_vendidas) || 0,
      num_ventas: parseInt(v.num_ventas) || 0
    }));
    
    res.json({ status: 'success', data: mapped });
  } catch (error) {
    console.error('[GET /api/margenes/vendedores] Error:', error);
    res.json({ status: 'success', data: demoVendedores });
  }
});

// ============================================
// MARGEN POR CLIENTE
// ============================================
router.get('/clientes', async (req, res) => {
  try {
    const db = req.app.get('db');
    const hasTable = await tableExists(db, 'ventas_detalle');

    if (!hasTable) {
      return res.json({ status: 'success', data: demoClientes });
    }

    const result = await db.allAsync(`
      SELECT 
        vd.cliente_nombre as nombre,
        COUNT(DISTINCT vd.id) as num_compras,
        SUM(vd.cantidad) as unidades_compradas,
        SUM(vd.total_venta) as ventas_12m,
        SUM(vd.total_costo) as total_costo_q,
        SUM(vd.margen_q) as margen_generado_q,
        ROUND((SUM(vd.margen_q) / NULLIF(SUM(vd.total_venta), 0) * 100)::numeric, 2) as margen_pct_actual,
        MIN(vd.fecha) as primera_compra,
        MAX(vd.fecha) as ultima_compra
      FROM ventas_detalle vd
      GROUP BY vd.cliente_nombre
      ORDER BY ventas_12m DESC
      LIMIT 50
    `);
    
    const mapped = result.map(c => ({
      id: c.nombre,
      nombre: c.nombre,
      ventas_12m: parseFloat(c.ventas_12m) || 0,
      margen_pct_actual: parseFloat(c.margen_pct_actual) || 0,
      margen_pct_historico: 0,
      delta_puntos: 0,
      quetzales_perdidos: 0,
      semaforo: (parseFloat(c.margen_pct_actual) || 0) < 25 ? 'rojo' : (parseFloat(c.margen_pct_actual) || 0) < 35 ? 'ambar' : 'verde',
      unidades_compradas: parseInt(c.unidades_compradas) || 0,
      num_compras: parseInt(c.num_compras) || 0,
      primera_compra: c.primera_compra,
      ultima_compra: c.ultima_compra
    }));
    
    res.json({ status: 'success', data: mapped });
  } catch (error) {
    console.error('[GET /api/margenes/clientes] Error:', error);
    res.json({ status: 'success', data: demoClientes });
  }
});

// ============================================
// MARGEN POR LÍNEA / CATEGORÍA
// ============================================
router.get('/lineas', async (req, res) => {
  try {
    const db = req.app.get('db');
    const hasTable = await tableExists(db, 'productos');

    if (!hasTable) {
      return res.json({ status: 'success', data: demoLineas });
    }

    const result = await db.allAsync(`
      SELECT 
        p.categoria as nombre,
        COUNT(DISTINCT p.id) as num_skus,
        COUNT(DISTINCT vd.id) as num_ventas,
        SUM(vd.cantidad) as unidades_12m,
        SUM(vd.total_venta) as ventas_12m,
        SUM(vd.total_costo) as total_costos_q,
        SUM(vd.margen_q) as margen_bruto_q,
        ROUND((SUM(vd.margen_q) / NULLIF(SUM(vd.total_venta), 0) * 100)::numeric, 2) as margen_pct_actual
      FROM productos p
      LEFT JOIN ventas_detalle vd ON p.id = vd.producto_id
      WHERE p.activo = TRUE
      GROUP BY p.categoria
      ORDER BY ventas_12m DESC
    `);
    
    const mapped = result.map(l => ({
      id: l.nombre,
      nombre: l.nombre,
      ventas_12m: parseFloat(l.ventas_12m) || 0,
      margen_pct_actual: parseFloat(l.margen_pct_actual) || 0,
      margen_pct_historico: 0,
      delta_puntos: 0,
      quetzales_perdidos: 0,
      semaforo: (parseFloat(l.margen_pct_actual) || 0) < 25 ? 'rojo' : (parseFloat(l.margen_pct_actual) || 0) < 35 ? 'ambar' : 'verde',
      unidades_12m: parseInt(l.unidades_12m) || 0,
      num_skus: parseInt(l.num_skus) || 0,
      num_ventas: parseInt(l.num_ventas) || 0
    }));
    
    res.json({ status: 'success', data: mapped });
  } catch (error) {
    console.error('[GET /api/margenes/lineas] Error:', error);
    res.json({ status: 'success', data: demoLineas });
  }
});

module.exports = router;
