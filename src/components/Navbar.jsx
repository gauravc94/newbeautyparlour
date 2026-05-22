import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { business } from '../data/business'
import { whatsappUrl } from '../utils/whatsapp'
import { ThemeToggle } from './ThemeToggle'

const navItems = ['HOME', 'SERVICES', 'ACADEMY', 'GALLERY', 'TESTIMONIALS', 'CONTACT']

export function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-2xl dark:bg-black/40">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={close} className="group flex items-center gap-3" aria-label="Shonalika home">
          <span className="grid size-11 place-items-center rounded-full border border-amber-300/60 bg-gradient-to-br from-rose-100 to-amber-100 font-serif text-xl text-stone-950 shadow-sm">
            S
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-stone-950 dark:text-cream">
              {business.shortName}
            </span>
            <span className="hidden text-xs uppercase tracking-[0.28em] text-stone-500 dark:text-stone-300 sm:block">
              Beauty Parlour & Academy
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className="btn btn-sm btn-primary" href={whatsappUrl('Hello Shonalika Parlour, I want to book an appointment.')}>
            Book Now
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button type="button" className="icon-button" onClick={() => setOpen(true)} aria-label="Open navigation">
            <FiMenu />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 bg-black/40 transition-opacity lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className={`ml-auto w-80 max-w-[86vw] bg-ivory p-5 shadow-2xl transition-transform duration-300 dark:bg-charcoal ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-8 flex items-center justify-between">
            <span className="font-serif text-2xl text-stone-950 dark:text-cream">Menu</span>
            <button type="button" className="icon-button" onClick={close} aria-label="Close navigation">
              <FiX />
            </button>
          </div>
          <div className="grid">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={close} className="rounded-lg px-4 py-3 text-stone-700 hover:bg-rose-100 dark:text-stone-100 dark:hover:bg-white/20">
                {item}
              </a>
            ))}
          </div>
          <a className="btn btn-primary mt-8 w-full" href={whatsappUrl('Hello Shonalika Parlour, I want to book an appointment.')} onClick={close}>
            Book on WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
