"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
      <>
      <footer className="font-body flex-col justify-center items-center">
      <div className="w-full h-0.5 bg-borderColor"></div>
      <div className="flex flex-col items-center">
 <Image
                src="/images/logo.png"
                width={210}
                height={38}
                alt="Logo"
                className="w-[210px] h-auto mt-10"
              />
              <div className="flex mb-8">
          <Link href="/mentions-legales" className="text-12px font-light text-black mt-0.5">
          Mentions légales | @paulinemarlin2024          </Link>
          </div>
 </div>
      </footer>

      </>
  );
};

export default Footer;
