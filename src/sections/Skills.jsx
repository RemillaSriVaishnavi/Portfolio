import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { skillCategories } from '../data/skills'
import { cardItem, cardStagger, viewportConfig, sectionReveal } from '../utils/motion'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-white/5">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionTitle
            eyebrow="Skills"
            title="Tech Stack & Tools"
          />
        </motion.div>

        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardItem}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 light:border-slate-200 light:bg-white/70"
            >
              <h3 className="text-lg font-semibold text-white light:text-slate-900">{category.title}</h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-100 light:border-indigo-200 light:bg-indigo-50 light:text-indigo-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}