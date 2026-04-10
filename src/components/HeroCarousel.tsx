import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import factoryBg from "@/assets/factory-bg.jpg";
import machineHero from "@/assets/machine-hero.png";

const slides = [
  {
    id: 1,
    type: "video" as const,
    bg: factoryBg,
    title: "A Força Motriz da sua Indústria",
    subtitle: "Máquinas de costura industriais de alta performance para quem exige resultados.",
    cta: "Acessar Vitrine de Produtos",
    ctaHref: "/produtos",
  },
  {
    id: 2,
    type: "clean" as const,
    image: machineHero,
    title: "A Precisão que a sua Produção Exige",
    subtitle: "Tecnologia avançada e assistência técnica completa em Criciúma/SC.",
    cta: "Explorar Equipamentos",
    ctaHref: "/produtos",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden pt-14 md:pt-20">
      <AnimatePresence mode="wait">
        {slide.type === "video" ? (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
            <div className="absolute inset-0 bg-foreground/60" />
            <div className="relative h-full container-site flex flex-col justify-center">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold !text-primary-foreground max-w-3xl leading-tight"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-xl"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="mt-10 flex gap-4"
              >
                <Button variant="hero" size="xl" asChild>
                  <Link to={slide.ctaHref}>{slide.cta}</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-background"
          >
            <div className="relative h-full container-site flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
                <div>
                  <motion.h1
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-6 text-lg md:text-xl text-text-body max-w-md"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="mt-10"
                  >
                    <Button variant="hero" size="xl" asChild>
                      <Link to={slide.ctaHref}>{slide.cta}</Link>
                    </Button>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="hidden lg:flex justify-center"
                >
                  <img
                    src={slide.image}
                    alt="Máquina de Costura Industrial"
                    className="max-h-[500px] w-auto drop-shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-surface/60 backdrop-blur-sm hover:bg-surface/90 transition-colors border border-border/30"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-surface/60 backdrop-blur-sm hover:bg-surface/90 transition-colors border border-border/30"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary" : "w-2 bg-foreground/20"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
