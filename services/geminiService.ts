import { GoogleGenAI } from "@google/genai";
import { Topic } from "../types";
import { STATIC_LESSONS } from "../data/staticLessons";

const ai = new GoogleGenAI({
	apiKey: (import.meta as any).env?.VITE_GEMINI_API_KEY,
});

// Função síncrona agora, pois carrega do arquivo estático
export const getLessonContent = async (topic: Topic): Promise<string> => {
	const content = STATIC_LESSONS[topic.id];

	if (content) {
		return content;
	}

	return `
## Conteúdo em Desenvolvimento

> **Nota:** O conteúdo para o tópico **"${topic.title}"** está sendo finalizado pela nossa equipe editorial.

Por favor, consulte os Módulos 1 a 9, que contêm a maior parte do material essencial sobre Python e Computação Científica.
  `;
};

export const askTutor = async (
	question: string,
	currentContext: string
): Promise<string> => {
	try {
		const model = "gemini-2.5-flash";
		const prompt = `
      Você é um tutor de Python para matemáticos. O aluno está lendo um capítulo sobre este assunto:
      ---
      CONTEXTO DO CAPÍTULO (Resumo):
      ${currentContext.substring(0, 3000)}...
      ---

      PERGUNTA DO ALUNO: "${question}"

      Responda de forma concisa, direta e útil, em Português. Se precisar de código, use blocos python.
      Se a pergunta for sobre matemática pura não relacionada a python, responda brevemente mas tente conectar com Python.
    `;

		const response = await ai.models.generateContent({
			model: model,
			contents: prompt,
		});

		return response.text || "Não entendi sua dúvida.";
	} catch (error) {
		console.error("Tutor error:", error);
		return "Desculpe, estou com dificuldades para processar sua pergunta agora. Verifique sua conexão.";
	}
};
