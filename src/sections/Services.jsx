import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../animations/variants'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../data/services'

export function Services() {
  return (
    <section id="services" className="section bg-ivory dark:bg-charcoal">
      <div className="section-inner">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Beauty care with a polished, occasion-ready finish.</h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
