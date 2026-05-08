// =====================================================
//   CONEXIÓN CON SUPABASE
//   Pegá acá tu URL y tu clave pública de Supabase
// =====================================================

const SUPABASE_URL = "https://akfxqtzbkrrroaejdxbg.supabase.co";          // ej: https://abcxyz.supabase.co
const SUPABASE_ANON_KEY = "sb_publishable_d8RNKJxL1AzzOI5Yqy69Yg_y4iV8eQB";   // la clave "anon public"

const HEADERS = {
  "Content-Type": "application/json",
  "apikey": SUPABASE_ANON_KEY,
  "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
};

// Busca si ese código ya tiene un resultado guardado
export async function getRegalo(codigo) {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/regalos?codigo=eq.${encodeURIComponent(codigo)}&select=*`,
      { headers: HEADERS }
    );
    if (!res.ok) return 'error';
    const data = await res.json();
    return data.length > 0 ? data[0] : null;
  } catch {
    return 'error';
  }
}

// Guarda el resultado cuando alguien juega por primera vez
export async function guardarRegalo(codigo, cuponId) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/regalos`, {
      method: "POST",
      headers: { ...HEADERS, "Prefer": "return=minimal" },
      body: JSON.stringify({
        codigo: codigo,
        cupon_id: cuponId,
        creado_en: new Date().toISOString(),
      }),
    });
  } catch {
    // Si falla el guardado, la experiencia visual igual termina bien
    console.error("No se pudo guardar en Supabase");
  }
}
