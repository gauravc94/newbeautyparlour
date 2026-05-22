import { FiClock, FiMapPin, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ContactForm } from '../components/ContactForm'
import { business } from '../data/business'
import { whatsappUrl } from '../utils/whatsapp'

export function Contact() {
  return (
    <section id="contact" className="section bg-rose-50 dark:bg-[#151111]">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Book faster by phone or WhatsApp.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <div className="glass-card p-6">
              <div className="grid gap-5">
                <p className="contact-line"><FiPhone /> {business.displayPhone}</p>
                <p className="contact-line"><FiMapPin /> {business.address}</p>
                <div className="contact-line items-start"><FiClock /> <span>{business.hours.map((hour) => <span key={hour} className="block">{hour}</span>)}</span></div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a className="btn btn-primary" href={whatsappUrl('Hello Shonalika Parlour, I want to book an appointment.')}>
                  <FaWhatsapp />
                  WhatsApp
                </a>
                <a className="btn btn-secondary" href={`tel:${business.phone}`}>
                  <FiPhone />
                  Call Now
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-white/50 bg-white/60 p-2 shadow-sm dark:border-white/10 dark:bg-white/5">
              <iframe
                title="Shonalika Ladies Beauty Parlour and Academy map"
                src={business.mapEmbed}
                className="h-80 w-full rounded-md"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
