import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Providers from "./providers";
import "./globals.css";
import AOSProvider from "./components/AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Web Developer",
  description: "My personal portfolio website",
  icons: {
    icon: "/portfolio.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
          <AOSProvider />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
