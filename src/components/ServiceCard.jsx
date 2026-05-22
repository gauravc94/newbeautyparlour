import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { fadeUp } from '../animations/variants'
import { serviceMessage, whatsappUrl } from '../utils/whatsapp'

export function ServiceCard({ service }) {
  return (
    <motion.article variants={fadeUp} whileHover={{ y: -8, scale: 1.01 }} className="glass-card overflow-hidden">
      <img className="h-60 w-full object-cover" src={service.image} alt={`${service.title} service`} loading="lazy" />
      <div className="p-5">
        <h3 className="font-serif text-2xl text-stone-950 dark:text-cream">{service.title}</h3>
        <p className="mt-2 min-h-14 text-sm leading-6 text-stone-600 dark:text-stone-300">{service.description}</p>
        <a className="btn btn-secondary mt-5 w-full" href={whatsappUrl(serviceMessage(service.title))}>
          <FaWhatsapp />
          Book {service.title}
        </a>
      </div>
    </motion.article>
  )
}
