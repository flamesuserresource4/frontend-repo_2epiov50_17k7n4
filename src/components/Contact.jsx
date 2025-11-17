import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backend = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          phone: payload.phone || null,
          subject: payload.subject || null,
          message: payload.message,
        }),
      });
      if (!res.ok) throw new Error("Falha ao enviar");
      setSent(true);
      e.currentTarget.reset();
    } catch (err) {
      setError("Não foi possível enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="py-24 bg-gradient-to-t from-white to-slate-50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1200px] h-[1200px] bg-[conic-gradient(from_180deg_at_50%_50%,#e6f0ff,#fff,#e6f0ff)] opacity-60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Contato</h2>
            <p className="mt-3 text-slate-600">Envie uma mensagem e retornaremos em breve.</p>
            <div className="mt-6 rounded-2xl border border-slate-200 p-6 bg-white/80 backdrop-blur">
              <p className="text-sm text-slate-500">WhatsApp</p>
              <a href="https://wa.me/5500000000000" target="_blank" className="font-medium text-slate-900 hover:underline">+55 (00) 00000-0000</a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="bg-white/90 rounded-2xl border border-slate-200 p-6 shadow-[0_20px_50px_-20px_rgba(2,6,23,0.25)] backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Nome</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="text-sm text-slate-600">E-mail</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Telefone/WhatsApp</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Assunto</label>
                <input name="subject" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Mensagem</label>
                <textarea name="message" required rows={5} className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={loading} className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
              {loading ? "Enviando..." : "Enviar"}
            </motion.button>
            <AnimatePresence>
              {sent && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-3 text-sm text-emerald-600">Mensagem enviada com sucesso!</motion.p>
              )}
              {error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-3 text-sm text-rose-600">{error}</motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
