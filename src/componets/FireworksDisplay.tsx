"use client";
import { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

const FireworksDisplay = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const fireworks = new Fireworks(containerRef.current, {
        autoresize: true,
        opacity: 0.9,
        acceleration: 1.00,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 10,
        intensity: 30,
        hue: { min: 40, max: 60 }, // tonos dorados
        delay: { min: 30, max: 60 },
      });

      fireworks.start();

      return () => fireworks.stop();
    }
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-50 pointer-events-none"></div>;
};

export default FireworksDisplay;