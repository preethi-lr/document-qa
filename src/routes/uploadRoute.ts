import express, { Request, Response } from 'express';
import multer from 'multer';
import fs from 'fs';
import pdfParse from 'pdf-parse';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('pdf'), async (req: Request, res: Response) => {
  try {
    // ✅ Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    // ✅ Read the uploaded PDF file
    const dataBuffer = fs.readFileSync(req.file.path);

    // ✅ Extract text from PDF
    const data = await pdfParse(dataBuffer);
    const extractedText = data.text;

    // ✅ Respond with extracted text (or store it to vector DB later)
    res.json({ text: extractedText });
  } catch (err) {
    console.error('Error parsing PDF:', err);
    res.status(500).json({ error: 'Failed to extract text from PDF.' });
  }
});

export default router;
