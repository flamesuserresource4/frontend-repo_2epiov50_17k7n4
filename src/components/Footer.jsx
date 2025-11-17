export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Analisando Crânios. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Instagram</a>
          <a href="#" className="hover:text-slate-900">LinkedIn</a>
          <a href="#" className="hover:text-slate-900">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
