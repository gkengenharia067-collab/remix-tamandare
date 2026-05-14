import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    text: "Atendimento de excelência e muito cuidado com os nossos pets. O serviço de banho e tosa é impecável, recomendo a todos na região da Vila Sobrinho.",
    author: "@claudia_petlovers",
  },
  {
    text: "Sempre levo meu cachorro ao Pet Shop Tamandaré e ele volta super cheiroso e relaxado. A equipe é muito atenciosa e dedicada ao bem-estar animal.",
    author: "@marcos_silva_cg",
  },
  {
    text: "O melhor lugar para cuidar do seu amigão. Produtos de alta qualidade e um carinho que faz toda a diferença no atendimento.",
    author: "@ana_lucia_viana",
  },
  {
    text: "Profissionais qualificados que realmente amam o que fazem. Minha gatinha foi muito bem tratada na consulta veterinária. Nota dez!",
    author: "@rodrigo_mendes_pet",
  },
  {
    text: "Espaço higienizado, equipe preparada e um atendimento humano incrível. Sou cliente fiel e confio plenamente no cuidado deles.",
    author: "@carol_lima_pets",
  }
];

export const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            A satisfação dos nossos clientes e o bem-estar dos pets são nossa maior recompensa.
          </p>
        </div>

        <div className="relative px-4 sm:px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                  <div className="h-full bg-card border border-border rounded-[2rem] p-8 flex flex-col shadow-sm hover:shadow-card transition-all duration-300 group">
                    <div className="flex items-center gap-1 mb-6 text-secondary">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    
                    <div className="relative flex-1 mb-6">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10 -z-10" />
                      <p className="text-foreground/90 font-medium leading-relaxed italic">
                        "{t.text}"
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border/50">
                      <div className="font-display font-bold text-primary">{t.author}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-1">Cliente Satisfeito</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hidden sm:flex"
            onClick={scrollPrev}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm hover:bg-primary hover:text-primary-foreground hidden sm:flex"
            onClick={scrollNext}
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex justify-center gap-4 mt-10 lg:hidden">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:bg-primary hover:text-primary-foreground"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:bg-primary hover:text-primary-foreground"
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
