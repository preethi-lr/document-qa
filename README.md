# 📄 Document Q&A System — Wolken Software AI Engineer Assessment

This project is a document-based Question & Answering system developed as part of the Wolken Software AI Engineer Assessment. Users can upload PDF documents and ask questions about the content. The system extracts text, embeds it using OpenAI embeddings, stores it in Odrant (a vector database), and uses the Vercel AI SDK and OpenAI LLMs to generate intelligent responses.

---

## 🚀 Features

- 📤 Upload PDF documents.
- 📚 Extract and embed text from documents.
- 🧠 Store and query document embeddings using Odrant.
- 💬 Ask questions and get answers based on uploaded PDF content.
- 🧩 Built using the **MCP (Model-Controller-Provider)** pattern for modular design.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **Node.js** | Backend runtime |
| **TypeScript** | Type safety |
| **Express.js** | API routing |
| **Multer** | PDF upload |
| **pdf-parse** | PDF text extraction |
| **OpenAI API** | Embeddings + GPT-based Q&A |
| **Vercel AI SDK** | LLM interaction |
| **Odrant** | Vector DB for storing and querying embeddings |

---

## 📁 Project Structure



