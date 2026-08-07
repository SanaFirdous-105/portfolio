import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090B] text-[#F8FAFC] overflow-x-hidden font-sans">
      {/* Dynamic Background Particles */}
      <ParticleBackground />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Banner Section */}
      <Hero />

      {/* Biography Section */}
      <About />

      {/* Skillset Section */}
      <Skills />

      {/* Projects Showcase */}
      <Projects />

      {/* Work History */}
      <Experience />

      {/* Educational Background */}
      <Education />

      {/* Certifications and Badges */}
      <Certificates />

      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}


