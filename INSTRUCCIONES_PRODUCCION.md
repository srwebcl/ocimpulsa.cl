# 🚀 Instrucciones de Puesta en Producción - OC Impulsa

## 1. Resumen de Cambios Realizados
Se ha completado la implementación de:
- **Backend Seguro**: Endpoint (`/api/contact`) que procesa formularios, valida seguridad con Google Recaptcha v3 y envía correos transaccionales vía Resend.
- **Formulario Inteligente**: Componente `HeroForm` conectado a la API, con manejo de estados y rastreo de conversiones.
- **Ecosistema de Datos**: Configuración de `gtag.js` en `layout.tsx` para **Google Analytics 4** y **Google Ads**.
- **Seguridad**: Se han extraído las credenciales sensibles a variables de entorno para no exponerlas en el código fuente.

---

## 2. ⚠️ ACCIÓN REQUERIDA EN VERCEL (Crítico)

Para que el formulario funcione en producción, **DEBES** configurar las variables de entorno en Vercel. Sigue estos pasos ahora mismo:

1.  Ve a tu Dashboard de Vercel > Selecciona el proyecto **ocimpulsa**.
2.  Ve a **Settings** > **Environment Variables**.
3.  Agrega las siguientes variables (copia y pega los valores exactos):

| Key | Value |
| :--- | :--- |
| `RESEND_API_KEY` | `re_R5vfQmXn_CroBWYnbk3vsnis3VZP5oVrM` |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | `6LcKJEIsAAAAABvbX4CbESgjidz_PxXEQ4jAsJ-h` |
| `RECAPTCHA_SECRET_KEY` | `6LcKJEIsAAAAAFbj2VvPAIWbOU8OA4e_ksDbM5A8` |

> **Nota sobre Advertencia**: Al agregar `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, Vercel te mostrará un warning amarillo diciendo que puede exponer información. **Es 100% seguro ignorarlo** y darle "Save". Esta clave *debe* ser pública para que el navegador pueda cargar Recaptcha. La que nunca debe ser pública es la `SECRET_KEY`.

---

## 3. Validaciones Posteriores al Despliegue

### A. Dominios de Correo (Resend)
El envío de correos desde `contacto@ocimpulsa.cl` requiere que el dominio `ocimpulsa.cl` esté verificado en tu panel de **Resend**.
- Si ya lo verificaste: ¡Genial!
- Si no: Los correos podrían llegar a SPAM o rebotar. Revisa [Resend Domains](https://resend.com/domains).

### B. Google Ads
Hemos inyectado la etiqueta `AW-17854454737`.
Para que la conversión funcione, asegúrate de que en Google Ads tengas una "Acción de Conversión" configurada.
- Si usas el evento `form_submission_success` (recomendado), configura un Custom Event en GTM o mapealo en GA4.

### C. Google Search Console
**Pendiente**: No encontré el código de verificación (ej. `google-site-verification=...`) en `info.md`.
- Cuando lo tengas, agrégalo en `src/app/layout.tsx` dentro del objeto `metadata`.

---

## 4. Pruebas Finales

1.  **Formulario**: Llena el formulario en la web.
    - Éxito esperado: Mensaje verde de "¡Mensaje Enviado!".
    - Correo: Debes recibir la notificación en `contacto@` y el usuario su confirmación.
2.  **Seguridad**: Verifica tráfico en la [Consola de Recaptcha](https://www.google.com/recaptcha/admin).
