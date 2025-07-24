type VectorEntry = {
  id: string;
  content: string;
  embedding: number[];
};

const vectorStore: VectorEntry[] = [];

export function saveEmbedding(content: string, embedding: number[]) {
  vectorStore.push({
    id: crypto.randomUUID(),
    content,
    embedding,
  });
}

export function findSimilarEmbeddings(queryEmbedding: number[], topK: number = 3): VectorEntry[] {
  function cosineSimilarity(a: number[], b: number[]) {
    const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dot / (magA * magB);
  }

  return vectorStore
    .map(entry => ({
      ...entry,
      score: cosineSimilarity(queryEmbedding, entry.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}