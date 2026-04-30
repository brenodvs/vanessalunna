// Helper centralizado para CTAs do WhatsApp com mensagens pré-preenchidas
// e rastreamento de cliques (dataLayer + gtag + console fallback).

export const WHATSAPP_NUMBER = "5581987476681";

export type WhatsAppCTA =
  | "nav_agendar"
  | "hero_whatsapp"
  | "contato_agendar"
  | "service_item"
  | "faq_item"
  | "footer";

const MESSAGES: Record<Exclude<WhatsAppCTA, "service_item">, string> = {
  nav_agendar:
    "Olá Vanessa! Vim pelo site e gostaria de agendar uma avaliação. Pode me ajudar?",
  hero_whatsapp:
    "Olá Vanessa! Conheci seu trabalho pelo site e queria conversar sobre um tratamento para minha pele.",
  contato_agendar:
    "Olá Vanessa! Gostaria de marcar minha avaliação na clínica em Boa Viagem. Quais horários você tem disponíveis?",
  footer:
    "Olá Vanessa! Vim pelo rodapé do site e gostaria de mais informações.",
};

export function buildWhatsAppUrl(cta: WhatsAppCTA, serviceName?: string): string {
  let message: string;
  if (cta === "service_item" && serviceName) {
    message = `Olá Vanessa! Vim pelo site e tenho interesse no procedimento de ${serviceName}. Pode me passar mais informações?`;
  } else if (cta === "service_item") {
    message = "Olá Vanessa! Vim pelo site e gostaria de saber mais sobre os procedimentos.";
  } else {
    message = MESSAGES[cta];
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type TrackWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
};

export function trackWhatsAppClick(cta: WhatsAppCTA, label?: string): void {
  if (typeof window === "undefined") return;
  const w = window as TrackWindow;
  const payload = {
    event: "whatsapp_click",
    cta_id: cta,
    cta_label: label ?? cta,
    destination: "whatsapp",
    timestamp: new Date().toISOString(),
  };
  try {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(payload);
    if (typeof w.gtag === "function") {
      w.gtag("event", "whatsapp_click", {
        cta_id: cta,
        cta_label: label ?? cta,
      });
    }
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info("[track] whatsapp_click", payload);
    }
  } catch {
    /* no-op: tracking nunca deve quebrar o clique */
  }
}

export function handleWhatsAppClick(cta: WhatsAppCTA, label?: string) {
  return () => trackWhatsAppClick(cta, label);
}
