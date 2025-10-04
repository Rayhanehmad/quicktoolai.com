import OpenAI from "openai";

// Reference: blueprint:javascript_openai
// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function chatWithAI(message: string, history: Message[] = []): Promise<string> {
  try {
    // Build conversation history
    const messages = [
      {
        role: 'system' as const,
        content: 'You are a helpful AI assistant integrated into a productivity tools website. You help users with calculations, data analysis, text summarization, and questions about using the various tools available. Be concise, friendly, and accurate. When helping with calculations, show your work step by step.'
      },
      ...history.slice(-10).map(msg => ({ role: msg.role, content: msg.content })), // Keep last 10 messages for context
      { role: 'user' as const, content: message }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages,
      max_completion_tokens: 500,
    });

    return response.choices[0].message.content || 'I apologize, but I couldn\'t generate a response. Please try again.';
  } catch (error) {
    console.error('AI Chat Error:', error);
    throw new Error('Failed to get AI response. Please ensure your API key is configured correctly.');
  }
}

export async function analyzeText(text: string, analysisType: 'summary' | 'sentiment' | 'keywords'): Promise<any> {
  try {
    let prompt = '';
    let systemMessage = '';

    if (analysisType === 'summary') {
      systemMessage = 'You are a text summarization expert. Provide concise, accurate summaries.';
      prompt = `Please summarize the following text concisely while maintaining key points:\n\n${text}`;
    } else if (analysisType === 'sentiment') {
      systemMessage = 'You are a sentiment analysis expert. Analyze sentiment and provide a rating from 1-5 and confidence 0-1. Respond with JSON: { "rating": number, "confidence": number, "explanation": string }';
      prompt = `Analyze the sentiment of this text:\n\n${text}`;
    } else if (analysisType === 'keywords') {
      systemMessage = 'You are a keyword extraction expert. Extract the most important keywords and phrases. Respond with JSON: { "keywords": string[] }';
      prompt = `Extract the main keywords and key phrases from this text:\n\n${text}`;
    }

    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: prompt }
      ],
      response_format: analysisType !== 'summary' ? { type: "json_object" } : undefined,
      max_completion_tokens: 300,
    });

    const content = response.choices[0].message.content || '';
    
    if (analysisType === 'summary') {
      return { summary: content };
    }
    
    return JSON.parse(content);
  } catch (error) {
    console.error('Text Analysis Error:', error);
    throw new Error('Failed to analyze text.');
  }
}
