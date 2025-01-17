"use client";

import React from "react";
import MenuBurger from "./MenuBurger";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="lg:w-full z-50 lg:h-[147px] lg:fixed lg:top-0 lg:left-0 lg:bg-white">
        <nav className="flex items-center justify-between py-4 px-7 lg:hidden">
          <MenuBurger />
          <div className="flex justify-center z-50">
            <div>
              <Image
                src="/images/logo.png"
                width={170}
                height={30}
                alt="Logo"
                className="w-auto h-auto"
              />
            </div>
          </div>
          <div className="flex justify-end z-50">
            <Link
              href="https://www.instagram.com/chiropracteurajaccio/?hl=fr"
              className="relative w-6 h-6 text-customFont"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/instagram-icon.svg"
                alt="Instagram"
                fill
                className="object-contain h-auto w-auto"
              />
            </Link>
          </div>
        </nav>
        <nav className="hidden items-center justify-between py-4 px-20 lg:flex">
          <div className="flex justify-center items-center gap-12">
            <MenuBurger />
            <div>
              <Image
                src="/images/logo.png"
                width={239}
                height={41}
                alt="Logo"
                className="w-auto h-auto lg:hidden"
              />
              <Image
                src="/images/logo.png"
                width={396}
                height={71}
                alt="Logo"
                className="hidden w-[396px] h-auto lg:block"
              />
            </div>
          </div>
          <div className="flex justify-end z-50">
            <div className="flex justify-center items-center gap-12">
              <Link
                href="https://www.annuaire-chiropracteur.fr/chiropracteur/corse-du-sud/ajaccio-20000/chiropracteur-ajaccio-pauline-marlin#:~:text=Pr%C3%A9sentation%20de%20Chiropracteur%20Ajaccio%20Pauline,les%20r%C3%A9seaux%20sociaux%20(%40ChiropracteurAjaccio)"
                passHref
                legacyBehavior
              >
                <a
                  className="flex h-[65px] w-[317px] bg-customFont hover:bg-customHover items-center justify-center text-white pt-1 font-bold text-21px"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PRENDRE RENDEZ-VOUS
                </a>
              </Link>
              <Link
                href="https://www.instagram.com/chiropracteurajaccio/?hl=fr"
                className="relative w-6 h-6 text-customFont hover:text-customHover lg:h-9 lg:w-9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/instagram-icon.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="object-contain h-auto w-auto lg:h-9 lg:w-9"
                />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
