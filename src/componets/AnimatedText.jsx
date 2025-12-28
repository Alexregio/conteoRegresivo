"use client";

import { motion } from "framer-motion";

const text = "¡FELIZ AÑO NUEVO!";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.06, // retraso entre letras
    },
  },
};

const letter = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

export default function AnimatedText() {
  return (
    <div className="mt-20 select-none text-center z-999">
      {/* TEXTO ANIMADO LETRA POR LETRA */}
      <motion.h1
        className="text-[4rem] font-bold text-yellow-400 "
        variants={container}
        initial="initial"
        animate="animate"
        style={{
          textShadow: `
            0 0 10px rgba(255,215,0,0.8),
            0 0 20px rgba(255,215,0,0.6)
          `,
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letter}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* 2026 – SOLO LATIDO */}
      <div className="flex justify-center mt-10">
        <motion.span
          className="text-[8rem] font-extrabold neon-text z-999"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          2026
        </motion.span>
      </div>
    </div>
  );
}
