import type { Metadata } from "next";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mi App con Next y MUI",
  description: "Creada por Benjamín Mirra",
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
