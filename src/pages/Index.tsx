import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Menu, Phone, MapPin, Star, Stethoscope, Scissors, ShoppingBag, PawPrint,
  Heart, Zap, Sparkles, ChevronRight, MessageCircle, Instagram, Facebook, Clock, X, CheckCircle2
} from "lucide-react";
import { useState, useEffect } from "react";
import whatsappLogo from "@/assets/whatsapp-logo.png";

// External Images (Replacing old Cãotainer assets)
const heroPets = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80";
const prodRacao = "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80";
const prodBrinquedo = "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&q=80";
const prodAcessorio = "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?w=400&q=80";
const prodHigiene = "https://images.unsplash.com/photo-1516734212822-43013fa8440c?w=400&q=80";
const insta1 = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80";
const insta2 = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80";
const insta3 = "https://images.unsplash.com/photo-1537151608804-ea2f1fa8c130?w=400&q=80";
const insta4 = "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&q=80";

// Contact Info
const WHATSAPP_NUMBER = "5567992975367";
const WHATSAPP_DISPLAY = "(67) 99297-5367";
const PHONE_FIXED = "(67) 3027-6760";
const ADDRESS_STREET = "Rua Guaratuba, 27 - Vila Sobrinho";
const ADDRESS_CITY = "Campo Grande - MS, 79110-220";
const INSTAGRAM_HANDLE = "petshoptamandarecg";
const INSTAGRAM_URL = "https://www.instagram.com/petshoptamandarecg/";
const FACEBOOK_URL = "https://www.facebook.com/petshoptamandare?locale=pt_BR";

const waLink = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const WA_MSGS = {
  hero: "Olá! Vim pelo site e gostaria de agendar um horário para meu pet.",
  menu: "Olá! Quero agendar um atendimento no Pet Shop Tamandaré.",
  contato: "Olá! Vim pelo site e gostaria de mais informações.",
  ctaFinal: "Olá! Quero agendar uma visita para meu pet.",
  servico: (nome: string) => `Olá! Vim pelo site e tenho interesse no serviço: ${nome}.`,
  produto: (nome: string) => `Olá! Vim pelo site e quero informações sobre: ${nome}.`,
};

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Clínica", href: "#clinica" },
  { label: "Pet Shop", href: "#banho" },
  { label: "Contato", href: "#contato" },
];

const categorias = [
  { icon: Stethoscope, title: "Apoio Veterinário", desc: "Acompanhamento profissional para manter a saúde em dia.", color: "primary" },
  { icon: Scissors, title: "Centro Estético", desc: "Banho, tosa e higiene com o carinho que eles merecem.", color: "secondary" },
  { icon: ShoppingBag, title: "Artigos e Rações", desc: "Variedade em alimentos e acessórios de alta qualidade.", color: "primary" },
  { icon: Heart, title: "Medicamentos", desc: "Farmácia completa para o tratamento do seu pet.", color: "secondary" },
];

const diferenciais = [
  { icon: Star, title: "Qualidade Comprovada", desc: "Produtos selecionados para o bem-estar do seu animal." },
  { icon: Stethoscope, title: "Cuidado Dedicado", desc: "Espaço higienizado e equipe preparada." },
  { icon: Heart, title: "Muito Amor Envolvido", desc: "Tratamos cada pet com o maior respeito e carinho." },
  { icon: Zap, title: "Frete Grátis", desc: "Nas compras acima de R$30,00 a entrega é grátis na região!" },
];

const produtos = [
  { name: "Alimentação Saudável", desc: "As melhores marcas para o desenvolvimento do seu pet.", img: prodRacao, badge: "Destaque" },
  { name: "Acessórios Variados", desc: "Coleiras, guias e caminhas super confortáveis.", img: prodAcessorio, badge: "Lançamento" },
  { name: "Brinquedos Pet", desc: "Opções divertidas para estimular seu amigão.", img: prodBrinquedo, badge: "Novidade" },
  { name: "Cuidados Especiais", desc: "Shampoos e itens de higiene de primeira linha.", img: prodHigiene, badge: "Essencial" },
];

const galeria = [
  { img: insta1, likes: "124" }, 
  { img: insta2, likes: "89" }, 
  { img: insta3, likes: "210" }, 
  { img: insta4, likes: "156" }
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-[10px] sm:text-sm font-medium">
        <div className="container flex flex-wrap items-center justify-center sm:justify-between py-2 sm:py-2.5 gap-2 sm:gap-3">
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span className="truncate max-w-[200px] sm:max-w-none">{ADDRESS_STREET} — CG/MS</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 opacity-90 hover:text-secondary hover:opacity-100 transition-colors">
              <Instagram className="w-3.5 h-3.5" /> <span className="hidden xs:inline">@{INSTAGRAM_HANDLE}</span>
            </a>
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-1 opacity-90 hover:text-secondary hover:opacity-100 transition-colors font-semibold">
              <Phone className="w-3.5 h-3.5" /> <span className="hidden xs:inline">Fixo:</span> {PHONE_FIXED}
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
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mt-0.5">Vila Sobrinho</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-2 text-sm font-semibold">
            {nav.map(i => (
              <a key={i.label} href={i.href} className="px-4 py-2 rounded-full hover:bg-secondary/20 hover:text-primary transition-colors">{i.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex h-11 px-6 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <a href={waLink(WA_MSGS.menu)} target="_blank" rel="noopener noreferrer" aria-label="Agendar horário pelo WhatsApp">
                Agendar Horário
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden rounded-full hover:bg-secondary/20" onClick={() => setMenuOpen(true)} aria-label="Abrir menu de navegação">
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
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                </a>
              </Button>
              <div className="flex justify-center gap-4 text-muted-foreground">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors"><Instagram className="w-6 h-6" /></a>
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
              <Star className="w-3.5 h-3.5 mr-1.5 fill-primary" /> Referência em Campo Grande
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 text-foreground tracking-tight">
              Tudo que seu pet <span className="text-primary relative whitespace-nowrap">
                precisa
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
              </span>
            </h1>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black mb-8 text-foreground tracking-tight">
              pra ficar feliz!
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-medium">
              Oferecemos banho e tosa, atendimento clínico veterinário e uma grande variedade de produtos e rações para o bem-estar do seu animal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-pop text-base font-bold transition-all hover:-translate-y-1">
                <a href={waLink(WA_MSGS.hero)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" /> Fale Conosco
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 border-border text-foreground hover:border-primary hover:bg-transparent hover:text-primary text-base font-bold transition-all">
                <a href="#servicos">Ver Nossos Serviços</a>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10 text-sm font-semibold text-muted-foreground pt-6 border-t border-border/50 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center"><Heart className="w-4 h-4 text-primary" /></div>
                <span>Muito amor e dedicação</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center"><Zap className="w-4 h-4 text-primary" /></div>
                <span>Entrega grátis acima de R$30</span>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto animate-fade-in-up stagger-2">
            <div className="absolute -inset-4 sm:-inset-10 bg-primary/10 rounded-full blur-3xl opacity-50 animate-float-slow" />
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-pop border-8 border-background">
              <img 
                src={heroPets} 
                alt="Cachorro feliz e saudável representando o cuidado do Pet Shop Tamandaré" 
                className="w-full h-full object-cover" 
                width={800} 
                height={1000} 
                fetchpriority="high"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -bottom-4 -left-2 sm:-bottom-8 sm:-left-8 bg-background rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-card flex items-center gap-3 sm:gap-4 animate-float-slow z-20" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-secondary/20 grid place-items-center shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm">Visite-nos</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Vila Sobrinho</div>
              </div>
            </div>
            
            <div className="absolute top-8 -right-2 sm:top-12 sm:-right-8 bg-secondary text-secondary-foreground rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-yellow animate-wag z-20" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-1.5 mb-1">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-primary text-primary" />)}
              </div>
              <div className="font-bold text-xs sm:text-sm">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">A escolha certa <span className="text-primary">para ele</span></h2>
            <p className="text-muted-foreground text-lg font-medium">Tradição, cuidado de verdade e produtos excelentes para quem você mais ama.</p>
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
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary rounded-full px-4 py-1.5 font-bold uppercase tracking-wider text-xs bg-primary/5">Atendimento Completo</Badge>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground">Atenção total para o <br className="hidden md:block"/><span className="text-primary">seu bichinho.</span></h2>
            </div>
            <Button asChild variant="ghost" className="text-primary font-bold hover:bg-primary/10 hover:text-primary">
              <a href={waLink(WA_MSGS.menu)} target="_blank" rel="noopener noreferrer">
                Tirar Dúvidas <ChevronRight className="w-4 h-4 ml-1" />
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
      <section id="clinica" className="py-12 sm:py-24 bg-background overflow-hidden">
        <div className="container relative">
          <div className="relative rounded-[2rem] sm:rounded-[3rem] bg-primary p-6 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-pop">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20" />
            
            <div className="relative grid lg:grid-cols-2 gap-10 sm:gap-20 items-center">
              <div className="text-primary-foreground order-2 lg:order-1 text-center lg:text-left">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-6 rounded-full font-bold px-4 py-1.5 uppercase tracking-wider text-[10px] sm:text-xs border-none">
                  Nossa Missão
                </Badge>
                <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
                  Cuidamos com o <span className="text-secondary">mesmo amor</span> que você.
                </h2>
                <p className="text-primary-foreground/90 text-base sm:text-lg leading-relaxed mb-8 font-medium">
                  Trabalhamos diariamente para promover a qualidade de vida do seu animal, unindo um atendimento ético, acolhedor e focado na felicidade da sua família.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-10">
                  {["Amor", "Higiene", "Confiança", "Saúde"].map(t => (
                    <span key={t} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/10">{t}</span>
                  ))}
                </div>
                <Button asChild size="lg" className="h-14 px-8 rounded-full bg-secondary text-secondary-foreground hover:bg-white hover:text-primary font-bold transition-colors shadow-md w-full sm:w-auto">
                  <a href={waLink(WA_MSGS.contato)} target="_blank" rel="noopener noreferrer">
                    Agendar Horário
                  </a>
                </Button>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white/10 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&q=80" alt="Pet Shop Atendimento" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
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
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90 mb-4 px-4 py-1 font-bold rounded-full">🛍️ A Loja Mais Completa</Badge>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">Acessórios e <span className="text-primary">Rações</span></h2>
            <p className="text-muted-foreground text-lg font-medium">Os melhores produtos do mercado para o seu pet. E lembre-se: entrega sem taxa em compras a partir de R$30 na região!</p>
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
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1 font-medium">{p.desc}</p>
                <Button asChild variant="outline" className="w-full h-12 rounded-xl border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-bold transition-colors">
                  <a href={waLink(WA_MSGS.produto(p.name))} target="_blank" rel="noopener noreferrer">Fazer Pedido</a>
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
              <h2 className="font-display text-3xl sm:text-4xl font-black text-foreground mb-2">Acompanhe no <span className="text-primary">Instagram</span></h2>
              <p className="text-muted-foreground font-medium">Veja a fofura de quem já passou por aqui. Siga nosso perfil!</p>
            </div>
            <Button asChild className="rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-primary text-white hover:opacity-90 font-bold border-none shadow-md">
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
                aria-label={`Ver foto do pet no Instagram com ${item.likes} curtidas`}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-pop transition-all duration-300 block bg-muted"
              >
                <img src={item.img} alt={`Post do Instagram do Pet Shop Tamandaré ${i + 1}`} loading="lazy" width={400} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-2">
                  <Heart className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 fill-white" />
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">{item.likes}</span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-80">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Localização e Contato */}
      <section id="contato" className="py-12 sm:py-24 bg-soft border-t border-border/50">
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-card min-h-[300px] sm:min-h-[400px] h-full border-4 sm:border-8 border-background relative">
            <iframe
              title="Mapa Pet Shop Tamandaré"
              src="https://www.google.com/maps?q=Rua+Guaratuba,+27,+Vila+Sobrinho,+Campo+Grande+-+MS&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          <div className="order-1 lg:order-2 bg-card rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-12 shadow-card border border-border">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-6 border-none px-4 py-1.5 uppercase tracking-wider text-[10px] sm:text-xs font-bold">
              Como Chegar
            </Badge>
            <h2 className="font-display text-2xl sm:text-4xl font-black mb-8 text-foreground">Estamos de portas <span className="text-primary">abertas</span> para você.</h2>
            
            <div className="space-y-4 sm:space-y-6 text-base mb-10">
              <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-soft border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Endereço</div>
                  <div className="text-muted-foreground font-medium text-[11px] sm:text-sm leading-snug">{ADDRESS_STREET}<br/>{ADDRESS_CITY}</div>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-soft border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 grid place-items-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Telefone Fixo / WhatsApp</div>
                  <div className="flex flex-col text-muted-foreground font-medium text-[11px] sm:text-sm mt-1">
                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-primary transition-colors">WhatsApp: {WHATSAPP_DISPLAY}</a>
                    <span className="opacity-80">Fixo: {PHONE_FIXED}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button asChild size="lg" className="w-full h-14 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md font-bold text-base sm:text-lg">
              <a href={waLink(WA_MSGS.contato)} target="_blank" rel="noopener noreferrer" aria-label="Enviar mensagem pelo WhatsApp">
                <MessageCircle className="mr-2 w-5 h-5" /> Enviar Mensagem
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container py-12 sm:py-24">
        <div className="bg-primary rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 md:p-20 text-center relative overflow-hidden shadow-pop">
          <PawPrint className="absolute top-10 left-10 w-24 h-24 text-white/5 -rotate-12" />
          <PawPrint className="absolute bottom-10 right-10 w-32 h-32 text-white/5 rotate-12" />
          <Sparkles className="absolute top-16 right-20 w-12 h-12 text-secondary/50 animate-pulse" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Alegria e cuidado <span className="text-secondary">em um só lugar.</span>
            </h2>
            <p className="text-white/90 mb-10 text-base sm:text-xl font-medium">
              Não perca tempo! Agende o banho e tosa ou a consulta do seu amigão hoje mesmo com a nossa equipe.
            </p>
            <Button asChild size="lg" className="h-16 px-8 sm:px-10 rounded-full bg-secondary text-secondary-foreground hover:bg-white hover:text-primary font-bold text-base sm:text-lg shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
              <a href={waLink(WA_MSGS.ctaFinal)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-6 h-6" /> Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background pt-16 sm:pt-20 pb-10">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-8 mb-12 sm:mb-16">
            <div className="md:col-span-5 lg:col-span-4 text-center md:text-left flex flex-col items-center md:items-start">
              <a href="#inicio" className="flex items-center gap-3 mb-6 inline-flex">
                <div className="w-12 h-12 rounded-xl bg-primary grid place-items-center">
                  <PawPrint className="w-6 h-6 text-white" />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-2xl font-black text-white">Pet Shop <span className="text-primary">Tamandaré</span></div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold mt-0.5">Vila Sobrinho</div>
                </div>
              </a>
              <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm font-medium">
                Sua loja e clínica veterinária de confiança. Tudo o que o seu pet precisa para ser feliz, saudável e bem cuidado.
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
              <h4 className="font-display text-lg font-bold mb-6 text-white">Acesso Rápido</h4>
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
              <h4 className="font-display text-lg font-bold mb-6 text-white">Informações</h4>
              <ul className="space-y-5 text-sm font-medium text-white/70">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 shrink-0 text-primary" /> 
                  <span className="leading-snug">{ADDRESS_STREET}<br/>{ADDRESS_CITY}</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-5 h-5 shrink-0 text-primary" /> 
                  <div className="flex flex-col">
                     <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-primary transition-colors">WhatsApp: {WHATSAPP_DISPLAY}</a>
                     <span>Fixo: {PHONE_FIXED}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-xs font-medium text-white/50">
            <div>&copy; {new Date().getFullYear()} Pet Shop Tamandaré. Todos os direitos reservados.</div>
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
