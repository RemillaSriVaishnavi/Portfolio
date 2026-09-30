import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'
import {
  cardItem,
  cardStagger,
  viewportConfig,
  sectionReveal,
} from '../utils/motion'

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/5 light:border-slate-200"
    >
      <Container className="py-16 sm:py-20">
        {/* Section Heading */}
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

        {/* Project Cards */}
        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardItem}
              className="rounded-[28px] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 light:border-slate-200 light:bg-white/75"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white light:text-slate-900">
                    {project.title}
                  </h3>
                </div>

                <div className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-200 light:border-indigo-200 light:bg-indigo-50 light:text-indigo-700">
                  Featured
                </div>
              </div>

              {/* Project Description */}
              <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-600">
                {project.description}
              </p>

              {/* Tools Used */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                  Tools Used
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 light:border-slate-200 light:bg-slate-100 light:text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project */}
              <div className="mt-8 flex items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-400 hover:scale-105"
                >
                  View Project
                  <span className="ml-2">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}