import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { codingProfiles } from '../data/codingProfiles'
import { cardItem, cardStagger, sectionReveal, viewportConfig } from '../utils/motion'

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="scroll-mt-24 border-t border-white/5">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionTitle
            eyebrow="Coding Profiles"
            title="My problem solving platforms"
          />
        </motion.div>

        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {codingProfiles.map((profile) => (
            <motion.article
              key={profile.platform}
              variants={cardItem}
              className="group rounded-[30px] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
                <img
                  src={profile.logo}
                  alt={profile.platform}
                  className="h-full w-full object-contain"
                 />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {profile.platform}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {profile.username}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {profile.description}
              </p>


              <a
                href={profile.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-300 transition hover:text-indigo-200"
              >
                Visit Profile →
              </a>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}