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

| Tool              | Purpose                                |
|-------------------|----------------------------------------|
| **Node.js**       | Backend runtime                        |
| **TypeScript**    | Type safety                            |
| **Express.js**    | API routing                            |
| **Multer**        | PDF upload handling                    |
| **pdf-parse**     | PDF text extraction                    |
| **OpenAI API**    | Embeddings + GPT-based Q&A             |
| **Vercel AI SDK** | LLM interaction                        |
| **Odrant**        | Vector DB for storing and querying     |

---

## 📁 Project Setup

### 1. Install Dependencies

```bash
npm install

**### 2. Create .env File**

OPENAI_API_KEY=your_openai_api_key
ODRANT_API_KEY=your_odrant_api_key
ODRANT_INDEX_NAME=your_index_name

### 3.Run the Server

```bash
npx ts-node src/server.ts

Server runs at: http://localhost:3000







