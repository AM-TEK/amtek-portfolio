import About from "@/components/about";
import Divider from "@/components/divider";
import DividerReverse from "@/components/dividerReverse";
import LandingPage from "@/components/landingPage";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 border-2 border-red-500">
      <LandingPage />
      <Divider />
      <About />
      <DividerReverse />
    </main>
  );
}
