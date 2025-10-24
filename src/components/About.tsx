import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Sobre a PRODADOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            25 Anos Transformando Dados em<br />Estratégias de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A PRODADOS se destaca por sua abrangência de serviços, que vão além da pesquisa de mercado tradicional, incluindo monitoramento, prospecção, planejamento, execução e trade marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          {/* Nossa Missão */}
          <div className="glass-card rounded-2xl p-8 ios-shadow smooth-transition hover:scale-[1.02] group">
            <div className="icon-bg-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 icon-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Existimos para encurtar os caminhos entre a necessidade do cliente e a estratégia da empresa, transformando dados em ações de mercado que geram vendas e rentabilidade.
            </p>
          </div>

          {/* Nossa Visão */}
          <div className="glass-card rounded-2xl p-8 ios-shadow smooth-transition hover:scale-[1.02] group">
            <div className="icon-bg-purple w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 icon-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida como referência em pesquisa de mercado e trade marketing, oferecendo soluções inovadoras que impulsionam o crescimento dos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
