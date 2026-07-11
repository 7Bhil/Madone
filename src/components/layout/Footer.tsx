import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">École La Madone</h3>
            <p className="text-slate-300 text-sm">
              Cours primaire à Cotonou. De la maternelle au CM2, un accompagnement attentif pour chaque enfant.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Cotonou, Bénin</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+229 97 00 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@lamadone.bj</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Horaires</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Lundi - Vendredi</span>
              </div>
              <p className="ml-6">7h30 - 16h30</p>
              <p className="text-slate-400 mt-2">Garderie disponible sur demande</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <a href="/classes" className="block hover:text-white transition-colors">Nos classes</a>
              <a href="/vie-scolaire" className="block hover:text-white transition-colors">Vie scolaire</a>
              <a href="/inscription" className="block hover:text-white transition-colors">Inscription</a>
              <a href="/contact" className="block hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-400">
          <p>© 2024 École La Madone. Tous droits réservés.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}