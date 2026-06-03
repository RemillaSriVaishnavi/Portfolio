import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { sectionReveal, viewportConfig } from '../utils/motion'

const educationData = [
  {
    title: 'Graduation (B.Tech)',
    period: '2023 - 2027',
    institution: 'Aditya Engineering College, Surampalem',
    details: [
      { label: 'Branch', value: 'Computer Science and Engineering' },
      { label: 'CGPA', value: '9.19 (Currently)' },
    ],
    icon: '🎓',
    side: 'left',
  },
  {
    title: 'Intermediate (XII)',
    period: '2021 - 2023',
    institution: 'Tirumala Junior College',
    details: [{ label: 'Percentage', value: '96.6%' }],
    icon: '🏫',
    side: 'right',
  },
  {
    title: 'School (X)',
    period: '2020',
    institution: 'Pragati English Medium School',
    details: [{ label: 'Percentage', value: '96%' }],
    icon: '👩‍🎓',
    side: 'left',
  },
]

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-white/5">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionTitle
            eyebrow="Education"
            title="Academic Journey"
          />
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-500 lg:block" />

          <div className="space-y-12 lg:space-y-20">
            {educationData.map((item, index) => {
              const isLeft = item.side === 'left'

              return (
                <motion.div
                  key={item.title}
                  variants={sectionReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="relative grid gap-6 lg:grid-cols-2 lg:items-center"
                >
                  <div
                    className={`relative ${
                      isLeft
                        ? 'lg:col-start-1 lg:pr-16 lg:justify-self-end'
                        : 'lg:col-start-2 lg:pl-16 lg:justify-self-start'
                    }`}
                  >
                    <div className="absolute left-1/2 top-10 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/30 lg:block" />

                    <div className="max-w-xl rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-8">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-indigo-300">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm font-medium text-slate-400">
                            {item.period}
                          </p>
                        </div>

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 text-3xl shadow-lg shadow-indigo-500/10">
                          {item.icon}
                        </div>
                      </div>

                      <p className="text-lg font-semibold text-white">
                        {item.institution}
                      </p>

                      <div className="mt-5 space-y-3">
                        {item.details.map((detail) => (
                          <div
                            key={detail.label}
                            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                          >
                            <p className="text-sm text-slate-300">
                              <span className="font-semibold text-white">
                                {detail.label}:
                              </span>{' '}
                              {detail.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}