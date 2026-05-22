import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { business } from '../data/business'

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 px-4 py-10 text-cream dark:border-white/10">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-serif text-2xl">{business.name}</h2>
          <p className="mt-3 text-sm leading-6 text-stone-300">Premium beauty services and practical beautician training in Tinsukia, Assam.</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.24em] text-rose-200">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-stone-300">
            {['Home', 'Services', 'Academy', 'Gallery', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white">{item}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.24em] text-rose-200">Contact</h3>
          <p className="mt-4 text-sm leading-6 text-stone-300">{business.displayPhone}</p>
          <p className="text-sm leading-6 text-stone-300">{business.address}</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.24em] text-rose-200">Follow</h3>
          <div className="mt-4 flex gap-3">
            {[FaInstagram, FaFacebookF].map((Icon, index) => (
              <span key={index} className="grid size-10 place-items-center rounded-full border border-white/15 text-stone-200">
                <Icon />
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-stone-400">Copyright {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-stone-400">Designed & Developed by GC.</p>
    </footer>
  )
}
