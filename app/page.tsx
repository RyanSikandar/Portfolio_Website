import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-zinc-800 text-white h-screen overflow-scroll snap-y z-0 snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar scrollbar-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About Section */}
      <section id='about' className="snap-center">
        <About />
      </section>

      {/* Work Experience */}

      <section id='experience' className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section className="snap-start" id="contact">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer justify-center items-center flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F7AB0A" className="w-10 h-10">
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
          </svg>


        </footer>
      </Link>
    </div>
  );
}
