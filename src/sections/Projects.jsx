import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'
import { cardItem, cardStagger, viewportConfig, sectionReveal } from '../utils/motion'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/5">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionTitle
            eyebrow="Projects"
            title="Selected work"
          />
        </motion.div>

        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardItem}
              className="rounded-[28px] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-200">
                  Featured
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-white">Tools Used</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                >
                  View Project
                </a>

                
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}