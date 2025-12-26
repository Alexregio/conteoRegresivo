"use client";

import { div } from "framer-motion/client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedText() {
    const textRef = useRef(null);

    useEffect(() => {
        let frameId;
        let direction = 1;
        let scale = 1;
        let opacity = 1;
        let opacityDirection = -1;

        const animate = () => {
            // Movimiento suave de "sube y baja"
            scale += 0.005 * direction;
            if (scale > 1.1) direction = -1;
            if (scale < 1) direction = 1;

            // Parpadeo suave (opacidad)
            opacity += 0.01 * opacityDirection;
            if (opacity < 0.7) opacityDirection = 1;
            if (opacity > 1) opacityDirection = -1;

            if (textRef.current) {
                textRef.current.style.transform = `scale(${scale.toFixed(3)})`;
                textRef.current.style.opacity = opacity.toFixed(2);
                textRef.current.style.textShadow = `
          0 0 10px rgba(255, 215, 0, ${opacity.toFixed(2)}),
          0 0 20px rgba(255, 215, 0, ${opacity.toFixed(2)}),
          0 0 30px rgba(255, 215, 0, ${opacity.toFixed(2)})
        `;
            }

            frameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div className="mt-20">
            <h1
                ref={textRef}
                style={{
                    color: "#FFD700",
                    fontSize: "4rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: 0,
                    userSelect: "none",
                    cursor: "default",
                }}
            >
                ¡FELIZ AÑO <br />NUEVO!<br />
            </h1>
            <div className="flex justify-center items-center">
                <motion.img
                    src="/Números-dorados-2026.png"
                    alt="2026"
                    className="h-60"
                    animate={{
                        y: [0, -20, 0], // sube y baja
                        rotate: [0, 5, 0], // ligera rotación
                    }}
                    transition={{
                        duration: 3, // duración de cada ciclo
                        repeat: Infinity, // repetir infinitamente
                        repeatType: "loop", // tipo de repetición
                        ease: "easeInOut", // suavidad
                    }}
                />
            </div>
        </div>
    );
}
