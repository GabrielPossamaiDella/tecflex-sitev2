import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import machine1 from "@/assets/machine-product-1.png";
import machine2 from "@/assets/machine-product-2.png";
import machine3 from "@/assets/machine-product-3.png";
import machine4 from "@/assets/machine-product-4.png";

type Category = "todos" | "tecflex" | "industriais" | "acessorios";

const products = [
  {
    id: 1,
    name: "Tecflex TF-9000 Overloque Industrial",
    description: "Alta velocidade com acabamento perfeito. Ideal para confecções de grande volume.",
    image: machine1,
    isTecflex: true,
    category: "industriais" as Category,
    tag: "Overloque",
  },
  {
    id: 2,
    name: "Tecflex TF-5500 Reta Industrial",
    description: "Precisão milimétrica em costuras retas. Motor direct-drive silencioso.",
    image: machine2,
    isTecflex: true,
    category: "industriais" as Category,
    tag: "Reta",
  },
  {
    id: 3,
    name: "Jack A4 Reta Eletrônica",
    description: "Tecnologia de ponta com painel digital. Corte de linha automático.",
    image: machine3,
    isTecflex: false,
    category: "industriais" as Category,
    tag: "Reta",
  },
  {
    id: 4,
    name: "Sunspecial Galoneira Industrial",
    description: "Costura de cobertura para acabamentos profissionais em malhas.",
    image: machine4,
    isTecflex: false,
    category: "industriais" as Category,
    tag: "Galoneira",
  },
];

const WHATSAPP_NUMBER = "5548999999999";

const ProductCatalog = () => {
  const [activeTab, setActiveTab] = useState<Category>("todos");

  const filtered = products.filter((p) => {
    if (activeTab === "todos") return true;
    if (activeTab === "tecflex") return p.isTecflex;
    if (activeTab === "acessorios") return p.category === "acessorios";
    return p.category === "industriais";
  });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-3">
            Catálogo de Produtos
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Equipamentos de Alta Performance
          </h2>
          <p className="mt-4 text-text-body max-w-2xl mx-auto text-lg">
            Máquinas industriais selecionadas para elevar a produtividade da sua confecção.
          </p>
        </motion.div>

        {/* Tabs / Filters */}
        <div className="flex justify-center mb-12">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as Category)}>
            <TabsList className="bg-secondary/60 p-1 rounded-xl">
              <TabsTrigger value="todos" className="rounded-lg px-5 py-2.5 text-sm font-medium">Todos</TabsTrigger>
              <TabsTrigger value="tecflex" className="rounded-lg px-5 py-2.5 text-sm font-medium">Linha Tecflex</TabsTrigger>
              <TabsTrigger value="industriais" className="rounded-lg px-5 py-2.5 text-sm font-medium">Máquinas Industriais</TabsTrigger>
              <TabsTrigger value="acessorios" className="rounded-lg px-5 py-2.5 text-sm font-medium">Acessórios e Peças</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border ${
                product.isTecflex
                  ? "border-primary/30 hover:border-primary/50"
                  : "border-border/50 hover:border-primary/20"
              }`}
            >
              {product.isTecflex && (
                <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground gap-1 px-3 py-1">
                  <Star className="h-3 w-3" />
                  Nossa Marca
                </Badge>
              )}
              <div className="p-6 flex items-center justify-center h-56 bg-secondary/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-44 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-medium text-primary tracking-wider uppercase">
                  {product.tag}
                </span>
                <h3 className="font-heading font-semibold text-lg leading-snug">
                  {product.name}
                </h3>
                <p className="text-sm text-text-body leading-relaxed">
                  {product.description}
                </p>
                <div className="pt-4">
                  <Button variant="whatsapp" size="sm" className="w-full gap-2" asChild>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, equipe Tecflex! Gostaria de solicitar uma cotação para o equipamento: ${product.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Solicitar Cotação via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-body text-lg">Nenhum produto encontrado nesta categoria.</p>
            <p className="text-text-muted text-sm mt-2">Em breve adicionaremos novos itens.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
