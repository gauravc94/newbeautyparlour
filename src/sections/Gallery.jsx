import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../animations/variants'
import { GalleryGrid } from '../components/GalleryGrid'

export function Gallery() {
  return (
    <section id="gallery" className="section bg-ivory dark:bg-charcoal">
      <div className="section-inner">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="section-heading">
          <p className="eyebrow">Gallery</p>
          <h2>A curated collection of transformations, each reflecting our commitment to beauty excellence.</h2>
        </motion.div>
        <GalleryGrid />
      </div>
    </section>
  )
}
