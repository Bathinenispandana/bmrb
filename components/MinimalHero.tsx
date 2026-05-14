export default function MinimalHero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 md:pb-32">
      <div className="section-container max-w-4xl">
        <div className="text-center space-y-8 md:space-y-12">
          <div className="space-y-6">
            <p className="text-sm tracking-widest text-foreground-secondary uppercase">
              Market Research Excellence
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground tracking-tight">
              Comprehensive market research for informed business decisions
            </h1>

            <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
              Transform your business with data-driven insights. We provide in-depth market analysis, consumer research, and strategic intelligence tailored to your industry.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href="#portfolio"
              className="px-8 py-4 bg-accent text-white font-semibold text-center hover:bg-accent-dark transition-all duration-300 hover:-translate-y-1"
            >
              View Our Work
            </a>
            <a 
              href="/contact-us"
              className="px-8 py-4 border-2 border-foreground text-foreground font-semibold text-center hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 pt-12 md:pt-16 border-t border-neutral-200 mt-12 md:mt-16">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">25+</div>
              <p className="text-sm text-foreground-secondary">Years Experience</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">500+</div>
              <p className="text-sm text-foreground-secondary">Projects</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-foreground">100+</div>
              <p className="text-sm text-foreground-secondary">Researchers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
