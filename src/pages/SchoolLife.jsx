import CanteenMenu from "../components/sections/CanteenMenu";
import { motion } from "framer-motion";
import { Palette, Trophy, Cpu, Music, Languages, Shield, Bus, Clock } from "lucide-react";

export default function SchoolLifePage() {
  const clubs = [
    { title: "Club Robotique & STEM", desc: "Initiation aux principes du codage et de la construction de robots LEGO Education.", icon: Cpu, color: "bg-brand-100 text-brand-700" },
    { title: "Club d'Anglais Cambridge", desc: "Pratique intensive orale avec des enseignants anglophones natifs.", icon: Languages, color: "bg-gold-100 text-gold-800" },
    { title: "Musique & Piano", desc: "Apprentissage du rythme, du solfège et de la pratique instrumentale.", icon: Music, color: "bg-purple-100 text-purple-700" },
    { title: "Arts & Peinture", desc: "Développement de la créativité visuelle et expression artistique.", icon: Palette, color: "bg-pink-100 text-pink-700" },
    { title: "Taekwondo & Sport", desc: "Discipline, maîtrise de soi et renforcement physique supervisé.", icon: Trophy, color: "bg-emerald-100 text-emerald-700" },
    { title: "Garderie & Étude Surveillée", desc: "Prise en charge jusqu'à 18h00 avec aide personnalisée aux devoirs.", icon: Shield, color: "bg-blue-100 text-blue-700" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-slate-900 text-white py-10 px-4 sm:px-6 text-center">
        <span className="bg-brand-500/20 text-brand-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          Épanouissement & Activités
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 font-heading">
          La Vie Scolaire à La Madone
        </h1>
        <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Restauration bio, transport sécurisé, clubs du mercredi et garderie du soir.
        </p>
      </div>

      {/* Canteen section component */}
      <CanteenMenu />

      {/* Extracurricular Clubs */}
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Clubs Périscolaires du Mercredi & Samedi
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Des ateliers captivants pour développer les talents et passions de chaque enfant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, idx) => {
            const Icon = club.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className={`w-12 h-12 rounded-xl ${club.color} flex items-center justify-center font-bold`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{club.title}</h3>
                <p className="text-slate-600 text-sm">{club.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
