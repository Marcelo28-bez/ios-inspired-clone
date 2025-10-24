import { Award, Lightbulb, Target, CheckCircle, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Busca contínua pela qualidade e precisão em todas as análises e entregas.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Abertura e proatividade na adoção de novas tecnologias e metodologias para oferecer soluções de ponta.",
  },
  {
    icon: Target,
    title: "Orientação para Resultados",
    description: "Foco em gerar valor real e mensurável para os clientes, impulsionando sua empresa nos mercados.",
  },
  {
    icon: CheckCircle,
    title: "Integridade",
    description: "Atuação ética e transparente em todas as relações e processos, garantindo a privacidade e segurança dos dados.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho em equipe e parceria com clientes para construir soluções conjuntas e eficazes.",
  },
  {
    icon: Zap,
    title: "Adaptabilidade",
    description: "Capacidade de se ajustar rapidamente às mudanças do mercado e às necessidades dos clientes.",
  },
];

const Values = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-8">
            Os princípios que guiam nossa atuação e garantem a excelência em todos os projetos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            const colors = ['icon-purple', 'icon-amber', 'icon-blue', 'icon-teal', 'icon-green', 'icon-orange'];
            const bgColors = ['icon-bg-purple', 'icon-bg-amber', 'icon-bg-blue', 'icon-bg-teal', 'icon-bg-green', 'icon-bg-orange'];
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 smooth-transition hover:scale-[1.02] hover:ios-shadow-lg group"
              >
                <div className={`${bgColors[index]} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${colors[index]}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
