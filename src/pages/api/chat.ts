import type { APIRoute } from 'astro';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Instanciar Gemini de forma segura en el backend
const apiKey = import.meta.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message, chatHistory } = await request.json();

    // Validar mensaje vacío
    if (!message || message.trim() === '') {
      return new Response(JSON.stringify({ error: "Mensaje vacío" }), { status: 400 });
    }

    // Configurar modelo
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Preparar el historial en formato Gemini
    const historyParts = chatHistory.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    // Iniciar chat con contexto avanzado de System Instructions
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: `Eres AgroAI, el ingeniero agrónomo asistente exclusivo del sistema de Cuaderno Digital y software de Agreeable Altitude. 
Estás programado para ayudar a los agricultores de España a entender la PAC 2024, el Decreto de Nutrición, el SIEX y los ecorregímenes.
Debes ser:
1. Extremadamente profesional, claro y útil.
2. Directo al grano. Tus respuestas tienen que ser breves (máximo 2 a 3 párrafos).
3. Si alguien te pregunta sobre cómo registrar datos, anímale a pedir un "Diagnóstico Digital" en la web para contratar el servicio.` }]
        },
        {
          role: 'model',
          parts: [{ text: "Comprendido. Soy AgroAI, ingeniero agrónomo virtual. Ayudaré de forma clara, directa y muy profesional, invitando a la digitalización si es el contexto adecuado." }]
        },
        ...historyParts
      ]
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return new Response(JSON.stringify({ 
      error: "Lo siento, ha habido un problema conectando con mi base de conocimientos. Por favor, inténtelo en unos minutos o contacte con soporte técnico." 
    }), { status: 500 });
  }
};
