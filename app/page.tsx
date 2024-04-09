import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-800 text-white h-screen overflow-scroll snap-y z-0 snap-mandatory">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

        {/* About Section */}
      <section id='about' className="snap-center">
        <About/>
      </section>
    </div>
  );
}
