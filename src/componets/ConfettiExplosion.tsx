"use client";

import { useState } from "react";
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

type ConfettiPiece = {
  key: number;
  x: number;
  y: number;
  rotate: number;
  color: string;
};

function createPieces(count: number): ConfettiPiece[] {
  return Array.from({ length: count }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2; // dirección aleatoria
    const velocity = 300 + Math.random() * 200; // distancia máxima
    return {
      key: i,
      x: Math.cos(angle) * velocity,
      y: Math.sin(angle) * velocity,
      rotate: Math.random() * 720,
      color: colors[i % colors.length],
    };
  });
}

export default function ConfettiExplosion({ count = 80 }: ConfettiProps) {
  const [pieces] = useState<ConfettiPiece[]>(() => createPieces(count));

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      {pieces.map((piece) => (
        <motion.span
          key={piece.key}
          className="absolute w-2 h-4 rounded-sm"
          style={{ backgroundColor: piece.color }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
          animate={{
            x: piece.x,
            y: piece.y,
            opacity: 0,
            rotate: piece.rotate,
            scale: 0.8,
          }}
          transition={{
            duration: 2.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
