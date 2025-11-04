import fs from 'fs'; // Módulo 'File System' de Node.js
import path from 'path'; // Módulo 'Path' de Node.js
import matter from 'gray-matter'; // Para parsear el frontmatter (title, date, etc)
import { remark } from 'remark';
import html from 'remark-html';

// 1. Definimos dónde están los posts
const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * ESTA FUNCIÓN YA LA ESTÁS USANDO EN TU page.tsx
 * Lee todos los posts y los ordena por fecha.
 */
export function getSortedPostsData() {
  // Obtenemos los nombres de todos los archivos en /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Quitamos el ".mdx" del nombre para usarlo como 'id' (o 'slug')
    const id = fileName.replace(/\.mdx$/, '');

    // Leemos el contenido del archivo como un string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usamos gray-matter para "parsear" los metadatos (title, date, etc.)
    const matterResult = matter(fileContents);

    // Combinamos los datos con el id
    return {
      id,
      ...(matterResult.data as { title: string; date: string; summary: string }),
    };
  });

  // Ordenamos los posts por fecha (más nuevo primero)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * ¡FUNCIÓN CORREGIDA!
 * Esta función le dice a Next.js qué 'slugs' (o IDs) de posts existen,
 * para que pueda pre-renderizarlos todos en el build.
 */
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Retorna un array de objetos así: [ { slug: 'primer-post' }, ... ]
  // (Quitamos el "params: { ... }" que lo envolvía)
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.mdx$/, ''),
    };
  });
}

/**
 * ¡NUEVA FUNCIÓN! (Esta ya estaba bien)
 * Esta función obtiene el contenido completo de un post (incluyendo el HTML)
 * basado en su 'slug' (o ID).
 */
export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Usamos gray-matter para parsear los metadatos
  const matterResult = matter(fileContents);

  // Usamos 'remark' para convertir el contenido de Markdown a HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combinamos todo
  return {
    slug,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; summary: string }),
  };
}

