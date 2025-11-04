// ¡Esta es la página dinámica que faltaba!

import { getPostData, getAllPostIds } from '@/lib/posts';
import { Box, Container, Paper, Typography, Divider } from '@mui/material';
import { notFound } from 'next/navigation';

/**
 * Esta función (generateStaticParams) se ejecuta en el SERVIDOR durante el 'build'.
 * Llama a getAllPostIds() para saber qué posts existen
 * y pre-renderiza una página HTML para cada uno.
 */
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

/**
 * Esta función (generateMetadata) también se ejecuta en el SERVIDOR.
 * Genera el <title> y <meta> tags para el <head> de la página,
 * ¡perfecto para SEO!
 */
export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const postData = await getPostData(params.slug);
    return {
      title: postData.title,
      description: postData.summary,
    };
  } catch (error) {
    console.error(error);
    return {
      title: 'Post no encontrado',
    };
  }
}

/**
 * Este es el componente de la página.
 * Es un Componente de Servidor (por defecto).
 */
export default async function PostPage({ params }: { params: { slug: string } }) {
  let postData;
  try {
    // 1. Obtenemos los datos del post (incluyendo el HTML)
    postData = await getPostData(params.slug);
  } catch (error) {
    console.error(error);
    // Si el post no existe, mostramos la página 404
    notFound();
  }

  // Convertimos la fecha "YYYY-MM-DD" a un formato más legible
  const formattedDate = new Date(postData.date).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        {/* Usamos Paper para que el post tenga el estilo de tarjeta de tu tema */}
        <Paper sx={{ p: { xs: 3, md: 5 } }}>
          {/* 1. Título del Post */}
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            {postData.title}
          </Typography>

          {/* 2. Fecha del Post */}
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Publicado el {formattedDate}
          </Typography>
          
          <Divider sx={{ mb: 4 }} />

          {/* 3. Contenido del Post (HTML) */}
          <Box
            // Usamos dangerouslySetInnerHTML para renderizar el HTML
            // que nos devolvió 'remark'
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            // Agregamos estilos para el contenido que viene del Markdown
            sx={{
              '& h2': {
                marginTop: '1.5em',
                marginBottom: '0.5em',
              },
              '& p': {
                lineHeight: 1.7,
                marginBottom: '1em',
              },
              '& ul, & ol': {
                lineHeight: 1.7,
                marginBottom: '1em',
                paddingLeft: '2em',
              },
              '& li': {
                marginBottom: '0.25em',
              },
              '& strong': {
                fontWeight: 700,
              },
              '& a': {
                color: 'primary.main',
                textDecoration: 'underline',
              },
            }}
          />
        </Paper>
      </Box>
    </Container>
  );
}