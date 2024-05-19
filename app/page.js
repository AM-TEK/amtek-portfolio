import About from "@/components/about";
import Contact from "@/components/contact";
import Divider from "@/components/divider";
import DividerReverse from "@/components/dividerReverse";
import LandingPage from "@/components/landingPage";
import Projects from "@/components/projects";
import Skills from "@/components/skills";


export default function Home() {
  return (
      <main className="flex flex-col items-center px-4">
        <LandingPage />
        <Divider />
        <About />
        <DividerReverse />
        <Projects />
        <Divider />
        <Skills />
        <DividerReverse />
        <Contact />
      </main>
  );
}
