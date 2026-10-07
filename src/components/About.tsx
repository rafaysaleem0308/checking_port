import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Code2, Server, Rocket } from 'lucide-react'
import { personal } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const highlights = [
  { icon: Code2, label: 'Full-Stack Web', desc: 'MERN stack & responsive UI/UX' },
  { icon: Server, label: 'Backend & APIs', desc: 'Node.js, Express, PostgreSQL, REST' },
  { icon: Rocket, label: 'Mobile Engineering', desc: 'Cross-platform Flutter apps' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative bg-slate-950 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p custom={0} variants={fadeUp} className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-3">
            About Me
          </motion.p>
          <motion.h2 custom={1} variants={fadeUp} className="section-title">
            Engineering scalable{' '}
            <span className="gradient-text">web & mobile products</span>
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="section-subtitle max-w-2xl mx-auto">
            {personal.summary}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            <div className="space-y-3 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-100">{personal.name}</h3>
              <p className="text-violet-400 font-medium">{personal.title}</p>
              <div className="flex items-center gap-2 text-slate-400 text-sm justify-center lg:justify-start">
                <MapPin size={14} className="text-violet-400" />
                {personal.location}
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
                {['Full-Stack', 'Flutter', 'AI Engineering', 'REST APIs', 'React / Node.js'].map(tag => (
                  <span key={tag} className="badge bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — highlights + stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="card card-hover p-5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-3 group-hover:bg-violet-500/20 transition-colors">
                    <Icon size={20} className="text-violet-400" />
                  </div>
                  <p className="font-semibold text-slate-100 text-sm">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="card p-6"
            >
              <div className="grid grid-cols-4 gap-4">
                {personal.stats.map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl font-extrabold gradient-text">{value}</p>
                    <p className="text-slate-500 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Journey text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="card p-6 space-y-3 text-slate-400 text-sm leading-relaxed"
            >
              <p>
                I build full-stack web applications, cross-platform Flutter apps, and AI-powered features, with a focus on practical software that solves real user needs.
              </p>
              <p>
                My experience includes designing REST APIs, building mobile applications, and shipping production-ready web features with React, Node.js, Flutter, and Python.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
