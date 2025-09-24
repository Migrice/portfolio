import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import ParticlesBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen ">
      <CustomCursor />

      <ParticlesBackground />
      <HeroSection />
    </main>
  );
}
