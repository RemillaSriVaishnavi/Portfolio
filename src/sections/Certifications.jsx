import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { certifications } from '../data/certifications'
import {
  cardItem,
  cardStagger,
  sectionReveal,
  viewportConfig,
} from '../utils/motion'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-t border-white/5"
    >
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionTitle
            eyebrow="Certifications"
            title="Certificates & Learning"
            description="Professional certifications and courses that strengthened my cloud, DevOps, and development skills."
          />
        </motion.div>

        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {certifications.map((certificate) => (
            <motion.article
              key={certificate.title}
              variants={cardItem}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-200">
                {certificate.year}
              </div>

              <h3 className="text-lg font-semibold text-white">
                {certificate.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                {certificate.issuer}
              </p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
              >
                View Certificate →
              </a>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}