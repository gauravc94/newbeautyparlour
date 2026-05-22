import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../animations/variants'
import { AcademyCard } from '../components/AcademyCard'
import { academyCourses } from '../data/academyCourses'

export function Academy() {
  return (
    <section id="academy" className="section bg-rose-50 dark:bg-[#151111]">
      <div className="section-inner">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="section-heading">
          <p className="eyebrow">Shonalika Academy</p>
          <h2>Learn practical beautician skills in a premium salon environment.</h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-5 lg:grid-cols-2">
          {academyCourses.map((course, index) => (
            <AcademyCard key={course.title} course={course} featured={index === 1} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
