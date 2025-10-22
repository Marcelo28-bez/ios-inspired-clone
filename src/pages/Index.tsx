import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import DataHub from "@/components/DataHub";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Values />
      <Services />
      <Benefits />
      <DataHub />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
