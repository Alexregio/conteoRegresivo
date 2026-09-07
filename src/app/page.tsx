import Conteo2027 from "@/componets/contador";
import StarSparkles from "@/componets/StarSparkles";
import SparklesCanvas from "@/componets/Sparkles"
export default function Home() {
  return (
    <div className="flex justify-center bg-black h-screen">
      <SparklesCanvas count={200} />
      <StarSparkles count={40} />
      <Conteo2027 />
    </div>
  );
}
