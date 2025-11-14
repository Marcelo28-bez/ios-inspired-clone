import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Users, MapPin, Home, Briefcase, GraduationCap } from "lucide-react";

export default function HubPesquisas() {
  const censoCategories = [
    {
      icon: Users,
      title: "População",
      description: "Dados demográficos e distribuição populacional",
      link: "https://censo2022.ibge.gov.br/panorama/indicadores.html?localidade=BR&tema=1"
    },
    {
      icon: Home,
      title: "Domicílios",
      description: "Características dos domicílios brasileiros",
      link: "https://censo2022.ibge.gov.br/panorama/indicadores.html?localidade=BR&tema=1"
    },
    {
      icon: Briefcase,
      title: "Trabalho e Rendimento",
      description: "Informações sobre emprego e renda",
      link: "https://cidades.ibge.gov.br/"
    },
    {
      icon: GraduationCap,
      title: "Educação",
      description: "Níveis de escolaridade e alfabetização",
      link: "https://cidades.ibge.gov.br/"
    },
    {
      icon: MapPin,
      title: "Dados Regionais",
      description: "Informações por estado e município",
      link: "https://cidades.ibge.gov.br/brasil/ce/fortaleza/panorama/"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hub de Pesquisas IBGE
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Acesse dados oficiais do Censo 2022 e outras pesquisas do Instituto Brasileiro de Geografia e Estatística
            </p>
          </div>

          {/* Censo 2022 Highlight */}
          <div className="glass-card ios-shadow-lg rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-3">Censo 2022</h2>
                <p className="text-muted-foreground mb-4">
                  O Censo Demográfico é a principal fonte de informações sobre a situação de vida da população nos municípios e localidades do país. Fornece dados sobre características demográficas, sociais e econômicas da população brasileira.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    size="lg" 
                    className="rounded-xl"
                    onClick={() => window.open('https://censo2022.ibge.gov.br/panorama/', '_blank')}
                  >
                    Acessar Censo 2022
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="rounded-xl"
                    onClick={() => window.open('https://sidra.ibge.gov.br/pesquisa/censo-demografico/demografico-2022/universo', '_blank')}
                  >
                    Ver Base de Dados
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Categorias de Dados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {censoCategories.map((category, index) => {
                const Icon = category.icon;
                const colors = ['icon-green', 'icon-amber', 'icon-blue', 'icon-purple', 'icon-teal'];
                const bgColors = ['icon-bg-green', 'icon-bg-amber', 'icon-bg-blue', 'icon-bg-purple', 'icon-bg-teal'];
                return (
                  <Card 
                    key={index}
                    className="glass-card ios-shadow hover:ios-shadow-lg smooth-transition cursor-pointer group"
                    onClick={() => window.open(category.link, '_blank')}
                  >
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl ${bgColors[index]} flex items-center justify-center mb-4 icon-3d`}>
                        <Icon className={`w-6 h-6 ${colors[index]}`} />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-primary font-medium">
                        Acessar dados
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="glass-card ios-shadow rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Recursos Adicionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">IBGE Educa</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Material educativo sobre o Censo e outras pesquisas do IBGE
                </p>
                <Button 
                  variant="outline" 
                  className="rounded-xl"
                  onClick={() => window.open('https://educa.ibge.gov.br/', '_blank')}
                >
                  Visitar IBGE Educa
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Cidades@</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Informações completas sobre todos os municípios brasileiros
                </p>
                <Button 
                  variant="outline" 
                  className="rounded-xl"
                  onClick={() => window.open('https://cidades.ibge.gov.br/', '_blank')}
                >
                  Acessar Cidades@
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
