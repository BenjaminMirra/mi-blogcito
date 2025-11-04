"use client";
import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: "auto", 
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        borderTop: "1px solid",
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      <Container maxWidth="lg">
        <Link sx={{
            textDecoration: 'none',
        }} target="_blank" color="inherit" href="https://mirrabenjamin.netlify.app/">
          <Typography sx={{
            fontSize: "12px"
          }} color="text.secondary" align="center">
            Desarrollado web realizado por Mirra Benjamín
          </Typography>
        </Link>
      </Container>
    </Box>
  );
}
