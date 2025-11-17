export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Sobre</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Projeto dedicado à análise craniofacial, identificação humana e ensino em antropologia biológica.
            Unimos métodos clássicos e ferramentas tecnológicas para produzir resultados precisos, reprodutíveis e eticamente responsáveis.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-200 p-4 bg-white">
              <p className="text-sm text-slate-500">Abordagem</p>
              <p className="font-medium text-slate-900">Científica e transparente</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 bg-white">
              <p className="text-sm text-slate-500">Foco</p>
              <p className="font-medium text-slate-900">Osteologia e Forense</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl border border-slate-200 bg-white shadow-sm" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-blue-50 border border-blue-100" />
        </div>
      </div>
    </section>
  );
}
