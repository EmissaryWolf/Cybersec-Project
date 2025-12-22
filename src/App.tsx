import React, { useState } from 'react';
import { FoxAvatar } from './Components/FoxAvatar';

export default function App() {
  // Estado para controlar qual aba está ativa
  const [tab, setTab] = useState('home');

  // Dados das curiosidades e ataques
  const attacks = [
    { title: "Phishing", desc: "O ataque mais comum. Hackers fingem ser marcas famosas para roubar sua senha por e-mail." },
    { title: "DDoS", desc: "Inundar um site com tantos acessos que o servidor não aguenta e cai." },
    { title: "Ransomware", desc: "Sequestro de dados. O hacker criptografa seus arquivos e cobra um resgate em Bitcoin." },
    { title: "SQL Injection", desc: "Inserir comandos maliciosos em campos de formulário para invadir bancos de dados." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-cyan-400 font-mono relative overflow-hidden">
      {/* Efeito Visual de Fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%]"></div>

      {/* Header com Navegação */}
      <nav className="border-b border-cyan-500/50 p-4 bg-black/80 backdrop-blur-md flex flex-wrap justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-cyan-500 rounded-full overflow-hidden shadow-[0_0_10px_#06b6d4]">
            <FoxAvatar />
          </div>
          <span className="font-black tracking-tighter text-white">CYBER_FOX v2.0</span>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <button 
            onClick={() => setTab('home')}
            className={`px-4 py-1 text-xs border ${tab === 'home' ? 'bg-cyan-500 text-black border-cyan-500' : 'border-cyan-500/30 text-cyan-500'}`}
          >
            TERMINAL
          </button>
          <button 
            onClick={() => setTab('attacks')}
            className={`px-4 py-1 text-xs border ${tab === 'attacks' ? 'bg-cyan-500 text-black border-cyan-500' : 'border-cyan-500/30 text-cyan-500'}`}
          >
            ATAQUES
          </button>
          <button 
            onClick={() => setTab('defense')}
            className={`px-4 py-1 text-xs border ${tab === 'defense' ? 'bg-cyan-500 text-black border-cyan-500' : 'border-cyan-500/30 text-cyan-500'}`}
          >
            DEFESA
          </button>
        </div>
      </nav>

      <main className="p-6 max-w-5xl mx-auto">
        
        {/* CONTEÚDO DA ABA HOME */}
        {tab === 'home' && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-4xl font-black mb-6 text-white tracking-widest uppercase">System Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-cyan-500/20 p-6 bg-cyan-950/10">
                <h3 className="text-orange-500 font-bold mb-2">Curiosidade #01</h3>
                <p className="text-sm">O termo "Hacker" surgiu no MIT nos anos 60 para descrever quem encontrava soluções criativas para problemas de software.</p>
              </div>
              <div className="border border-cyan-500/20 p-6 bg-cyan-950/10">
                <h3 className="text-orange-500 font-bold mb-2">Curiosidade #02</h3>
                <p className="text-sm">Cerca de 30.000 sites são hackeados todos os dias no mundo. A maioria por scripts automáticos.</p>
              </div>
              <div className="border border-cyan-500/20 p-6 bg-cyan-950/10">
                <h3 className="text-orange-500 font-bold mb-2">Curiosidade #03</h3>
                <p className="text-sm">A primeira "invasão" registrada foi em 1903, num telégrafo, provando que wireless nunca foi 100% seguro.</p>
              </div>
            </div>
          </div>
        )}

        {/* CONTEÚDO DA ABA ATAQUES */}
        {tab === 'attacks' && (
          <div className="animate-in slide-in-from-right duration-300">
            <h2 className="text-4xl font-black mb-6 text-red-500 tracking-widest uppercase">Database: Threats</h2>
            <div className="space-y-4">
              {attacks.map((atk, idx) => (
                <div key={idx} className="border-l-4 border-red-600 bg-red-900/10 p-4 hover:bg-red-900/20 transition-all">
                  <h3 className="text-xl font-bold text-white uppercase">{atk.title}</h3>
                  <p className="text-gray-400">{atk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTEÚDO DA ABA DEFESA */}
        {tab === 'defense' && (
          <div className="animate-in slide-in-from-left duration-300 text-center py-20">
            <div className="inline-block p-10 border-2 border-dashed border-green-500 bg-green-950/10">
              <h2 className="text-3xl font-bold text-green-500 mb-4 uppercase">Protocolo de Defesa</h2>
              <ul className="text-left space-y-2 text-green-200">
                <li>• Use sempre Autenticação de Dois Fatores (2FA).</li>
                <li>• Nunca repita a mesma senha em dois sites.</li>
                <li>• Mantenha o seu Sistema Operacional atualizado.</li>
                <li>• Desconfie de qualquer link recebido por SMS ou WhatsApp.</li>
              </ul>
            </div>
          </div>
        )}

      </main>

      {/* Footer Info */}
      <footer className="fixed bottom-0 w-full p-2 bg-black text-[10px] border-t border-cyan-900 flex justify-between px-10">
        <span className="animate-pulse">● LOCALHOST:5173 ONLINE</span>
        <span className="text-gray-600 italic">User: WhiteFox_Hacker</span>
      </footer>
    </div>
  );
}