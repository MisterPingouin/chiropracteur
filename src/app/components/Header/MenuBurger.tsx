"use client";

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import MenuButton from './MenuButton';

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  const menuLinks = [
    { href: '#qui-suis-je', label: 'Qui suis-je ?' },
    { href: '#chiropraxie', label: 'La chiropraxie' },
    { href: '#pourquoi-consulter', label: 'Pourquoi consulter ?' },
    { href: '#contact-acces', label: 'Contact & accès' },
    { href: 'https://www.annuaire-chiropracteur.fr/chiropracteur/corse-du-sud/ajaccio-20000/chiropracteur-ajaccio-pauline-marlin#:~:text=Pr%C3%A9sentation%20de%20Chiropracteur%20Ajaccio%20Pauline,les%20r%C3%A9seaux%20sociaux%20(%40ChiropracteurAjaccio)', label: 'Prendre rendez-vous' }
  ];

  const menuVariants = {
    open: {
      y: '0',
      transition: {
        type: 'tween',
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    closed: {
      y: '-100%',
      transition: {
        type: 'tween',
        duration: 0.5,
        when: 'afterChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative text-black text-25px font-light z-40">
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      <motion.div
        className="fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-white flex flex-col tracking-wide z-30"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <div className="flex flex-col p-8 mt-6 justify-start space-y-6">
          {menuLinks.map(({ href, label }, index) => (
            <motion.a
              key={href}
              href={href}
              className={`hover:underline border-b border-[#707070] pb-4 ${index === menuLinks.length - 1 ? 'mb-6' : ''}`}
              onClick={toggleMenu}
              variants={linkVariants}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MenuBurger;
