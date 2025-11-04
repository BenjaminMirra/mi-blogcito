import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mi Blogcito",
  description: "Creada por Mirra Benjamín",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <ThemeRegistry>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  );
}
