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
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Serviços</h2>
          <p className="mt-3 text-slate-600">Soluções que unem precisão científica e tecnologia.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-sky-400 to-blue-600/80 mb-4" />
              <h3 className="font-medium text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
