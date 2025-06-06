# 🧠 CV Matcher App (Next.js + React + Tailwind)

Web app per analisi CV basata su requisiti utente e file Excel, con interfaccia in italiano.

## 🚀 Funzionalità
- Upload CV (PDF/DOCX) con drag & drop
- Estrazione contenuti e analisi con LLM
- Upload file Excel con progetti/macchine/paesi
- Matching semantico con punteggio
- Dashboard grafica a schede

## 🧩 Tecnologie
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI API](https://platform.openai.com/docs/api-reference)

## 🛠️ Setup

1. Clona il repository:
```bash
git clone https://github.com/IntechTD/NEW_AUTO_CV_MORE.git
cd NEW_AUTO_CV_MORE
```

2. Installa le dipendenze:
```bash
npm install
```

3. Crea un file `.env.local`:
```bash
cp .env.example .env.local
```

4. Avvia il server locale:
```bash
npm run dev
```

5. Apri `http://localhost:3000`

## 🔐 Variabili Ambiente

Crea un file `.env.local` con:
```
OPENAI_API_KEY=sk-xxxxxxx
```

## 🌍 Deploy
Deploy automatico su [Vercel](https://vercel.com)

## 📁 Struttura
- `/app` — routing e pagine
- `/components` — UI components
- `/api` — backend logic e chiamate LLM

## 👤 Autore
**Alessio de Giacobbe** — [InTech Supporto AI](https://www.in-tech.es)
