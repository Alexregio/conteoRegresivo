"use client";

import { useEffect, useRef } from "react";

export default function StarSparkles({ count = 50 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Crear estrellas
    const stars = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 0,
      maxRadius: Math.random() * 3 + 1.5,
      speed: Math.random() * 0.03 + 0.01,
      alpha: 0,
      alphaSpeed: Math.random() * 0.02 + 0.01,
      growing: true,
    }));

    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        // Crecer o decrecer
        if (s.growing) {
          s.radius += s.speed;
          s.alpha += s.alphaSpeed;
          if (s.radius >= s.maxRadius) s.growing = false;
        } else {
          s.radius -= s.speed;
          s.alpha -= s.alphaSpeed;
          if (s.radius <= 0) {
            // Reiniciar estrella
            s.x = Math.random() * canvas.width;
            s.y = Math.random() * canvas.height;
            s.maxRadius = Math.random() * 3 + 1.5;
            s.radius = 0;
            s.alpha = 0;
            s.growing = true;
          }
        }

        // Dibujar estrella dorada
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${s.alpha})`; // Dorado
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(255, 215, 0, ${s.alpha})`; // Brillo dorado
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
