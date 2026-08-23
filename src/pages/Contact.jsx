import { useState } from "react";
import { school } from "../data/content";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles } from "lucide-react";

export default function Contact() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Demande de visite du campus",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-16">
      <div className="bg-slate-900 text-white py-14 px-4 sm:px-6 text-center">
        <span className="bg-brand-500/20 text-brand-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          Accueil & Visites
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 font-heading">
          Contactez-nous & Rendez-vous
        </h1>
        <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Venez visiter nos installations au quartier Haie Vive à Cotonou et rencontrer notre équipe pédagogique.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b pb-4">Coordonnées du Secrétariat</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-brand-50 text-brand-600 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Adresse</span>
                    <span className="font-semibold text-slate-800">{school.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-brand-50 text-brand-600 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Téléphone Secrétariat</span>
                    <span className="font-semibold text-slate-800">{school.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-brand-50 text-brand-600 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email Admissions</span>
                    <span className="font-semibold text-slate-800">{school.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-brand-50 text-brand-600 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Horaires d'Accueil</span>
                    <span className="font-semibold text-slate-800">{school.hours}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct CTA */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${school.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> Discuter en Direct sur WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
              {!formSent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 border-b pb-4">Demande de Visite & Renseignements</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Votre Nom & Prénom *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: M. Jean Dossou"
                        className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+229 97 00 00 00"
                        className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Adresse Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre.email@gmail.com"
                      className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Objet de la demande</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 border border-slate-300 rounded-xl text-sm outline-none"
                    >
                      <option value="Demande de visite du campus">Demande de visite guidée du campus</option>
                      <option value="Question sur la cantine ou le transport">Question sur la cantine ou le transport</option>
                      <option value="Renseignements scolarité Maternelle">Renseignements scolarité Maternelle</option>
                      <option value="Renseignements scolarité Primaire">Renseignements scolarité Primaire</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Votre Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisez vos disponibilités pour une visite ou vos questions..."
                      className="w-full p-3 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-600/30 text-sm flex items-center justify-center gap-2 transition-all uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4" /> Envoyer mon message
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Transmis avec Succès !</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Merci <strong>{formData.name}</strong>, notre responsable des admissions prendra contact avec vous par téléphone au <strong>{formData.phone}</strong> dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-xs text-brand-600 font-bold hover:underline pt-2 inline-block"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
