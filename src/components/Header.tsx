import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Home, ShoppingBag, Wrench, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoTecflex from "@/assets/logo-tecflex.png";

const navLinks = [
  { label: "Início", href: "/", icon: Home },
  { label: "Produtos", href: "/produtos", icon: ShoppingBag },
  { label: "Assistência", href: "/assistencia", icon: Wrench },
  { label: "Contato", href: "/contato", icon: Mail },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-border/50">
      <div className="container-site flex items-center justify-between h-14 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logoTecflex} alt="Tecflex" className="h-8 md:h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-text-body hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="default" asChild>
            <Link to="/contato">Solicitar Cotação</Link>
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 border-l-0 p-0 bg-transparent [&>button]:text-primary-foreground"
          >
            <div className="h-full glass-mobile-menu flex flex-col">
              <div className="px-6 pt-6 pb-4 border-b border-primary-foreground/10">
                <img src={logoTecflex} alt="Tecflex" className="h-10 w-auto" />
              </div>

              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-primary/15 text-primary"
                          : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      {link.label}
                    </Link>
                  );
                })}

                <div className="mt-6 px-2">
                  <Button variant="default" size="lg" className="w-full" asChild>
                    <Link to="/contato" onClick={() => setOpen(false)}>
                      Solicitar Cotação
                    </Link>
                  </Button>
                </div>
              </nav>

              <div className="px-6 py-5 border-t border-border/30">
                <p className="text-xs text-text-muted text-center leading-relaxed tracking-wide">
                  Tecflex
                  <br />
                  <span className="text-text-muted/60">Excelência em Costura Industrial</span>
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
