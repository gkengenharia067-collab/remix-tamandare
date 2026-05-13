## Objetivo

Personalizar a mensagem pré-preenchida em cada botão que abre o WhatsApp, de acordo com o contexto onde ele aparece, e trocar o ícone SVG do botão flutuante pela imagem do logo oficial do WhatsApp.

## Mapeamento de mensagens por botão

Todos abrem `https://wa.me/5567996081588?text=...` com a mensagem específica:

| Local | Texto do botão | Mensagem pré-preenchida |
|---|---|---|
| Menu mobile | "Agendar pelo WhatsApp" | "Olá! Quero agendar um atendimento na Cãotainer 🐾" |
| Hero (topo) | "Agendar pelo WhatsApp" | "Olá! Vim pelo site e gostaria de agendar um horário para meu pet 🐾" |
| Cards de serviços (já existentes em `WHATSAPP_PROD`) | "Quero este serviço" | "Olá! Vim pelo site e tenho interesse no serviço: {nome do serviço} 🐾" |
| Seção Contato | "Falar no WhatsApp" | "Olá! Vim pelo site e gostaria de mais informações sobre a Cãotainer 🐾" |
| CTA Final | "Falar no WhatsApp" | "Olá! Quero agendar uma visita para meu pet na Cãotainer 🐾" |
| Footer (ícone social) | aria "WhatsApp" | mesma do contato |
| Botão flutuante | — | "Olá! Vim pelo site da Cãotainer e quero falar com vocês 🐾" |

Observação: para os cards de serviços, a mensagem incluirá dinamicamente o nome do serviço (ex.: "Banho & Tosa", "Consulta Veterinária"), substituindo o link único atual `WHATSAPP_PROD`.

## Botão flutuante — logo do WhatsApp

- Substituir o SVG inline atual pela imagem oficial do logo do WhatsApp (PNG com fundo transparente), gerada e salva em `src/assets/whatsapp-logo.png`.
- Manter: posição fixa canto inferior direito, círculo verde de fundo, animação de pulso (`animate-pulse-ring`) e hover com leve scale.
- Tamanho da imagem: ocupar ~60% do círculo (assim como o ícone atual), com `alt="WhatsApp"`.

## Detalhes técnicos

- Em `src/pages/Index.tsx`, criar um helper `waLink(msg: string)` que retorna `https://wa.me/5567996081588?text=` + `encodeURIComponent(msg)`.
- Remover as constantes `WHATSAPP_MSG` e `WHATSAPP_PROD` e usar `waLink(...)` em cada CTA com sua mensagem.
- Para os cards de serviços, passar o nome do serviço para `waLink` no `map`.
- Importar `whatsappLogo from "@/assets/whatsapp-logo.png"` e usar `<img>` no botão flutuante no lugar do `<svg>`.
- Nenhuma mudança de layout, cores ou estrutura — apenas links e o ícone do botão flutuante.

## Arquivos afetados

- `src/pages/Index.tsx` (mensagens + troca do ícone flutuante)
- `src/assets/whatsapp-logo.png` (novo, gerado)
