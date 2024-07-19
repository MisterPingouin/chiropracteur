"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface MenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, toggleMenu }) => {
  const variant = isOpen ? "opened" : "closed";

  const variants = useMemo(
    () => ({
      top: {
        closed: { rotate: 0, translateY: 0 },
        opened: { rotate: 45, translateY: 10 },
      },
      center: {
        closed: { opacity: 1 },
        opened: { opacity: 0 },
      },
      bottom: {
        closed: { rotate: 0, translateY: 0 },
        opened: { rotate: -45, translateY: -10 },
      },
    }),
    []
  );

  const lineProps = useMemo(
    () => ({
      stroke: "#000",
      strokeWidth: 1,
      vectorEffect: "non-scaling-stroke",
      transition: { duration: 0.3 },
      className: "line",
    }),
    []
  );

  const unitHeight = 30;
  const unitWidth = (unitHeight * 24) / 24;

  return (
    <button
      onClick={toggleMenu}
      className="pt-3 lg:pt-6 focus:outline-none z-50 relative"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={24}
        height={24}
        className="lg:w-14 lg:h-14"
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={variants.top}
          initial="closed"
          animate={variant}
          {...lineProps}
          className="stroke-1"
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="12"
          y2="12"
          variants={variants.center}
          initial="closed"
          animate={variant}
          {...lineProps}
          className="stroke-1"
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="22"
          y2="22"
          variants={variants.bottom}
          initial="closed"
          animate={variant}
          {...lineProps}
          className="stroke-1"
        />
      </motion.svg>
    </button>
  );
};

export default MenuButton;
