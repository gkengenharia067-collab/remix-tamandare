import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Menu, Phone, MapPin, Star, Stethoscope, Scissors, ShoppingBag, PawPrint,
  Heart, Zap, Sparkles, ChevronRight, MessageCircle, Instagram, Facebook, Clock, X, CheckCircle2
} from "lucide-react";
import { useState, useEffect } from "react";
import heroPets from "@/assets/hero-pets.jpg";
import prodRacao from "@/assets/prod-racao.png";
import prodBrinquedo from "@/assets/prod-brinquedo.png";
import prodAcessorio from "@/assets/prod-acessorio.png";
import prodHigiene from "@/assets/prod-higiene.png";
import insta1 from "@/assets/instagram-1.jpg";
import insta2 from "@/assets/instagram-2.jpg";
import insta3 from "@/assets/instagram-3.jpg";
import insta4 from "@/assets/instagram-4.jpg";
import g5 from "@/assets/bird.png";
import g6 from "@/assets/cat.png";
import whatsappLogo from "@/assets/whatsapp-logo.png";

// Updated WhatsApp and Contact Info
const PHONE_NUMBER = "556733050580";
const PHONE_DISPLAY = "(67) 3305-0580";
const ADDRESS_STREET = "Av. Tamandaré, 2957 - Vila Planalto";
const ADDRESS_CITY = "Campo Grande - MS, 79117-010";
const INSTAGRAM_HANDLE = "maranathapetshop";
const INSTAGRAM_URL = "https://www.instagram.com/maranathapetshop";
const FACEBOOK_URL = "https://www.facebook.com/search/top?q=maranatha%20pet%20shop";

const waLink = (msg: string) => `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;

const WA_MSGS = {
  hero: "Olá! Vim pelo site e gostaria de agendar um horário para meu pet.",
  menu: "Olá! Quero agendar um atendimento no Pet Shop Tamandaré.",
  contato: "Olá! Vim pelo site e gostaria de mais informações.",
  ctaFinal: "Olá! Quero agendar uma visita para meu pet.",
  floating: "Olá! Vim pelo site e quero falar com vocês.",
  servico: (nome: string) => `Olá! Vim pelo site e tenho interesse no serviço: ${nome}.`,
  produto: (nome: string) => `Olá! Vim pelo site e quero informações sobre: ${nome}.`,
};

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Clínica", href: "#clinica" },
  { label: "Banho & Tosa", href: "#banho" },
  { label: "Contato", href: "#contato" },
];

const categorias = [
  { icon: Stethoscope, title: "Clínica Veterinária", desc: "Consultas, vacinas e check-ups completos", color: "primary" },
  { icon: Scissors, title: "Estética Animal", desc: "Banho e tosa com produtos premium", color: "secondary" },
  { icon: ShoppingBag, title: "Pet Shop", desc: "As melhores marcas de ração e acessórios", color: "primary" },
  { icon: Heart, title: "Farmácia Pet", desc: "Medicamentos e suplementos essenciais", color: "secondary" },
];

const diferenciais = [
  { icon: Star, title: "Tradição e Confiança", desc: "Anos de experiência cuidando de pets com excelência." },
  { icon: Stethoscope, title: "Estrutura Completa", desc: "Consultórios modernos e centro estético equipado." },
  { icon: Heart, title: "Atendimento Humanizado", desc: "Equipe apaixonada que trata seu pet como parte da família." },
  { icon: CheckCircle2, title: "Produtos Premium", desc: "Trabalhamos apenas com as melhores marcas do mercado." },
];

const produtos = [
  { name: "Nutrição Premium", desc: "Rações Super Premium e dietas clínicas.", img: prodRacao, badge: "Mais vendidos" },
  { name: "Acessórios Exclusivos", desc: "Coleiras, guias e caminhas confortáveis.", img: prodAcessorio, badge: "Lançamento" },
  { name: "Brinquedos Interativos", desc: "Diversão e estímulo mental para seu pet.", img: prodBrinquedo, badge: "Novidade" },
  { name: "Higiene e Beleza", desc: "Shampoos e perfumes profissionais.", img: prodHigiene, badge: "Essencial" },
];

// Using existing assets for the gallery to simulate Instagram feed
const galeria = [
  { img: insta1 || heroPets, likes: "124" }, 
  { img: insta2 || g5, likes: "89" }, 
  { img: insta3 || g6, likes: "210" }, 
  { img: insta4 || heroPets, likes: "156" }
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Top bar - Premium look */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm font-medium">
        <div className="container flex items-center justify-between py-2.5 gap-3">
          <div className="flex items-center gap-2 truncate opacity-90 hover:opacity-100 transition-opacity">
            <MapPin className="w-4 h-4 text-secondary shrink-0" />
            <span className="truncate">{ADDRESS_STREET} — Campo Grande/MS</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 opacity-90 hover:text-secondary hover:opacity-100 transition-colors">
              <Instagram className="w-3.5 h-3.5" /> @{INSTAGRAM_HANDLE}
            </a>
            <a href={`tel:+${PHONE_NUMBER}`} className="flex items-center gap-1 opacity-90 hover:text-secondary hover:opacity-100 transition-colors font-semibold">
              <Phone className="w-3.5 h-3.5" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm py-3" : "bg-background py-4 lg:py-5"}`}>
        <div className="container flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
            <div className="w-12 h-12 rounded-xl bg-primary grid place-items-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <PawPrint className="w-6 h-6 text-secondary" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl sm:text-2xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                Pet Shop <span className="text-primary">Tamandaré</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-0.5">Grupo Maranatha</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-2 text-sm font-semibold">
            {nav.map(i => (
              <a key={i.label} href={i.href} className="px-4 py-2 rounded-full hover:bg-secondary/20 hover:text-primary transition-colors">{i.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex h-11 px-6 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <a href={waLink(WA_MSGS.menu)} target="_blank" rel="noopener noreferrer">
                Agendar Horário
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden rounded-full hover:bg-secondary/20" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
              <Menu className="w-6 h-6 text-primary" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fade-in">
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-background shadow-2xl p-6 flex flex-col animate-slide-in-right">
            <div className="flex justify-between items-center mb-8">
              <div className="font-display font-black text-xl text-primary">Menu</div>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary/20" onClick={() => setMenuOpen(false)} aria-label="Fechar">
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="flex flex-col gap-2 flex-1">
              {nav.map(i => (
                <a key={i.label} href={i.href} onClick={() => setMenuOpen(false)} className="px-4 py-3.5 rounded-xl hover:bg-secondary/20 font-semibold text-lg transition-colors">{i.label}</a>
              ))}
            </nav>
            <div className="pt-6 border-t border-border mt-auto">
              <Button asChild className="w-full h-14 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base mb-4 shadow-md">
                <a href={waLink(WA_MSGS.menu)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" /> Falar no WhatsApp
                </a>
              </Button>
              <div className="flex justify-center gap-4 text-muted-foreground">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors"><Facebook className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative bg-soft overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 sm:py-20 lg:py-28 relative">
          <div className="relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start animate-fade-in-up">
            <Badge className="bg-secondary/20 text-primary hover:bg-secondary/30 mb-6 px-4 py-2 rounded-full font-bold border-none transition-colors">
              <Star className="w-3.5 h-3.5 mr-1.5 fill-primary" /> Excelência em Cuidado Animal
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6 text-foreground tracking-tight">
              A clínica que o seu <span className="text-primary relative whitespace-nowrap">
                melhor amigo
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
              </span> merece.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-medium">
              No Pet Shop Tamandaré, unimos infraestrutura moderna e amor genuíno para oferecer o melhor atendimento veterinário e estético de Campo Grande.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-pop text-base font-bold transition-all hover:-translate-y-1">
                <a href={waLink(WA_MSGS.hero)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" /> Agendar Atendimento
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 border-border text-foreground hover:border-primary hover:bg-transparent hover:text-primary text-base font-bold transition-all">
                <a href="#servicos">Conhecer Serviços</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-10 text-sm font-semibold text-muted-foreground pt-6 border-t border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center"><Stethoscope className="w-4 h-4 text-primary" /></div>
                <span>Clínica Equipada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center"><Scissors className="w-4 h-4 text-primary" /></div>
                <span>Estética Premium</span>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto animate-fade-in-up stagger-2">
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl opacity-50 animate-float-slow" />
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-pop border-8 border-background">
              {/* Note: Using existing hero image, recommended to replace with actual store photo */}
              <img src={heroPets} alt="Profissional cuidando de um pet no Pet Shop Tamandaré" className="w-full h-full object-cover" width={800} height={1000} />
              
              {/* Overlay gradient for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-background rounded-2xl p-4 shadow-card flex items-center gap-4 animate-float-slow" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 rounded-xl bg-secondary/20 grid place-items-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-sm">Fácil Acesso</div>
                <div className="text-xs text-muted-foreground font-medium">Av. Tamandaré</div>
              </div>
            </div>
            
            <div className="absolute top-10 -right-4 sm:top-12 sm:-right-8 bg-primary text-primary-foreground rounded-2xl p-4 shadow-pop animate-float-slow" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 mb-1">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-3.5 h-3.5 fill-secondary text-secondary" />)}
              </div>
              <div className="font-bold text-sm">Alta Aprovação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">Por que escolher o <span className="text-primary">Tamandaré</span>?</h2>
            <p className="text-muted-foreground text-lg font-medium">Estrutura completa e equipe qualificada para garantir a saúde e a felicidade do seu pet.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {diferenciais.map((d, index) => (
              <div key={d.title} className={`group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up stagger-${index + 1}`}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 grid place-items-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <d.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 sm:py-24 bg-soft border-y border-border/50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary rounded-full px-4 py-1.5 font-bold uppercase tracking-wider text-xs bg-primary/5">Nossas Especialidades</Badge>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Soluções completas para <br className="hidden md:block"/><span className="text-primary">cada momento.</span></h2>
            </div>
            <Button asChild variant="ghost" className="text-primary font-bold hover:bg-primary/10 hover:text-primary">
              <a href={waLink(WA_MSGS.menu)} target="_blank" rel="noopener noreferrer">
                Falar com especialista <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categorias.map((c, i) => {
              const isPrimary = c.color === "primary";
              return (
                <a
                  key={c.title}
                  href={waLink(WA_MSGS.servico(c.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative rounded-[2rem] p-8 sm:p-10 shadow-sm border border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden flex items-start gap-6 bg-card`}
                >
                  <div className={`w-16 h-16 rounded-2xl shrink-0 grid place-items-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ${
                    isPrimary ? "bg-primary/10 text-primary" : "bg-secondary/20 text-primary"
                  }`}>
                    <c.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{c.title}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">{c.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sobre a Clínica */}
      <section id="clinica" className="py-20 sm:py-28 bg-background overflow-hidden">
        <div className="container relative">
          <div className="relative rounded-[3rem] bg-primary p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-pop">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20" />
            
            <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="text-primary-foreground order-2 lg:order-1">
                <Badge className="bg-secondary text-primary-foreground hover:bg-secondary mb-6 rounded-full font-bold px-4 py-1.5 uppercase tracking-wider text-xs border-none">
                  A Clínica Maranatha
                </Badge>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-6">
                  Referência em <span className="text-secondary">medicina veterinária</span> e estética animal.
                </h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 font-medium">
                  Com infraestrutura de ponta e profissionais altamente capacitados, garantimos diagnósticos precisos, tratamentos eficazes e um cuidado estético que respeita o bem-estar do seu pet.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {["Consultas Especiais", "Vacinação Importada", "Centro Estético", "Farmácia Completa"].map(t => (
                    <span key={t} className="px-4 py-2 rounded-full bg-white/10 text-sm font-semibold backdrop-blur-md border border-white/10">{t}</span>
                  ))}
                </div>
                <Button asChild size="lg" className="h-14 px-8 rounded-full bg-secondary text-secondary-foreground hover:bg-white hover:text-primary font-bold transition-colors shadow-md">
                  <a href={waLink(WA_MSGS.contato)} target="_blank" rel="noopener noreferrer">
                    Agendar uma Avaliação
                  </a>
                </Button>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src={heroPets} alt="Estrutura veterinária" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loja / Produtos */}
      <section id="banho" className="py-16 sm:py-24 bg-soft">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">Pet Shop <span className="text-primary">Completo</span></h2>
            <p className="text-muted-foreground text-lg font-medium">Tudo que seu pet precisa em um só lugar. Trabalhamos com as melhores marcas do mercado.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {produtos.map((p, i) => (
              <div key={i} className="group bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div className="relative aspect-square rounded-xl bg-soft/50 mb-6 overflow-hidden grid place-items-center border border-border/50">
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground hover:bg-secondary rounded-full font-bold z-10 text-[10px] sm:text-xs border-none shadow-sm">{p.badge}</Badge>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={250}
                    height={250}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1 font-medium">{p.desc}</p>
                <Button asChild variant="outline" className="w-full h-12 rounded-xl border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-bold transition-colors">
                  <a href={waLink(WA_MSGS.produto(p.name))} target="_blank" rel="noopener noreferrer">Consultar Valor</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed / Galeria */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">Acompanhe nosso <span className="text-primary">dia a dia</span></h2>
              <p className="text-muted-foreground font-medium">Siga-nos no Instagram e veja a alegria de quem passa por aqui!</p>
            </div>
            <Button asChild className="rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 text-white hover:opacity-90 font-bold border-none shadow-md">
               <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" /> Siga @{INSTAGRAM_HANDLE}
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {galeria.map((item, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-pop transition-all duration-300 block bg-muted"
              >
                <img src={item.img} alt={`Post do Instagram ${i + 1}`} loading="lazy" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-2">
                  <Heart className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 fill-white" />
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">{item.likes}</span>
                </div>
                {/* Instagram icon top right */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-80">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Localização e Contato */}
      <section id="contato" className="py-16 sm:py-24 bg-soft border-t border-border/50">
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-[2.5rem] overflow-hidden shadow-card min-h-[400px] lg:h-full border-8 border-background relative">
            <iframe
              title="Mapa Pet Shop Tamandaré"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3738.455648834614!2d-54.6225439!3d-20.4464166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e66c72d6ffb5%3A0x6b107e33555d491f!2sAv.%20Tamandar%C3%A9%2C%202957%20-%20Vila%20Planalto%2C%20Campo%20Grande%20-%20MS%2C%2079117-010!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          <div className="order-1 lg:order-2 bg-card rounded-[2.5rem] p-8 sm:p-12 shadow-card border border-border">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-6 border-none px-4 py-1.5 uppercase tracking-wider text-xs font-bold">
              Visite-nos
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-black mb-8 text-foreground">Estamos de portas <span className="text-primary">abertas</span> para você.</h2>
            
            <div className="space-y-6 text-base mb-10">
              <div className="flex gap-4 p-4 rounded-2xl bg-soft border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-1">Endereço Principal</div>
                  <div className="text-muted-foreground font-medium text-sm leading-snug">{ADDRESS_STREET}<br/>{ADDRESS_CITY}</div>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-2xl bg-soft border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 grid place-items-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-1">Telefone / WhatsApp</div>
                  <a href={`tel:+${PHONE_NUMBER}`} className="text-muted-foreground font-medium hover:text-primary transition-colors block">{PHONE_DISPLAY}</a>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-2xl bg-soft border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 grid place-items-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-1">Horário de Atendimento</div>
                  <div className="text-muted-foreground font-medium text-sm leading-snug">Seg a Sáb: 07h30 às 19h00<br/>Dom: 08h00 às 12h00</div>
                </div>
              </div>
            </div>
            
            <Button asChild size="lg" className="w-full h-14 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md font-bold text-lg">
              <a href={waLink(WA_MSGS.contato)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" /> Iniciar Conversa
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container py-16 sm:py-24">
        <div className="bg-primary rounded-[3rem] p-10 sm:p-16 md:p-20 text-center relative overflow-hidden shadow-pop">
          {/* Decorative elements */}
          <PawPrint className="absolute top-10 left-10 w-24 h-24 text-white/5 -rotate-12" />
          <PawPrint className="absolute bottom-10 right-10 w-32 h-32 text-white/5 rotate-12" />
          <Sparkles className="absolute top-16 right-20 w-12 h-12 text-secondary/30 animate-pulse" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              A saúde do seu pet <span className="text-secondary">em boas mãos.</span>
            </h2>
            <p className="text-white/80 mb-10 text-lg sm:text-xl font-medium">
              Agende agora uma avaliação ou banho e tosa. A equipe do Pet Shop Tamandaré está pronta para receber vocês com todo carinho.
            </p>
            <Button asChild size="lg" className="h-16 px-10 rounded-full bg-secondary text-secondary-foreground hover:bg-white hover:text-primary font-bold text-lg shadow-xl transition-all hover:scale-105">
              <a href={waLink(WA_MSGS.ctaFinal)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-6 h-6" /> Falar no WhatsApp Agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background pt-20 pb-10">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-16">
            <div className="md:col-span-5 lg:col-span-4">
              <a href="#inicio" className="flex items-center gap-3 mb-6 inline-flex">
                <div className="w-12 h-12 rounded-xl bg-primary grid place-items-center">
                  <PawPrint className="w-6 h-6 text-white" />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-2xl font-black text-white">Pet Shop <span className="text-primary">Tamandaré</span></div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold mt-0.5">Grupo Maranatha</div>
                </div>
              </a>
              <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm font-medium">
                Sua clínica veterinária e pet shop de confiança em Campo Grande. Amor, cuidado e excelência profissional para o bem-estar animal.
              </p>
              <div className="flex gap-3">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary text-white grid place-items-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary text-white grid place-items-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 lg:col-span-4 lg:ml-12">
              <h4 className="font-display text-lg font-bold mb-6 text-white">Navegação Rápida</h4>
              <ul className="space-y-4 text-sm font-medium">
                {nav.map(i => (
                  <li key={i.label}>
                    <a href={i.href} className="text-white/70 hover:text-primary transition-colors flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-primary/50" /> {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="font-display text-lg font-bold mb-6 text-white">Contato & Endereço</h4>
              <ul className="space-y-5 text-sm font-medium text-white/70">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 shrink-0 text-primary" /> 
                  <span className="leading-snug">{ADDRESS_STREET}<br/>{ADDRESS_CITY}</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-5 h-5 shrink-0 text-primary" /> 
                  <a href={`tel:+${PHONE_NUMBER}`} className="hover:text-primary transition-colors">{PHONE_DISPLAY}</a>
                </li>
                <li className="flex gap-4">
                  <Clock className="w-5 h-5 shrink-0 text-primary" /> 
                  <span className="leading-snug">Seg a Sáb: 07h30 às 19h00<br/>Dom: 08h00 às 12h00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-xs font-medium text-white/50">
            <div>&copy; {new Date().getFullYear()} Pet Shop Tamandaré (Maranatha). Todos os direitos reservados.</div>
            <div>
              Desenvolvido por{" "}
              <a
                href="https://wa.me/67999222070"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors font-bold"
              >
                Gabriel Cavalcanti
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={waLink(WA_MSGS.floating)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring opacity-50" />
        <span className="relative grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 shadow-whatsapp">
          <img src={whatsappLogo} alt="WhatsApp" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
        </span>
      </a>
    </div>
  );
};

export default Index;
