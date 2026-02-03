import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deborah-Corp | Cours de Mathématiques",
  description: "Deborah-Corp - Cours particuliers de mathématiques. Cours individuels, préparation aux examens, soutien scolaire. Des résultats concrets avec nos professeurs certifiés.",
  keywords: ["cours mathématiques", "soutien scolaire", "préparation examens", "maths", "tuteur", "Deborah-Corp"],
  authors: [{ name: "Deborah-Corp" }],
  openGraph: {
    title: "Deborah-Corp | Cours de Mathématiques",
    description: "Cours particuliers de mathématiques du collège au supérieur.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-[#00704A] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
