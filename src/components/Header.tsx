import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Stack,
  Box,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link
            href="/"
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Image
                src="/favicon.ico"
                alt="Logo de UOR's blog"
                width={36}
                height={36}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  display: { xs: "none", sm: "block" },
                }}
              >
                {"UOR's blog"}
              </Typography>
            </Stack>
          </Link>

          {/* Esto empuja los siguientes items (ej. links de navegación) a la derecha */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Aquí podrías agregar links de navegación en el futuro */}
          {/* <Button color="inherit">Sobre Mí</Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
