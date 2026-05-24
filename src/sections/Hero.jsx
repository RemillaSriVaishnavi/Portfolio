import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Container from '../components/Container'

export default function Hero() {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const bgOneY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const bgTwoY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section
      ref={heroRef}
      id="home"
      className="scroll-mt-24 overflow-hidden"
    >
      <Container className="relative min-h-screen py-20 sm:py-24 lg:py-28 flex items-center">

        {/* Background Blur Effects */}
        <motion.div
          aria-hidden="true"
          style={{ y: bgOneY }}
          className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl"
        />

        <motion.div
          aria-hidden="true"
          style={{ y: bgTwoY }}
          className="pointer-events-none absolute right-0 top-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
        />

        {/* MAIN GRID */}
        <div className="grid items-center gap-20 lg:grid-cols-2 w-full">

          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-[500px] rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm">

              {/* Image Area */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/70">
                <div className="relative h-[420px] w-full">

                  <img
                    src="/images/profile.png"
                    alt="Remilla Sri Vaishnavi"
                    className="h-full w-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Bottom Text Card */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 backdrop-blur-md">
                    <p className="text-sm font-medium text-slate-200">
                      Building modern cloud and web experiences
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ['2+', 'Projects'],
                  ['10+', 'Tools'],
                  ['24/7', 'Learning'],
                ].map(([value, label]) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center"
                  >
                    <p className="text-3xl font-bold text-white">
                      {value}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >

            {/* Badge */}
            <p className="mb-6 inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-200">
              Available for internships and collaboration
            </p>

            {/* Name */}
            <h1 className="max-w-2xl text-5xl font-extrabold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
              REMILLA SRI
              <br />
              VAISHNAVI
            </h1>

            {/* Role */}
            <p className="mt-6 text-2xl font-semibold text-indigo-200 sm:text-3xl">
              Cloud & DevOps Engineer
            </p>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300 sm:text-xl">
              I build scalable cloud solutions and modern web
              applications with clean UI, smooth workflows,
              and reliable user experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:scale-105 hover:bg-indigo-400"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white/5"
              >
                Contact Me
              </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-8 py-4 text-base font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-400/20 hover:scale-105"
            >
              Resume
            </a>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}