import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? "backdrop-blur-md bg-white/70 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.15)]" : "backdrop-blur-sm bg-white/40"
    } border-b border-white/40`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="relative">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-8 h-8 rounded-md bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 shadow-inner"
            />
            <div className="absolute inset-0 blur-xl bg-sky-400/30 -z-10" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">Analisando Crânios</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative inline-flex items-center text-sm font-medium text-slate-700/90 hover:text-slate-900 transition-colors">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-sky-500 to-blue-600 transition-all group-hover/link:w-full" />
            </a>
          ))}
        </nav>

        <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-200/60 bg-white/80 backdrop-blur"
          >
            <nav className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-blue-600">
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
