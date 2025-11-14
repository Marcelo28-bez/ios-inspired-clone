import { TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import prodadosLogo from "@/assets/prodados-logo.png";
const Hero = () => {
  return <section id="inicio" className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <img src={prodadosLogo} alt="PRODADOS" className="h-48 md:h-64 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Insights que Impulsionam Estratégias








          <br />Dados em Resultados
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Há 25 anos encurtando os caminhos entre a necessidade do cliente e a estratégia da empresa, gerando vendas e rentabilidade através de pesquisas de mercado e trade marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-6">
              Solicitar Proposta →
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl text-base px-8 py-6 border-white/30 text-slate-50 bg-slate-500 hover:bg-slate-400">
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-card rounded-2xl p-8 smooth-transition hover:scale-105 group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 mx-auto icon-3d group-hover:bg-white/20 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-white/80 text-lg">Anos de Experiência</div>
            </div>

            <div className="glass-card rounded-2xl p-8 smooth-transition hover:scale-105 group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 mx-auto icon-3d group-hover:bg-white/20 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-white/80 text-lg">Projetos Realizados</div>
            </div>

            <div className="glass-card rounded-2xl p-8 smooth-transition hover:scale-105 group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 mx-auto icon-3d group-hover:bg-white/20 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-white/80 text-lg">Foco em Resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;