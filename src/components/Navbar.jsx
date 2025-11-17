import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#publicacoes", label: "Publicações" },
  { href: "#cursos", label: "Cursos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-sky-500 to-blue-600" />
          <span className="font-semibold tracking-tight">Analisando Crânios</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-blue-600 transition-colors">{l.label}</a>
          ))}
        </nav>

        <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-blue-600">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
