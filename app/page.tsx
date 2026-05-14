import MinimalHero from "@/components/MinimalHero";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import DetailedServices from "@/components/DetailedServices";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <MinimalHero />
      <PortfolioShowcase />
      <DetailedServices />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

function CTA() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="section-container">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your business with data-driven insights?
          </h2>
          <p className="text-xl text-background/80 mb-10 leading-relaxed">
            Let&apos;s discuss how BMRB can support your strategic objectives through comprehensive market research.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold hover:bg-accent-dark transition-all duration-300 hover:-translate-y-1"
          >
            Schedule Consultation
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
