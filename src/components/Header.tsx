import { AppBar, Container, Toolbar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              mi-blogcito
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
