import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Quality from "@/components/Quality";
import CTA from "@/components/CTA";
import MetroRail from "@/components/MetroRail";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Quality />
      <CTA />
      <MetroRail />
      <Clients />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
