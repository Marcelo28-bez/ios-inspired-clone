import { TrendingUp, ShoppingCart, PieChart, Activity, RefreshCw, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  { icon: TrendingUp, name: "Economia", count: 12 },
  { icon: ShoppingCart, name: "Consumo", count: 8 },
  { icon: PieChart, name: "Mercado", count: 15 },
  { icon: Activity, name: "Tendências", count: 6 },
];

const DataHub = () => {
  return (
    <section id="hub" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Hub de Pesquisas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dados Oficiais e<br />Insights de Mercado
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acesse dados atualizados de órgãos oficiais brasileiros e internacionais, compilados e analisados pela nossa equipe de especialistas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const colors = ['icon-green', 'icon-orange', 'icon-blue', 'icon-purple'];
            const bgColors = ['icon-bg-green', 'icon-bg-orange', 'icon-bg-blue', 'icon-bg-purple'];
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 smooth-transition hover:scale-[1.05] cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${bgColors[index]} w-10 h-10 rounded-xl flex items-center justify-center icon-3d`}>
                    <Icon className={`w-5 h-5 ${colors[index]}`} />
                  </div>
                  <span className="font-semibold text-lg">{category.name}</span>
                </div>
                <div className="text-3xl font-bold text-muted-foreground ml-13">
                  {category.count}
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-10 ios-shadow">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Dados Recentes</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="rounded-xl">
                <RefreshCw className="w-4 h-4 mr-2" />
                Atualizar
              </Button>
              <Button variant="outline" size="sm" className="rounded-xl">
                <Calendar className="w-4 h-4 mr-2" />
                Ver Histórico
              </Button>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold mb-2">Dados indisponíveis temporariamente</p>
            <p className="text-sm text-muted-foreground mb-1">Fonte: Sistema | 14/10/2025</p>
            <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
              N/A
              <span className="text-sm text-green-600 font-normal">↗ Alta</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Erro ao conectar com as fontes de dados. Tente novamente em alguns minutos.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="rounded-xl">
              <Link to="/hub-pesquisas">Acessar Hub Completo de Pesquisas IBGE →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataHub;
