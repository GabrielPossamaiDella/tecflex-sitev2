import logoTecflex from "@/assets/logo-tecflex.png";

const partnerBrands = [
  { name: "Jack", highlight: false },
  { name: "Sunspecial", highlight: false },
  { name: "Siruba", highlight: false },
  { name: "Gemsy", highlight: false },
  { name: "Singer", highlight: false },
  { name: "Janome", highlight: false },
];

const BrandCarousel = () => {
  return (
    <section id="marcas" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container-site mb-12 text-center">
        <p className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-3">
          Marcas Parceiras
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Trabalhamos com as Melhores
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-16 px-8 shrink-0">
              <div className="flex items-center gap-3 shrink-0">
                <img src={logoTecflex} alt="Tecflex" className="h-14 w-auto" />
              </div>
              {partnerBrands.map((brand) => (
                <div
                  key={`${setIdx}-${brand.name}`}
                  className="shrink-0 px-6 py-3 rounded-lg border border-border/40 bg-card"
                >
                  <span className="text-lg font-heading font-semibold text-muted-foreground/60">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
