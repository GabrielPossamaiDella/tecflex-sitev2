import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const WHATSAPP_NUMBER = "5548999999999";

const Contato = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Nova Cotação - Site Tecflex*%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AMensagem: ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="pt-14 md:pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-primary tracking-[0.2em] uppercase mb-3">
              Fale Conosco
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold max-w-3xl mx-auto leading-tight">
              Entre em Contato
            </h1>
            <p className="mt-6 text-lg text-text-body max-w-2xl mx-auto">
              Solicite uma cotação, agende uma visita técnica ou tire suas dúvidas com nossa equipe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                Solicitar Cotação
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 bg-card border-border/50"
                />
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 bg-card border-border/50"
                />
                <Input
                  type="tel"
                  placeholder="Telefone / WhatsApp"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 bg-card border-border/50"
                />
                <Textarea
                  placeholder="Descreva sua necessidade ou equipamento de interesse..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="bg-card border-border/50"
                />
                <Button variant="whatsapp" size="lg" type="submit" className="w-full gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
                Informações
              </h2>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Endereço", value: "Rua Exemplo, 123 – Criciúma, SC" },
                  { icon: Phone, label: "Telefone", value: "(48) 3XXX-XXXX" },
                  { icon: Mail, label: "E-mail", value: "contato@tecflex.com.br" },
                  { icon: Clock, label: "Horário", value: "Seg–Sex: 08h às 18h" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-muted">{item.label}</p>
                      <p className="font-heading font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="w-full h-64 rounded-xl bg-secondary/60 border border-border/50 flex items-center justify-center">
                <div className="text-center text-text-muted">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm">Mapa Google — Criciúma/SC</p>
                  <p className="text-xs mt-1">Integre o Google Maps aqui</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
