import React, { useState } from 'react';
import { FoxAvatar } from './Components/FoxAvatar';

type ScanResponse = {
  veredito: string;
  detalhes: string;
  icon: string;
};

export default function App() {
  const [tab, setTab] = useState<'home' | 'scan' | 'attacks' | 'defense'>('home');

  const [target, setTarget] = useState('');
  const [scanResult, setScanResult] = useState<ScanResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const attacks = [
    { title: 'Phishing', desc: 'Hackers fingem ser marcas para roubar credenciais.' },
    { title: 'DDoS', desc: 'Sobrecarga de acessos até o servidor cair.' },
    { title: 'Ransomware', desc: 'Criptografia de dados seguida de extorsão.' },
    { title: 'SQL Injection', desc: 'Injeção de comandos maliciosos em formulários.' }
  ];

  async function executarScan() {
    if (!target) return;

    setLoading(true);
    setError('');
    setScanResult(null);

    try {
      const cleanTarget = target
        .replace(/^(https?:\/\/)?(www\.)?/i, '')
        .split('/')[0];

      const res = await fetch(`https://cybersec-project-orvt.onrender.com/${cleanTarget}`);
      if (!res.ok) throw new Error();

      const data = await res.json();
      setScanResult(data);
    } catch {
      setError('❌ ERRO: Backend não respondeu.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-cyan-400 font-mono relative overflow-hidden">

      {/* FUNDO */}
      <div className="absolute inset-0 pointer-events-none opacity-20
        bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),
        linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]
        bg-[length:100%_4px,4px_100%]" />

      {/* HEADER */}
      <nav className="border-b border-cyan-500/50 p-4 bg-black/80 backdrop-blur-md
        flex justify-between items-center sticky top-0 z-50">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-cyan-500 rounded-full overflow-hidden shadow-[0_0_10px_#06b6d4]">
            <FoxAvatar />
          </div>
          <span className="font-black text-white tracking-tighter">CYBER_FOX v2.0</span>
        </div>

        <div className="flex gap-4">
          {(['home', 'scan', 'attacks', 'defense'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1 text-xs border ${
                tab === t
                  ? 'bg-cyan-500 text-black border-cyan-500'
                  : 'border-cyan-500/30 text-cyan-500'
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* MAIN */}
      <main className="p-6 max-w-5xl mx-auto">

        {/* HOME */}
        {tab === 'home' && (
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-white uppercase">System Status</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Curiosity id="01" text="O termo Hacker surgiu no MIT nos anos 60 para descrever quem encontrava soluções criativas para problemas de software." />
              <Curiosity id="02" text="Cerca de 30.000 sites são hackeados todos os dias no mundo. A maioria por scripts automáticos." />
              <Curiosity id="03" text="A primeira invasão registrada foi em 1903, num telégrafo, provando que wireless nunca foi 100% seguro." />
              <Curiosity id="04" text="Phishing é responsável por mais de 80% dos incidentes de segurança cibernética." />
              <Curiosity id="05" text="O maior ataque DDoS da história atingiu 2.3 Tbps em 2020, usando dispositivos IoT infectados." />
              <Curiosity id="06" text="Ransomware causou prejuízos de mais de 20 bilhões de dólares globalmente em 2021." />
            </div>
          </div>
        )}

        {/* SCAN */}
        {tab === 'scan' && (
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-orange-500 uppercase">
              Neural Scan
            </h2>

            <div className="flex border border-cyan-500/30 bg-black/60">
              <input
                value={target}
                onChange={e => setTarget(e.target.value)}
                placeholder="TARGET_URL..."
                className="flex-1 bg-transparent p-4 text-cyan-400 outline-none"
              />
              <button
                onClick={executarScan}
                disabled={loading}
                className="px-8 bg-orange-600 text-black font-bold hover:bg-orange-500"
              >
                {loading ? 'SCANNING...' : 'EXECUTAR'}
              </button>
            </div>

            {error && (
              <div className="border border-red-600 bg-red-900/20 p-4 text-red-400">
                {error}
              </div>
            )}

            {scanResult && (
              <div className={`p-6 border-2 ${
                scanResult.veredito === 'SEGURO'
                  ? 'border-green-500 bg-green-900/10'
                  : 'border-red-600 bg-red-900/10'
              }`}>
                <h3 className="text-3xl font-black mb-4">
                  {scanResult.icon} {scanResult.veredito}
                </h3>
                <pre className="whitespace-pre-wrap text-sm">
                  {scanResult.detalhes}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* ATAQUES */}
        {tab === 'attacks' && (
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-red-500 uppercase">
              Database: Threats
            </h2>
            {attacks.map((atk, i) => (
              <div key={i} className="border-l-4 border-red-600 bg-red-900/10 p-4">
                <h3 className="text-xl font-bold text-white">{atk.title}</h3>
                <p className="text-gray-400">{atk.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* DEFESA */}
        {tab === 'defense' && (
          <div className="text-center py-20">
            <div className="inline-block p-10 border-2 border-dashed border-green-500 bg-green-950/10">
              <h2 className="text-3xl font-bold text-green-500 mb-4 uppercase">
                Protocolo de Defesa
              </h2>
              <ul className="text-left space-y-2 text-green-200">
                <li>• Use 2FA</li>
                <li>• Não reutilize senhas</li>
                <li>• Atualize seus sistemas</li>
                <li>• Desconfie de links</li>
                <li>• Faça backups regulares</li>
                <li>• Monitore atividades suspeitas</li>
                <li>• Eduque sua equipe</li>
              </ul>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="fixed bottom-0 w-full p-2 bg-black text-[10px]
        border-t border-cyan-900 flex justify-between px-10">
        <span className="animate-pulse">● BACKEND ONLINE</span>
        <span className="text-gray-600 italic">User: WhiteFox_Hacker</span>
      </footer>
    </div>
  );
}

function Curiosity({ id, text }: { id: string; text: string }) {
  return (
    <div className="border border-cyan-500/20 p-6 bg-cyan-950/10">
      <h3 className="text-orange-500 font-bold mb-2">Curiosidade #{id}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
}
