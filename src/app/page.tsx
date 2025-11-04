// Este es tu 'Home' Page: src/app/page.tsx

import { getSortedPostsData } from '@/lib/posts'; // Lógica del servidor
import {
  Container,
  Box,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
// 1. ¡Importamos nuestro nuevo Componente de Cliente!
import PostList from '@/components/PostList';

/**
 * Este es un Componente de Servidor (por defecto).
 * Llama a getSortedPostsData() en el servidor durante el renderizado.
 */
export default function Home() {
  // 2. Obtenemos los datos en el Servidor (esto es rápido y seguro)
  const allPostsData = getSortedPostsData();

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper sx={{ p: { xs: 3, md: 5 } }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Mi Blog
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            color="text.secondary"
            gutterBottom
          >
            Artículos Recientes
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* 3. Renderizamos el Componente de Cliente, pasándole los datos */}
          {/* Next.js sabe cómo enviar 'allPostsData' (un JSON) del servidor al cliente */}
          <PostList allPostsData={allPostsData} />
        </Paper>
      </Box>
    </Container>
  );
}

