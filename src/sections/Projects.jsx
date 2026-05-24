import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'
import { cardItem, cardStagger, viewportConfig, sectionReveal } from '../utils/motion'

function ProjectPreview({ title, tech }) {
  const initials = title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

  const lines = [
    `> initializing ${initials.toLowerCase()} workspace`,
    '> installing dependencies...',
    '> running validation checks...',
    '> build status: success',
  ]

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-inner shadow-black/30">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
          Project Console
        </p>
      </div>

      <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
        <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-lg font-bold text-white shadow-lg shadow-indigo-500/20">
              {initials}
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
                Running
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{title}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-sm text-slate-300">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
              terminal output
            </p>

            <div className="space-y-2">
              {lines.map((line) => (
                <p key={line} className="leading-6">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              stack summary
            </p>

            <div className="mt-4 space-y-4">
              {tech.slice(0, 3).map((item, index) => (
                <div key={item}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{item}</span>
                    <span className="text-slate-500">
                      {index === 0 ? '98%' : index === 1 ? '91%' : '87%'}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                      style={{
                        width: index === 0 ? '98%' : index === 1 ? '91%' : '87%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
                status
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Build complete. Deployment pipeline ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
            description="A few projects that show cloud, DevOps, backend, and automation work."
          />
        </motion.div>

        <motion.div
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2"
        >
          {projects.slice(0, 2).map((project) => (
            <motion.article
              key={project.title}
              variants={cardItem}
              className="w-full rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <ProjectPreview title={project.title} tech={project.tech} />

              <h3 className="mt-6 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}