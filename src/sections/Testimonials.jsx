import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../animations/variants'
import { TestimonialSlider } from '../components/TestimonialSlider'

export function Testimonials() {
  return (
    <section id="testimonials" className="section bg-rose-50 dark:bg-[#151111]">
      <div className="section-inner">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="section-heading">
          <p className="eyebrow text-rose-200">Clients' words</p>
          <h2 className="text-white">Trusted for graceful transformations and confident learning.</h2>
        </motion.div>
        <TestimonialSlider />
      </div>
    </section>
  )
}
