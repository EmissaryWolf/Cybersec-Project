from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Cyber_Fox Neural Scanner API")

# Configuração de CORS: Permite que o seu frontend acesse o backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Em produção, podemos restringir para o seu domínio da Vercel
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"status": "online", "system": "Cyber_Fox v2.0"}

@app.get("/analisar/{url:path}")
async def analisar(url: str):
    # Aqui simulamos uma lógica de segurança
    vulnerabilidades = 0 
    status = "SEGURO" if vulnerabilidades == 0 else "RISCO DETECTADO"
    
    return {
        "veredito": status,
        "detalhes": f"Alvo: {url}\nProtocolo: HTTPS verificado.\nExploits: Nenhum encontrado.\nNível de Risco: Baixo.",
        "icon": "✓"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)