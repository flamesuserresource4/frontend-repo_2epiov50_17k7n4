export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[conic-gradient(from_180deg_at_50%_50%,#e6f0ff,#fff,#e6f0ff)] opacity-70" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">Tecnologia • Antropologia • Osteologia</span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Análise craniofacial científica para identificação humana e pesquisa
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Metodologias atualizadas, rigor científico e ferramentas tecnológicas para estudos e perícias envolvendo crânios humanos. Atuamos em análises, consultorias, cursos e divulgação científica.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contato" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800">Fale conosco</a>
              <a href="#servicos" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-800 hover:bg-slate-50">Ver serviços</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white border border-slate-200 shadow-sm p-4">
              <div className="w-full h-full rounded-lg bg-[radial-gradient(circle_at_30%_30%,#dbeafe,transparent_40%),radial-gradient(circle_at_70%_70%,#e2e8f0,transparent_40%)]" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-xl bg-white/70 border border-slate-200 backdrop-blur" />
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-blue-50 border border-blue-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
