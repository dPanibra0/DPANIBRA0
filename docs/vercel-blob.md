# Vercel Blob para imagenes (setup minimo)

Esta guia configura un flujo simple para usar URLs de imagenes en Vercel Blob sin agregar APIs de subida ni secretos al repositorio.

## 1) Crear el Blob Store en Vercel

1. Entra a tu proyecto en Vercel.
2. Abre la pestana `Storage`.
3. Crea un nuevo recurso de tipo `Blob`.
4. Guarda el nombre del store para referencia del equipo.

Con este proyecto no necesitas integrar SDK en runtime para mostrar imagenes: solo consumir URLs publicas desde un manifiesto.

## 2) Tokenes (solo si vas a subir archivos por script)

- Para uso basico (copiar URL publica al manifiesto), no necesitas token en el codigo del sitio.
- Solo si vas a subir por CLI/script:
  - Genera un token en Vercel (`Storage` -> `Blob` -> `Tokens`).
  - Guarda el token en variable de entorno local (ejemplo: `.env.local`) y nunca lo commitees.

## 3) Convencion de nombres recomendada (bajo volumen)

Como el volumen es bajo, usa nombres estables y legibles:

- `proyectos/proyecto-01.png`
- `proyectos/proyecto-02.jpg`
- `proyectos/proyecto-03.jpg`
- `contacto/retrato-contacto.png`

Regla sugerida: `seccion/nombre-corto.ext` (sin espacios, en minusculas, con guiones).

## 4) Donde actualizar URLs en este proyecto

Archivo central:

- `src/content/imagenes-blob.ts`

Ejemplo actual:

```ts
const basePublico = "";
```

Para activar Blob de forma global en este manifiesto, define la base publica:

```ts
const basePublico = "https://<tu-ruta-publica-de-blob>";
```

Luego conserva las rutas por seccion (por ejemplo `/images/proyecto-01.png`) o cambia cada entrada por URL absoluta segun prefieras.

## 5) Flujo operativo recomendado para hoy

1. Sube tus imagenes al Blob Store desde la UI de Vercel.
2. Copia la URL base publica o las URLs de cada archivo.
3. Actualiza `src/content/imagenes-blob.ts`.
4. Ejecuta validacion local:
   - `npm run check`
   - `npm run build`
5. Despliega.

## Notas de seguridad

- No agregues tokens en `src/` ni en archivos versionados.
- Mantener este enfoque URL-only evita complejidad innecesaria para sitios con pocas imagenes.
