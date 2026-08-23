import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, PhoneCall } from "lucide-react";
import { school } from "../../data/content";

const faqResponses: Record<string, string> = {
  default: "Bonjour ! Je suis l'assistant virtuel du Complexe Scolaire La Madone. Comment puis-je vous aider aujourd'hui ? (Tarifs, Inscriptions, Cantine, Bus, Visites...)",
  inscription: "Les pré-inscriptions pour 2024-2025 sont ouvertes ! Les pièces nécessaires sont : acte de naissance, 4 photos d'identité, carnet de santé et bulletin précédent. Vous pouvez pré-inscrire votre enfant directement sur notre site via l'onglet 'Inscription'.",
  classes: "Nous accueillons les enfants de la Maternelle (TPS à GS, dès 2 ans) jusqu'au CM2. Chaque niveau bénéficie d'un suivi personnalisé et d'un effectif limité à 25 élèves.",
  horaires: "L'école est ouverte du lundi au vendredi de 07h15 à 18h00. Les cours débutent à 08h00 et finissent à 15h30 (12h30 pour la Maternelle). Une garderie du soir avec étude surveillée est assurée jusqu'à 18h00.",
  frais: "Les frais annuels débutent à 350 000 FCFA en Maternelle et 420 000 FCFA au Primaire. Le règlement s'effectue en 3 tranches. Utilisez notre 'Simulateur de Tarifs' sur la page d'accueil pour estimer votre budget complet !",
  contact: `Secrétariat principal : ${school.phone} | Email : ${school.email} | Adresse : Quartier Haie Vive, Cotonou.`,
  repas: "Notre cantine propose 5 jours par semaine des repas bio et variés préparés sur place par notre chef cuisinier.",
  transport: "Nous assurons le transport scolaire climatisé dans 3 zones de Cotonou (Haie Vive, Akpakpa, Calavi, Fidjrossè, etc.) avec géolocalisation GPS et accompagnatrice.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: faqResponses.default }
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    { label: "Tarifs & Frais", key: "frais" },
    { label: "Pièces d'inscription", key: "inscription" },
    { label: "Cantine & Bus", key: "repas" },
    { label: "Horaires", key: "horaires" },
  ];

  const getBotResponse = (userMessage: string) => {
    const lower = userMessage.toLowerCase();
    if (lower.includes('inscription') || lower.includes('inscrire') || lower.includes('dossier')) return faqResponses.inscription;
    if (lower.includes('classe') || lower.includes('niveau') || lower.includes('maternelle') || lower.includes('cm2')) return faqResponses.classes;
    if (lower.includes('horaire') || lower.includes('heure') || lower.includes('ouverture')) return faqResponses.horaires;
    if (lower.includes('frais') || lower.includes('prix') || lower.includes('tarif') || lower.includes('coût')) return faqResponses.frais;
    if (lower.includes('contact') || lower.includes('téléphone') || lower.includes('adresse')) return faqResponses.contact;
    if (lower.includes('repas') || lower.includes('cantine') || lower.includes('manger')) return faqResponses.repas;
    if (lower.includes('transport') || lower.includes('bus') || lower.includes('zone')) return faqResponses.transport;
    
    return "Je peux vous renseigner sur les frais, le dossier d'inscription, le transport scolaire, la cantine ou planifier une visite du campus ! N'hésitez pas à nous appeler directement au " + school.phone;
  };

  const handleSend = (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    const textToSend = customText || input.trim();
    if (!textToSend) return;

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    if (!customText) setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: getBotResponse(textToSend) }]);
    }, 400);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-brand-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-brand-600/40 transition-all z-50 flex items-center justify-center border-2 border-white/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-slate-200 z-50 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Chatbot Header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-gold-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Madone Bot</h3>
                  <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Assistant virtuel 24/7
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Prompts */}
            <div className="bg-slate-50 p-2.5 border-b border-slate-100 flex overflow-x-auto gap-1.5 text-xs">
              {quickQuestions.map((q) => (
                <button
                  key={q.key}
                  onClick={() => handleSend(undefined, q.label)}
                  className="bg-white border border-slate-200 hover:border-brand-400 text-slate-700 font-medium px-2.5 py-1 rounded-lg whitespace-nowrap shadow-2xs hover:bg-brand-50"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50 text-sm">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                    m.role === 'user' ? 'bg-slate-800 text-white' : 'bg-brand-600 text-white'
                  }`}>
                    {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3.5 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-slate-800 text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 border border-slate-200/80 shadow-xs rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Form Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-brand-500 outline-none text-slate-800"
              />
              <button
                type="submit"
                className="bg-brand-600 hover:bg-brand-700 text-white p-2.5 rounded-xl shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
