import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    text: "O atendimento do proprietário e de toda a equipe é excelente. Meus pets são sempre muito bem tratados e o preço é super justo. Recomendo com certeza!",
    author: "Eliane Ferreira",
  },
  {
    text: "Levo meu cachorro para o banho e tosa toda semana e o serviço é impecável. Profissionais que realmente amam o que fazem e passam muita confiança.",
    author: "Sérgio Luiz",
  },
  {
    text: "O Pet Shop Tamandaré é um lugar de confiança na Vila Sobrinho. Higiene nota dez e um carinho especial com os animais. Nota mil para vocês!",
    author: "Bianca Moraes",
  },
  {
    text: "Sempre encontro tudo o que preciso na loja, desde rações até acessórios. O atendimento é rápido e muito atencioso. Melhor da região!",
    author: "Patrícia Rezende",
  },
  {
    text: "A entrega em domicílio é super eficiente e o atendimento veterinário é de primeira. Sinto que meu amigão está em boas mãos.",
    author: "Marcelo Oliveira",
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
