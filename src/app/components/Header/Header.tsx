"use client";

import React from "react";
import MenuBurger from "./MenuBurger";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="w-full z-50">
        <nav className="flex items-center justify-between py-4 px-7">
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
      </header>
    </>
  );
};

export default Header;
