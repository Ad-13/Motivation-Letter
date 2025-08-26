import { motion, type Variants } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  Cpu,
  Slack,
  Telescope,
} from "lucide-react";

import styles from "./App.module.scss";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  }),
};

const App = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logo}>Andrew Krupin</div>
          <div className={styles.tag}>Frontend Developer · React · TypeScript</div>
        </div>

        <nav className={styles.links}>
          <a href="https://github.com/ad-13" target="_blank" rel="noreferrer"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/andrew-krupin-9a25238a" target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
          <a href="mailto:ad13.other@gmail.com"><Mail size={16} /></a>
        </nav>
      </header>

      <main className="container">
        {/* SUMMARY */}
        <motion.section
          className={styles.summary}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          variants={blockVariants}
        >
          <div className={styles.summaryLeft}>
            <h1 className={styles.h1}>Web Developer — ClipMyHorse.TV</h1>
            <p className={styles.lead}>
              I`m a frontend engineer with <strong>5+ years</strong> experience building web products with React,
              TypeScript and modern frontend toolchains. I focus on maintainable, performant interfaces and product delivery.
            </p>

            <div className={styles.badges}>
              <span className={styles.badge}>React</span>
              <span className={styles.badge}>TypeScript</span>
              <span className={styles.badge}>Next.js</span>
              <span className={styles.badge}>Redux · Zustand</span>
            </div>

            <div className={styles.cta}>
              <a className={styles.primary} href="mailto:ad13.other@gmail.com">Contact me</a>
            </div>
          </div>

          <div className={styles.summaryRight}>
            <div className={styles.smallCard}>
              <div><strong>Location:</strong> Kleve, Germany (EU work-right)</div>
              <div><strong>Languages:</strong> English C1 · German B2 (improving)</div>
              <div><strong>Availability:</strong> Immediately</div>
              <div><strong>Salary:</strong> 50-55k € / year</div>
            </div>
          </div>
        </motion.section>

        {/* WHY I WANT TO JOIN */}
        <motion.section
          className={styles.whyJoin}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.12}
          variants={blockVariants}
        >
          <h2 className={styles.sectionTitle}>Why I want to join ClipMyHorse.TV</h2>
          <p className={styles.para}>
            Your product-first mission to deliver high-quality streaming experiences is exactly the kind of
            environment I want to contribute to. I`m excited about the opportunity to work on live/VoD flows,
            improve player UX and performance, and help deliver a delightful cross-device experience for viewers.
          </p>

          <p className={styles.para}>
            I`m motivated to deepen my knowledge in media workflows (ad-server integration, timed metadata, low-latency),
            enhance automated frontend testing practices, and bring my frontend performance focus to improve real-user metrics.
          </p>
        </motion.section>

        {/* WHY I'M A GOOD FIT */}
        <motion.section
          className={styles.goodFit}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.24}
          variants={blockVariants}
        >
          <h2 className={styles.sectionTitle}>Why I`m a good fit</h2>

          <div className={styles.goodFitGrid}>
            <article className={styles.card}>
              <h3><CheckCircle size={18} /> Product & delivery</h3>
              <p className={styles.para}>
                At Empeek I contributed to large product projects, collaborating with product managers, designers
                and backend engineers. I`m familiar with the full delivery loop — from concept to go-live — and focus on
                building maintainable, testable features.
              </p>
            </article>

            <article className={styles.card}>
              <h3><Slack size={18} /> Remote & cross-functional</h3>
              <p className={styles.para}>
                Several years of remote work taught me clear async communication, reliable delivery and effective collaboration
                across timezones — a good match for your remote-first setup.
              </p>
            </article>

            <article className={styles.card}>
              <h3><Cpu size={18} /> Quality & maintainability</h3>
              <p className={styles.para}>
                I prioritise clean architecture, readable code and performance optimisations. I adopt code review and CI practices
                to continuously improve product quality.
              </p>
            </article>
          </div>
        </motion.section>

        {/* TECH STACK */}
        <motion.section
          className={styles.tech}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.36}
          variants={blockVariants}
        >
          <h2 className={styles.sectionTitle}>Tech stack & strengths</h2>

          <div className={styles.techGrid}>
            <div className={styles.techItem}>
              <strong>Frontend</strong>
              <div className={styles.techList}>React · Next.js · Vite · TypeScript</div>
            </div>

            <div className={styles.techItem}>
              <strong>State & Data</strong>
              <div className={styles.techList}>Redux Toolkit · Zustand · REST APIs</div>
            </div>

            <div className={styles.techItem}>
              <strong>UX & perf</strong>
              <div className={styles.techList}>Lazy loading · Code-splitting · Accessibility (a11y)</div>
            </div>

            <div className={styles.techItem}>
              <strong>Realtime & integration</strong>
              <div className={styles.techList}>WebSockets · player UI patterns</div>
            </div>

            <div className={styles.techItem}>
              <strong>Tooling</strong>
              <div className={styles.techList}>Git · GitHub Actions · ESLint · Prettier</div>
            </div>

            <div className={styles.techItem}>
              <strong>Repos</strong>
              <div className={styles.techList}>
                <a href="https://github.com/Ad-13/react-readux-redux-toolkit-scss-typescript" target="_blank" rel="noreferrer">React repo</a>
                {" • "}
                <a href="https://github.com/Ad-13/nodejs-express-mysql-typescript" target="_blank" rel="noreferrer">Backend repo</a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CORE STRENGTHS */}
        <motion.section
          className={styles.core}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.48}
          variants={blockVariants}
        >
          <h2 className={styles.sectionTitle}>Core strengths</h2>

          <div className={styles.coreGrid}>
            <div className={styles.coreCard}>
              <h4><Telescope size={16} /> Performance-first</h4>
              <p className={styles.para}>Optimise loading, reduce main-thread work, and deliver snappy UIs on constrained networks.</p>
            </div>

            <div className={styles.coreCard}>
              <h4><Github size={16} /> Product focus</h4>
              <p className={styles.para}>Ship pragmatic features, iterate on feedback, and balance short-term delivery with long-term maintainability.</p>
            </div>

            <div className={styles.coreCard}>
              <h4><CheckCircle size={16} /> Collaborative engineering</h4>
              <p className={styles.para}>Work closely with designers and backend teams to craft consistent, reliable UX and APIs.</p>
            </div>
          </div>
        </motion.section>

        {/* NEW: Test task & availability */}
        <motion.section
          className={styles.testBlock}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.60}
          variants={blockVariants}
        >
          <h2 className={styles.sectionTitle}>Test task & availability</h2>
          <p className={styles.para}>
            I recently completed a timed frontend test task for another company, which caused a slight delay in my reply.
            If useful, you can review that work here:{" "}
            <a href="https://surf-weather-three.vercel.app/weather" target="_blank" rel="noreferrer">Surf Weather — demo</a>.
          </p>

          <p className={styles.para}>
            I`m happily available to complete any test task you require and can walk you through my implementation and design choices.
            Open to remote work or relocation within supported regions.
          </p>
        </motion.section>

        <footer className={styles.footer}>
          <div>Made by Andrew Krupin — Frontend Developer • Kleve, Germany</div>
          <div className={styles.small}>CV & motivation letter attached to email.</div>
        </footer>
      </main>
    </div>
  );
}

export default App;
