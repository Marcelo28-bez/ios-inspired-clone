import { Lightbulb, TrendingUp, Target as TargetIcon, Users } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Decisões Baseadas em Dados",
    description: "Elimine suposições e tome decisões estratégicas fundamentadas em evidências sólidas.",
  },
  {
    icon: TrendingUp,
    title: "Aumento de ROI",
    description: "Maximize o retorno sobre investimento com estratégias otimizadas e direcionadas.",
  },
  {
    icon: TargetIcon,
    title: "Vantagem Competitiva",
    description: "Antecipe tendências e mantenha-se à frente da concorrência no mercado.",
  },
  {
    icon: Users,
    title: "Conhecimento do Cliente",
    description: "Compreenda profundamente seu público e desenvolva produtos/serviços mais assertivos.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que Contratar uma Empresa de Pesquisa?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empresas que investem em pesquisa de mercado têm performance 70% superior e crescem 3x mais rápido que a concorrência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ['icon-amber', 'icon-green', 'icon-purple', 'icon-teal'];
              const bgColors = ['icon-bg-amber', 'icon-bg-green', 'icon-bg-purple', 'icon-bg-teal'];
              return (
                <div
                  key={index}
                  className="flex gap-6 glass-card rounded-2xl p-8 smooth-transition hover:scale-[1.02] group"
                >
                  <div className={`${bgColors[index]} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 icon-3d`}>
                    <Icon className={`w-7 h-7 ${colors[index]}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
