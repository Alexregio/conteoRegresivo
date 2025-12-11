"use client";
import FireworksDisplay from "@/componets/FireworksDisplay";

export default function FelizAno2026() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <FireworksDisplay />

      {/* Imágenes de texto festivo */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <img src="/feliz-año.png" alt="FELIZ" className="w-auto h-90  " />
        <img src="/cfestejo2026.png" alt="2026" className="h-48 md:h-66 animate-pop mb-8" />
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0); }
        }
        @keyframes popIn {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); }
        }

        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        .animate-pop {
          animation: popIn 0.6s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </main>
  );
}