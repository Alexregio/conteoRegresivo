"use client";

import { useEffect, useState } from "react";
import SparklesCanvas from "@/componets/Sparkles";
import StarSparkles from "@/componets/StarSparkles";
import GoldenConfetti from "@/componets/GoldenConfetti";
import AnimatedText from "@/componets/AnimatedText";
import FireworksDisplay from "@/componets/FireworksDisplay";
import ConfettiExplosion from "@/componets/ConfettiExplosion";

export default function FelizAno2026() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000); // ⏱ tiempo del confeti / fuegos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center bg-black relative overflow-hidden">
      {/* EFECTOS PRIMERO */}
      <FireworksDisplay />
      <SparklesCanvas count={200} />
      <GoldenConfetti count={200} />
      <StarSparkles count={40} />
      <ConfettiExplosion />

      {/* TEXTO DESPUÉS */}
      {showText && (
        <div className="flex justify-center items-center relative z-10">
          <AnimatedText />
        </div>
      )}
    </div>
  );
}
