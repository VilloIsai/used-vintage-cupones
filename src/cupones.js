// =====================================================
//   CONFIGURACIÓN DE CUPONES — USED VINTAGE
//   Solo editá este archivo para agregar/cambiar cupones
// =====================================================

export const CUPONES = [
  {
    id: "cupon10",
    imagen: "/cupones/Cupon10.png",   // nombre del archivo que subiste
    label: "10% de descuento",         // texto corto para la animación
    probabilidad: 70,                  // más alto = sale más seguido
  },
  {
    id: "cupon15",
    imagen: "/cupones/Cupon15.png",
    label: "15% de descuento",
    probabilidad: 30,                  // más raro que el 10%
  },

  // ¿Querés agregar un cupón nuevo? Copiá el bloque de arriba y pegalo acá:
  // {
  //   id: "cuponEnvio",
  //   imagen: "/cupones/CuponEnvio.png",
  //   label: "Envío gratis",
  //   probabilidad: 20,
  // },
];

// Días que dura el link antes de expirar
export const DIAS_EXPIRACION = 3;
