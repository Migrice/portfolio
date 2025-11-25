// src/app/[lang]/page.tsx
import About from "@/components/About";
import Hero from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7fafc] dark:bg-[#020817]">
      <Navbar />
      <main className="">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}
