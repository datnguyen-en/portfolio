import { MacNavbar } from "@/components/mac-navbar";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Resume } from "@/components/resume";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <MacNavbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
