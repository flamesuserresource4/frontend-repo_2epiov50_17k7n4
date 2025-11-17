import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background grid + glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,#dbeafe,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff_0.5px,transparent_0.5px),linear-gradient(90deg,#ffffff_0.5px,transparent_0.5px)] bg-[size:36px_36px] opacity-[0.15]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-sky-700 bg-sky-50 border border-sky-200/70 px-3 py-1 rounded-full">
              Tecnologia • Antropologia • Osteologia
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
              Ciência craniofacial com design de dados e precisão forense
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Integramos métodos clássicos e ferramentas de análise para estudos, perícias e ensino em identificação humana.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contato" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 shadow-sm shadow-slate-900/10">Fale conosco</a>
              <a href="#servicos" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50">Ver serviços</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {["+10 anos", "+300 casos", "Cursos e pesquisa"].map((k) => (
                <div key={k} className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                  <p className="text-sm text-slate-500">{k}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="aspect-[4/3] rounded-2xl bg-white/80 border border-slate-200 shadow-[0_20px_50px_-20px_rgba(2,6,23,0.25)] p-4"
            >
              <div className="w-full h-full rounded-xl bg-[radial-gradient(circle_at_30%_30%,#dbeafe,transparent_45%),radial-gradient(circle_at_70%_70%,#e2e8f0,transparent_45%)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-white/70 border border-slate-200 backdrop-blur"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-blue-50 border border-blue-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
