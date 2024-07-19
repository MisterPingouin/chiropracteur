"use client";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import useScrollVisibility from "./hooks/useScrollVisibility";
import Link from "next/link";

const textVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 2,
    },
  },
};

export default function Home() {
  const [ref, isVisible] = useScrollVisibility();

  return (
    <div>
      <Header />
      <main>
      <div className="flex w-full h-[60px] bg-customFont items-center justify-center text-white py-2 lg:hidden">
          <Link
            href="https://www.annuaire-chiropracteur.fr/chiropracteur/corse-du-sud/ajaccio-20000/chiropracteur-ajaccio-pauline-marlin#:~:text=Pr%C3%A9sentation%20de%20Chiropracteur%20Ajaccio%20Pauline,les%20r%C3%A9seaux%20sociaux%20(%40ChiropracteurAjaccio)"
            className="font-bold text-18 leading-tight tracking-wide"
            target="_blank"
            rel="noopener noreferrer"
          >
            PRENDRE RENDEZ-VOUS
          </Link>
        </div>
        <Image
          src="/images/img1chiro.jpg"
          width={428}
          height={323}
          alt="Image Chiropracteur Ajaccio"
          className="w-auto h-auto lg:hidden"
        />
                <Image
          src="/images/img1chiro.jpg"
          width={700}
          height={380}
          alt="Image Chiropracteur Ajaccio"
          className="hidden w-full h-auto lg:block"
        />
        <div className="flex flex-col justify-center items-center font-light px-6 mt-4">
          <div id="qui-suis-je" className="flex flex-col px-2 pb-1">
            <h1 className="text-customTitle text-30px px-3">Qui suis-je ?</h1>
            <p className="leading-22px pb-6 px-2">
              Passionnée depuis toujours par la santé et le corps humain, j’ai
              effectué mes 6 ans d’études à l’Institut Franco-Européen de
              Chiropraxie à Paris. Diplômée en 2017.
            </p>
          </div>
          <Image
            src="/images/photos_cadre1.webp"
            width={374}
            height={372}
            alt="Image Chiropracteur Pauline"
            className="w-auto h-auto"
          />
          <motion.div
            ref={ref}
            className="text-center text-base px-2 font-title uppercase leading-8 py-8"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
          >
            J’ai la volonté de remettre la santé au cœur de nos vies. c’est
            pourquoi je continue de me former régulièrement pour apporter à mes
            patients les meilleurs soins et conseils possibles…
          </motion.div>
          <Image
            src="/images/Arrowdown.png"
            width={42}
            height={42}
            alt="Image Chiropracteur Ajaccio"
            className="w-auto h-auto mb-6"
          />
          <Image
            src="/images/img2chiro.png"
            width={374}
            height={372}
            alt="Image Chiropracteur Ajaccio"
            className="mb-6"
          />
          <div id="chiropraxie" className="flex flex-col px-2 pb-1">
            <h2 className="text-customTitle text-30px px-3">La chiropraxie </h2>
            <p className="leading-22px px-2">
              La chiropraxie est une profession de santé manuelle visant à
              prévenir et corriger les déséquilibres de notre corps. Sa vision
              globale a pour but de nettoyer notre système nerveux responsable
              de notre vitalité, de nos différents blocages, afin de permettre
              au corps de retrouver sa pleine capacité d’auto-guérison.
            </p>
            <p className="leading-22px pb-6 px-2">
              La chiropraxie s’adresse et s’adapte à tous, du nouveau-né aux
              seniors, en passant par les sportifs et les femmes enceintes.{" "}
            </p>
          </div>
          <Image
            src="/images/photos_cadre2.webp"
            width={374}
            height={372}
            alt="Image Chiropracteur os"
            className="w-auto h-auto"
          />
          <motion.div
            ref={ref}
            className="text-center text-base px-2 font-title uppercase leading-8 py-8"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
          >
            Un système nerveux en pleine santé est un corps en pleine santé.{" "}
          </motion.div>
          <Image
            src="/images/Arrowdown.png"
            width={42}
            height={42}
            alt="Image Chiropracteur Ajaccio"
            className="w-auto h-auto mb-6"
          />
          <div className="w-full h-0.5 bg-line mb-6"></div>
          <div
            id="pourquoi-consulter"
            className="flex flex-col justify-center items-center px-2 pb-1"
          >
            <h3 className="text-customTitle text-25px mb-3">
              Pour quels motifs consulter ?
            </h3>
            <p className="leading-22px text-center mb-8">
              Voici quelques exemples de prise en charge chiropratique{" "}
            </p>
            <p className="text-center font-title">PRÉVENTION :</p>
            <p className="leading-22px text-center px-6 mb-6">
              Bien-être, croissance, suivi de grossesse, suivi sportif,
              améliorer sa posture, prévenir l’arthrose…
            </p>
            <p className="text-center font-title">PROBLÈMES DE DOS :</p>
            <p className="leading-22px text-center px-6 mb-6">
              Scoliose, cervicalgie, dorsalgie, lombalgie, torticolis,
              sciatique…
            </p>
            <p className="text-center font-title">MAUX DE TÊTE :</p>
            <p className="leading-22px text-center px-6 mb-6">
              Céphalée, migraine, vertige d’origine cervicale, névralgie
              d’Arnold…
            </p>
            <p className="text-center font-title">DOULEURS ARTICULAIRES :</p>
            <p className="leading-22px text-center px-6 mb-6">
              Épaule, coude, poignet, hanche, genou, cheville, entorse,
              tendinite…
            </p>
            <div className="w-full h-0.5 bg-line mb-12"></div>
          </div>
        </div>
        <div
          id="prendre-rdv"
          className="flex w-full h-[60px] bg-customFont items-center justify-center text-white py-2"
        >
          <Link
            href="https://www.annuaire-chiropracteur.fr/chiropracteur/corse-du-sud/ajaccio-20000/chiropracteur-ajaccio-pauline-marlin#:~:text=Pr%C3%A9sentation%20de%20Chiropracteur%20Ajaccio%20Pauline,les%20r%C3%A9seaux%20sociaux%20(%40ChiropracteurAjaccio)"
            className="text-customBlue font-bold text-18 leading-tight tracking-wide"
            target="_blank"
            rel="noopener noreferrer"
          >
            PRENDRE RENDEZ-VOUS
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
