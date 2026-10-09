# Misión de los Ángeles Landing

Landing page de **Misión de los Ángeles**, desarrollo de Beneva (desarrolladora inmobiliaria). Es una SPA de una sola página construida con **Vite + React 19**, estilizada con **Tailwind CSS v4**, con formulario de contacto que escribe a **Supabase** y tracking con **Google Analytics 4** y **Microsoft Clarity**.

Este proyecto vive en su propio repo y deploy, pero se publica como una ruta del sitio principal de Beneva:

> **https://www.beneva.mx/misiondelosangeles**

El sitio de Beneva (repo separado) hace _rewrite_ de `/misiondelosangeles` hacia el deploy de este proyecto en Vercel. Por eso la app está configurada para servirse bajo ese subpath (ver [Subpath y deploy](#subpath-y-deploy)).

## Stack

- **Build tool:** Vite 8
- **Framework:** React 19 (con `babel-plugin-react-compiler`; el compilador de React está activo vía `@rolldown/plugin-babel`)
- **Enrutamiento:** `react-router` v8
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/vite`, configuración por CSS, sin `tailwind.config.js` clásico)
- **Formularios:** `react-hook-form`
- **Carrusel:** `embla-carousel-react` + plugins `autoplay` y `auto-scroll`
- **Animaciones:** `motion` y hook propio `useInView` (IntersectionObserver)
- **Backend de datos:** Supabase (`@supabase/supabase-js`), solo para guardar leads
- **Analytics:** Google Analytics 4 (`gtag`) y Microsoft Clarity, cargados desde `index.html`
- **Gestor de paquetes:** **pnpm** (usar siempre `pnpm`, no `npm`/`yarn`, para respetar el lockfile)
- **Deploy:** Vercel

> Las versiones de `package.json` están fijadas (sin `^`), así que las actualizaciones son siempre explícitas.

## Requisitos previos

- Node.js (versión compatible con Vite 8 / React 19; usar una LTS reciente)
- pnpm instalado globalmente

## Instalación

```bash
pnpm install
```

## Variables de entorno

Copiar `.env.example` a `.env` y llenar con las credenciales del proyecto de Supabase (el mismo que usa Beneva, ya que ambos comparten tabla):

```dotenv
VITE_SUPABASE_URL="your-supabase-url"
VITE_SUPABASE_ANON_KEY="public-key"
```

> En `src/const/supabase.js` se encuentra la variable `PROJECT-ID` que se refiere al nombre de la tabla.

> Recordar configurar las mismas variables en Vercel (Project Settings → Environment Variables); sin ellas el formulario no podrá guardar leads en producción.

## Scripts

```bash
pnpm dev       # servidor de desarrollo
pnpm build     # build de producción → dist/misiondelosangeles
pnpm preview   # sirve el build de producción localmente
pnpm lint      # ESLint
```

Por la configuración de `base`, en local la app se abre en **http://localhost:5173/misiondelosangeles/** (con el subpath), no en la raíz.

## Subpath y deploy

La app no vive en la raíz del dominio, así que hay tres piezas que deben mantenerse alineadas:

**1. `vite.config.js`**: define el subpath base y la carpeta de salida.

```js
export default defineConfig({
  base: "/misiondelosangeles/",
  build: {
    outDir: "dist/misiondelosangeles",
  },
  // plugins: react, babel (react compiler), tailwindcss
});
```

- `base` hace que todos los assets (JS, CSS, imágenes) se pidan bajo `/misiondelosangeles/...`.
- `outDir` deja el build dentro de `dist/misiondelosangeles/`, de modo que el output en Vercel tenga la misma estructura que la URL pública.

**2. `vercel.json`** (de este repo):

```json
{
  "redirects": [
    {
      "source": "/",
      "destination": "/misiondelosangeles",
      "permanent": false
    }
  ],
  "rewrites": [
    {
      "source": "/misiondelosangeles",
      "destination": "/misiondelosangeles/index.html"
    },
    {
      "source": "/misiondelosangeles/(.*)",
      "destination": "/misiondelosangeles/index.html"
    }
  ]
}
```

- Redirige `/` a `/misiondelosangeles` (temporal, no permanente) para que el deploy independiente (`mision-de-los-angeles.vercel.app`) no quede en una raíz vacía.
- Los _rewrites_ mandan cualquier ruta bajo `/misiondelosangeles/` al `index.html` generado, para que `react-router` resuelva del lado del cliente.

**3. Proxy desde Beneva** (en el repo de Beneva, no aquí): su `vercel.json` reescribe `/misiondelosangeles` y `/misiondelosangeles/:path*` hacia `https://mision-de-los-angeles.vercel.app/misiondelosangeles[/...]`. Si se cambia el dominio de Vercel de este proyecto o el subpath, hay que actualizar ese archivo también.

> **Importante:** si se cambia el subpath, hay que modificarlo en los tres lugares (`base`/`outDir` aquí, `vercel.json` aquí y el proxy de Beneva), además de cualquier `basename` del router o rutas absolutas a assets que existan en el código.

## Estructura del proyecto

```
src/
├─ assets/             # íconos, imágenes y logos
│  ├─ icons/               # amenidades/, form/, modelos/ + íconos sueltos (svg/jsx)
│  ├─ images/              # amenidades/, modelos/ (fotos y plantas), marcas/ (bancos), decoration/
│  └─ logos/
│
├─ components/         # Componentes reutilizables
│  ├─ buttons/amenidad-button.jsx
│  └─ carousel/
│     ├─ Carousel.jsx
│     └─ modelo-carousel.jsx
│
├─ const/
│  └─ supabase.js          # PROJECT_ID (identificador/tabla de Supabase)
│
├─ data/               # Contenido estático de los modelos de casa
│  ├─ modelos.js           # índice que agrupa los modelos
│  └─ modelos/             # kinzo.js, kinzo-plus.js, reve.js, reve-plus.js
│
├─ hooks/
│  └─ useInView.js         # IntersectionObserver para animaciones "reveal"
│
├─ lib/
│  └─ supabase.js          # cliente de supabase-js con las env vars
│
├─ pages/
│  ├─ home/                # única página del sitio
│  │  ├─ home.jsx              # compone las secciones (punto de entrada)
│  │  └─ components/           # una sección por archivo
│  ├─ layout/              # navbar.jsx y footer.jsx
│  └─ popup/home/          # modales: financiamiento, modelo-popup, modelo-kinzo, modelo-reve
│
├─ styles/fonts.css
├─ index.css
├─ main.jsx
└─ router.jsx
```

**Convención de la página:** `pages/home/home.jsx` es el punto de entrada y define el orden de las secciones. Cada sección vive en `pages/home/components/`:

| Archivo               | Sección                |
| --------------------- | ---------------------- |
| `hero.jsx`            | Banner principal       |
| `nosotros.jsx`        | Quiénes somos / Beneva |
| `conoce-proyecto.jsx` | Conoce el proyecto     |
| `amenidades.jsx`      | Amenidades             |
| `modelos.jsx`         | Modelos de casa        |
| `cotiza.jsx`          | Cotización             |
| `ubicacion.jsx`       | Ubicación / mapa       |
| `formulario.jsx`      | Formulario de contacto |
| `closing-banner.jsx`  | Banner de cierre       |

## Modelos y contenido

Los modelos de casa (**Kinzo**, **Kinzo Plus**, **Reve**, **Reve Plus**) se definen como datos en `src/data/modelos/` y se agrupan en `src/data/modelos.js`. Las plantas arquitectónicas están en `src/assets/images/modelos/<modelo>/` (`planta-baja`, `planta-alta`, `planta-2`, `planta-3`, según el modelo). Para agregar o editar un modelo:

1. Agregar/actualizar el archivo de datos en `src/data/modelos/`.
2. Registrarlo en `src/data/modelos.js`.
3. Subir sus imágenes/plantas a `src/assets/images/modelos/<modelo>/`.
4. Si requiere popup propio, revisar `src/pages/popup/home/`.

## Formulario y Supabase

El formulario de esta landing escribe a la **misma tabla de Supabase que usa Beneva** (identificada por `PROJECT_ID` en `src/const/supabase.js`), por lo que los leads de ambos sitios caen juntos y se distinguen por el campo `source`.

- Cliente inicializado en `src/lib/supabase.js` con `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.
- Esquema (campos usados por el `insert`):

| Campo        | Tipo   | Opcional                                               |
| ------------ | ------ | ------------------------------------------------------ |
| `name`       | `text` | No                                                     |
| `email`      | `text` | No                                                     |
| `phone`      | `text` | No                                                     |
| `message`    | `text` | Sí                                                     |
| `city`       | `text` | Sí                                                     |
| `interest`   | `text` | Sí                                                     |
| `experience` | `text` | Sí                                                     |
| `comments`   | `text` | Sí                                                     |
| `source`     | `text` | No: debe ser `"Mision de los Ángeles"` para este sitio |
| `page`       | `text` | No: página/sección de origen del lead                  |

> **Ojo:** mantener el valor de `source` exactamente igual al que espera el resto del equipo/reportes (`"Mision de los Ángeles"`), ya que es lo que separa estos leads de los de Beneva.

## Analytics

Los scripts de tracking se cargan directamente en `index.html`:

- **Google Analytics 4:** snippet de `gtag.js` con el ID de medición `G-0HS9EETTP7`. Expone `window.gtag` para enviar eventos desde la app.
- **Microsoft Clarity:** snippet con el proyecto `yuo0bqm61s` (grabaciones de sesión y mapas de calor).
  El tracking de eventos sigue una convención compartida con Beneva (proyecto hermano):

- **`src/analytics/track.js`:** función `track(event, params)` que llama a `window.gtag("event", event, params)`. No hace nada si `gtag` no está definido (por ejemplo, en SSR, en local sin el script de GA o si un adblock lo bloquea).
- **`src/analytics/track.constants.js`:** objeto `TRACK` con un nombre de evento por interacción. Define una constante `PROJECT = "misiondelosangeles"` que se usa como prefijo, y el formato de nombre es `misiondelosangeles:<seccion>:<elemento>:<accion>` (ej. `misiondelosangeles:menu:item:click`).
- **Parámetros comunes:** `item_id` (qué elemento se tocó), `action` (para toggles, `"open"`/`"close"`), `error_type` / `error_message` (en errores de formulario).
- **Regla importante:** nunca se envían datos personales (nombre, correo, teléfono) como parámetros de evento. Los formularios solo registran el evento de envío/error, sin el contenido.
- Antes de agregar o modificar un evento, verificar en **GA4 DebugView** que el nombre (con los `:`) llegue correctamente; si GA4 lo rechaza, el formato cambia a guiones bajos (`_`) en lugar de `:`.
  Uso:

```js
import { track } from "../analytics/track";
import { TRACK } from "../analytics/track.constants";

track(TRACK.home.modelos.card, { item_id: "kinzo" });
```

Catálogo de eventos (`TRACK.home.*`):

| Sección         | Clave             | Evento                                          |
| --------------- | ----------------- | ----------------------------------------------- |
| `menu`          | `toggle`          | `misiondelosangeles:menu:toggle:click`          |
| `menu`          | `item`            | `misiondelosangeles:menu:item:click`            |
| `logo`          | `home`            | `misiondelosangeles:logo:hero:click`            |
| `whatsapp`      | `float`           | `misiondelosangeles:whatsapp:float:click`       |
| `amenidades`    | `item`            | `misiondelosangeles:amenidades:item:click`      |
| `amenidades`    | `swipe`           | `misiondelosangeles:amenidades:carousel:swipe`  |
| `modelos`       | `card`            | `misiondelosangeles:modelos:card:click`         |
| `popup.modelo`  | `nivel`           | `misiondelosangeles:popup:modelo:nivel:change`  |
| `popup.modelo`  | `close`           | `misiondelosangeles:popup:modelo:close`         |
| `ubicacion`     | `mapClick`        | `misiondelosangeles:ubicacion:map:click`        |
| `cotiza`        | `cta`             | `misiondelosangeles:cotiza:cta:click`           |
| `contacto`      | `formSubmit`      | `misiondelosangeles:contacto:form:submit`       |
| `contacto`      | `formSubmitError` | `misiondelosangeles:contacto:form:submit-error` |
| `contacto`      | `formInvalid`     | `misiondelosangeles:contacto:form:invalid`      |
| `closingBanner` | `cta`             | `misiondelosangeles:closing-banner:cta:click`   |
| `footer`        | `social`          | `misiondelosangeles:footer:social:click`        |
| `footer`        | `contact`         | `misiondelosangeles:footer:contact:click`       |

Para agregar un evento nuevo: añadir la constante en `track.constants.js` siguiendo el formato de nombre y llamarla con `track()` desde el componente.

## Notas y pendientes conocidos

- **Carpeta `assets/images/mision-angeles-landing_files/`:** parece un remanente de una página guardada (contiene incluso un `main.jsx` y assets duplicados de otras carpetas). Verificar si algo la importa y, de lo contrario, eliminarla para reducir peso y confusión.
- **Assets duplicados:** varias imágenes existen tanto en la raíz de `images/` como dentro de otras carpetas (`hero-banner.jpg`, `cotiza.jpg`, `closing-banner-bg.jpg`, `background-texture.jpg`, `beneva-certificate.png`) y hay varias versiones del mapa (`mapa.svg`, `mapa2.svg`, `mapa-v1.svg`, `mapa-updated.svg`). Antes de editar una sección, confirmar cuál es el archivo realmente importado.
- **`index.html`:** el atributo `lang` está en `"en"` aunque el sitio es en español; considerar cambiarlo a `"es"`.
