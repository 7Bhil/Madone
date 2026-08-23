import { useState } from "react";
import { motion } from "framer-motion";
import { parentPortalMock } from "../../data/content";
import {
  Smartphone,
  BookOpen,
  Award,
  Calendar,
  CheckCircle,
  FileText,
  MessageSquare,
  Lock,
  User,
  Star,
  Download
} from "lucide-react";

export default function ParentPortalPreview() {
  const [activeTab, setActiveTab] = useState("bulletin");
  const { student, grades, recentHomework } = parentPortalMock;

  return (
    <section className="py-section px-4 sm:px-6 bg-gradient-to-b from-slate-50 via-brand-50/30 to-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone className="w-4 h-4 text-brand-600" />
            Écosystème Numérique
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Espace Parents & Suivi en Temps Réel
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Offrez aux familles la transparence totale. Suivez en direct les résultats, le cahier de texte, la présence et les communications de l'école.
          </p>
        </motion.div>

        {/* Laptop / Tablet Frame mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900 p-3 sm:p-5 rounded-3xl shadow-2xl border border-slate-800 max-w-5xl mx-auto"
        >
          {/* Top window dots */}
          <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              <span className="font-mono text-slate-400 ml-2 hidden sm:inline">portal.lamadone.bj/parents/dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Session Sécurisée HTTPS</span>
            </div>
          </div>

          {/* Inner Web App Interface */}
          <div className="bg-slate-50 rounded-2xl overflow-hidden mt-3 text-slate-800">
            {/* Header bar of app */}
            <div className="bg-brand-900 text-white p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-brand-800">
              <div className="flex items-center gap-4">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-14 h-14 rounded-full border-2 border-gold-400 object-cover shadow"
                />
                <div>
                  <h3 className="font-bold text-lg text-white">{student.name}</h3>
                  <p className="text-xs text-brand-200">{student.class} • Matricule : {student.matricule}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs">
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">
                      Rang : {student.rank}
                    </span>
                    <span className="bg-brand-700/50 text-brand-200 px-2 py-0.5 rounded">
                      Présence : {student.attendance}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-800/80 p-3 rounded-xl border border-brand-700 text-right w-full sm:w-auto">
                <span className="text-xs text-brand-300 block uppercase">Moyenne Générale (1er Trimestre)</span>
                <span className="text-2xl font-extrabold text-gold-400">{student.average}</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white border-b border-slate-200 px-4 flex overflow-x-auto gap-2 text-sm font-semibold">
              <button
                onClick={() => setActiveTab("bulletin")}
                className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "bulletin"
                    ? "border-brand-600 text-brand-600 bg-brand-50/50"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <Award className="w-4 h-4" /> Bulletin & Notes
              </button>
              <button
                onClick={() => setActiveTab("cahier")}
                className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "cahier"
                    ? "border-brand-600 text-brand-600 bg-brand-50/50"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <BookOpen className="w-4 h-4" /> Cahier de Texte & Devoirs
              </button>
              <button
                onClick={() => setActiveTab("factures")}
                className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "factures"
                    ? "border-brand-600 text-brand-600 bg-brand-50/50"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <FileText className="w-4 h-4" /> Recus & Paiements
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 sm:p-6 bg-slate-50 min-h-[300px]">
              {activeTab === "bulletin" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                      Relevé de Notes du 1er Trimestre
                    </h4>
                    <button className="text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 font-semibold transition-colors">
                      <Download className="w-3.5 h-3.5" /> Télécharger PDF
                    </button>
                  </div>
                  <div className="grid gap-3">
                    {grades.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between gap-4 shadow-sm hover:border-brand-300 transition-colors"
                      >
                        <div>
                          <span className="font-bold text-slate-800 text-sm block">{item.subject}</span>
                          <span className="text-xs text-slate-500 italic">{item.appreciation}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-extrabold text-brand-700 bg-brand-50 px-3 py-1 rounded-lg border border-brand-200">
                            {item.note}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "cahier" && (
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                    Devoirs à faire à la maison
                  </h4>
                  <div className="grid gap-3">
                    {recentHomework.map((hw, i) => (
                      <div
                        key={i}
                        className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-4 shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-amber-50 text-amber-600 mt-0.5">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block">
                              {hw.subject}
                            </span>
                            <span className="font-medium text-slate-800 text-sm">{hw.task}</span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                          Pour {hw.dueDate}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "factures" && (
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                    Historique des Règlements de Scolarité
                  </h4>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100">
                      <div>
                        <div className="font-bold text-slate-800">1ère Tranche (Frais d'inscription + Scolarité)</div>
                        <div className="text-xs text-slate-500">Payé le 05/09/2024 par Virement bancaire</div>
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Payé - 200 000 FCFA
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm py-2">
                      <div>
                        <div className="font-bold text-slate-800">2ème Tranche (Échéance Décembre)</div>
                        <div className="text-xs text-slate-500">Montant dû au 15/12/2024</div>
                      </div>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">
                        En attente - 150 000 FCFA
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
