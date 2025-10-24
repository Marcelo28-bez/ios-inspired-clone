import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Inovação",
    categoryColor: "bg-green-500/10 text-green-600",
    title: "PRODADOS E INTELIGÊNCIA ARTIFICIAL NA PESQUISA DE MERCADO",
    excerpt: "Como a IA está revolucionando a coleta e análise de dados, proporcionando insights mais precisos e em tempo real para as decisões estratégicas.",
    date: "12 Jan 2025",
    readTime: "4 min",
  },
  {
    category: "Mercado",
    categoryColor: "bg-purple-500/10 text-purple-600",
    title: "Comportamento do Consumidor Pós-Pandemia: O Que Mudou?",
    excerpt: "Análise completa das transformações nos hábitos de consumo brasileiro e como as empresas estão se adaptando às novas demandas.",
    date: "10 Jan 2025",
    readTime: "6 min",
  },
  {
    category: "Estratégia",
    categoryColor: "bg-orange-500/10 text-orange-600",
    title: "Trade Marketing Digital: Maximizando Resultados no E-commerce",
    excerpt: "Estratégias práticas para otimizar a presença digital e acelerar vendas através de análises de mercado e posicionamento estratégico.",
    date: "08 Jan 2025",
    readTime: "4 min",
  },
  {
    category: "Pesquisa",
    categoryColor: "bg-blue-500/10 text-blue-600",
    title: "Metodologias Híbridas: Combinando Pesquisa Quantitativa e Qualitativa",
    excerpt: "Abordagens inovadoras que integram dados quantitativos com insights qualitativos para uma visão 360° do mercado.",
    date: "05 Jan 2025",
    readTime: "5 min",
  },
];

const News = () => {
  return (
    <section id="noticias" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Notícias
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Últimas Tendências em<br />Pesquisa & Desenvolvimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fique atualizado com as principais novidades, tendências e melhores práticas do mercado de pesquisa e trade marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 smooth-transition hover:scale-[1.02] hover:ios-shadow-lg cursor-pointer group"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${article.categoryColor}`}>
                {article.category}
              </span>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary smooth-transition">
                {article.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 icon-teal" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 icon-amber" />
                    {article.readTime} de leitura
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 smooth-transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
