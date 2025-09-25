import AudioPlayer from "@/components/AudioPlayer";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen ">
      <Navbar />

      <CustomCursor />

      <ParticlesBackground />

      <section id="home">
        <HeroSection />
        {/* <AboutSection /> */}
        <AudioPlayer />
      </section>
    </main>
  );
}
