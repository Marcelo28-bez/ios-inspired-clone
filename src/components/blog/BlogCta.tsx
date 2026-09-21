import { Button } from "@/components/ui/button";

const BlogCta = () => {
  return (
    <div className="glass-card rounded-2xl p-8 ios-shadow mt-12">
      <h3 className="text-2xl font-bold mb-3">
        Informação ajuda a entender. Pesquisa ajuda a decidir.
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Se sua empresa precisa compreender melhor seus clientes, mercado, concorrentes ou
        pontos de venda, conheça as soluções da ProDados Pesquisa.
      </p>
      <Button asChild size="lg" className="rounded-xl">
        <a href="/#contato">Conheça a ProDados</a>
      </Button>
    </div>
  );
};

export default BlogCta;
