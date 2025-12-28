"use client";

import { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

const FireworksDisplay = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 🔥 ESPERAR A QUE EL BROWSER CALCULE EL LAYOUT
    const start = () => {
      const fireworks = new Fireworks(containerRef.current!, {
        autoresize: true,
        opacity: 0.9,
        acceleration: 1,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 10,
        intensity: 30,
        hue: { min: 0, max: 360 },
        delay: { min: 30, max: 60 },
      });

      // 🔥 FORZAR RESIZE INICIAL
      window.dispatchEvent(new Event("resize"));

      fireworks.start();

      return fireworks;
    };

    // 👇 2 FRAMES garantizan layout correcto
    let fireworks: Fireworks;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        fireworks = start();
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      fireworks?.stop();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  );
};

export default FireworksDisplay;
