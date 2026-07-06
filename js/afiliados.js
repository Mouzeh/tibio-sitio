// ============================================
// Configuración central de links de afiliado
// ============================================
// Cuando Mercado Libre te apruebe en el Programa de Afiliados,
// reemplaza cada "#" de abajo por tu link real generado para ese producto.
// Todas las páginas del sitio leen desde aquí — solo edita este archivo.

const LINKS_AFILIADO = {
  "lana-mineral": "https://meli.la/29tbyzw",
  "eps": "https://meli.la/1ZGbqau",
  "engrapadora": "https://meli.la/1FwDHFA",
  "guantes": "https://meli.la/2bpRRNX",
  "sellado": "https://meli.la/2cTd8UA",
  "celulosa": "#",
  "poliuretano": "https://meli.la/2VWBWS4"

  // Alternativas guardadas por si prefieres reemplazar el link principal:
  // plancha poliestireno (alternativa a "eps"): https://meli.la/1sYxaoE
  // fibra de vidrio 50mm (alternativa a "lana-mineral"): https://meli.la/2o1WiTf
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".afiliado-link").forEach(function (el) {
    const key = el.getAttribute("data-producto");
    if (key && LINKS_AFILIADO[key] && LINKS_AFILIADO[key] !== "#") {
      el.setAttribute("href", LINKS_AFILIADO[key]);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "sponsored noopener");
    }
  });
});


