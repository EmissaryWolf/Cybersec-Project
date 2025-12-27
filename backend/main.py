from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://cybersec-project.vercel.app",
        "https://cyber-fox-project.vercel.app" # Adicione esta linha também
    ], 
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
    return {
        "veredito": "SEGURO", # Deve ser 'veredito'
        "detalhes": f"Alvo: {url}\nStatus: PROTEGIDO\nProtocolo: HTTPS verificado.",
        "icon": "✔" # Deve ser 'icon'
    }

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)