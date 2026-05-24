import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { sectionReveal, viewportConfig } from '../utils/motion'

const contacts = [
  {
    label: 'Email',
    value: 'rsrivaishnavi2006@gmail.com',
    href: 'mailto:rsrivaishnavi2006@gmail.com',
    bg: 'from-pink-500 to-rose-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M4 6.5h16A1.5 1.5 0 0 1 21.5 8v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m3.5 8 8.1 5.7a1 1 0 0 0 1.2 0L20.5 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    label: 'Phone',
    value: '+91 9876543210',
    href: 'tel:+919876543210',
    bg: 'from-green-500 to-emerald-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M8.5 4.5c.6-1 1.8-1.4 2.8-1l1.8.8c.8.4 1.2 1.3 1 2.2l-.4 1.8c-.1.6 0 1.2.4 1.7l1.5 1.9c.4.5 1 .8 1.6.8l1.9-.1c1 0 1.9.6 2.2 1.6l.5 1.9c.3 1-.1 2.1-.9 2.7-1.7 1.2-4.2 1.9-6.7 1.2-2.8-.8-5.7-2.8-8.2-5.3S3 11 2.2 8.2C1.5 5.7 2.2 3.2 3.4 1.5c.6-.8 1.7-1.2 2.7-.9l1.9.5c1 .3 1.6 1.2 1.6 2.2l-.1 1.9c0 .6.3 1.2.8 1.6l1.9 1.5c.5.4 1.1.5 1.7.4l1.8-.4c.9-.2 1.8.2 2.2 1l.8 1.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    label: 'GitHub',
    value: 'github.com/RemillaSriVaishnavi',
    href: 'https://github.com/RemillaSriVaishnavi',
    bg: 'from-slate-500 to-slate-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.7.6-3.2-1.1-3.2-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4 1 1.4 1 .8 1.4 2.2 1 2.8.8.1-.6.3-1 .6-1.2-2.2-.2-4.5-1.1-4.5-4.8 0-1 .4-1.8 1-2.5-.1-.2-.4-1.2.1-2.4 0 0 .8-.2 2.6 1 .7-.2 1.5-.3 2.2-.3s1.5.1 2.2.3c1.8-1.2 2.6-1 2.6-1 .5 1.2.2 2.2.1 2.4.6.7 1 1.5 1 2.5 0 3.7-2.3 4.6-4.5 4.8.3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    ),
  },

  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/remilla-sri-vaishnavi-35a075291',
    href: 'https://linkedin.com/in/remilla-sri-vaishnavi-35a075291',
    bg: 'from-blue-500 to-cyan-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M6.5 9.5V18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6.5 6.2v.1"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M10.5 18v-4.6c0-1.9 1-3.2 2.8-3.2 1.7 0 2.7 1.1 2.7 3.2V18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 13.4V18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <SectionTitle
            eyebrow="Contact"
            title="Let’s connect"
            description="Feel free to reach out for collaboration, opportunities, or tech discussions."
          />
        </motion.div>

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={
                item.label === 'Email' || item.label === 'Phone'
                  ? undefined
                  : '_blank'
              }
              rel={
                item.label === 'Email' || item.label === 'Phone'
                  ? undefined
                  : 'noreferrer'
              }
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
              </div>

              <div className="relative z-10 flex items-start gap-5">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} text-white shadow-lg`}
                >
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
                    {item.label}
                  </p>

                  <p className="mt-3 break-words text-lg font-semibold text-white transition group-hover:text-indigo-100">
                    {item.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}