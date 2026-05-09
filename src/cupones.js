// =====================================================
//   USED VINTAGE — CONFIGURACIÓN DE CUPONES
//   Este es el único archivo que necesitás editar
//   para agregar cupones o cambiar probabilidades
// =====================================================

window.UV_CONFIG = {

  // Días que dura el link antes de expirar
  diasExpiracion: 3,

  // Lista de cupones
  // probabilidad: número más alto = sale más seguido
  // Para agregar uno nuevo: copiá un bloque y pegalo al final de la lista (antes del ] )
  cupones: [
    {
      id: "cupon10",
      imagen: "public/cupones/Cupon10.png",
      label: "10% OFF",
      probabilidad: 70,
    },
    {
      id: "cupon15",
      imagen: "public/cupones/Cupon15.png",
      label: "15% OFF",
      probabilidad: 30,
    },

    // Ejemplo de cómo agregar un cupón nuevo:
    // {
    //   id: "cuponEnvio",              ← nombre interno único, sin espacios
    //   imagen: "public/cupones/CuponEnvio.png",  ← archivo en la carpeta public/cupones/
    //   label: "Envío gratis",
    //   probabilidad: 20,
    // },
  ],

};
