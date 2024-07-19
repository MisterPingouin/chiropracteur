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
  const [ref1, isVisible1] = useScrollVisibility();
  const [ref2, isVisible2] = useScrollVisibility();

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
          src="/images/img1chiro.png"
          width={428}
          height={323}
          alt="Image Chiropracteur Ajaccio"
          className="w-auto h-auto lg:hidden"
        />
        <Image
          src="/images/img1chiro.png"
          width={700}
          height={345}
          alt="Image Chiropracteur Ajaccio"
          className="hidden w-full h-auto lg:block"
        />
        <div className="flex flex-col justify-center items-center font-light px-6 mt-4 lg:mt-14 lg:px-32">
          <div className="lg:flex lg:items-center lg:justify-center lg:flex-row-reverse lg:gap-32">
          <div id="qui-suis-je" className="flex flex-col lg:justify-start px-2 pb-1 lg:w-[500px]">
            <h1 className="text-customTitle text-30px px-3 lg:text-45px lg:font-bold">Qui suis-je ?</h1>
            <p className="leading-22px pb-6 px-2 lg:text-20px">
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
            className="w-auto h-auto lg:hidden"
          />
                    <Image
            src="/images/photos_cadre1.webp"
            width={577}
            height={577}
            alt="Image Chiropracteur Pauline"
            className="hidden w-auto h-auto lg:block"
          />
          </div>
          <motion.div
            ref={ref1}
            className="text-center text-base px-2 font-title uppercase leading-8 py-8 lg:text-26px lg:leading-50px lg:max-w-[1070px] lg:my-6"
            initial="hidden"
            animate={isVisible1 ? "visible" : "hidden"}
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
            className="w-auto h-auto mb-6 lg:mb-12"
          />
          <Image
            src="/images/img2chiro.png"
            width={374}
            height={372}
            alt="Image Chiropracteur Ajaccio"
            className="lg:hidden mb-6"
          />
                    <Image
            src="/images/img2chiro.jpg"
            width={1200}
            height={551}
            alt="Image Chiropracteur Ajaccio"
            className="hidden w-full h-auto mb-6 lg:block"
          />
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-32 lg:mb-10">
          <div id="chiropraxie" className="flex flex-col px-2 pb-1">
            <h2 className="text-customTitle text-30px px-3 lg:text-45px lg:font-bold">La chiropraxie </h2>
            <p className="leading-22px px-2 lg:w-[500px] lg:text-20px">
              La chiropraxie est une profession de santé manuelle visant à
              prévenir et corriger les déséquilibres de notre corps. Sa vision
              globale a pour but de nettoyer notre système nerveux responsable
              de notre vitalité, de nos différents blocages, afin de permettre
              au corps de retrouver sa pleine capacité d’auto-guérison.
            </p>
            <p className="leading-22px pb-6 px-2 lg:w-[500px] lg:text-20px">
              La chiropraxie s’adresse et s’adapte à tous, du nouveau-né aux
              seniors, en passant par les sportifs et les femmes enceintes.{" "}
            </p>
          </div>
          <Image
            src="/images/photos_cadre2.webp"
            width={374}
            height={372}
            alt="Image Chiropracteur os"
            className="w-auto h-auto hidden"
          />
                    <Image
            src="/images/photos_cadre2.webp"
            width={577}
            height={577}
            alt="Image Chiropracteur os"
            className="hidden w-auto h-auto lg:block"
          />
          </div>
          <motion.div
            ref={ref2}
            className="text-center text-base px-2 font-title uppercase leading-8 py-8 lg:text-26px lg:max-w-[1070px] lg:my-6"
            initial="hidden"
            animate={isVisible2 ? "visible" : "hidden"}
            variants={textVariants}
          >
            Un système nerveux en pleine santé est un corps en pleine santé.{" "}
          </motion.div>
          <Image
            src="/images/Arrowdown.png"
            width={42}
            height={42}
            alt="Image Chiropracteur Ajaccio"
            className="w-auto h-auto mt-2 mb-6 lg:mb-12"
          />
          <div className="w-full h-0.5 bg-line mb-6"></div>
          <div
            id="pourquoi-consulter"
            className="flex flex-col justify-center items-center px-2 pb-1"
          >
            <h3 className="text-customTitle text-25px lg:text-45px mb-2">
              Pour quels motifs consulter ?
            </h3>
            <p className="leading-22px text-center mb-8 lg:text-20px">
              Voici quelques exemples de prise en charge chiropratique{" "}
            </p>
            <p className="text-center font-title lg:text-30px">PRÉVENTION :</p>
            <p className="leading-22px text-center px-6 mb-6 lg:text-20px">
              Bien-être, croissance, suivi de grossesse, suivi sportif,
              améliorer sa posture, prévenir l’arthrose…
            </p>
            <p className="text-center font-title lg:text-30px">PROBLÈMES DE DOS :</p>
            <p className="leading-22px text-center px-6 mb-6 lg:text-20px">
              Scoliose, cervicalgie, dorsalgie, lombalgie, torticolis,
              sciatique…
            </p>
            <p className="text-center font-title lg:text-30px">MAUX DE TÊTE :</p>
            <p className="leading-22px text-center px-6 mb-6 lg:text-20px">
              Céphalée, migraine, vertige d’origine cervicale, névralgie
              d’Arnold…
            </p>
            <p className="text-center font-title lg:text-30px">DOULEURS ARTICULAIRES :</p>
            <p className="leading-22px text-center px-6 mb-6 lg:text-20px">
              Épaule, coude, poignet, hanche, genou, cheville, entorse,
              tendinite…
            </p>
            <div className="w-full h-0.5 bg-line lg:w-[929px] lg:mt-6 mb-12"></div>
          </div>
          <Image
            src="/images/Arrowdown.png"
            width={42}
            height={42}
            alt="Image Chiropracteur Ajaccio"
            className="w-auto h-auto mb-6 lg:mb-12"
          />
        </div>
        <div
          className="flex w-full h-[60px] lg:h-[81px] bg-customFont hover:bg-customHover items-center justify-center text-white py-2"
        >
          <Link
            href="https://www.annuaire-chiropracteur.fr/chiropracteur/corse-du-sud/ajaccio-20000/chiropracteur-ajaccio-pauline-marlin#:~:text=Pr%C3%A9sentation%20de%20Chiropracteur%20Ajaccio%20Pauline,les%20r%C3%A9seaux%20sociaux%20(%40ChiropracteurAjaccio)"
            className="font-bold text-18 leading-tight tracking-wide lg:text-21px"
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
