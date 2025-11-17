import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 w-72 h-72 rounded-full bg-sky-50" />
        <div className="absolute -right-40 bottom-10 w-96 h-96 rounded-full bg-blue-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Sobre</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Projeto dedicado à análise craniofacial, identificação humana e ensino em antropologia biológica.
            Unimos métodos clássicos e ferramentas tecnológicas para produzir resultados precisos, reprodutíveis e eticamente responsáveis.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[{k:"Abordagem", v:"Científica e transparente"}, {k:"Foco", v:"Osteologia e Forense"}].map((c, i) => (
              <motion.div
                key={c.k}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-slate-200 p-4 bg-white/80 backdrop-blur"
              >
                <p className="text-sm text-slate-500">{c.k}</p>
                <p className="font-medium text-slate-900">{c.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-20px_rgba(2,6,23,0.25)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-blue-50 border border-blue-100"
          />
        </div>
      </div>
    </section>
  );
}
