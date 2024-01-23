import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Gerry's Portfolio",
  description: "Created with Next Js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
