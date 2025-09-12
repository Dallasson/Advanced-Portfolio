"use client";
import Image from "next/image";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Clients from "./components/Clients";
import Projects from "./components/projects";
import Sections from "./components/section";
import GetSection from "./components/section";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <div className="flex flex-col bg-[#0d1016] min-h-screen">
      <GetSection
        onAboutClick={() =>
          aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        onServicesClick={() =>
          servicesRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        onProjectsClick={() =>
          projectsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        onContactClick={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <NavBar />

      {/* Sections */}
      <section ref={aboutRef}>
        <About />
      </section>

      <Clients />

      <section ref={servicesRef}>
        <Services />
      </section>

      <section ref={projectsRef}>
        <Projects />
      </section>

      <section ref={contactRef}>
        <div className="text-white text-center py-20">Contact Section</div>
      </section>
    </div>
  );
}
