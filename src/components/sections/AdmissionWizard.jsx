import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  GraduationCap,
  Users,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  Calendar,
  Sparkles,
  Download,
  Phone,
  Mail
} from "lucide-react";
import { classes } from "../../data/content";

export default function AdmissionWizard() {
  const [searchParams] = useSearchParams();
  const levelParam = searchParams.get("level");

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    birthDate: "",
    gender: "M",
    desiredLevel: levelParam || "ci-cp",
    previousSchool: "",
    canteenOption: "oui",
    transportOption: "non",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    parentAddress: "",
    additionalNotes: "",
  });

  useEffect(() => {
    if (levelParam) {
      setFormData((prev) => ({ ...prev, desiredLevel: levelParam }));
    }
  }, [levelParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepsList = [
    { num: 1, label: "L'Élève", icon: User },
    { num: 2, label: "Niveau & Services", icon: GraduationCap },
    { num: 3, label: "Responsable Légal", icon: Users },
    { num: 4, label: "Récapitulatif", icon: FileCheck },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Dossier d'Admissions 2024-2025
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Formulaire de Pré-inscription en Ligne
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Complétez ces informations en 3 minutes pour réserver une place pour votre enfant.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <div className="flex items-center justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-brand-600 -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${((step - 1) / (stepsList.length - 1)) * 100}%` }}
            />

            {stepsList.map((s) => {
              const Icon = s.icon;
              const isActive = step === s.num;
              const isDone = step > s.num;
              return (
                <div key={s.num} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      isDone
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                        : isActive
                        ? "bg-brand-600 text-white shadow-lg shadow-brand-600/40 ring-4 ring-brand-100"
                        : "bg-slate-100 border-2 border-slate-300 text-slate-500"
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-6 h-6" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs mt-2 font-medium hidden sm:inline ${isActive ? "text-brand-700 font-bold" : "text-slate-500"}`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Form Container */}
        {!isSubmitted ? (
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200">
            <form onSubmit={handleNext}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-slate-800 border-b pb-3 flex items-center gap-2">
                      <User className="w-5 h-5 text-brand-600" /> Étape 1 : Informations sur l'Élève
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Prénom de l'enfant *</label>
                        <input
                          type="text"
                          required
                          name="studentFirstName"
                          value={formData.studentFirstName}
                          onChange={handleChange}
                          placeholder="Ex: Jean-Marc"
                          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Nom de l'enfant *</label>
                        <input
                          type="text"
                          required
                          name="studentLastName"
                          value={formData.studentLastName}
                          onChange={handleChange}
                          placeholder="Ex: Kouassi"
                          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Date de naissance *</label>
                        <input
                          type="date"
                          required
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleChange}
                          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Sexe</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none text-sm"
                        >
                          <option value="M">Masculin</option>
                          <option value="F">Féminin</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Établissement fréquenté l'an dernier</label>
                      <input
                        type="text"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        placeholder="Ex: École primaire publique Haie Vive (ou Maternelle)"
                        className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none text-sm"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-slate-800 border-b pb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-brand-600" /> Étape 2 : Niveau Scolaire & Services Demandes
                    </h3>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Niveau Souhaité *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {classes.map((c) => (
                          <label
                            key={c.id}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-3 ${
                              formData.desiredLevel === c.id
                                ? "border-brand-600 bg-brand-50/60 shadow-sm"
                                : "border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="desiredLevel"
                              value={c.id}
                              checked={formData.desiredLevel === c.id}
                              onChange={handleChange}
                              className="mt-1 text-brand-600 focus:ring-brand-500"
                            />
                            <div>
                              <div className="font-bold text-slate-800 text-sm">{c.level}</div>
                              <div className="text-xs text-slate-500 mt-0.5">{c.age}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Restauration (Cantine)</label>
                        <select
                          name="canteenOption"
                          value={formData.canteenOption}
                          onChange={handleChange}
                          className="w-full p-3 border border-slate-300 rounded-xl text-sm"
                        >
                          <option value="oui">Oui (Cantine complète 5 jours/semaine)</option>
                          <option value="non">Non (Repas personnel)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Transport Scolaire</label>
                        <select
                          name="transportOption"
                          value={formData.transportOption}
                          onChange={handleChange}
                          className="w-full p-3 border border-slate-300 rounded-xl text-sm"
                        >
                          <option value="non">Pas de transport</option>
                          <option value="zone1">Zone 1 (Haie Vive, Cadjehoun, Cocotomey)</option>
                          <option value="zone2">Zone 2 (Fidjrossè, Akpakpa, Kouhounou)</option>
                          <option value="zone3">Zone 3 (Calavi, Agla, Gbégamey)</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-slate-800 border-b pb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-brand-600" /> Étape 3 : Coordonnées du Parent / Tuteur
                    </h3>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Nom & Prénom du Parent *</label>
                      <input
                        type="text"
                        required
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="Ex: Dr. Marc Kouassi"
                        className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Numéro de Téléphone (WhatsApp) *</label>
                        <input
                          type="tel"
                          required
                          name="parentPhone"
                          value={formData.parentPhone}
                          onChange={handleChange}
                          placeholder="+229 97 00 00 00"
                          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Adresse Email *</label>
                        <input
                          type="email"
                          required
                          name="parentEmail"
                          value={formData.parentEmail}
                          onChange={handleChange}
                          placeholder="parent@gmail.com"
                          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Adresse de Résidence</label>
                      <input
                        type="text"
                        name="parentAddress"
                        value={formData.parentAddress}
                        onChange={handleChange}
                        placeholder="Ex: Cotonou, Haie Vive Rue 812"
                        className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 text-sm"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-slate-800 border-b pb-3 flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-brand-600" /> Étape 4 : Récapitulatif & Confirmation
                    </h3>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 text-sm">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-slate-500">Élève :</span>
                        <span className="font-bold text-slate-800">{formData.studentFirstName} {formData.studentLastName}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-slate-500">Niveau :</span>
                        <span className="font-bold text-brand-700 uppercase">{formData.desiredLevel}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-slate-500">Parent responsable :</span>
                        <span className="font-bold text-slate-800">{formData.parentName} ({formData.parentPhone})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Cantine / Transport :</span>
                        <span className="font-medium text-slate-800">
                          Cantine: {formData.canteenOption === "oui" ? "Oui" : "Non"} | Transport: {formData.transportOption}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        Une fois la demande validée, notre secrétariat vous contactera sous 24h pour finaliser le rendez-vous de visite et la remise des documents originaux.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-100 transition-colors text-sm flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" /> Précédent
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-all shadow-lg shadow-brand-600/30 text-sm flex items-center gap-2 ml-auto"
                >
                  <span>{step === 4 ? "Soumettre la Pré-inscription" : "Suivant"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-2xl border border-emerald-200 text-center max-w-2xl mx-auto space-y-6"
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900">
              Pré-inscription Transmise avec Succès !
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Félicitations <strong>{formData.parentName}</strong>, la pré-inscription de votre enfant <strong>{formData.studentFirstName}</strong> pour la classe de <strong>{formData.desiredLevel.toUpperCase()}</strong> a bien été prise en compte sous la référence :
            </p>

            <div className="bg-slate-100 p-4 rounded-xl font-mono text-xl font-bold text-brand-700 tracking-wider">
              REF-MAD-2024-8849
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs text-emerald-800 text-left space-y-2">
              <div className="font-bold text-sm text-emerald-900">Prochaines étapes :</div>
              <div>1. Un SMS & Email de confirmation a été envoyé à <strong>{formData.parentEmail}</strong>.</div>
              <div>2. Notre équipe vous rappellera au <strong>{formData.parentPhone}</strong> sous 24h ouvrées.</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 text-sm"
              >
                <Download className="w-4 h-4" /> Télécharger le Récépissé
              </button>
              <a
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold flex items-center justify-center gap-2 text-sm"
              >
                Retour à l'Accueil
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
