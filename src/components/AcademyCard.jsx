import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { fadeUp } from '../animations/variants'
import { whatsappUrl } from '../utils/whatsapp'

export function AcademyCard({ course, featured }) {
  return (
    <motion.article variants={fadeUp} whileHover={{ y: -8 }} className={`glass-card p-6 sm:p-8 ${featured ? 'ring-1 ring-amber-300/70' : ''}`}>
      <p className="text-sm uppercase tracking-[0.24em] text-rose-500 dark:text-rose-200">{featured ? 'Advanced training' : 'Foundation'}</p>
      <h3 className="mt-3 font-serif text-3xl text-stone-950 dark:text-cream">{course.title}</h3>
      <p className="mt-3 text-stone-600 dark:text-stone-300">{course.duration}</p>
      <ul className="mt-6 grid gap-3">
        {course.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-stone-700 dark:text-stone-100">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-300/20 dark:text-rose-100">
              <FiCheck />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a className="btn btn-primary mt-8 w-full" href={whatsappUrl(course.message)}>
        Enquire on WhatsApp
      </a>
    </motion.article>
  )
}
