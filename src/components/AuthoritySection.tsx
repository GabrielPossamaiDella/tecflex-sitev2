import { motion } from "framer-motion";
import { Factory, Package, Wrench, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Centro de Usinagem Completo",
    description: "Fabricação e personalização de peças sob demanda com equipamentos CNC de última geração.",
  },
  {
    icon: Package,
    title: "Amplo Estoque de Peças",
    description: "Milhares de componentes prontos para envio imediato. Sua produção nunca para.",
  },
  {
    icon: Wrench,
    title: "Assistência Técnica Especializada",
    description: "Equipe técnica certificada para instalação, manutenção e suporte on-site.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia & Confiança",
    description: "Mais de 20 anos no mercado de Criciúma/SC. Referência regional em máquinas industriais.",
  },
];

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-3">
            Por que a Tecflex
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Estrutura Completa para a sua Indústria
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
