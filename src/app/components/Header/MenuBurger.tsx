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
    { href: '#chiropraxie', label: 'La Chiropraxie' },
    { href: '#pourquoi-consulter', label: 'Pourquoi consulter ?' },
    { href: '#contact-acces', label: 'Contact & accès' },
    { href: '#prendre-rendez-vous', label: 'Prendre rendez-vous' }
  ];

  return (
    <div className="relative text-black text-18px font-bold z-50">
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: isOpen ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center tracking-wide justify-center z-40"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {menuLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:underline"
              onClick={toggleMenu}
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MenuBurger;
