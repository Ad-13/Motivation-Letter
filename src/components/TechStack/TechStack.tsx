import { motion } from 'framer-motion';

import { blockVariants } from '@src/shared/helper';

import styles from './TechStack.module.scss';

const TechStack = () => {
  return (
    <motion.section
      className={styles.tech}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={0.36}
      variants={blockVariants}
    >
      <h2 className="sectionTitle">Tech stack & strengths</h2>

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
          <div className={styles.techList}>
            Lazy loading · Code-splitting · Accessibility (a11y)
          </div>
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
            <a
              href="https://github.com/Ad-13/react-readux-redux-toolkit-scss-typescript"
              target="_blank"
              rel="noreferrer"
            >
              React repo
            </a>
            {' • '}
            <a
              href="https://github.com/Ad-13/nodejs-express-mysql-typescript"
              target="_blank"
              rel="noreferrer"
            >
              Backend repo
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
