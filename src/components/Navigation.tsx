import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import prodadosLogo from "@/assets/prodados-logo.png";

const Navigation = () => {
  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:+558598136-2242" className="flex items-center gap-2 hover:opacity-80 smooth-transition">
              <Phone className="w-3.5 h-3.5" />
              (85) 98136-2242
            </a>
            <a href="tel:+55853261-3444" className="flex items-center gap-2 hover:opacity-80 smooth-transition">
              <Phone className="w-3.5 h-3.5" />
              (85) 3261-3444
            </a>
          </div>
          <a href="mailto:prodados@prodadospesquisa.com.br" className="flex items-center gap-2 hover:opacity-80 smooth-transition">
            <Mail className="w-3.5 h-3.5" />
            prodados@prodadospesquisa.com.br
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="sticky top-0 z-50 glass-card ios-shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src={prodadosLogo} alt="PRODADOS Logo" className="h-12" />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="/#inicio" className="text-foreground hover:text-primary smooth-transition font-medium">
                Início
              </a>
              <a href="/#sobre" className="text-foreground hover:text-primary smooth-transition font-medium">
                Sobre
              </a>
              <a href="/#servicos" className="text-foreground hover:text-primary smooth-transition font-medium">
                Serviços
              </a>
              <a href="/hub-pesquisas" className="text-foreground hover:text-primary smooth-transition font-medium">
                Hub de Pesquisas
              </a>
              <a href="/#noticias" className="text-foreground hover:text-primary smooth-transition font-medium">
                Notícias
              </a>
          <Button asChild className="rounded-xl">
            <a href="/#contato">Contato</a>
          </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
