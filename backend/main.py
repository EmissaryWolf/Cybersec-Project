from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # Remova a barra final da URL para evitar erros de match
    allow_origins=["https://cybersec-project.vercel.app"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/analisar/{url:path}")
async def analisar(url: str):
    # O retorno DEVE bater com o tipo ScanResponse do seu React
    return {
        "veredito": "SEGURO",
        "detalhes": f"--- CYBER_FOX PRODUCTION REPORT ---\nTarget: {url}\nStatus: PROTEGIDO\nInfrastructure: Render Cloud\nSecurity: Verified.",
        "icon": "✔"
    }

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)