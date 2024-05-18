import About from "@/components/about";
import Divider from "@/components/divider";
import DividerReverse from "@/components/dividerReverse";
import LandingPage from "@/components/landingPage";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import {NextUIProvider} from "@nextui-org/react";


export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex flex-col items-center px-4 border-2 border-red-500">
        <LandingPage />
        <Divider />
        <About />
        <DividerReverse />
        <Projects />
        <Divider />
        <Skills />
      </main>
    </NextUIProvider>
  );
}
