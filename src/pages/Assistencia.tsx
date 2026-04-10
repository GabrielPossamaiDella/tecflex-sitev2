import { motion } from "framer-motion";
import { Wrench, Cpu, Package, ShieldCheck, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Prolongue a vida útil dos seus equipamentos com inspeções regulares, lubrificação e ajustes de precisão programados.",
  },
  {
    icon: Cpu,
    title: "Conserto de Motores e Placas",
    description: "Diagnóstico avançado e reparo de motores direct-drive, servomotores, placas eletrônicas e painéis digitais de todas as marcas.",
  },
  {
    icon: Package,
    title: "Reposição de Peças Originais",
    description: "Amplo estoque de peças originais e compatíveis com envio ágil. Sua produção não pode parar.",
  },
];

const WHATSAPP_NUMBER = "5548999999999";

const Assistencia = () => {
  return (
    <div className="pt-14 md:pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-3">
              Assistência Técnica
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold max-w-3xl mx-auto leading-tight">
              Assistência Técnica Tecflex
            </h1>
            <p className="mt-6 text-lg text-text-body max-w-2xl mx-auto">
              Manutenção especializada e rápida em Criciúma e região.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Nossos Serviços
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-sm text-text-body leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Button
              variant="whatsapp"
              size="xl"
              className="gap-3 text-lg px-10 py-6 animate-pulse hover:animate-none"
              asChild
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, equipe Tecflex! Gostaria de abrir um chamado técnico para manutenção de equipamento.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-6 w-6" />
                Abrir Chamado Técnico via WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 bg-secondary/40">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: ShieldCheck, label: "+20 anos de experiência" },
              { icon: Clock, label: "Atendimento ágil e pontual" },
              { icon: MapPin, label: "Criciúma/SC e região" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <item.icon className="h-8 w-8 text-primary" />
                <span className="font-heading font-semibold">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assistencia;
