import Conteo2026 from "@/componets/contador";
import FireworksDisplay from "@/componets/FireworksDisplay";
import StarSparkles from "@/componets/StarSparkles";
import SparklesCanvas from "@/componets/Sparkles"
export default function Home() {
  return (
    <div className="flex justify-center bg-black h-screen">
      <SparklesCanvas count={200} />
      <StarSparkles count={40} />
      <Conteo2026 />
    </div>
  );
}
