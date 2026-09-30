import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { sectionReveal, viewportConfig } from '../utils/motion'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/5">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionTitle
            eyebrow="About"
            title="A little about me"
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 light:border-slate-200 light:bg-white/70"
          >
            <p className="text-base leading-8 text-slate-300 light:text-slate-600 sm:text-lg">
              I am a curious and detail-oriented developer who enjoys turning ideas into clean, useful, and scalable digital experiences.
              My work combines strong fundamentals with continuous learning, especially in cloud systems, DevOps, and modern web development.
              I like building projects that feel practical, polished, and easy to use.
              I focus on creating interfaces and systems that are fast, clear, and reliable.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-5 light:border-slate-200 light:bg-white/50">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-200 light:text-indigo-600">
                What I enjoy most
              </p>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  'Designing modern UIs',
                  'Automating cloud workflows',
                  'Building responsive layouts',
                  'Improving performance',
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 light:border-slate-200 light:bg-white/70 light:text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 light:border-slate-200 light:bg-white/70">
              <p className="text-sm font-semibold text-white light:text-slate-900">Background</p>
              <p className="mt-3 text-sm leading-7 text-slate-400 light:text-slate-500">
                Developer and cloud enthusiast focused on learning by building real projects.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 light:border-slate-200 light:bg-white/70">
              <p className="text-sm font-semibold text-white light:text-slate-900">Focus</p>
              <p className="mt-3 text-sm leading-7 text-slate-400 light:text-slate-500">
                Cloud, DevOps, frontend development, and clean user experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 light:border-slate-200 light:bg-white/70">
              <p className="text-sm font-semibold text-white light:text-slate-900">Strength</p>
              <p className="mt-3 text-sm leading-7 text-slate-400 light:text-slate-500">
                Building structured, responsive, and visually polished interfaces.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 light:border-slate-200 light:bg-white/70">
              <p className="text-sm font-semibold text-white light:text-slate-900">Goal</p>
              <p className="mt-3 text-sm leading-7 text-slate-400 light:text-slate-500">
                Create solutions that look professional and work reliably in real use.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}