'use client'; // ¡La línea más importante!

import Link from 'next/link';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

// Definimos el tipo de datos que esperamos
// (Debe coincidir con lo que devuelve getSortedPostsData)
type PostData = {
  id: string;
  title: string;
  date: string;
  summary: string;
};

export default function PostList({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <List>
      {allPostsData.map(({ id, title, date, summary }) => (
        <ListItem key={id} disablePadding>
          {/* Esta parte (ListItemButton, Link) es interactiva,
              por eso debe estar en un Componente de Cliente */}
          <ListItemButton
            component={Link}
            href={`/blog/${id}`} // El link al post individual
            sx={{ borderRadius: 2 }}
          >
            <ListItemText
              primary={title}
              secondary={`${new Date(date).toLocaleDateString('es-AR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })} - ${summary}`}
              primaryTypographyProps={{
                variant: 'h6',
                fontWeight: 600,
                color: 'primary.main',
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

