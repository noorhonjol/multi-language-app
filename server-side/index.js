import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = 3000;

app.use(cors({
    origin: "http://localhost:5173"
}));


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const languagesPath = join(__dirname, 'languages');

app.get('/:langParam', (req, res) => {
    const { langParam } = req.params;
    const languageFilePath = join(languagesPath, `${langParam}.json`);

    fs.readFile(languageFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading language file:', err);
        return res.json([]);
    }

    const languageData = JSON.parse(data);
    res.json(languageData);
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});