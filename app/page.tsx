import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Header/>
        <section id="hero">
          <Hero/>
        </section>
    </div>
  );
}
