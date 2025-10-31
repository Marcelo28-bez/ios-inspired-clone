import { BarChart3, Users2 } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Pesquisa de Mercado",
    description: "Análises detalhadas do mercado, concorrência e oportunidades de negócio para tomada de decisão estratégica.",
    items: [
      "Análise Quantitativa",
      "Análise Qualitativa",
      "Segmentação de Mercado",
      "Tendências do Setor",
    ],
  },
  {
    icon: Users2,
    title: "Pesquisa de Consumidor",
    description: "Compreenda profundamente seu público-alvo, comportamentos, preferências e motivações de compra.",
    items: [
      "Perfil do Consumidor",
      "Jornada do Cliente",
      "Satisfação e NPS",
      "Comportamento de Compra",
    ],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Completas em<br />Pesquisa e Trade Marketing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama abrangente de serviços que vão além da pesquisa tradicional, transformando dados em ações concretas de mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const iconColor = index === 0 ? 'icon-blue' : 'icon-teal';
            const iconBg = index === 0 ? 'icon-bg-blue' : 'icon-bg-teal';
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-10 ios-shadow smooth-transition hover:scale-[1.02] group"
              >
                <div className={`${iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 icon-3d`}>
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${iconColor}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
