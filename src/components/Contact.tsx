import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos Transformar Seus Dados em<br />Resultados Extraordinários
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Solicite uma consultoria gratuita e descubra como a PRODADOS pode impulsionar o crescimento do seu negócio através de pesquisas estratégicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="glass-card rounded-2xl p-10 ios-shadow">
            <h3 className="text-2xl font-bold mb-8">Solicitar Proposta</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Nome Completo <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="Seu nome completo"
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    E-mail <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Telefone <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="(85) 99999-9999"
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Segmento da Empresa <span className="text-destructive">*</span>
                  </label>
                  <Select>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Selecione o segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="varejo">Varejo</SelectItem>
                      <SelectItem value="industria">Indústria</SelectItem>
                      <SelectItem value="servicos">Serviços</SelectItem>
                      <SelectItem value="tecnologia">Tecnologia</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Conte-nos sobre seu projeto ou necessidade de pesquisa..."
                  className="rounded-xl min-h-32"
                />
              </div>

              <Button className="w-full rounded-xl py-6 text-base">
                Enviar Solicitação →
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8 ios-shadow">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefones</div>
                    <div className="text-muted-foreground space-y-1">
                      <div>(85) 98136-2242</div>
                      <div>(85) 3261-3444</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">E-mail</div>
                    <div className="text-muted-foreground">
                      prodados@prodadospesquisa.com.br
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Localização</div>
                    <div className="text-muted-foreground">
                      Fortaleza, Ceará - Brasil
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Horário de Atendimento</div>
                    <div className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 ios-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📊</span>
                </div>
                <h4 className="font-bold text-lg">Por que escolher a PRODADOS?</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  25 anos de experiência comprovada
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Tecnologia própria (Sistema Sphinx)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Operação nacional
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Equipe altamente qualificada
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Grandes clientes e cases de sucesso
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
