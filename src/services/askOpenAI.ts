// src/services/askOpenAI.ts

let pdfText = '';

export const setPdfText = (text: string) => {
  pdfText = text;
};

export const askOpenAI = async (question: string): Promise<string> => {
  // You can replace this with actual OpenAI logic later
  return `You asked: "${question}" based on PDF text: "${pdfText.substring(0, 100)}..."`;
};
