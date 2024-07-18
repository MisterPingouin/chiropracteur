"use client";

import React from 'react';
import MenuBurger from './MenuBurger';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="w-full bg-white shadow-md z-50">
        <nav className="flex items-center justify-between py-4 px-7">
          <MenuBurger />
          <div className="flex justify-center">
            <div>
              <Image src="/images/logo.png" width={170} height={30} alt="Logo" />
            </div>
          </div>
          <div className="flex justify-end">
            <Link href="https://www.instagram.com/chiropracteurajaccio/?hl=fr" className="relative w-6 h-6 text-customTitle" target="_blank" rel="noopener noreferrer">
              <Image src="/images/instagram-icon.svg" alt="Instagram" fill className="object-contain" />
            </Link>
          </div>
        </nav>
        <div className="flex w-full h-[60px] bg-customTitle items-center justify-center text-white py-2">
          <Link href="https://www.annuaire-chiropracteur.fr/chiropracteur/corse-du-sud/ajaccio-20000/chiropracteur-ajaccio-pauline-marlin#:~:text=Pr%C3%A9sentation%20de%20Chiropracteur%20Ajaccio%20Pauline,les%20r%C3%A9seaux%20sociaux%20(%40ChiropracteurAjaccio)" className="text-customBlue font-bold text-18 leading-tight tracking-wide" target="_blank" rel="noopener noreferrer">
            PRENDRE RENDEZ-VOUS
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
