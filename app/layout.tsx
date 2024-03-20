import "bootstrap/dist/css/bootstrap.css";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "./head";
import Script from "next/script";
import { GlobalProvider } from "./GlobalProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeRegistry from "../components/theme1/EmotionCache";
// const inter = Inter({ subsets: ["latin"] });
//import { CacheProvider, EmotionCache } from "@emotion/react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <AppRouterCacheProvider> */}
      <ThemeRegistry>
        <Head />
        <body>
          <GlobalProvider>
            <Header />
            {children}
            <Footer />
          </GlobalProvider>

          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
          <script src="https://kit.fontawesome.com/96c658c316.js"></script>
        </body>
      </ThemeRegistry>
      {/* </AppRouterCacheProvider> */}
    </html>
  );
}
