"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
      <>
      <footer className="font-body">
        <div className="lg:hidden px-8">
      <h4 className="text-customTitle text-2xl mt-6">Contact & accès</h4>
        <div className="flex flex-col justify-center items-center">
        </div>
        </div>
 <div className="hidden lg:flex flex-col px-28">
 <h4 className="font-light text-customTitle text-45px mt-14 mb-20">Contact & accès</h4>
 <div className="flex">
    <div className="flex flex-col w-[50%]">
<div className="text-20px">ME CONTACTER</div>
<div className="w-[217px] h-0.5 bg-borderColor mt-2 mb-8"></div>
<div className="flex">
<div className="flex items-center">
<Image
            src="/images/telephone_pictos_pauline.svg"
            width={28}
            height={28}
            alt="Telephone Pauline"
            className="w-[28px] h-auto"
          />
<div className="text-17px font-light pl-2 pr-4">09 80 45 18 63</div>
</div>
<div className="flex items-center">
<Image
            src="/images/email_pictos_pauline.svg"
            width={32}
            height={32}
            alt="Email Pauline"
            className="w-[32px] h-auto"
          />
                      <a
              href="mailto:chiroajaccio@gmail.com"
              className="text-17px font-light pl-2"
            >
chiroajaccio@gmail.com
            </a>
            </div>
</div>
    </div>
    <div className="flex flex-col w-[50%]">
    <div className="text-20px">VENIR AU CABINET</div>
    <div className="w-[217px] h-0.5 bg-borderColor mt-2 mb-8"></div>
    <div className="flex">
    <div className="flex items-center">
    <Image
            src="/images/parking_pictos_pauline.svg"
            width={38}
            height={38}
            alt="Parking Pauline"
            className="w-auto h-[38px]"
          />
    <div className="text-17px font-light pl-2 pr-4">Parking Place Miot</div>
    <div className="flex items-center">
    <Image
            src="/images/bus_pictos_pauline.svg"
            width={38}
            height={38}
            alt="Parking Pauline"
            className="w-auto h-[38px]"
          />
              <div className="flex flex-col leading-none">
                <p className="text-17px font-light">Bus 2 - 2Bis - 5 
                </p>
                <p className="text-17px font-light">Arrêts Trottel ou Place Miot </p>
</div>
</div>
    </div>
    </div>
</div>
 </div>
 </div>
 <div className="hidden lg:flex flex-col justify-center items-center">
 <Image
          src="/images/mappauline.webp"
          width={1421}
          height={460}
          alt="Map pauline Chiropracteur Ajaccio"
          className="hidden w-full h-auto lg:block mt-20"
        />
 <div className="hidden lg:flex flex-col">
 <Image
                src="/images/logo.png"
                width={210}
                height={38}
                alt="Logo"
                className="w-[210px] h-auto mt-14 pb-6"
              />
 </div>
 </div>


      </footer>

      </>
  );
};

export default Footer;
