"use client";
import SparklesCanvas from "@/componets/Sparkles";
import StarSparkles from "@/componets/StarSparkles"
import GoldenConfetti from "@/componets/GoldenConfetti"
import AnimatedText from "@/componets/AnimatedText"
export default function FelizAno2026() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-black">
      <SparklesCanvas count={200} />
      <GoldenConfetti count={200} />
      <StarSparkles count={40} />
      <div className="flex justify-center items-center">
        <AnimatedText />
      </div>    
    </div>
  );
}