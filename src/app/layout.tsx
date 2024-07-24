import type { Metadata } from "next";
import { Josefin_Sans, Cormorant } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-josefin",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Chiropracteur Ajaccio - Pauline Marlin",
  description: "Pauline Marlin, votre chiropracteure à Ajaccio, est spécialisée dans le soin et la prévention des troubles neuro-musculo-squelettiques.",
  keywords: "mal au dos, chiropracteur, Ajaccio, chiropratique, chiropraxie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${josefinSans.variable} ${cormorant.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pauline Marlin, votre chiropracteure à Ajaccio, est spécialisée dans le soin et la prévention des troubles neuro-musculo-squelettiques." />
        <meta name="keywords" content="mal au dos, chiropracteur, Ajaccio, chiropratique, chiropraxie" />
        <title>Chiropracteur Ajaccio - Pauline Marlin</title>
        {/* Site développé par Anthony Pham (WIB) - [dev.anthonypham@gmail.com] */}
      </head>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
