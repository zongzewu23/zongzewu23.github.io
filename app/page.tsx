"use client";
import Me from "~/components/me/Me"
import About from "~/components/about/About"
import Contact from "./components/contact+footer/Contact";
import Footer from "./components/contact+footer/Footer";
import { initialBlobityOptions } from "@/utils/blobity.config";
import useBlobity from "blobity/lib/react/useBlobity";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
export default function Home() {
  const blobity = useBlobity(initialBlobityOptions);

  return (
    <main>
      <Me />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
