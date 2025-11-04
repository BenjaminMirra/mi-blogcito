This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# mi-blogcito

Blog personal hecho con Next.js, MDX y Material UI.

## Descripción
Este proyecto es un blog minimalista donde puedes escribir posts en formato Markdown/MDX y mostrarlos con un diseño moderno usando Material UI.

## Instalación rápida
1. Clona el repo y entra a la carpeta:
	```bash
	git clone https://github.com/BenjaminMirra/mi-blogcito.git
	cd mi-blogcito
	```
2. Instala dependencias:
	```bash
	npm install
	# o
	yarn install
	```
3. Corre el servidor de desarrollo:
	```bash
	npm run dev
	# o
	yarn dev
	```

## Crear un post
Agrega un archivo `.mdx` en la carpeta `posts/` siguiendo el formato:
```mdx
---
title: "Título del post"
date: "2025-11-04"
summary: "Resumen corto del post."
---

Contenido en Markdown/MDX...
```

## Scripts útiles
- `npm run dev` — Servidor de desarrollo
- `npm run build` — Compilar para producción
- `npm run start` — Servir la app compilada

## Autor
[BenjaminMirra](https://github.com/BenjaminMirra)
