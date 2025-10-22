const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-1">PRODADOS</div>
            <div className="text-sm text-primary-foreground/80">
              Pesquisa & Insight Hub
            </div>
          </div>

          <div className="text-center md:text-right text-sm text-primary-foreground/80">
            <p>© 2025 PRODADOS. Todos os direitos reservados.</p>
            <p className="mt-1">Transformando dados em resultados há 25 anos.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
