"use client";
import { useEffect, useState } from "react";

interface TiempoRestante {
    dias: number;
    horas: number;
    minutos: number;
    segundos: number;
}
const Conteo2026 = () => {
    const fechaEvento = new Date("January 1, 2026 00:00:00").getTime();
    const [tiempoRestante, setTiempoRestante] = useState<TiempoRestante>({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
    });

    useEffect(() => {
        const intervalo = setInterval(() => {
            const ahora = new Date().getTime();
            const diferencia = fechaEvento - ahora;

            if (diferencia <= 0) {
                clearInterval(intervalo);
                setTiempoRestante({
                    dias: 0,
                    horas: 0,
                    minutos: 0,
                    segundos: 0,
                });
                alert("¡FELIZ AÑO 2026! 🎉");
                return;
            }

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
            const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
            const segundos = Math.floor((diferencia / 1000) % 60);

            setTiempoRestante({ dias, horas, minutos, segundos });
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div>
            <div className="flex justify-center">
                <img src="/letrero2026.png" alt="2026" className="w-80 h-80" />
            </div>
            <div className="grid grid-cols-4 gap-4 text-center text-orange-500 bg-black p-4 rounded-lg font-digital text-4xl digital-clock">
                <div>
                    <div className="text-sm  mb-1">DÍAS</div>
                    <div>{String(tiempoRestante.dias).padStart(2, "0")}</div>
                </div>
                <div>
                    <div className="text-sm  mb-1">HORAS</div>
                    <div>{String(tiempoRestante.horas).padStart(2, "0")}</div>
                </div>
                <div>
                    <div className="text-sm mb-1">MINUTOS</div>
                    <div>{String(tiempoRestante.minutos).padStart(2, "0")}</div>
                </div>
                <div>
                    <div className="text-sm mb-1">SEGUNDOS</div>
                    <div>{String(tiempoRestante.segundos).padStart(2, "0")}</div>
                </div>
            </div>
        </div>
    );
};

export default Conteo2026;