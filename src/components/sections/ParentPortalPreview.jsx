import { useState } from "react";
import { motion } from "framer-motion";
import { parentPortalMock } from "../../data/content";
import {
  UserCheck,
  GraduationCap,
  Calendar,
  BookOpen,
  CreditCard,
  CheckCircle2,
  FileText,
  Lock,
  Download,
  Printer,
  Sparkles
} from "lucide-react";

export default function ParentPortalPreview() {
  const [activeTab, setActiveTab] = useState("grades");
  const [toastMessage, setToastMessage] = useState("");

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const { student, grades, homework, payments } = parentPortalMock;

  return (
    <section className="py-section px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 right-6 z-50 bg-emerald-600 text-white font-bold text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-emerald-400"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-200" />
          <span>{toastMessage}</span>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-gold-400" />
            Écosystème Numérique & Suivi en Direct
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Démonstration de l'Espace Parents
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Offrez aux parents un accès 24/7 pour suivre les notes, devoirs, presences et factures de leurs enfants en toute transparence.
          </p>
        </div>

        {/* Mock Portal Wrapper */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Top Bar of Espace Parents */}
          <div className="bg-slate-900 border-b border-slate-800 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                {student.photo}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-white text-lg">{student.name}</h3>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    Élève Actif
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Classe : <strong>{student.class}</strong> | Année Scolaire : {student.year} | Matricule : {student.matricule}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <Lock className="w-3.5 h-3.5 text-gold-400" />
                Accès Sécurisé Parents
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/60 overflow-x-auto">
            <button
              onClick={() => setActiveTab("grades")}
              className={`flex items-center gap-2 px-6 py-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
                activeTab === "grades"
                  ? "border-brand-500 text-brand-400 bg-brand-500/10"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Bulletin & Notes ({grades.trimester})</span>
            </button>

            <button
              onClick={() => setActiveTab("homework")}
              className={`flex items-center gap-2 px-6 py-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
                activeTab === "homework"
                  ? "border-brand-500 text-brand-400 bg-brand-500/10"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Cahier de Texte & Devoirs</span>
            </button>

            <button
              onClick={() => setActiveTab("payments")}
              className={`flex items-center gap-2 px-6 py-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
                activeTab === "payments"
                  ? "border-brand-500 text-brand-400 bg-brand-500/10"
                  : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Règlements & Factures</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="p-6 sm:p-8 min-h-[320px]">
            {/* 1. Grades Tab */}
            {activeTab === "grades" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/80">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Moyenne Générale Trimestrielle</span>
                    <span className="text-3xl font-extrabold text-gold-400 font-heading">
                      {grades.overallAverage} / 20
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-300">
                    <div className="bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-700">
                      Rang : <strong>{grades.rank}</strong>
                    </div>
                    <div className="bg-emerald-500/20 text-emerald-300 px-3.5 py-2 rounded-xl border border-emerald-500/30 font-bold">
                      {grades.appreciation}
                    </div>
                  </div>

                  <button
                    onClick={() => triggerToast("Fichier PDF du Bulletin simulé avec succès !")}
                    className="bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 shrink-0 shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    <span>Télécharger Bulletin PDF</span>
                  </button>
                </div>

                {/* Grades Table */}
                <div className="overflow-x-auto border border-slate-800 rounded-2xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 uppercase font-bold border-b border-slate-800">
                      <tr>
                        <th className="p-3.5">Matière</th>
                        <th className="p-3.5">Enseignant</th>
                        <th className="p-3.5 text-center">Note / 20</th>
                        <th className="p-3.5">Appréciation Pédagogique</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-300">
                      {grades.subjects.map((sub, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="p-3.5 font-bold text-white">{sub.name}</td>
                          <td className="p-3.5 text-slate-400">{sub.teacher}</td>
                          <td className="p-3.5 text-center font-extrabold text-gold-400 text-sm">
                            {sub.score}
                          </td>
                          <td className="p-3.5 text-slate-300 italic">{sub.comment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* 2. Homework Tab */}
            {activeTab === "homework" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="text-xs text-slate-400 mb-2">
                  Devoirs et travaux à réaliser pour la semaine en cours :
                </div>

                <div className="grid gap-3">
                  {homework.map((hw, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="bg-brand-500/20 text-brand-300 text-[11px] font-bold px-2 py-0.5 rounded">
                            {hw.subject}
                          </span>
                          <span className="text-xs text-slate-400">Pour le {hw.dueDate}</span>
                        </div>
                        <p className="text-sm font-semibold text-white">{hw.title}</p>
                      </div>

                      <div className="flex items-center gap-2 text-xs">
                        {hw.status === "Fait" ? (
                          <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Fait
                          </span>
                        ) : (
                          <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-bold">
                            À rendre
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 3. Payments Tab */}
            {activeTab === "payments" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Statut Financier Global</span>
                    <span className="text-xl font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" /> Scolarité Régularisée
                    </span>
                  </div>
                  <button
                    onClick={() => triggerToast("Impression du reçu de scolarité simulée !")}
                    className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2"
                  >
                    <Printer className="w-4 h-4 text-gold-400" />
                    <span>Imprimer l'historique complet</span>
                  </button>
                </div>

                <div className="overflow-x-auto border border-slate-800 rounded-2xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 uppercase font-bold border-b border-slate-800">
                      <tr>
                        <th className="p-3.5">Description</th>
                        <th className="p-3.5">Montant</th>
                        <th className="p-3.5">Date</th>
                        <th className="p-3.5 text-center">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-300">
                      {payments.history.map((p, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                          <td className="p-3.5 font-bold text-white">{p.label}</td>
                          <td className="p-3.5 font-extrabold text-gold-400">
                            {p.amount.toLocaleString("fr-FR")} FCFA
                          </td>
                          <td className="p-3.5 text-slate-400">{p.date}</td>
                          <td className="p-3.5 text-center">
                            <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full text-[11px] font-bold">
                              {p.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
