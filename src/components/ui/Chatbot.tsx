import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const faqResponses = {
  default: "Je suis un assistant virtuel pour l'école La Madone. Je peux vous aider avec des informations sur l'inscription, les classes, les horaires, etc. Que souhaitez-vous savoir ?",
  inscription: "Pour inscrire votre enfant, vous pouvez remplir le formulaire sur la page Inscription. L'école vous recontactera ensuite pour finaliser l'inscription. Les documents requis sont : certificat de naissance, photos d'identité, et bulletin scolaire précédent.",
  classes: "Nous proposons des classes de la maternelle (Petite, Moyenne, Grande section) jusqu'au CM2. Chaque niveau est adapté à l'âge et au développement de l'enfant.",
  horaires: "L'école est ouverte du lundi au vendredi de 7h30 à 16h30. La garderie est disponible avant et après les heures de classe sur demande.",
  frais: "Les frais de scolarité varient selon le niveau. Pour connaître les tarifs actuels, veuillez contacter l'administration par téléphone ou email.",
  contact: "Vous pouvez nous contacter par téléphone au +229 XX XX XX XX, par email à contact@lamadone.bj, ou directement sur la page Contact du site.",
  repas: "Une cantine est disponible avec des repas équilibrés préparés sur place. Les menus sont affichés chaque semaine.",
  transport: "Un service de transport scolaire est disponible sur demande. Les itinéraires sont organisés selon les zones de résidence des élèves.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: faqResponses.default }
  ]);
  const [input, setInput] = useState('');

  const getBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('inscription') || lowerMessage.includes('inscrire') || lowerMessage.includes('inscrit')) {
      return faqResponses.inscription;
    }
    if (lowerMessage.includes('classe') || lowerMessage.includes('niveau') || lowerMessage.includes('maternelle') || lowerMessage.includes('cm')) {
      return faqResponses.classes;
    }
    if (lowerMessage.includes('horaire') || lowerMessage.includes('heure') || lowerMessage.includes('ouverture')) {
      return faqResponses.horaires;
    }
    if (lowerMessage.includes('frais') || lowerMessage.includes('prix') || lowerMessage.includes('coût') || lowerMessage.includes('tarif')) {
      return faqResponses.frais;
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone') || lowerMessage.includes('email') || lowerMessage.includes('appeler')) {
      return faqResponses.contact;
    }
    if (lowerMessage.includes('repas') || lowerMessage.includes('cantine') || lowerMessage.includes('manger')) {
      return faqResponses.repas;
    }
    if (lowerMessage.includes('transport') || lowerMessage.includes('bus') || lowerMessage.includes('navette')) {
      return faqResponses.transport;
    }
    
    return "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler votre question ? Je peux vous renseigner sur l'inscription, les classes, les horaires, les frais, le contact, les repas ou le transport.";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
 setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: getBotResponse(userMessage) }]);
    }, 500);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border-2 border-slate-300 z-50 overflow-hidden"
          >
            <div className="bg-primary-600 text-white p-4">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Assistant La Madone</h3>
                  <p className="text-xs text-primary-100">En ligne</p>
                </div>
              </div>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user' ? 'bg-slate-800' : 'bg-primary-100'
                  }`}>
                    {message.role === 'user' ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-primary-700" />
                    )}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-slate-800 text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-slate-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
