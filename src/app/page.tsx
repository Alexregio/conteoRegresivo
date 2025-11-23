import Conteo2026 from "@/componets/contador";
import FireworksDisplay from "@/componets/FireworksDisplay";
export default function Home() {
  return (
    <div className="flex justify-center mt-20">
      <FireworksDisplay/>
      <Conteo2026/>
    </div>
  );
}
