import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../animations/variants'
import { galleryItems } from '../data/gallery'

export function GalleryGrid() {
  const [active, setActive] = useState(null)

  return (
    <>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="columns-1 gap-4 sm:columns-2 lg:columns-3"
      >
        {galleryItems.map((item, index) => (
          <motion.button
            type="button"
            variants={fadeUp}
            key={item.src}
            onClick={() => setActive(item)}
            className="group mb-4 block w-full overflow-hidden rounded-lg bg-white text-left shadow-sm ring-1 ring-stone-200/70 dark:bg-white/5 dark:ring-white/10"
            aria-label={`Open gallery image ${index + 1}`}
          >
            <img className="h-auto w-full transition duration-500 group-hover:scale-105" src={item.src} alt={item.alt} loading="lazy" />
          </motion.button>
        ))}
      </motion.div>

      {active && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4" role="dialog" aria-modal="true">
          <button type="button" className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white text-stone-950" onClick={() => setActive(null)} aria-label="Close gallery">
            <FiX />
          </button>
          <img className="max-h-[84vh] w-full max-w-5xl rounded-lg object-contain" src={active.src} alt={active.alt} />
        </div>
      )}
    </>
  )
}
