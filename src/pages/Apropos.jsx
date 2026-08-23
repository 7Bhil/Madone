import { motion } from "framer-motion";
import { Award, Users, Target, Heart, GraduationCap, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { about, school, partners } from "../data/content.js";

export default function Apropos() {
  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-10 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="bg-brand-500/20 text-brand-300 border border-brand-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Établissement Agréé Bénin
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
            À Propos de La Madone
          </h1>
          <p className="text-slate-300 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            Découvrez notre histoire, notre vision pédagogique et l'équipe engagée pour l'avenir de vos enfants.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        {/* Story */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">Une Histoire d'Excellence depuis 1998</h2>
            <p className="text-slate-600 leading-relaxed text-base">{about.history}</p>
            <div className="bg-brand-50 border-l-4 border-brand-600 p-4 rounded-r-xl">
              <h4 className="font-bold text-slate-900 text-sm">Notre Engagement</h4>
              <p className="text-slate-600 text-xs mt-1 italic">{about.mission}</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src="/images/hero_building.png"
              alt="Histoire de l'école La Madone"
              className="rounded-2xl shadow-2xl border border-slate-200 object-cover h-80 w-full"
            />
          </div>
        </div>

        {/* Team Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Une Équipe Pédagogique d'Élite</h2>
            <p className="text-slate-600 text-sm mt-2">
              Des enseignants passionnés, diplômés et régulièrement formés aux méthodes pédagogiques modernes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.team.map((member, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-xl mx-auto">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{member.name}</h4>
                  <span className="text-xs font-semibold text-brand-600 block mt-0.5">{member.role}</span>
                </div>
                <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Partenaires Institutionnels & Culturels</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="font-bold text-slate-800 text-sm">{p.name}</div>
                <div className="text-xs text-slate-500 mt-1">{p.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
