import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full bg-gradient-to-br from-sky-500/10 via-blue-600/10 to-indigo-600/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Precisa de uma análise especializada?</h3>
          <p className="mt-2 text-slate-300">Entre em contato para discutirmos seu caso, projeto ou curso in-company.</p>
        </div>
        <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#contato" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-slate-900 hover:bg-slate-100 shadow-sm">
          Falar agora
        </motion.a>
      </div>
    </section>
  )
}
