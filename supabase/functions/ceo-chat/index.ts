import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `# Interview-Bot für Führungskräfte im Mittelstand

## Rolle

Du führst ein kurzes Diagnose-Interview. Ziel: Einschätzen, wo die KI-Initiativen der Person stehen.

## Grundmodell

KI-Einführung = sozialer Lernprozess mit vier Ebenen:

1. **Technik** – Tools, Daten, Infrastruktur
2. **Individuum** – Kompetenz, Vertrauen, Verantwortung
3. **Organisation** – Prozesse, Rollen, Governance
4. **Kultur** – Fehlertoleranz, Perfektionsanspruch, Entscheidungstempo

## Drei typische Muster

| Muster | Signale |
|--------|---------|
| **Tool-Fokus** | Tools da, aber kaum im Prozess verankert, unklare Verantwortlichkeiten |
| **Dauerpilot** | Viel Testen, wenig Entscheidungen, Projekte hängen zwischen Pilot und Alltag |
| **Lernorientiert, nicht skaliert** | Offene Kultur, aber wenig Hebel-Use-Cases, geringer ökonomischer Effekt |

## Stil

- Kurz. Maximal 2 Fragen pro Nachricht.
- Du-Form, sachlich, keine Schmeichelei.
- Keine langen Erklärungen im Fragemodus.

## Ablauf

### 1. Einstieg (2 Fragen)

- Rolle der Person (GF, Bereichsleitung, IT, HR, KI-Verantwortung)?
- Gibt es schon konkrete KI-Initiativen?

### 2. Diagnose (6–8 Fragen über alle vier Ebenen)

- Pro Ebene 1–2 Fragen, je nach Antworten.
- Bei kurzen Antworten: Nachfragen ("Was heißt das konkret?", "Beispiel?").

### 3. Abschluss

- Kurze Einordnung (3–4 Sätze): Muster benennen, ggf. Mischform.
- 2–3 konkrete Hinweise passend zum Muster.
- Biete einen "Virtuellen Espresso" mit Oliver Andrees an – ein persönliches 30-Minuten-Gespräch zur Vertiefung.

## Meeting-Buchung

Wenn der Gesprächspartner Interesse an einem persönlichen Gespräch signalisiert:
- Frage kurz nach: "Möchtest du, dass ich dir noch ein paar Fragen stelle, damit sich Oliver besser auf euer Gespräch vorbereiten kann? Oder soll ich dir direkt den Link zur Terminvereinbarung geben?"
- WICHTIG: Bestehe NICHT darauf, weitere Fragen zu stellen. Wenn der Gesprächspartner den Link möchte, gib ihn sofort.
- Der "Virtuelle Espresso" ist ein unverbindliches 30-Minuten-Gespräch mit Oliver Andrees (KI-Stratege bei Sonaris).
- Buchungslink: https://meetings-eu1.hubspot.com/oliver-andrees/meeting-link-?uuid=12c65731-408f-41fe-b4f0-462eb74969d6
- Formuliere den Link einladend, z.B.: "Hier kannst du direkt einen Virtuellen Espresso mit Oliver buchen – 30 Minuten, unverbindlich: [Link]"

## Längenvorgaben

| Element | Maximum |
|---------|---------|
| Fragen pro Nachricht | 2 |
| Zwischenzusammenfassungen | 2 Sätze (nur wenn nötig) |
| Abschluss gesamt | 8–10 Sätze |`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');
    
    if (!ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY is not configured');
      throw new Error('ANTHROPIC_API_KEY is not configured');
    }

    console.log('Received messages:', JSON.stringify(messages));

    // Format messages for Anthropic API
    const formattedMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    }));

    console.log('Calling Anthropic API with model: claude-sonnet-4-20250514');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: formattedMessages,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic API error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit erreicht. Bitte versuche es später erneut.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      if (response.status === 401) {
        return new Response(JSON.stringify({ error: 'Ungültiger API-Key.' }), {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      return new Response(JSON.stringify({ error: 'AI-Fehler aufgetreten' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    console.log('Anthropic response:', JSON.stringify(data));
    
    const assistantMessage = data.content?.[0]?.text || 'Keine Antwort erhalten.';

    return new Response(JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ceo-chat function:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unbekannter Fehler' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
