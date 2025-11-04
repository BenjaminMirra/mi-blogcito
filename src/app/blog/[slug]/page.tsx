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

async function getSlug(params: { slug: string } | Promise<{ slug: string }>) {
  if (params instanceof Promise) {
    // Es una Promise
    return (await params).slug;
  }
  return params.slug;
}
/**
 * Esta función (generateMetadata) también se ejecuta en el SERVIDOR.
 * Genera el <title> y <meta> tags para el <head> de la página,
 * ¡perfecto para SEO!
 */
export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const slug = await getSlug(params);
    const postData = await getPostData(slug);
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
    const slug = await getSlug(params);
    postData = await getPostData(slug);
  } catch (error) {
    console.error(error);
    notFound();
  }

  const formattedDate = new Date(postData.date).toLocaleDateString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            {postData.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Publicado el {formattedDate}
          </Typography>
          
          <Divider sx={{ mb: 4 }} />
          <Box
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
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