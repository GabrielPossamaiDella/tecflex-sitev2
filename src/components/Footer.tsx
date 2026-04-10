import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos" },
  { label: "Assistência", href: "/assistencia" },
  { label: "Contato", href: "/contato" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-xl font-bold !text-primary-foreground mb-4">
              Tecflex
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Referência em venda e assistência de máquinas de costura industriais de alta performance em Criciúma/SC.
            </p>
            <p className="text-xs text-primary-foreground/40 mt-4">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold !text-primary-foreground mb-4">Links</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-heading font-semibold !text-primary-foreground mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Rua Exemplo, 123 – Criciúma, SC – Brasil
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                (48) 3XXX-XXXX
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                contato@tecflex.com.br
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Tecflex | Excelência em Costura Industrial. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
