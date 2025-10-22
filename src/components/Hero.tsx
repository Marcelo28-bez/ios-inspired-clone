import { TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transformando<br />Dados em Resultados
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Há 25 anos encurtando os caminhos entre a necessidade do cliente e a estratégia da empresa, gerando vendas e rentabilidade através de pesquisas de mercado e trade marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-6">
              Solicitar Proposta →
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl text-base px-8 py-6 border-white/30 text-white hover:bg-white/10">
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-card rounded-2xl p-8 smooth-transition hover:scale-105">
              <TrendingUp className="w-12 h-12 mb-4 mx-auto text-white" />
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-white/80 text-lg">Anos de Experiência</div>
            </div>

            <div className="glass-card rounded-2xl p-8 smooth-transition hover:scale-105">
              <Users className="w-12 h-12 mb-4 mx-auto text-white" />
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-white/80 text-lg">Projetos Realizados</div>
            </div>

            <div className="glass-card rounded-2xl p-8 smooth-transition hover:scale-105">
              <Target className="w-12 h-12 mb-4 mx-auto text-white" />
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-white/80 text-lg">Foco em Resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
