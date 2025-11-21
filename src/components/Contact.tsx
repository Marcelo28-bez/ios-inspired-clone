import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const Contact = () => {
  return <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos Transformar suas Informações em Análises de Resultados Excepcionais</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">Decisões melhores começam com inteligência superior. Agende uma reunião executiva e avance para o próximo nível de estratégia</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="glass-card rounded-2xl p-10 ios-shadow">
            <h3 className="text-2xl font-bold mb-8">Solicitar Proposta</h3>

            <form 
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                try {
                  const response = await fetch("https//:api.staticforms.xyz/submit", {
                  method: "POST",
                  body: formData,
                });

                if (response.ok) {
                  alert("Solicitação enviada com sucesso!");
                  form.reset();
                } else {
                  alert("Ocorreu um erro ao enviar a Solicitaçãp.");
                }
              } catch (error) {
                alert("Erro de conexão. Tente novamente.");
              }
            }}
              className="space-y-6"
            >
              {/* StaticForms required key */}
              <input type="hidden" name="accessKey" value="sf_l9gh1mn16dif34lg6l3i5505" />
              <input type="hidden" name="replyTo" value="email" />
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Nome Completo <span className="text-destructive">*</span>
                  </label>
                  <Input 
                  name="nome"
                  placeholder="Seu nome completo" 
                  className="rounded-xl" 
                  required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    E-mail <span className="text-destructive">*</span>
                  </label>
                  <Input 
                  type="email"
                  name="email" 
                  placeholder="seu@email.com" 
                  className="rounded-xl" 
                  required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Telefone <span className="text-destructive">*</span>
                  </label>
                  <Input
                  name="telefone" 
                  placeholder="(85) 99999-9999" 
                  className="rounded-xl" 
                  required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Segmento da Empresa <span className="text-destructive">*</span>
                  </label>
                  {/*Select não envia automaticamente - precisamos de um hidden */}
                  <Select 
                     onValueChange={(v) => {
                      const hidden = document.getElementById("segment-hidden") as HTMLInputElement | null;
                      if (hidden) hidden.value = v;
                     }}
                     required
                    >
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Selecione o segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Varejo">Varejo</SelectItem>
                      <SelectItem value="Industria">Indústria</SelectItem>
                      <SelectItem value="Servicos">Serviços</SelectItem>
                      <SelectItem value="Tecnologia">Tecnologia</SelectItem>
                      <SelectItem value="Outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* Hidden field that actually gets submitted */}
                  <input type="hidden" id="segment-hidden" name="segment" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Mensagem
                </label>
                <Textarea
                name="mensagem" 
                placeholder="Conte-nos sobre seu projeto ou necessidade de pesquisa..." 
                className="rounded-xl min-h-32" 
                required
                />
              </div>
              <Button type="submit"className="w-full rounded-xl py-6 text-base">
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
                  <div className="icon-bg-blue w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 icon-3d group hover:shadow-[0_0_20px_hsl(var(--icon-blue)/0.3)] transition-all duration-300">
                    <Phone className="w-6 h-6 icon-blue" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefones</div>
                    <div className="text-muted-foreground space-y-1">
                      <div>(85) 98136-2242</div>
                      <div>(85) 3261-3444</div>
                    </div>
                  </div>
                </div>

                <a href="https://wa.me/5585981362242" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300" aria-label="WhatsApp">
                  <MessageCircle className="w-6 h-6 text-white" />
                </a>

                <div className="flex gap-4">
                  <div className="icon-bg-amber w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 icon-3d group hover:shadow-[0_0_20px_hsl(var(--icon-amber)/0.3)] transition-all duration-300">
                    <Mail className="w-6 h-6 icon-amber" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">E-mail</div>
                    <div className="text-muted-foreground">
                      prodados@prodadospesquisa.com.br
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="icon-bg-purple w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 icon-3d group hover:shadow-[0_0_20px_hsl(var(--icon-purple)/0.3)] transition-all duration-300">
                    <MapPin className="w-6 h-6 icon-purple" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Localização</div>
                    <div className="text-muted-foreground">
                      Fortaleza, Ceará - Brasil
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="icon-bg-teal w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 icon-3d group hover:shadow-[0_0_20px_hsl(var(--icon-teal)/0.3)] transition-all duration-300">
                    <Clock className="w-6 h-6 icon-teal" />
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
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;