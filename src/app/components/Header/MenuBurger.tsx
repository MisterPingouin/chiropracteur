"use client";

import React, { useState, useCallback, MouseEvent } from "react";
import { motion } from "framer-motion";
import MenuButton from "./MenuButton";

const MenuBurger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    if (scrollTarget) {
      const targetElement = document.querySelector(scrollTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setScrollTarget(null);
    }
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("http")) {
      window.location.href = href;
    } else {
      e.preventDefault();
      setScrollTarget(href);
      toggleMenu();
    }
  };

  const menuLinks = [
    { href: "#qui-suis-je", label: "Qui suis-je ?" },
    { href: "#chiropraxie", label: "La chiropraxie" },
    { href: "#pourquoi-consulter", label: "Pourquoi consulter ?" },
    { href: "#contact-acces", label: "Contact & accès" },
    {
      href: "https://www.annuaire-chiropracteur.fr/chiropracteur/corse-du-sud/ajaccio-20000/chiropracteur-ajaccio-pauline-marlin#:~:text=Pr%C3%A9sentation%20de%20Chiropracteur%20Ajaccio%20Pauline,les%20r%C3%A9seaux%20sociaux%20(%40ChiropracteurAjaccio)",
      label: "Prendre rendez-vous",
    },
  ];

  const menuVariants = {
    open: {
      y: "0",
      transition: {
        type: "tween",
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      y: "-100%",
      transition: {
        type: "tween",
        duration: 0.5,
        when: "afterChildren",
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
        className={`fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] ${
          isOpen || isAnimating ? "bg-white" : ""
        } flex flex-col tracking-wide z-30`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        <div className="flex flex-col p-8 mt-6 justify-start space-y-6">
          {menuLinks.map(({ href, label }, index) => (
            <motion.a
              key={href}
              href={href}
              className={`border-b border-[#707070] pb-4 ${
                index === menuLinks.length - 1 ? "mb-6" : ""
              }`}
              onClick={(e) => handleLinkClick(e, href)}
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
