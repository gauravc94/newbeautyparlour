import { motion } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { business } from '../data/business'
import { whatsappUrl } from '../utils/whatsapp'

export function Home() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden bg-stone-950 px-4 pb-16 pt-28 text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-100"
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=82"
        alt="Luxury beauty salon interior"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute right-[12%] top-32 h-36 w-36 rounded-full bg-rose-300/25 blur-3xl" />
      <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-20 left-[8%] h-44 w-44 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-3xl">
          <p className="mb-5 text-sm uppercase tracking-[0.32em] text-rose-100">Ladies Beauty Parlour & Academy</p>
          <h1 className="font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Luxury Beauty Experience for Modern Women
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100 sm:text-xl">
            Professional Makeup, Hair Styling & Beautician Training in Tinsukia
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-primary" href={whatsappUrl('Hello Shonalika Parlour, I want to book an appointment.')}>
              <FaWhatsapp />
              Book on WhatsApp
            </a>
            <a className="btn btn-light" href={`tel:${business.phone}`}>
              <FiPhone />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>

      <a href="#services" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.26em] text-white/80 sm:block">
        Scroll
      </a>
    </section>
  )
}
