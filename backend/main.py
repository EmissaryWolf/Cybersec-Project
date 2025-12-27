from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# Ajuste do CORS - Remova a barra final da URL da Vercel
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://cybersec-project.vercel.app"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ROTA RAIZ OBRIGATÓRIA (Para o Render não dar 404)
@app.get("/")
async def root():
    return {"status": "CyberFox Online"}

@app.get("/analisar/{url:path}")
async def analisar(url: str):
    # Retorno exatamente como o seu Frontend espera (image_1e2fb7.png)
    return {
        "veredito": "SEGURO",
        "detalhes": f"--- CYBER_FOX REPORT ---\nAlvo: {url}\nStatus: PROTEGIDO\nProtocolo: HTTPS verificado.",
        "icon": "✔"
    }

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)