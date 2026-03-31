import { useTranslations } from "next-intl";
import { BorderBeam } from "@/components/ui/BorderBeam";
import ShinyButton from "@/components/ui/ShinyButton";
import { GraduationCap, ShieldCheck, PhoneCall, Zap } from "lucide-react";

export default function CoursesPage() {
  const t = useTranslations("courses");

  const modules = [
    {
      id: "sales",
      icon: GraduationCap,
      title: t("modules.sales.title"),
      description: t("modules.sales.description"),
    },
    {
      id: "negotiations",
      icon: Zap,
      title: t("modules.negotiations.title"),
      description: t("modules.negotiations.description"),
    },
    {
      id: "cold-calling",
      icon: PhoneCall,
      title: t("modules.coldCalling.title"),
      description: t("modules.coldCalling.description"),
    },
    {
      id: "objections",
      icon: ShieldCheck,
      title: t("modules.objections.title"),
      description: t("modules.objections.description"),
    },
  ];

  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
            {t("sectionLabel")}
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            {t("headline")}
          </h1>
          <p className="text-white/40 text-xl font-medium leading-relaxed">
            {t("subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {modules.map((module) => (
            <div
              key={module.id}
              className="relative group bg-white/[0.02] border border-white/5 p-10 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/[0.05]"
            >
              <BorderBeam size={250} duration={12} delay={Math.random() * 10} />
              
              <div className="relative z-10">
                <module.icon className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-black text-white tracking-tight mb-4">
                  {module.title}
                </h3>
                <p className="text-white/40 text-lg font-medium leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/20 via-black to-black p-12 md:p-20 rounded-[3rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
              Start Your Training Journey
            </h2>
            <p className="text-white/40 text-lg font-medium">
              Join the elite circle of real estate professionals mastering the global capital corridors.
            </p>
          </div>
          <ShinyButton>
            Zacznij z nami
          </ShinyButton>
        </div>
      </div>
    </main>
  );
}
