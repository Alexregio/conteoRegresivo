"use client";

import { motion } from "framer-motion";

type ConfettiProps = { count?: number };

const colors = [
  "#FFD700", // dorado
  "#C0C0C0", // plateado
  "#FF4D4D", // rojo
  "#4D79FF", // azul
  "#4DFF88", // verde
  "#FF4DFF", // rosa
];

export default function ConfettiExplosion({ count = 80 }: ConfettiProps) {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2; // dirección aleatoria
        const velocity = 300 + Math.random() * 200; // distancia máxima
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;

        return (
          <motion.span
            key={i}
            className="absolute w-2 h-4 rounded-sm"
            style={{ backgroundColor: colors[i % colors.length] }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
            animate={{
              x,
              y,
              opacity: 0,
              rotate: Math.random() * 720,
              scale: 0.8,
            }}
            transition={{
              duration: 2.2,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}
