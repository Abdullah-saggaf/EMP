"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Building2, FileText, Calendar, Send } from "lucide-react";
import ShinyButton from "@/components/ui/ShinyButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  sector: z.string().optional(),
});

export default function ContactPage() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-20 text-center mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
            {t("sectionLabel")}
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            {t("headline")}
          </h1>
          <p className="text-white/40 text-xl font-medium leading-relaxed">
            Leading international capital corridors through institutional precision.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Institutional Data Card */}
          <div className="bg-white/[0.02] border border-white/5 p-12 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            
            <h2 className="text-3xl font-black text-white tracking-tight mb-12 flex items-center gap-4">
              Institutional Foundation
            </h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <Building2 className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">Full Legal Name</p>
                  <p className="text-white text-xl font-bold">{t("legalName")}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <MapPin className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">Warsaw Headquarters</p>
                  <p className="text-white text-xl font-bold">{t("address")}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Mail className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">Direct Inquiries</p>
                  <a href={`mailto:${t("email")}`} className="text-white text-xl font-bold hover:text-primary transition-colors">
                    {t("email")}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Phone className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">Phone Line</p>
                  <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="text-white text-xl font-bold hover:text-primary transition-colors">
                    {t("phone")}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                <div>
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">Tax ID (NIP)</p>
                  <p className="text-white font-bold">{t("nip")}</p>
                </div>
                <div>
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-1">Registry (REGON)</p>
                  <p className="text-white font-bold">{t("regon")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="bg-black p-4">
            <div className="mb-12">
              <h2 className="text-3xl font-black text-white tracking-tight mb-4">Lead Capture Form</h2>
              <p className="text-white/40 font-medium">Connect with our strategic advisors today.</p>
            </div>

            {isSuccess ? (
              <div className="bg-primary/10 border border-primary/20 p-12 rounded-3xl text-center">
                <h3 className="text-2xl font-black text-primary mb-4">Request Received</h3>
                <p className="text-white/60">An institutional advisor will contact you shortly.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-primary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Full Name</label>
                    <input
                      {...register("name")}
                      placeholder="Jane Doe"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:border-primary transition-all outline-none"
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Email Address</label>
                    <input
                      {...register("email")}
                      placeholder="jane@example.com"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:border-primary transition-all outline-none"
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Sector Interests</label>
                  <select
                    {...register("sector")}
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:border-primary transition-all outline-none appearance-none"
                  >
                    <option value="real-estate" className="bg-black">Real Estate & Property Management</option>
                    <option value="consulting" className="bg-black">Strategic Advisory & Consulting</option>
                    <option value="hospitality" className="bg-black">Hospitality & Lifestyle Assets</option>
                    <option value="academy" className="bg-black">Educational Academy</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Message / Inquiry</label>
                  <textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Describe your goals..."
                    className="bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-white/10 focus:border-primary transition-all outline-none resize-none"
                  />
                  {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                </div>

                <div className="pt-4">
                  <ShinyButton className="w-full">
                    {isSubmitting ? "Processing..." : "Zacznij z nami"}
                  </ShinyButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
