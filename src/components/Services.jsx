import { motion } from "framer-motion";

const items = [
  {
    title: "Análises Craniofaciais",
    desc: "Avaliação morfológica, métricas e estimativas biológicas com base em protocolos validados.",
  },
  {
    title: "Consultoria Técnica",
    desc: "Apoio a equipes periciais, curadorias e pesquisas em osteologia e antropologia biológica.",
  },
  {
    title: "Cursos e Treinamentos",
    desc: "Capacitações práticas e teóricas sobre identificação humana, antropometria e métodos forenses.",
  },
  {
    title: "Documentação e Relatórios",
    desc: "Produção de laudos técnicos e materiais de divulgação científica com linguagem clara e precisa.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[conic-gradient(from_180deg_at_50%_50%,#e6f0ff,#fff,#e6f0ff)] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Serviços</h2>
          <p className="mt-3 text-slate-600">Soluções que unem precisão científica e tecnologia.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl border border-slate-200/80 p-6 bg-white overflow-hidden hover:shadow-[0_20px_50px_-20px_rgba(2,6,23,0.25)] transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-sky-50 via-transparent to-transparent" />
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-sky-400 to-blue-600/80 mb-4 shadow-inner" />
              <h3 className="font-medium text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
