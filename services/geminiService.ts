import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found. AI features may not work.");
    }
    client = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });
  }
  return client;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const ai = getClient();
    const model = 'gemini-2.5-flash'; 
    
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Maaf, saya tidak dapat memproses permintaan saat ini.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Terjadi kesalahan saat menghubungi asisten pintar. Silakan coba lagi nanti.";
  }
};