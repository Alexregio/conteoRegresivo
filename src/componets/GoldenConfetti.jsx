"use client";

import { useEffect, useRef } from "react";

export default function GoldenConfetti({ count = 100 }) {
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

    // Confetti individuales (tipo cinta rizada)
    const confettis = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      length: Math.random() * 15 + 10,
      width: Math.random() * 4 + 2,
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.1,
      speedY: Math.random() * 2 + 1.5,
      oscillationSpeed: Math.random() * 0.1 + 0.02,
      oscillationDistance: Math.random() * 20 + 10,
      color: `rgba(255, 215, 0, ${0.6 + Math.random() * 0.4})`, // dorado con variación de opacidad
    }));

    let animationId;

    const drawConfetti = (c) => {
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.angle);

      // Dibujar cinta rizada simple con curva
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(
        c.width / 2,
        c.length / 3,
        -c.width / 2,
        (2 * c.length) / 3,
        0,
        c.length
      );
      ctx.lineWidth = c.width;
      ctx.strokeStyle = c.color;
      ctx.shadowColor = "rgba(255, 215, 0, 0.9)";
      ctx.shadowBlur = 8;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confettis.forEach((c) => {
        c.y += c.speedY;
        c.angle += c.rotationSpeed;
        c.x += Math.sin(c.y * c.oscillationSpeed) * 0.7;

        if (c.y > canvas.height) {
          // Reiniciar confetti arriba
          c.y = -c.length;
          c.x = Math.random() * canvas.width;
          c.angle = Math.random() * Math.PI * 2;
        }

        drawConfetti(c);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

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