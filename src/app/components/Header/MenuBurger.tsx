import React, { useState, useCallback, useEffect, MouseEvent } from "react";
import { motion } from "framer-motion";
import MenuButton from "./MenuButton";
import { usePathname } from "next/navigation";
import useSmoothScroll from '../../hooks/useSmoothScroll';
import useIsMobile from '../../hooks/useIsMobile';

const MenuBurger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const smoothScroll = useSmoothScroll(isMobile ? 0 : -350); 

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);

    if (isOpen && !isScrolled && window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  }, [isOpen, isScrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    if (pathname === "/mentions-legales") return;
    if (isOpen) {
      setIsAnimating(true);
    }
    setIsOpen(!isOpen);
  }, [isOpen, pathname]);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    if (scrollTarget) {
      smoothScroll(scrollTarget);
      setScrollTarget(null);
    }
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("http")) {
      window.location.href = href;
    } else {
      e.preventDefault();
      setScrollTarget(href.replace('#', '')); 
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
    <div className="relative text-black text-25px font-light z-40 lg:text-47px">
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      <motion.div
        className={`fixed top-[60px] lg:top-[147px] left-0 w-full ${
          isScrolled ? 'h-[calc(100vh-60px)] lg:h-[calc(100vh-147px)]' : 'h-[calc(100vh-60px)] lg:h-[543px]'
        } ${
          isOpen || isAnimating ? `bg-white ${isScrolled ? '' : 'lg:bg-opacity-50'}` : ""
        } flex flex-col tracking-wide z-30`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        <div className="flex flex-col p-8 mt-6 justify-start space-y-6 lg:space-y-0 lg:pl-20 lg:text-47px">
          {menuLinks.map(({ href, label }, index) => (
            <motion.a
              key={href}
              href={href}
              className={`border-b border-[#707070] pb-4 ${
                index === menuLinks.length - 1 ? "mb-6" : ""
              } lg:border-b-0 lg:border-none lg:pb-0 lg:hover:underline`}
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
