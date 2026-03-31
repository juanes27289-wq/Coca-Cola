import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const getFlavorRecommendation = async (mood: string, occasion: string, preference: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: `The user is looking for a Coca-Cola product recommendation.
    Mood: ${mood}
    Occasion: ${occasion}
    Preference: ${preference}
    
    Suggest one of the following: Coca-Cola Original Taste, Coca-Cola Zero Sugar, Coca-Cola Cherry, Coca-Cola Vanilla, or Diet Coke.
    Provide a catchy, brand-aligned reason (max 20 words).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          product: { type: Type.STRING },
          reason: { type: Type.STRING }
        },
        required: ["product", "reason"]
      }
    }
  });

  return JSON.parse(response.text);
};
