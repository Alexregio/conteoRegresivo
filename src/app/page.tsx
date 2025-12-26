import Conteo2026 from "@/componets/contador";
import FireworksDisplay from "@/componets/FireworksDisplay";
import SparklesCanvas from "@/componets/Sparkles"
export default function Home() {
  return (
    <div className="flex justify-center bg-black h-screen">
      <SparklesCanvas count={200} />
      <FireworksDisplay/>
      <Conteo2026 />
    </div>
  );
}
