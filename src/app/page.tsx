import Scorlldown from "@/components/Scorlldown";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";

export default function Home() {
  return (
    <div className="bg-indigo-950 text-white min-h-screen px-4">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}