import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { ProjectShowcase } from "@/components/ProjectShowcase";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col">
        <HeroSection />
        <ProjectShowcase />
      </div>
      <Footer />
    </main>
  );
}
