import { Lightbulb, TrendingUp, Target as TargetIcon, Users } from "lucide-react";
const benefits = [{
  icon: Lightbulb,
  title: "Decisões Baseadas em Dados",
  description: "Elimine suposições e tome decisões estratégicas fundamentadas em evidências sólidas."
}, {
  icon: TrendingUp,
  title: "Aumento de ROI",
  description: "Maximize o retorno sobre investimento com estratégias otimizadas e direcionadas."
}, {
  icon: TargetIcon,
  title: "Vantagem Competitiva",
  description: "Antecipe tendências e mantenha-se à frente da concorrência no mercado."
}, {
  icon: Users,
  title: "Conhecimento do Cliente",
  description: "Compreenda profundamente seu público e desenvolva produtos/serviços mais assertivos."
}];
const Benefits = () => {
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que Contratar uma Empresa de Pesquisa?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">Empresas que investem em pesquisa de mercado têm performance 70% superior e crescem 3x mais rápido que a concorrência.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colors = ['icon-amber', 'icon-green', 'icon-purple', 'icon-teal'];
            const bgColors = ['icon-bg-amber', 'icon-bg-green', 'icon-bg-purple', 'icon-bg-teal'];
            return <div key={index} className="flex gap-6 glass-card rounded-2xl p-8 card-hover-lift group">
                  <div className={`${bgColors[index]} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 icon-3d`}>
                    <Icon className={`w-7 h-7 ${colors[index]}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>;
          })}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 card-hover-lift">
              <div className="flex items-start gap-3 mb-4">
                <div className="icon-bg-green w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 icon-3d">
                  <span className="text-xl">📊</span>
                </div>
                <h4 className="font-bold text-lg">Por que escolher a PRODADOS?</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-green" />
                  25 anos de experiência comprovada
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-blue" />
                  Tecnologia própria
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-purple" />
                  Operação nacional
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-amber" />
                  Equipe altamente qualificada
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-teal" />
                  Grandes clientes e cases de sucesso
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8 card-hover-lift">
              <div className="flex items-start gap-3 mb-4">
                <div className="icon-bg-blue w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 icon-3d">
                  <span className="text-xl">🏢</span>
                </div>
                <h4 className="font-bold text-lg">Clientes que confiam na PRODADOS</h4>
              </div>
              <div className="grid grid-cols-2 gap-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-blue" />
                  Ambev
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-green" />
                  Natura
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-purple" />
                  Nestlé
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-amber" />
                  Itaú
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-teal" />
                  Bradesco
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-blue" />
                  Petrobras
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-green" />
                  Vale
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-purple" />
                  Magazine Luiza
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-amber" />
                  Globo
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full icon-teal" />
                  Carrefour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;