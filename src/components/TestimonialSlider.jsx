import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { testimonials } from '../data/testimonials'

export function TestimonialSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [])

  const testimonial = testimonials[index]

  return (
    <div className="mx-auto max-w-3xl">
      <AnimatePresence mode="wait">
        <motion.article
          key={testimonial.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
          className="glass-card p-7 text-center sm:p-10"
        >
          <div className="mb-5 flex justify-center gap-1 text-amber-500">
            {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
              <FiStar key={starIndex} className="fill-current" />
            ))}
          </div>
          <p className="font-serif text-2xl leading-9 text-stone-950 dark:text-cream">"{testimonial.text}"</p>
          <p className="mt-6 text-sm uppercase tracking-[0.24em] text-stone-500 dark:text-stone-300">{testimonial.name}</p>
        </motion.article>
      </AnimatePresence>
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((item, itemIndex) => (
          <button
            key={item.name}
            type="button"
            className={`h-2.5 rounded-full transition-all ${itemIndex === index ? 'w-8 bg-rose-500' : 'w-2.5 bg-stone-300 dark:bg-white/30'}`}
            onClick={() => setIndex(itemIndex)}
            aria-label={`Show testimonial from ${item.name}`}
          />
        ))}
      </div>
    </div>
  )
}
