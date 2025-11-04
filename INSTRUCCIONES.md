# Instrucciones para correr y desarrollar "mi-blogcito"

## Requisitos previos
- Node.js (recomendado v18+)
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/BenjaminMirra/mi-blogcito.git
   cd mi-blogcito
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

## Desarrollo local

Para iniciar el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```
El sitio estará disponible en `http://localhost:3000`.

## Estructura del proyecto
- `src/app/` — Páginas y rutas de la app (Next.js App Router)
- `src/components/` — Componentes reutilizables
- `src/lib/posts.ts` — Lógica para leer y parsear los posts en MDX
- `posts/` — Tus posts en formato `.mdx`
- `public/` — Archivos estáticos

## Crear un nuevo post
1. Agrega un archivo `.mdx` en la carpeta `posts/`.
2. Usa el siguiente formato:
   ```mdx
   ---
   title: "Título del post"
   date: "2025-11-04"
   summary: "Resumen corto del post."
   ---

   ¡Aquí va el contenido en Markdown/MDX!
   ```

## Deploy
Puedes desplegar fácilmente en Vercel, Netlify o cualquier plataforma compatible con Next.js.

---

## Scripts útiles
- `npm run dev` — Servidor de desarrollo
- `npm run build` — Compilar para producción
- `npm run start` — Servir la app compilada

## Contacto
Creador: [BenjaminMirra](https://github.com/BenjaminMirra)
